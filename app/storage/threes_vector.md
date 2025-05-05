`plugins/zen/threes/Plugin.php`
```<?php namespace Zen\Threes;

use System\Classes\PluginBase;
use Zen\Threes\Console\Vector;
use Zen\Threes\Console\BacklogFill;
use Zen\Threes\Console\Gen;
use Log;

class Plugin extends PluginBase
{
    public function register(): void
    {
        # Регистрация консольных команд
        $this->registerConsoleCommand('threes:vector', Vector::class);
        $this->registerConsoleCommand('threes:backlog_fill', BacklogFill::class);
        $this->registerConsoleCommand('threes:gen', Gen::class);
    }

    public function boot()
    {
        app()->terminating(function () {
            try {
                if (function_exists('ths')) {
                    ths()->events()->terminating();
                }
            } catch (\Exception $e) {
                Log::error('Zen.Threes: terminating event error: ' . $e->getMessage());
            }
        });
    }

    public function registerComponents()
    {
    }

    public function registerSettings(): array
    {
        return [
            'options' => [
                'label'       => 'Threes',
                'description' => 'Threes Options',
                'icon'        => 'icon-cubes',
                'permissions' => ['zen.threes.options'],
                'class' => 'Zen\Threes\Models\Settings',
                'order' => 100,
            ]
        ];
    }
}

```
`plugins/zen/threes/Threes.php`
```<?php

namespace Zen\Threes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Settings;
use Zen\Threes\classes\Helpers;

class Threes extends Helpers
{
    use SingletonTrait;

    /**
     * Базовый механизм внутреннего api
     * @param string $path
     * @param string $method
     * @param ...$data
     * @return mixed
     */
    public function api(string $path, string $method, ...$data): mixed
    {
        $path = str_replace('.', '\\', $path);
        $path = $this->capitalizeLastSegmentFast($path);

        if (str_contains($method, '-')) {
            $method = ths()->kebabToCamel($method);
        }

        return app("Zen\Threes\Api\\$path")->{$method}(...$data);
    }

    /**
     * Данный метод преобразует nodes.program в nodes.Program
     * позволяя делать красивые URL
     * @param string $path
     * @return string
     */
    function capitalizeLastSegmentFast(string $path): string {
        $lastSlashPos = strrpos($path, '\\');
        if ($lastSlashPos === false) {
            return ucfirst($path);
        }
        return substr($path, 0, $lastSlashPos + 1) . ucfirst(substr($path, $lastSlashPos + 1));
    }

    /**
     * Рефлексивный метод вызова
     * @param string $path
     * @param mixed|null $constructor
     * @param ...$arguments
     * @return mixed
     * @throws \ReflectionException
     */
    public function exe(string $path, mixed $constructor = null, ...$arguments): mixed
    {
        $path = explode('.', $path);
        $method = array_pop($path);
        $path = join('\\', $path);
        $class = "\\$path";
        if (!$path) {
            return null;
        }
        $is_static = (new \ReflectionMethod($class, $method))->isStatic();
        if ($is_static) {
            return $class::$method(...$arguments);
        } else {
            $instance = new $class($constructor);
            return $instance->$method(...$arguments);
        }
    }

    /**
     * Интерфейс для настроек
     * @param string $key
     * @return mixed
     */
    public function getSetting(string $key): mixed
    {
        return Settings::get($key);
    }

    public function setSetting(string $key, mixed $value): void
    {
        $settings = Settings::instance();
        $settings->setAttribute($key, $value);
        $settings->save();
    }
}

```
`plugins/zen/threes/api/Ui.php`
```<?php

namespace Zen\Threes\Api;



class Ui
{
    # http://threes.dc/threes.api/ui:get-data
    public function getData()
    {

    }
}

```
`plugins/zen/threes/api/backlog/Export.php`
```<?php

namespace Zen\Threes\Api\Backlog;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Zen\Threes\Exports\FeatureExport;

class Export
{
    # http://threes.dc/threes.api/backlog.export:xlsx
    public function xlsx(): BinaryFileResponse
    {
        $fileName = 'features_export_' . date('Y-m-d_H-i-s') . '.xlsx';
        return Excel::download(new FeatureExport, $fileName);
    }
}

```
`plugins/zen/threes/api/debug/Tests.php`
```<?php

namespace Zen\Threes\Api\debug;

use Http;
use Zen\Threes\Classes\Services\OpenAiService;
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Yaml\Dumper;
use Zen\Threes\Classes\Gen;
use Zen\Threes\Models\Node;

/**
 * Данный класс существует для отладки и экспериментов
 * в нем всегда должны быть два метода: debug (по возможности оставлять пустым) и test (для теста api)
 */
class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        #Node::truncate();
        #$node = ths()->nodes()->createNode();
        $node = ths()->nodes()->model('n7abeanmj9yh');
        dd($node->getSchemaNode());
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }

    # http://threes.dc/threes.api/debug.Tests:testMongo
    public function testMongo()
    {

//        dd(
//            ths()->getSetting('author_token')
//        );

        //Node::truncate();

        $node = new Node();
        $node->name = 'Я нод';
        $node->save();
        $nid = $node->getNid();
        $node = Node::find($nid);
        dd(
            $node->nid,
            $node->name
        );
    }

    # http://threes.dc/threes.api/debug.Tests:handleYamlFile
    public function handleYamlFile()
    {
        $yaml_path = storage_path('backlog/VB_v1.yaml');
        $yaml_content = file_get_contents($yaml_path);

        // Подготовка: оборачиваем опасные строки
        $prepared_yaml = $this->prepareYamlForParsing($yaml_content);

        // Теперь безопасно парсим YAML
        $data = Yaml::parse($prepared_yaml);

        // Дальше делаешь что хочешь: цитируешь строки, сериализуешь обратно и т.д.
        $output = Yaml::dump($data, 10, 2);

        dd($output);
    }



    public function prepareYamlForParsing(string $yaml_content): string
    {
        // Регулярка для ключей вида: Ключ: значение с двоеточием внутри
        return preg_replace_callback('/^(\s*\w[\w\-]*\s*:\s*)(.*)$/mu', function($matches) {
            $key = $matches[1];
            $value = trim($matches[2]);

            // Если значение уже в кавычках — оставляем
            if (str_starts_with($value, '"') || str_starts_with($value, "'")) {
                return $matches[0];
            }

            // Если значение содержит двоеточие и не начинается на [ или { (то есть не массив или объект)
            if (strpos($value, ':') !== false && !in_array($value[0], ['[', '{'])) {
                $value = '"' . str_replace('"', '\"', $value) . '"';
            }

            return $key . $value;
        }, $yaml_content);
    }


}

```
`plugins/zen/threes/api/nodes/Node.php`
```<?php

namespace Zen\Threes\Api\nodes;

use Zen\Threes\Traits\QueryLogTrait;

class Node
{
    use QueryLogTrait;
    # http://threes.dc/threes.api/nodes.node:get-nodes?nid=threes.default.node1
    public function getNodes(): array
    {
        return [

        ];
    }

    # http://threes.dc/threes.api/nodes.node:set-nodes?debug
    protected function setNodes()
    {
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:add-line?nid=threes.default.node1
    public function addLine(): array
    {
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:add-node?debug
    protected function addNode(): array
    {

        return [];
    }
}

```
`plugins/zen/threes/classes/Backlog.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Feature;

class Backlog
{
    use SingletonTrait;

    public function handleVector(): void
    {
        $vector = ths()->getSetting('vector');
        $system_prompt = collect(ths()->getSetting('vector_prompt'))
            ->where('active', 1)
            ->map(function ($prompt) {
                return $prompt['text'];
            })
            ->join(PHP_EOL);

        $yaml = ths()->ai(
            $vector,
            $system_prompt
        );

        ths()->setSetting('vector_yaml', $yaml);
        $this->generateBacklog($yaml);
    }

    public function generateBacklog(string $yaml = null): void
    {
        Feature::truncate();

        if (!$yaml) {
            $yaml = ths()->fromYamlFile(
                storage_path('vector/backlog_vector.yaml')
            );
        } else {
            $yaml = ths()->fromYaml($yaml);
        }

        $id_cnt = 0;

        $ids = [];
        foreach ($yaml as $feature) {
            $id = $feature['id'];
            if (!isset($ids[$id])) {
                $id_cnt++;
                $ids[$id] = $id_cnt;
            }
            $id = $ids[$id];
            $name = $feature['title'];
            $description = $feature['description'];
            $category = $feature['category'];
            $priority = $feature['priority'] ?? 'normal';
            $status = $feature['status'] ?? 'planned';
            $tags = $feature['tags'];
            $dependencies = $feature['dependencies'];
            $acceptance_criteria = $feature['acceptance_criteria'];
            $parent_id = $feature['parent_id'] ? $ids[$feature['parent_id']] : null;
            $module = $feature['module'];

            foreach ($acceptance_criteria as &$acceptance_criterion) {
                foreach ($ids as $uid => $id) {
                    $acceptance_criterion = str_replace($uid, 'id:' . $id, $acceptance_criterion);
                }
            }

            #dd($tags, $acceptance_criteria, $dependencies);

            Feature::create([
                'id' => $id,
                'parent_id' => $parent_id,
                'name' => $name,
                'description' => $description,
                'category' => $category,
                'priority' => $priority,
                'status' => $status,
                'module' => $module,
                'release' => 1,
                'acceptance_criteria' => $acceptance_criteria,
            ]);
        }
    }
}

```
`plugins/zen/threes/classes/Events.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

/**
 * Система внутренних событий Threes
 * Возможно не понадобиться
 */
class Events
{
    use SingletonTrait;

    private array $events = [];

    /**
     * Добавляет событие в систему событий
     *
     * @param string $hook_name Имя хука
     * @param string $call Имя вызываемого метода
     * @param mixed ...$arguments Аргументы для вызываемого метода
     * @return void
     */
    public function addEvent(string $hook_name, string $call, ...$arguments): void
    {
        $this->events[] = [
            'hook_name' => $hook_name,
            'call' => $call,
            'arguments' => $arguments
        ];
    }

    /**
     * Добавляет одно неповторяемое событие
     * @param string $hook_name
     * @param string $call
     * @param ...$arguments
     * @return void
     */
    public function addEventOnce(string $hook_name, string $call, ...$arguments): void
    {
        if (isset($this->events[$hook_name])) {
            return;
        }
        $this->events[$hook_name] = [
            'hook_name' => $hook_name,
            'call' => $call,
            'arguments' => $arguments
        ];
    }

    /**
     * Выполняется при завершении работы приложения
     *
     * @return void
     */
    public function terminating(): void
    {
        collect($this->events)
            ->where('hook_name', 'terminating')
            ->each(function($event) {
                $this->runEvent($event);
            });
    }

    /**
     * Выполняет событие
     * @param array $event
     * @return void
     * @throws \ReflectionException
     */
    public function runEvent(array $event): void
    {
        $call = $event['call'];
        $arguments = $event['arguments'];
        ths()->exe($call, null, $arguments);
    }
}

```
`plugins/zen/threes/classes/Gen.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Models\Feature;

class Gen
{
    public static function run(int $feature_id)
    {
        $feature = Feature::find($feature_id);
        $self = new self();
        $self->generate($feature);
    }

    public function generate(Feature $feature)
    {

        dd($feature->data);


//        $vector = ths()->getSetting('vector');
//        $system_prompt = collect()
//            ->where('active', 1)
//            ->map(function ($prompt) {
//                return $prompt['text'];
//            })
//            ->join(PHP_EOL);
//
//        $yaml = ths()->ai(
//            $vector,
//            $system_prompt
//        );
    }
}

```
`plugins/zen/threes/classes/Helpers.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Classes\Helpers\Carbon;
use Zen\Threes\Classes\Helpers\Debug;
use Zen\Threes\Classes\Helpers\Files;
use Zen\Threes\Classes\Helpers\Json;
use Zen\Threes\Classes\Helpers\State;
use Zen\Threes\Classes\Helpers\Strings;
use Zen\Threes\Classes\Helpers\Yaml;
use Zen\Threes\Classes\Helpers\Icon;

class Helpers
{
    use Debug;    # Методы отладки
    use Files;    # Работа с файлами
    use Json;     # Работа с JSON
    use Yaml;     # Работа с YAML
    use Strings;  # Слой настроек
    use State;    # Управлением состоянием (сессия Threes)
    use Carbon;   # Создание объекта Carbon
    use Icon;     # Сервис иконок

    /**
     * Ноды, хранят информацию для схемы, доступны по $nid
     * @return Nodes
     */
    public function nodes(): Nodes
    {
        return Nodes::getInstance();
    }

    /**
     * Хранилище нод
     * @return Store
     */
    public function store(): Store
    {
        return Store::getInstance();
    }

    /**
     * Система сообщений
     * @return Messages
     */
    public function messages(): Messages
    {
        return Messages::getInstance();
    }

    public function notice(): Notice
    {
        return Notice::getInstance();
    }

    /**
     * Система событий
     * @return Events
     */
    public function events(): Events
    {
        return Events::getInstance();
    }

    public function versions(): Versions
    {
        return Versions::getInstance();
    }

    public function backlog(): Backlog
    {
        return Backlog::getInstance();
    }

    public function ai(
        string $prompt,
        string $system_prompt = null,
        string $service = 'openai',
        string $model = null
    ): ?string {
        if ($service === 'openai') {
            if (!$system_prompt) {
                $system_prompt = ths()->getSetting('default_prompt');
            }
            if (!$model) {
                $model = 'gpt-4.1';
            }
            return \Zen\Threes\Classes\Services\OpenAiService::query($prompt, $system_prompt, $model);
        }

        if ($service === 'ollama') {
            if (!$model) {
                $model = 'llama3.3:latest';
            }
            return \Zen\Threes\Classes\Services\OllamaService::query($prompt, $system_prompt, $model);
        }

        return null;
    }
}

```
`plugins/zen/threes/classes/Messages.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

class Messages
{
    use SingletonTrait;

    private array $messages = [];

    /**
     * Добавить сообщение (Этот метод будет расширяться)
     * @param string $message
     * @param string $type
     * @return void
     */
    public function addMessage(string $message, string $type = "success"): void
    {
        $this->messages[] = [
            "text" => $message,
            "type" => $type
        ];
    }

    public function pushMessages(array $messages = []): array
    {
        return array_merge($this->messages, $messages);
    }
}

```
`plugins/zen/threes/classes/Nodes.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Node;

class Nodes
{
    use SingletonTrait;

    /**
     * Доступ к модели
     * @param string|null $nid
     * @return Node|null
     */
    public function model(string $nid = null): ?Node
    {
        if ($nid) {
            return Node::find($nid);
        }
        return new Node();
    }

    /**
     * Создаёт новый нод по методу шаблона
     * @param string $template_method
     * @return Node
     * @throws \ReflectionException
     */
    public function createNode(string $template_method = 'Zen.Threes.Classes.Nodes.Document.textTemplate'): Node
    {
        $template = ths()->exe($template_method);
        $node = $this->model();
        $node->icon = $template['icon'];
        $node->name = $template['name'];
        $node->handler = $template['handler'];
        $node->data = $template['data'];
        $node->props = $template['props'];
        $node->save();
        return $node;
    }

    public function getUiData(string $nid)
    {
        
    }
}

```
`plugins/zen/threes/classes/Notice.php`
```<?php

namespace Zen\Threes\Classes;

use Http;
use Zen\Threes\Traits\SingletonTrait;

class Notice
{
    use SingletonTrait;

    public function telegramSendMessage(string $text, ?string $chat_id = null): void
    {
        $bot_token = env('TELEGRAM_BOT_TOKEN');
        $chat_id = env('TELEGRAM_CHAT_ID', $chat_id);
        if (!$bot_token || !$chat_id) {
            return;
        }
        $api_url = 'https://api.telegram.org';
        $encodedText = urlencode($text);
        $query = "$api_url/bot$bot_token/sendMessage?chat_id=$chat_id&text=$encodedText&parse_mode=HTML";
        Http::get($query);
    }
}

```
`plugins/zen/threes/classes/Store.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Node;

class Store
{
    use SingletonTrait;

    public function getStoreNodes(string $filter_text = null): array
    {
        $nodes = Node::where(function ($query) use ($filter_text) {
            if ($filter_text) {
                $query->orWhere('nid', 'like', "%$filter_text%");
                $query->orWhere('name', 'like', "%$filter_text%");
                $query->orWhere('description', 'like', "%$filter_text%");
            }
        })->get();

        $output = [];
        foreach ($nodes as $node) {
            $output[] = $node->store_item;
        }
        return $output;
    }
}

```
`plugins/zen/threes/classes/Versions.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Version;

class Versions
{
    use SingletonTrait;

    # Методы версионирования в Version
}

```
`plugins/zen/threes/classes/helpers/Carbon.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

trait Carbon
{
    function carbon(?string $date = null, ?string $format = null): \Carbon\Carbon
    {
        return $format
            ? \Carbon\Carbon::createFromFormat($format, $date)
            : \Carbon\Carbon::parse($date ?? now());
    }
}

```
`plugins/zen/threes/classes/helpers/Debug.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

trait Debug
{
    /**
     * Сохранить запрос
     * @param string $name
     * @return void
     */
    public function requestSave(string $name = 'default'): void
    {
        ths()->toJsonFile(
            storage_path("temp/threes/request_$name.json"),
            request()->all(),
            true
        );
    }

    /**
     * Загрузить запрос
     * @param string $name
     * @return array|null
     */
    public function requestLoad(string $name = 'default'): array | null
    {
        return ths()->fromJsonFile(
            storage_path("temp/threes/request_$name.json"),
        );
    }

    /**
     * Выполнить запрос
     * @param string $name
     * @return void
     */
    public function requestExec(string $name = 'default'): void
    {
        $request = $this->requestLoad($name);
        request()->merge($request);
    }

    /**
     * Автоматическая отладка, если данные есть они сохраняются, если нет они подгружаются
     * @param string $name
     * @return void
     */
    public function requestDebug(string $name = 'default'): void
    {
        if (count(request()->all())) {
            $this->requestSave($name);
        } else {
            $this->requestExec($name);
        }
    }
}

```
`plugins/zen/threes/classes/helpers/Files.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

use Illuminate\Support\Collection;
use File;

trait Files
{
    /**
     * Проверить адрес файла и рекурсивно создать недостающие папки
     * @param string $file_path
     * @param int $permissions
     * @return string
     */
    public function checkDir(string $file_path, int $permissions = 0777): string
    {
        $dirname = dirname($file_path);
        if (!is_dir($dirname)) {
            mkdir($dirname, $permissions, true);
        }
        return $file_path;
    }

    /**
     * Возвращает коллекцию со списком файлов в указанной папке
     * @param string $dir_path - Путь к папке
     * @param bool $recursive - Рекурсивное сканирование (отключено по умолчанию)
     * @return Collection
     */
    public function filesList(string $dir_path, bool $recursive = false): Collection
    {
        $files = $recursive ? File::allFiles($dir_path) : File::files($dir_path);
        $output = [];
        foreach ($files as $file) {
            $output[] = [
                'name' => $file->getFilename(),
                'extension' => $file->getExtension(),
                'path' => $file->getRealPath(),
                'size' => $file->getSize()
            ];
        }
        return collect($output);
    }
}

```
`plugins/zen/threes/classes/helpers/Icon.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

use Zen\Threes\Traits\SingletonTrait;
use Str;

trait Icon
{
    use SingletonTrait;

    /**
     * Создать иконку из пути до файла или строки svg
     * @param string $svg
     * @return string
     */
    public function setIcon(string $svg): string
    {
        if (Str::startsWith($svg, ['<svg', '<?xml'])) {
            $contents = $svg;
        } else {
            $contents = file_get_contents($svg);
        }

        $hash = md5($contents);
        $path = ths()->checkDir(storage_path("app/uploads/public/threes/icons/$hash.svg"));

        file_put_contents($path, $contents);
        return $hash;
    }

    public function getIcon(string $hash): string
    {
        return env('APP_URL') . "/storage/app/uploads/public/threes/icons/$hash.svg";
    }

}

```
`plugins/zen/threes/classes/helpers/Json.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

trait Json
{
    /**
     * Определяет, является ли строка JSON-массивом
     * @param $string
     * @return bool
     */
    public function isJson($string): bool
    {
        json_decode($string);
        return json_last_error() === JSON_ERROR_NONE;
    }

    /**
     * Преобразовать json-строку в массив
     * @param string $string
     * @param int|bool $assoc
     * @return array|object|null
     */
    public function fromJson(string $string, int|bool $assoc = true): array|null|object
    {
        if (empty($string)) {
            return null;
        }
        return json_decode($string, $assoc);
    }

    /**
     * Прочитать массив из json-файла
     * @param string $file_path
     * @param int|bool $assoc
     * @return array|null
     */
    public function fromJsonFile(string $file_path, int|bool $assoc = true): array|null
    {
        if (!file_exists($file_path)) {
            return null;
        }
        return $this->fromJson(file_get_contents($file_path), $assoc);
    }

    /**
     * Преобразовать массив в json-строку
     * @param array $arr
     * @param bool $pretty_print
     * @param bool $no_slashes
     * @return string|null
     */
    public function toJson(
        array $arr = [],
        bool $pretty_print = true,
        bool $no_slashes = false
    ): ?string {
        if (empty($arr)) {
            return null;
        }
        $options = JSON_UNESCAPED_UNICODE
            | ($pretty_print ? JSON_PRETTY_PRINT : 0)
            | ($no_slashes ? JSON_UNESCAPED_SLASHES : 0);

        return json_encode($arr, $options);
    }

    /**
     * Сохранить массив в json-файл
     * @param string $file_path
     * @param array $arr
     * @param bool $pretty_print
     * @param bool $no_slashes
     * @return void
     */
    public function toJsonFile(
        string $file_path,
        array $arr = [],
        bool $pretty_print = true,
        bool $no_slashes = false
    ): void {
        file_put_contents(
            ths()->checkDir($file_path),
            $this->toJson(
                $arr,
                $pretty_print,
                $no_slashes
            )
        );
    }
}

```
`plugins/zen/threes/classes/helpers/State.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

use Zen\Threes\Traits\SingletonTrait;

trait State
{
    use SingletonTrait;

    private array $state = [];

    /**
     * Сохранить состояние
     * @param string $key
     * @param mixed $value
     * @return void
     */
    public function setState(string $key, mixed $value): mixed
    {
        return $this->state[$key] = $value;
    }

    /**
     * Загрузить состояние
     * @param string $key
     * @return mixed
     */
    public function getState(string $key): mixed
    {
        return $this->state[$key] ?? null;
    }
}

```
`plugins/zen/threes/classes/helpers/Strings.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

use Str;

trait Strings
{
    /**
     * Сгенерировать UUID
     * @return string
     */
    public function createUuid(): string
    {
        return Str::uuid()->toString();
    }

    /**
     * Сгенерировать токен с заданной длинной
     * @param int $length
     * @return string
     */
    public function createToken(int $length = 8): string
    {
        return strtolower(Str::random($length));
    }

    /**
     * Сгенерировать строку из безопасных символов
     * @param int $length
     * @return string
     */
    public function createShortId(int $length = 12): string
    {
        $alphabet = 'abcdefghjkmnpqrstuvwxyz23456789';
        $max = strlen($alphabet) - 1;
        $token = '';
        for ($i = 0; $i < $length; $i++) {
            $token .= $alphabet[random_int(0, $max)];
        }
        return $token;
    }

    /**
     * Преобразует kebab-case в camelCase
     * @param string $value
     * @return string
     */
    public function kebabToCamel(string $value): string
    {
        return Str::camel($value);
    }
}

```
`plugins/zen/threes/classes/helpers/Yaml.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

use Symfony\Component\Yaml\Yaml as _Yaml;

trait Yaml
{
    /**
     * Преобразовать yaml-строку в массив
     * @param string $string
     * @return array|null
     */
    public function fromYaml(string $string): ?array
    {
        return _Yaml::parse($string);
    }

    /** Прочитать массив из yaml-файла
     * @param string $file_path
     * @return array|null
     */
    public function fromYamlFile(string $file_path): ?array
    {
        if (!file_exists($file_path)) {
            return null;
        }
        return $this->fromYaml(file_get_contents($file_path));
    }

    /**
     * Преобразовать массив в yaml-строку
     * @param array $array
     * @param int $inline
     * @param int $indent
     * @return string|null
     */
    public function toYaml(array $array, int $inline = 10, int $indent = 4): ?string
    {
        return _Yaml::dump($array, $inline, $indent);
    }

    /**
     * Сохранить массив в yaml-файл
     * @param string $file_path
     * @param array $array
     * @param int $inline
     * @param int $indent
     * @return void
     */
    public function toYamlFile(
        string $file_path,
        array $array,
        int $inline = 10,
        int $indent = 4
    ): void {
        file_put_contents(
            ths()->checkDir($file_path),
            $this->toYaml(
                $array,
                $inline,
                $indent
            )
        );
    }
}

```
`plugins/zen/threes/classes/nodes/Document.php`
```<?php

namespace Zen\Threes\Classes\Nodes;

class Document
{
    public function textTemplate(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/cog.svg'),
            'name' => "Новый документ",
            'handler' => 'Zen.Threes.Classes.Nodes.Document.text',
            'data' => 'Привет мир!',
            'props' => [
                'tree' => true,
                'schema' => true,
                'store' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["text", "documents"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function text($data): array
    {
        return [
            'handler' => 'NodeText',
            'data' => $data,
        ];
    }
}

```
`plugins/zen/threes/classes/services/OllamaService.php`
```<?php

namespace Zen\Threes\Classes\Services;

use Exception;
use Throwable;
use Http;

class OllamaService
{
    private string $host;

    public function __construct()
    {
        $this->host = env('OLLAMA_HOST', 'http://192.168.201.105:11434');
    }

    /**
     * Выполнить запрос к Ollama с поддержкой system prompt
     * @param string $model
     * @param string $user_prompt
     * @param string|null $system_prompt
     * @return string
     * @throws Exception
     */
    public static function query(string $user_prompt, ?string $system_prompt = null, string $model = 'llama3.3:latest'): string
    {
        set_time_limit(0);

        $service = new self();
        try {
            $payload = [
                'model'  => $model,
                'prompt' => $user_prompt,
                'stream' => false,
            ];

            if ($system_prompt) {
                $payload['system'] = $system_prompt;
            }

            $response = Http::timeout(3600)->post($service->host . '/api/generate', $payload);

            if (!$response || !$response->successful()) {
                throw new Exception('Ollama connection error: ' . $response->body());
            }

            return $response->json()['response'] ?? '';
        } catch (Exception | Throwable $exception) {
            throw new Exception('Ollama connection error', 0, $exception);
        }
    }
}

```
`plugins/zen/threes/classes/services/OpenAiService.php`
```<?php

namespace Zen\Threes\Classes\Services;

use Exception;
use Throwable;
use Http;

class OpenAiService
{
    private string $api_key;
    public function __construct()
    {
        $this->api_key = env('OPEN_AI_API_KEY');
    }

    /**
     * Выполнить запрос к Open Ai
     * @param string $system_prompt
     * @param string $user_prompt
     * @return string
     * @throws Exception
     */
    public static function query(string $user_prompt, string $system_prompt, string $model = 'gpt-4.1'): string
    {
        $service = new self();
        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $service->api_key,
            ])->timeout(600)->post('https://api.openai.com/v1/chat/completions', [
                'model' => $model,
                'messages' => [
                    [
                        'role' => 'system',
                        'content' => $system_prompt
                    ],
                    [
                        'role' => 'user',
                        'content' => $user_prompt
                    ],
                ],
            ]);

            if (!$response || !$response->successful()) {
                throw new Exception('API connection error');
            }

            return $response->json()['choices'][0]['message']['content'];
        } catch (Exception | Throwable $exception) {
            throw new Exception('API connection error', 0, $exception);
        }
    }
}

```
`plugins/zen/threes/console/BacklogFill.php`
```<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;

/**
 * BacklogFill Command
 *
 * @link https://docs.octobercms.com/3.x/extend/console-commands.html
 */
class BacklogFill extends Command
{

    protected $signature = 'threes:backlog_fill';
    protected $description = 'Заполнить бэклог';

    public function handle()
    {
        $this->output->writeln("Обрабатываю данные...");
        ths()->backlog()->handleVector();
        $this->output->writeln("Обработка завершена.");
    }
}

```
`plugins/zen/threes/console/Gen.php`
```<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;

class Gen extends Command
{
    protected $signature = 'threes:gen {feature_id}';
    protected $description = 'Генерирует запрос';

    public function handle()
    {
        $feature_id = $this->argument('feature_id');
        $this->output->writeln("Hello {$feature_id}!");
    }
}

```
`plugins/zen/threes/console/Vector.php`
```<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;

class Vector extends Command
{
    protected $signature = 'threes:vector';
    protected $description = 'Generate vector.md for ai';

    public function handle()
    {
        $exclude = [
            '/app/plugins/zen/threes/node_modules',
            '/app/plugins/zen/threes/package-lock.json',
            '/app/plugins/zen/threes/assets',
            '/app/plugins/zen/threes/controllers',
            'app/plugins/zen/threes/src/vue/trash',
        ];

        // Файлы, которые нужно включить в любом случае
        $force_include = [
            '/app/plugins/zen/threes/README.md',
            '/app/plugins/zen/threes/plugin.yaml',
        ];

        $allow_extensions = [
            'php', 'yaml', 'json', 'js', 'css', 'html', 'htm', 'txt'
        ];

        $this->output->writeln("Scanning directory...");
        $files = ths()->filesList(
            base_path('plugins/zen/threes'),
            true
        );

        $output = [];
        foreach ($files as $file) {
            $path = $file['path'];
            $ext = $file['extension'];

            // Принудительное включение файлов из белого списка
            if (in_array($path, $force_include)) {
                $this->processFile($path, $output);
                continue;
            }

            // Проверка расширения файла
            if (!in_array($ext, $allow_extensions)) {
                continue;
            }

            // Проверка на исключенные пути
            $excluded = false;
            foreach ($exclude as $item) {
                if (str_starts_with($path, $item)) {
                    $excluded = true;
                    break;
                }
            }
            if ($excluded) {
                continue;
            }

            $this->processFile($path, $output);
        }

        $markdown = join(PHP_EOL, $output);
        $output_path = storage_path('threes_vector.md');
        file_put_contents($output_path, $markdown);
        $this->output->writeln("Output: $output_path");
    }

    protected function processFile(string $path, array &$output)
    {
        $this->output->writeln("Render file: $path");
        $code = file_get_contents($path);
        $cleanPath = preg_replace('/^\/app\//', '', $path);
        $output[] = "`$cleanPath`" . PHP_EOL . '```' . $code . PHP_EOL . '```';
    }
}

```
`plugins/zen/threes/exports/FeatureExport.php`
```<?php namespace Zen\Threes\Exports;

use Zen\Threes\Models\Feature;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class FeatureExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        $rows = [];

        $features = Feature::get();

        foreach ($features as $feature) {
            // Основная строка фичи
            $rows[] = [
                $feature->id,
                $feature->name,
                $feature->description,
                $feature->module,
                $feature->category,
                $feature->status,
                $feature->priority,
                $feature->created_at->format('d.m.Y H:i'),
            ];

            // Каждая acceptance criteria — отдельной строкой
            foreach ($feature->acceptance_criteria as $criteria) {
                $rows[] = [
                    '', '', '- ' . $criteria, '', '', '', '', '',
                ];
            }
        }

        return collect($rows);
    }

    public function headings(): array
    {
        return ['ID', 'Название', 'Описание', 'Область', 'Категория', 'Статус', 'Приоритет', 'Создано'];
    }
}

```
`plugins/zen/threes/init.php`
```<?php

if (!function_exists('ths')) {
    ### Threes entry point for Fluent API
    function ths(): \Zen\Threes\Threes
    {
        return \Zen\Threes\Threes::getInstance();
    }
}

```
`plugins/zen/threes/models/Feature.php`
```<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use October\Rain\Database\Traits\Sortable;
use October\Rain\Database\Traits\NestedTree;

/**
 * @property array $acceptance_criteria
 */
class Feature extends Model
{
    use Validation;
    use Sortable;
    use NestedTree;

    public $table = 'zen_threes_features';

    protected $fillable = [
        'parent_id',
        'name',
        'description',
        'category',
        'priority',
        'status',
        'module',
        'release',
        'acceptance_criteria'
    ];

    public $rules = [];


    public function getDataAttribute(?string $data = null): array
    {
        if (!$data) {
            return [];
        }
        return ths()->fromJson($data);
    }

    public function setDataAttribute(?array $data = []): void
    {
        if ($data === null) {
            $this->attributes['data'] = null;
        } else {
            $this->attributes['data'] = ths()->toJson($data);
        }
    }

    public function getModuleOptions(): array
    {
        return $this->getUniqueOptions('module');
    }

    public function getPriorityOptions(): array
    {
        return $this->getUniqueOptions('priority');
    }

    public function getStatusOptions(): array
    {
        return [
            'accepted' => 'accepted',
            'planned' => 'planned',
        ];
        //return $this->getUniqueOptions('status');
    }
    public function getCategoryOptions(): array
    {
        return $this->getUniqueOptions('category');
    }


    public function getCriteriaCountAttribute()
    {
        return count($this->acceptance_criteria);
    }

    public function setAcceptanceCriteriaAttribute(array $value = []): void
    {
        $this->attributes['acceptance_criteria'] = ths()->toJson($value);
    }

    public function getAcceptanceCriteriaAttribute(?string $value = ''): ?array
    {
        if (!$value) {
            return [];
        }
        return ths()->fromJson($value);
    }

    public function getAcceptanceCriteriaRepeaterAttribute(): array
    {
        $raw = $this->acceptance_criteria;
        return array_map(fn($item) => ['item' => $item], $raw);
    }

    public function setAcceptanceCriteriaRepeaterAttribute($value): void
    {
        $transformed = collect($value)
            ->pluck('item')
            ->filter()
            ->values()
            ->all();
        $this->acceptance_criteria = $transformed;
    }

    private function getUniqueOptions(string $field)
    {
        return Feature::query()
            ->withoutGlobalScopes()
            ->whereNotNull($field)
            ->selectRaw("DISTINCT $field")
            ->orderBy($field)
            ->pluck($field, $field)
            ->mapWithKeys(fn($v, $k) => [(string)$k => (string)$v])
            ->toArray();
    }
}

```
`plugins/zen/threes/models/Frame.php`
```<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use October\Rain\Database\Traits\Sortable;
use October\Rain\Database\Traits\NestedTree;

/**
 * @property  string $id - Идентификатор фрейма
 * @property string $nid - Токен нода
 * @property string $name - Название нода
 * @property string $description - Описание нода
 * @method static active() - Фильтр активности в запросе
 * @method static find($nid) - Найти фрейм по токену нода
 * @method static where(string $nid, int|string $value) - Условие where для фрейма
 */
class Frame extends Model
{
    use Validation;
    use Sortable;
    use NestedTree;

    public $table = 'zen_threes_frames';
    protected $primaryKey = 'id';
    public $rules = [
        'nid' => 'required|unique:zen_threes_frames,nid',
        'name' => 'required', // Оставляем валидацию
    ];

    protected $fillable = [
        'nid',
        'name', // Убеждаемся, что name в fillable
    ];

    protected $node;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!$this->exists) {
            $this->node = new Node();
            $this->nid = $this->node->nid;
        }
    }

    public function afterFetch()
    {
        $this->node = Node::find($this->nid) ?? new Node(['nid' => $this->nid]);
    }

    public static function findByNid(string $nid): ?Frame
    {
        return self::where('nid', $nid)->firstOrFail();
    }

    public function getNameAttribute($value)
    {
        return $this->node->name ?? $value ?? '';
    }

    public function setNameAttribute($value): void
    {
        $this->attributes['name'] = $value;
        if ($this->node) {
            $this->node->name = $value;
        }
    }

    public function beforeSave()
    {
        if (!$this->nid) {
            $this->nid = $this->node->nid;
        }

        unset($this->attributes['name']);
    }

    public function afterSave()
    {
        if ($this->node) {
            $this->node->nid = $this->nid; // Убеждаемся, что nid совпадает
            $this->node->save(); // Сохраняем связанный Node
        }
    }
}

```
`plugins/zen/threes/models/Node.php`
```<?php

namespace Zen\Threes\Models;

use MongoDB\Client;
use MongoDB\Collection as MongoCollection;

/**
 * @property string $nid
 * @property string $icon
 * @property string $name
 * @property string $description
 * @property string $handler
 * @property string | array $data
 * @property array $props
 */

class Node
{
    public static string $database   = 'threes';
    public static string $collection = 'nodes';

    protected array $attributes = [];

    public function __construct(array $data = [])
    {
        $this->attributes = $data;
    }

    protected function getNidAttribute(): ?string
    {
        return $this->attributes['_id'] ?? null;
    }

    public static function client(): Client
    {
        return new Client(
            env('MONGO_URL', 'mongodb://root:secret@threes-mongo:27017/admin')
        );
    }

    public static function truncate(): void
    {
        self::collection()->drop();
    }

    public static function collection(): MongoCollection
    {
        return self::client()
            ->selectDatabase(self::$database)
            ->selectCollection(self::$collection);
    }

    /**
     * Вернуть объект для Ui.Tree
     * @return array|null
     */
    public function getTreeNode(): ?array
    {
        if (!$this->props['tree'] ?? false) {
            return null;
        }
        return [
            'nid' => $this->nid,
            'icon' => $this->icon,
            'name' => $this->name,
        ];
    }

    /**
     * Вернуть объект для Ui.Schema
     * @return array|null
     * @throws \ReflectionException
     */
    public function getSchemaNode(): ?array
    {
        if (!$this->props['schema'] ?? false) {
            return null;
        }
        $component_data = ths()->exe($this->handler, null, $this->data);
        return [
            'nid' => $this->nid,
            'icon' => $this->icon,
            'name' => $this->name,
            'handler' => $component_data['handler'],
            'data' => $component_data['data'],
            'props' => $this->props,
        ];
    }

    /**
     * Вернуть объект для Ui.Store
     * @return array|null
     */
    public function getStoreNode(): ?array
    {
        if (!isset($this->props['store'])) {
            return null;
        }
        return [
            'nid' => $this->nid,
            'icon' => $this->icon,
            'name' => $this->name,
        ];
    }

    # Геттеры и сеттеры
    public function setIconAttribute(string $svg): void
    {
        $this->attributes['icon'] = ths()->setIcon($svg);
    }

    public function getIconAttribute(): string
    {
        return ths()->getIcon($this->attributes['icon']);
    }

    public static function generateNidFromSettings(): string
    {
        return ths()->createShortId();
    }

    public static function find(string $nid): ?self
    {
        $doc = self::collection()->findOne(['_id' => $nid]);
        return $doc ? new self($doc->getArrayCopy()) : null;
    }

    public function save(): void
    {
        $this->beforeSave();
        if (empty($this->attributes['_id'])) {
            $this->attributes['_id'] = self::generateNidFromSettings();
        }

        if ($this->exists()) {
            self::collection()->replaceOne(
                ['_id' => $this->attributes['_id']],
                $this->attributes
            );
        } else {
            $result = self::collection()->insertOne($this->attributes);
            $this->attributes['_id'] = (string) $result->getInsertedId();
        }
        $this->afterSave();
    }

    public function delete(): void
    {
        if ($this->exists()) {
            self::collection()->deleteOne([
                '_id' => $this->attributes['_id']
            ]);
        }
    }

    public function exists(): bool
    {
        if (empty($this->attributes['_id'])) {
            return false;
        }

        return self::collection()
                ->countDocuments(
                    ['_id' => $this->attributes['_id']],
                    ['limit' => 1]
                ) > 0;
    }

    public function addChild($node_or_ref): void
    {
        $children = $this->attributes['children'] ?? [];
        $children[] = $node_or_ref;
        $this->attributes['children'] = $children;
        $this->save();
    }

    public function resolveChildren(): array
    {
        $resolved = [];

        foreach ($this->attributes['children'] ?? [] as $item) {
            if (isset($item['$ref'], $item['$id'])) {
                $resolved[] = self::find($item['$id']);
            } elseif (isset($item['_id'])) {
                $resolved[] = new self($item);
            }
        }

        return array_filter($resolved);
    }

    public function getNid(): ?string
    {
        return $this->attributes['_id'] ?? null;
    }

    public function toArray(): array
    {
        return $this->attributes;
    }

    protected function normalizeValue($value)
    {
        if ($value instanceof \MongoDB\Model\BSONDocument || $value instanceof \MongoDB\Model\BSONArray) {
            $value = $value->getArrayCopy();
        }

        if (is_array($value)) {
            foreach ($value as $k => $v) {
                $value[$k] = $this->normalizeValue($v);
            }
        }

        return $value;
    }

    public function __get($key)
    {
        $method = 'get' . str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $key))) . 'Attribute';
        if (method_exists($this, $method)) {
            return $this->$method();
        }

        return $this->normalizeValue($this->attributes[$key] ?? null);
    }

    public function __set($key, $value): void
    {
        $method = 'set' . str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $key))) . 'Attribute';

        if (method_exists($this, $method)) {
            $this->$method($value);
            return;
        }

        $this->attributes[$key] = $value;
    }

    private function setTimestamps(): void
    {
        $now = date('c');
        if (!$this->exists()) {
            $this->attributes['created_at'] = $now;
        }
        $this->attributes['updated_at'] = $now;
    }

    # События
    protected function beforeSave(): void
    {
        $this->setTimestamps();
    }
    protected function afterSave(): void {}
}

```
`plugins/zen/threes/models/Query.php`
```<?php namespace Zen\Threes\Models;

use Model;
use Cache;

class Query extends Model
{
    public $table = 'zen_threes_queries';

    public $rules = [];
    protected $fillable = [
        'call',
        'data',
        'time'
    ];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $max_records = 10000;
            $record_count = static::count();
            $cache_key = 'last_query_cleanup';
            $cleanup_interval = 86400; // 24 часа в секундах

            // Получаем временную метку последнего удаления из кеша
            $last_cleanup = Cache::get($cache_key, 0);
            $current_time = time();

            // Проверяем, прошло ли достаточно времени с последнего удаления
            if ($current_time - $last_cleanup >= $cleanup_interval) {
                if ($record_count >= $max_records) {
                    $records_to_delete = $record_count - $max_records + 1;
                    static::orderBy('id', 'asc')->take($records_to_delete)->delete();
                }

                // Обновляем временную метку последнего удаления в кеше
                Cache::put($cache_key, $current_time, $cleanup_interval);
            }
        });
    }

    public function setDataAttribute(?array $data = null)
    {
        if (!is_null($data)) {
            $this->attributes['data'] = ths()->toJson($data);
        }
    }
}

```
`plugins/zen/threes/models/Settings.php`
```<?php

namespace Zen\Threes\Models;

use October\Rain\Database\Model;
use October\Rain\Database\Traits\Validation as ValidationTrait;

/**
 * Модель настроек
 * Существует хелпер для получения параметров: ths()->settings('Ключ')
 * Посмотреть ключи можно тут: app/plugins/zen/threes/models/settings/fields.yaml
 */
class Settings extends Model
{
    use ValidationTrait;
    public $implement = ['System.Behaviors.SettingsModel'];
    public string $settingsCode = 'zen_threes_settings';
    public string $settingsFields = 'fields.yaml';
    public $rules = [];
}

```
`plugins/zen/threes/models/Version.php`
```<?php namespace Zen\Threes\Models;

use Model;
use Illuminate\Support\Facades\DB;

/**
 * Система версионирования Threes
 * @method static where($field, $value)
 */
class Version extends Model
{
    public $table = 'zen_threes_versions';
    public $rules = [];

    protected $fillable = [
        'version',
        'fid',
        'nid',
        'lid',
        'data',
    ];

    /**
     * Сохраняет данные слоя в json-массив
     * @param string|null $value
     * @return array
     */
    public function getDataAttribute(?string $value = null): array
    {
        return $value ? ths()->fromJson($value) : [];
    }

    /**
     * Возвращает оригинальное значение поля дата в виде json-строки
     * @return string
     */
    public function getDataJsonAttribute(): string
    {
        return $this->attributes['data'] ?? '';
    }

    /**
     * Извлекает данные слоя из json-массива
     * @param array|null $value
     * @return void
     */
    public function setDataAttribute(?array $value = null): void
    {
        if (!$value) {
            $value = [];
        }

        $this->attributes['data'] = ths()->toJson($value);
    }

    public function beforeSave()
    {
        $this->addVersionNumber();
    }

    /**
     * Добавить номер версии
     * @return void
     */
    private function addVersionNumber(): void
    {
        $version_type = null;
        $version_token = null;

        if ($this->fid) {
            $version_type = 'fid';
            $version_token = $this->fid;
        }

        if ($this->nid) {
            $version_type = 'nid';
            $version_token = $this->nid;
        }

        if ($this->lid) {
            $version_type = 'lid';
            $version_token = $this->lid;
        }

        $version_before = DB::table('zen_threes_versions')
            ->where($version_type, $version_token)
            ->orderBy('id', 'desc')
            ->first();

        if (!$version_before) {
            $version_number = 1;
        } else {
            $version_number = intval($version_before->version) + 1;
        }

        if (!$version_type || !$version_token) {
            return;
        }

        $this->attributes['version'] = $version_number;
    }
}

```
`plugins/zen/threes/models/feature/columns.yaml`
```columns:
    id:
        label: Фича
        type: text
        searchable: true
        sortable: true
        width: auto
        valueFrom: name
    name:
        label: name
        type: text
        searchable: true
        invisible: true
        sortable: true
        width: auto
    sort_order:
        label: Порядок
        type: number
        sortable: true
        width: 100px
    created_at:
        label: Создано
        type: datetime
        searchable: true
        sortable: true
        width: 150px
        format: 'd.m.Y H:i'
    updated_at:
        label: Обновлено
        type: datetime
        searchable: true
        sortable: true
        width: 150px
        format: 'd.m.Y H:i'
    module:
        label: Модуль
        type: text
        searchable: true
        sortable: true
        width: 100px
    category:
        label: Категория
        type: text
        searchable: true
        sortable: true
        width: 100px
    status:
        label: Статус
        type: text
        searchable: true
        sortable: true
        width: 100px
    priority:
        label: Приоритет
        type: text
        searchable: true
        sortable: true
        width: 100px
    criteria_count:
        label: Критериев
        type: number
        width: 100px
    description:
        label: Описание
        type: text
        invisible: true

```
`plugins/zen/threes/models/feature/fields.yaml`
```tabs:
    fields:
        description:
            label: Описание
            size: large
            span: full
            type: markdown
            tab: Настройки
        acceptance_criteria_repeater:
            label: 'Критерии приёмки'
            prompt: 'Добавить критерий'
            displayMode: accordion
            span: full
            type: repeater
            tab: Настройки
            form:
                fields:
                    item:
                        label: 'Критерии приёмки'
                        span: full
                        size: ''
                        type: textarea
        comment:
            label: Комментарии
            size: small
            span: full
            type: textarea
            tab: Управление
        data:
            label: ''
            prompt: Добавить
            displayMode: accordion
            span: full
            type: repeater
            tab: Промт
            form:
                fields:
                    system:
                        label: 'Системный промт'
                        span: auto
                        default: 0
                        type: switch
                    active:
                        label: Включен
                        span: auto
                        default: 1
                        type: switch
                    title:
                        label: Заголовок
                        span: full
                        type: text
                    text:
                        label: Промт
                        size: large
                        span: full
                        type: textarea
fields:
    name:
        label: 'Название фичи'
        span: full
        type: text
    category:
        label: Категория
        showSearch: true
        span: auto
        type: dropdown
    module:
        label: Модуль
        span: auto
        showSearch: true
        type: dropdown
    priority:
        label: Приоритет
        showSearch: true
        span: auto
        type: dropdown
    status:
        label: Статус
        showSearch: true
        span: auto
        type: dropdown

```
`plugins/zen/threes/models/frame/columns.yaml`
```columns:
    nid:
        label: token
        type: text
        searchable: true
        sortable: true
    name:
        label: name
        type: text
        searchable: true
        sortable: true
    active:
        label: active
        type: switch
        sortable: true

```
`plugins/zen/threes/models/frame/fields.yaml`
```fields:
    name:
        label: 'Название фрейма'
        span: auto
        required: 1
        type: text
    nid:
        label: 'Токен нода (author.scope.name)'
        span: auto
        required: 1
        preset:
            field: name
            type: slug
        type: text
    threes:
        label: ''
        span: full
        path: $/zen/threes/controllers/framecontroller/threes_app_partial.php
        readOnly: 1
        context:
            - update
        type: partial

```
`plugins/zen/threes/models/node/columns.yaml`
```columns:
    svg_path:
        label: Иконка
        type: partial
        width: 40px
        path: $/zen/threes/controllers/nodecontroller/partials/icon.php
    nid:
        label: nid
        type: text
        searchable: true
        sortable: true
    name:
        label: name
        type: text
        searchable: true
        sortable: true
    description:
        label: description
        type: text
        searchable: true
        sortable: true
    created_at:
        label: created_at
        type: datetime
        sortable: true
    updated_at:
        label: updated_at
        type: datetime
        sortable: true

```
`plugins/zen/threes/models/node/fields.yaml`
```tabs:
    fields:
        scheme:
            label: 'Схема интерфейса'
            span: full
            size: giant
            language: plain_text
            type: codeeditor
            tab: Схема
        svg:
            label: 'SVG Иконка'
            span: full
            size: large
            language: php
            type: codeeditor
            tab: SVG
fields:
    name:
        label: 'Название нода'
        span: auto
        type: text
    nid:
        label: 'Токен нода (autor.scope.name)'
        span: auto
        required: 1
        type: text
    description:
        label: Описание
        span: full
        size: small
        type: textarea

```
`plugins/zen/threes/models/query/columns.yaml`
```columns:
    call:
        label: Вызов
        type: text
        searchable: true
        sortable: true
    created_at:
        label: 'Время запроса'
        type: datetime
        searchable: true
        sortable: true
        format: 'd.m.Y H:i:s'

```
`plugins/zen/threes/models/query/fields.yaml`
```fields:
    call:
        label: Вызов
        span: full
        type: text
    data:
        label: 'Данные запроса'
        span: full
        size: huge
        language: php
        type: codeeditor

```
`plugins/zen/threes/models/settings/exe_field.yaml`
```fields:
    exe:
        label: 'Базовая инструкция'
        span: full
        size: giant
        language: plain_text
        type: codeeditor

```
`plugins/zen/threes/models/settings/fields.yaml`
```tabs:
    fields:
        vector_yaml:
            label: 'Векторное представление'
            size: giant
            language: plain_text
            span: full
            type: codeeditor
            tab: 'Vector YAML'
        vector_handlers:
            label: 'Обработка вектора'
            prompt: 'Добавить обработчик'
            displayMode: accordion
            span: full
            type: repeater
            tab: 'Vector YAML'
            form:
                fields:
                    active:
                        label: 'Обработчик включен'
                        span: full
                        type: switch
                    name:
                        label: 'Название обработчика'
                        span: full
                        type: text
                    system_prompt:
                        label: 'Системный промт'
                        size: large
                        span: full
                        type: textarea
        vector_prompt:
            label: 'Промт обработки исходных данных'
            prompt: 'Добавить блок промта'
            displayMode: accordion
            span: full
            type: repeater
            tab: Беклог
            form:
                fields:
                    active:
                        label: Включен
                        span: full
                        default: 1
                        type: switch
                    name:
                        label: 'Название промта'
                        span: full
                        type: text
                        comment: 'Не учитывается ai'
                    text:
                        label: Промт
                        size: small
                        span: full
                        type: textarea
        vector:
            label: 'Сырой вектор'
            size: giant
            language: plain_text
            span: full
            type: codeeditor
            tab: Беклог
        default_prompt:
            label: 'Промт по умолчанию'
            size: giant
            span: full
            type: textarea
            tab: 'Настройки Ai'
fields:
    author_token:
        label: 'Токен автора'
        span: auto
        default: project
        type: text

```
`plugins/zen/threes/models/version/columns.yaml`
```columns:
    id:
        label: 'Версия (id)'
        type: number
        searchable: true
        sortable: true
    fid:
        label: FID
        type: text
        searchable: true
        sortable: true
    nid:
        label: NID
        type: text
        searchable: true
        sortable: true
    lid:
        label: LID
        type: text
        searchable: true
        sortable: true
    created_at:
        label: Время
        type: datetime
        sortable: true
        format: 'd.m.Y H:i:s'

```
`plugins/zen/threes/models/version/fields.yaml`
```fields:
    data_json:
        label: 'Данные версии'
        span: full
        size: giant
        language: php
        type: codeeditor

```
`plugins/zen/threes/package.json`
```{
    "name": "threes",
    "version": "1.0.0",
    "description": "Threes — это революционная платформа для рекурсивно-модульного программирования, разработанная для упрощения и ускорения процесса разработки. Система позволяет разработчикам создавать гибкие и мощные приложения, используя концепции юнитов и спрайтов, а так-же позволяет версионировать, переиспользовать и распространять решения.",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Alex Blaze",
    "license": "MIT",
    "devDependencies": {
        "@vue/language-server": "^2.2.0",
        "laravel-mix": "^6.0.49",
        "resolve-url-loader": "^5.0.0",
        "sass": "^1.83.4",
        "sass-loader": "^16.0.4",
        "typescript": "^5.7.3",
        "vue-loader": "^16.8.3"
    },
    "dependencies": {
        "autoprefixer": "^10.4.20",
        "axios": "^1.7.9",
        "grapesjs": "^0.22.6",
        "lodash": "^4.17.21",
        "md5": "^2.3.0",
        "primeicons": "^5.0.0",
        "primevue": "^3.10.0",
        "quill": "^1.3.7",
        "vue": "^3.5.13",
        "vue-click-outside-element": "^3.1.2",
        "vue-draggable-plus": "^0.6.0",
        "vue-router": "^4.5.0",
        "vue-select": "^4.0.0-beta.6",
        "vue3-json-editor": "^1.1.5",
        "vuedraggable": "^4.1.0"
    }
}

```
`plugins/zen/threes/plugin.yaml`
```plugin:
    name: Threes
    description: 'Development system'
    author: OS3
    icon: oc-icon-cubes
    homepage: 'https://os3.pro'
permissions:
    zen.threes.main:
        tab: Threes
        label: 'Main access'
    zen.threes.options:
        tab: Threes
        label: 'Threes Options'
    zen.threes.queries:
        tab: Threes
        label: 'Queries control'
    zen.threes.nodes:
        tab: Threes
        label: 'Nodes control'
    zen.threes.features:
        tab: Threes
        label: 'Features control'
navigation:
    main:
        label: Threes
        url: zen/threes/spritecontroller
        icon: icon-cubes
        permissions:
            - zen.threes.main
        sideMenu:
            features:
                label: Бэклог
                url: zen/threes/featurecontroller
                icon: icon-star-o
            nodes:
                label: Ноды
                url: zen/threes/nodecontroller
                icon: icon-square
                permissions:
                    - zen.threes.main
                    - zen.threes.nodes
            queries:
                label: 'Журнал API'
                url: zen/threes/querycontroller
                icon: icon-book
            versions:
                label: Версионирование
                url: zen/threes/versioncontroller
                icon: icon-inbox

```
`plugins/zen/threes/routes.php`
```<?php

use Symfony\Component\HttpFoundation\BinaryFileResponse;

function handleResponse(array | string | \Symfony\Component\HttpFoundation\Response | null $response = null)
{
    if ($response instanceof BinaryFileResponse) {
        return $response;
    }

    if (is_null($response)) {
        return '';
    }

    if (is_array($response)) {
        if (!isset($response['success'])) {
            $response['success'] = true;
        }
        if (!isset($response['messages'])) {
            $response['messages'] = [];
        }
    }

    $has_messages = $response
        && isset($response['messages'])
        && is_array($response['messages']);

    if ($has_messages) {
        $response['messages'] = ths()->messages()->pushMessages($response['messages']);
    }

    if (!is_string($response)) {
        return Response::make(
            json_encode($response, 128 | 256),
            200,
            ['Content-Type' => 'application/json']
        );
    } else {
        return $response;
    }
}


Route::match(
    ['get', 'post'],
    'threes.api/{path}:{method}',
    function (string $path, string $method) {
        $response = ths()->api($path, $method);
        return handleResponse($response);
    }
);

```
`plugins/zen/threes/src/js/routes.js`
```import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/:backend/zen/threes/nodecontroller",
        name: "Frame",
        component: () => import("../vue/screens/Ui.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

```
`plugins/zen/threes/src/js/threes.js`
```const axios = require('axios');
const md5 = require('md5');
import { createApp } from 'vue';
import { reactive } from 'vue'
import router from './routes';
import PrimeVue from 'primevue/config';
import Threes from '../vue/Threes.vue'

window._ = require('lodash');
window.ths = {
    requests_register: {},
    auth_token: null,

    /* Объект для хранения глобальных данных */
    data: reactive({
        ui_streams: [],
        process: false,
        nids: []
    }),

    api(opts) {
        let domain = location.origin
        let data = (opts.data) ? opts.data : null
        let axios_options = null
        let api_url = opts.api ? '/threes.api/' + opts.api : opts.url
        let request_key = md5(api_url + JSON.stringify(data))

        /* Прерываем незавершенный запрос */
        if (this.requests_register[request_key]) {
            return
        }

        /* For debug */
        console.log('Threes query [' + request_key + ']: ' + api_url, data)

        /* Enable preloader after 2 seconds */
        this.requests_register[request_key] = setTimeout(() => {
            if (this.requests_register[request_key]) {
                this.preloader(true)
            }
        }, 2000)

        if (this.auth_token) {
            axios_options = {
                withCredentials: true,
                headers: {
                    PlayAuth: this.auth_token
                }
            }
        }

        if (!data) {
            axios.get(api_url, axios_options)
                .then((response) => {
                    console.log('Threes response [' + request_key + ']', response.data) // todo:debug
                    this.afterResponse(response.data, opts.then, request_key)
                })
                .catch((error) => {
                    delete this.requests_register[request_key]
                    this.preloader(false)
                    console.log(error) // todo:debug
                })
        } else {
            axios.post(api_url, data, axios_options)
                .then((response) => {
                    console.log('Threes response [' + request_key + ']', response.data) // todo:debug
                    this.afterResponse(response.data, opts.then, request_key)
                })
                .catch((error) => {
                    delete this.requests_register[request_key]
                    this.preloader(false)
                    console.log(error) // todo:debug
                })
        }
    },

    // Отправить сообщение
    pushMessage(text, type) {
        if ($ && $.oc && typeof $.oc.flashMsg === 'function') {
            if (!type) {
                type = 'info'
            }
            $.oc.flashMsg(text, type)
        } else {
            console.error('$.oc.flashMsg недоступен')
        }
    },

    // Показать сообщения
    pushMessages(messages) {
        for (let i in messages) {
            this.pushMessage(messages[i])
        }
    },

    // Постобработка данных
    afterResponse(response, then, request_key) {
        delete this.requests_register[request_key]
        this.preloader(false)
        if (response.messages) {
            this.pushMessages(response.messages)
        }
        if (then) {
            then(response)
        }
    },
    preloader(state) {
        this.data.process = state
    },
}

import vueClickOutsideElement from 'vue-click-outside-element';

const app = createApp(Threes);
app.use(router);
app.use(PrimeVue, {ripple: true});
app.use(vueClickOutsideElement)
app.mount("#threes");

```
`plugins/zen/threes/src/vue/trash/Dwarf/inputs/DwarfSelect.css`
```:root {
    --vs-colors--lightest: rgba(60, 60, 60, .26);
    --vs-colors--light: rgba(60, 60, 60, .5);
    --vs-colors--dark: #333;
    --vs-colors--darkest: rgba(0, 0, 0, .15);
    --vs-search-input-color: inherit;
    --vs-search-input-placeholder-color: inherit;
    --vs-font-size: 1rem;
    --vs-line-height: 1.4;
    --vs-state-disabled-bg: rgb(248, 248, 248);
    --vs-state-disabled-color: var(--vs-colors--light);
    --vs-state-disabled-controls-color: var(--vs-colors--light);
    --vs-state-disabled-cursor: not-allowed;
    --vs-border-color: var(--vs-colors--lightest);
    --vs-border-width: 1px;
    --vs-border-style: solid;
    --vs-border-radius: 4px;
    --vs-actions-padding: 4px 6px 0 3px;
    --vs-controls-color: var(--vs-colors--light);
    --vs-controls-size: 1;
    --vs-controls--deselect-text-shadow: 0 1px 0 #fff;
    --vs-selected-bg: #f0f0f0;
    --vs-selected-color: var(--vs-colors--dark);
    --vs-selected-border-color: var(--vs-border-color);
    --vs-selected-border-style: var(--vs-border-style);
    --vs-selected-border-width: var(--vs-border-width);
    --vs-dropdown-bg: #fff;
    --vs-dropdown-color: inherit;
    --vs-dropdown-z-index: 1000;
    --vs-dropdown-min-width: 160px;
    --vs-dropdown-max-height: 350px;
    --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);
    --vs-dropdown-option-bg: #000;
    --vs-dropdown-option-color: var(--vs-dropdown-color);
    --vs-dropdown-option-padding: 3px 20px;
    --vs-dropdown-option--active-bg: #5897fb;
    --vs-dropdown-option--active-color: #fff;
    --vs-dropdown-option--deselect-bg: #fb5858;
    --vs-dropdown-option--deselect-color: #fff;
    --vs-transition-timing-function: cubic-bezier(1, -.115, .975, .855);
    --vs-transition-duration: .15s
}

.v-select {
    position: relative;
    font-family: inherit;
    background: #fff;
}

.v-select, .v-select * {
    box-sizing: border-box
}

:root {
    --vs-transition-timing-function: cubic-bezier(1, .5, .8, 1);
    --vs-transition-duration: .15s
}

@-webkit-keyframes vSelectSpinner {
    0% {
        transform: rotate(0)
    }
    to {
        transform: rotate(360deg)
    }
}

@keyframes vSelectSpinner {
    0% {
        transform: rotate(0)
    }
    to {
        transform: rotate(360deg)
    }
}

.vs__fade-enter-active, .vs__fade-leave-active {
    pointer-events: none;
    transition: opacity var(--vs-transition-duration) var(--vs-transition-timing-function)
}

.vs__fade-enter, .vs__fade-leave-to {
    opacity: 0
}

:root {
    --vs-disabled-bg: var(--vs-state-disabled-bg);
    --vs-disabled-color: var(--vs-state-disabled-color);
    --vs-disabled-cursor: var(--vs-state-disabled-cursor)
}

.vs--disabled .vs__dropdown-toggle, .vs--disabled .vs__clear, .vs--disabled .vs__search, .vs--disabled .vs__selected, .vs--disabled .vs__open-indicator {
    cursor: var(--vs-disabled-cursor);
    background-color: var(--vs-disabled-bg)
}

.v-select[dir=rtl] .vs__actions {
    padding: 0 3px 0 6px
}

.v-select[dir=rtl] .vs__clear {
    margin-left: 6px;
    margin-right: 0
}

.v-select[dir=rtl] .vs__deselect {
    margin-left: 0;
    margin-right: 2px
}

.v-select[dir=rtl] .vs__dropdown-menu {
    text-align: right
}

.vs__dropdown-toggle {
    height: 42px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: flex;
    padding: 0 0 4px;
    background: none;
    border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
    border-radius: var(--vs-border-radius);
    white-space: normal
}

.vs__selected-options {
    display: flex;
    flex-basis: 100%;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0 2px;
    position: relative
}

.vs__actions {
    display: flex;
    align-items: center;
    padding: var(--vs-actions-padding)
}

.vs--searchable .vs__dropdown-toggle {
    height: auto;
    min-height: 42px;
    cursor: text
}

.vs--unsearchable .vs__dropdown-toggle {
    cursor: pointer
}

.vs--open .vs__dropdown-toggle {
    border-bottom-color: transparent;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
}

.vs__open-indicator {
    fill: var(--vs-controls-color);
    transform: scale(var(--vs-controls-size));
    transition: transform var(--vs-transition-duration) var(--vs-transition-timing-function);
    transition-timing-function: var(--vs-transition-timing-function)
}

.vs--open .vs__open-indicator {
    transform: rotate(180deg) scale(var(--vs-controls-size))
}

.vs--loading .vs__open-indicator {
    opacity: 0
}

.vs__clear {
    fill: var(--vs-controls-color);
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    margin-right: 8px
}

.vs__dropdown-menu {
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: calc(100% - var(--vs-border-width));
    left: 0;
    z-index: var(--vs-dropdown-z-index);
    padding: 5px 0;
    margin: 0;
    width: 100%;
    max-height: var(--vs-dropdown-max-height);
    min-width: var(--vs-dropdown-min-width);
    overflow-y: auto;
    box-shadow: var(--vs-dropdown-box-shadow);
    border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
    border-top-style: none;
    border-radius: 0 0 var(--vs-border-radius) var(--vs-border-radius);
    text-align: left;
    list-style: none;
    background: var(--vs-dropdown-bg);
    color: var(--vs-dropdown-color)
}

.vs__no-options {
    text-align: center
}

.vs__dropdown-option {
    line-height: 1.42857143;
    display: block;
    padding: var(--vs-dropdown-option-padding);
    clear: both;
    color: var(--vs-dropdown-option-color);
    white-space: nowrap;
    cursor: pointer
}

.vs__dropdown-option--highlight {
    background: var(--vs-dropdown-option--active-bg);
    color: var(--vs-dropdown-option--active-color)
}

.vs__dropdown-option--deselect {
    background: var(--vs-dropdown-option--deselect-bg);
    color: var(--vs-dropdown-option--deselect-color)
}

.vs__dropdown-option--disabled {
    background: var(--vs-state-disabled-bg);
    color: var(--vs-state-disabled-color);
    cursor: var(--vs-state-disabled-cursor)
}

.vs__selected {
    display: flex;
    align-items: center;
    background-color: var(--vs-selected-bg);
    border: var(--vs-selected-border-width) var(--vs-selected-border-style) var(--vs-selected-border-color);
    border-radius: var(--vs-border-radius);
    color: var(--vs-selected-color);
    line-height: var(--vs-line-height);
    margin: 4px 2px 0;
    padding: 0 .25em;
    z-index: 0
}

.vs__deselect {
    display: inline-flex;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin-left: 4px;
    padding: 0;
    border: 0;
    cursor: pointer;
    background: none;
    fill: var(--vs-controls-color);
    text-shadow: var(--vs-controls--deselect-text-shadow)
}

.vs__selected {
    height: 33px;
}

.vs--single .vs__selected {
    background-color: transparent;
    border-color: transparent
}

.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {
    position: absolute;
    opacity: .4
}

.vs--single.vs--searching .vs__selected {
    display: none
}

.vs__search::-webkit-search-cancel-button {
    display: none
}

.vs__search::-webkit-search-decoration, .vs__search::-webkit-search-results-button, .vs__search::-webkit-search-results-decoration, .vs__search::-ms-clear {
    display: none
}

.vs__search, .vs__search:focus {
    color: var(--vs-search-input-color);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    line-height: var(--vs-line-height);
    font-size: var(--vs-font-size);
    border: 1px solid transparent;
    border-left: none;
    outline: none;
    margin: 4px 0 0;
    padding: 0 7px;
    background: none;
    box-shadow: none;
    width: 0;
    max-width: 100%;
    flex-grow: 1;
    z-index: 1
}

.vs__search::-moz-placeholder {
    color: var(--vs-search-input-placeholder-color)
}

.vs__search::placeholder {
    color: var(--vs-search-input-placeholder-color)
}

.vs--unsearchable .vs__search {
    opacity: 1
}

.vs--unsearchable:not(.vs--disabled) .vs__search {
    cursor: pointer
}

.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {
    opacity: .2
}

.vs__spinner {
    align-self: center;
    opacity: 0;
    font-size: 5px;
    text-indent: -9999em;
    overflow: hidden;
    border-top: .9em solid rgba(100, 100, 100, .1);
    border-right: .9em solid rgba(100, 100, 100, .1);
    border-bottom: .9em solid rgba(100, 100, 100, .1);
    border-left: .9em solid rgba(60, 60, 60, .45);
    transform: translateZ(0) scale(var(--vs-controls--spinner-size, var(--vs-controls-size)));
    -webkit-animation: vSelectSpinner 1.1s infinite linear;
    animation: vSelectSpinner 1.1s infinite linear;
    transition: opacity .1s
}

.vs__spinner, .vs__spinner:after {
    border-radius: 50%;
    width: 5em;
    height: 5em;
    transform: scale(var(--vs-controls--spinner-size, var(--vs-controls-size)))
}

.vs--loading .vs__spinner {
    opacity: 1
}

```
`plugins/zen/threes/src/vue/trash/v2/Select.css`
```:root {
    --vs-colors--lightest: rgba(60, 60, 60, .26);
    --vs-colors--light: rgba(60, 60, 60, .5);
    --vs-colors--dark: #333;
    --vs-colors--darkest: rgba(0, 0, 0, .15);
    --vs-search-input-color: inherit;
    --vs-search-input-placeholder-color: inherit;
    --vs-font-size: 1rem;
    --vs-line-height: 1.4;
    --vs-state-disabled-bg: rgb(248, 248, 248);
    --vs-state-disabled-color: var(--vs-colors--light);
    --vs-state-disabled-controls-color: var(--vs-colors--light);
    --vs-state-disabled-cursor: not-allowed;
    --vs-border-color: var(--vs-colors--lightest);
    --vs-border-width: 1px;
    --vs-border-style: solid;
    --vs-border-radius: 4px;
    --vs-actions-padding: 4px 6px 0 3px;
    --vs-controls-color: var(--vs-colors--light);
    --vs-controls-size: 1;
    --vs-controls--deselect-text-shadow: 0 1px 0 #fff;
    --vs-selected-bg: #f0f0f0;
    --vs-selected-color: var(--vs-colors--dark);
    --vs-selected-border-color: var(--vs-border-color);
    --vs-selected-border-style: var(--vs-border-style);
    --vs-selected-border-width: var(--vs-border-width);
    --vs-dropdown-bg: #fff;
    --vs-dropdown-color: inherit;
    --vs-dropdown-z-index: 1000;
    --vs-dropdown-min-width: 160px;
    --vs-dropdown-max-height: 350px;
    --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);
    --vs-dropdown-option-bg: #000;
    --vs-dropdown-option-color: var(--vs-dropdown-color);
    --vs-dropdown-option-padding: 3px 20px;
    --vs-dropdown-option--active-bg: #5897fb;
    --vs-dropdown-option--active-color: #fff;
    --vs-dropdown-option--deselect-bg: #fb5858;
    --vs-dropdown-option--deselect-color: #fff;
    --vs-transition-timing-function: cubic-bezier(1, -.115, .975, .855);
    --vs-transition-duration: .15s
}

.v-select {
    position: relative;
    font-family: inherit;
    background: #fff;
}

.v-select, .v-select * {
    box-sizing: border-box
}

:root {
    --vs-transition-timing-function: cubic-bezier(1, .5, .8, 1);
    --vs-transition-duration: .15s
}

@-webkit-keyframes vSelectSpinner {
    0% {
        transform: rotate(0)
    }
    to {
        transform: rotate(360deg)
    }
}

@keyframes vSelectSpinner {
    0% {
        transform: rotate(0)
    }
    to {
        transform: rotate(360deg)
    }
}

.vs__fade-enter-active, .vs__fade-leave-active {
    pointer-events: none;
    transition: opacity var(--vs-transition-duration) var(--vs-transition-timing-function)
}

.vs__fade-enter, .vs__fade-leave-to {
    opacity: 0
}

:root {
    --vs-disabled-bg: var(--vs-state-disabled-bg);
    --vs-disabled-color: var(--vs-state-disabled-color);
    --vs-disabled-cursor: var(--vs-state-disabled-cursor)
}

.vs--disabled .vs__dropdown-toggle, .vs--disabled .vs__clear, .vs--disabled .vs__search, .vs--disabled .vs__selected, .vs--disabled .vs__open-indicator {
    cursor: var(--vs-disabled-cursor);
    background-color: var(--vs-disabled-bg)
}

.v-select[dir=rtl] .vs__actions {
    padding: 0 3px 0 6px
}

.v-select[dir=rtl] .vs__clear {
    margin-left: 6px;
    margin-right: 0
}

.v-select[dir=rtl] .vs__deselect {
    margin-left: 0;
    margin-right: 2px
}

.v-select[dir=rtl] .vs__dropdown-menu {
    text-align: right
}

.vs__dropdown-toggle {
    height: 42px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: flex;
    padding: 0 0 4px;
    background: none;
    border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
    border-radius: var(--vs-border-radius);
    white-space: normal
}

.vs__selected-options {
    display: flex;
    flex-basis: 100%;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0 2px;
    position: relative
}

.vs__actions {
    display: flex;
    align-items: center;
    padding: var(--vs-actions-padding)
}

.vs--searchable .vs__dropdown-toggle {
    height: auto;
    min-height: 36px;
    cursor: text
}

.vs--unsearchable .vs__dropdown-toggle {
    cursor: pointer
}

.vs--open .vs__dropdown-toggle {
    border-bottom-color: transparent;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
}

.vs__open-indicator {
    fill: var(--vs-controls-color);
    transform: scale(var(--vs-controls-size));
    transition: transform var(--vs-transition-duration) var(--vs-transition-timing-function);
    transition-timing-function: var(--vs-transition-timing-function)
}

.vs--open .vs__open-indicator {
    transform: rotate(180deg) scale(var(--vs-controls-size))
}

.vs--loading .vs__open-indicator {
    opacity: 0
}

.vs__clear {
    fill: var(--vs-controls-color);
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    margin-right: 8px
}

.vs__dropdown-menu {
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: calc(100% - var(--vs-border-width));
    left: 0;
    z-index: var(--vs-dropdown-z-index);
    padding: 5px 0;
    margin: 0;
    width: 100%;
    max-height: var(--vs-dropdown-max-height);
    min-width: var(--vs-dropdown-min-width);
    overflow-y: auto;
    box-shadow: var(--vs-dropdown-box-shadow);
    border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
    border-top-style: none;
    border-radius: 0 0 var(--vs-border-radius) var(--vs-border-radius);
    text-align: left;
    list-style: none;
    background: var(--vs-dropdown-bg);
    color: var(--vs-dropdown-color)
}

.vs__no-options {
    text-align: center
}

.vs__dropdown-option {
    line-height: 1.42857143;
    display: block;
    padding: var(--vs-dropdown-option-padding);
    clear: both;
    color: var(--vs-dropdown-option-color);
    white-space: nowrap;
    cursor: pointer
}

.vs__dropdown-option--highlight {
    background: var(--vs-dropdown-option--active-bg);
    color: var(--vs-dropdown-option--active-color)
}

.vs__dropdown-option--deselect {
    background: var(--vs-dropdown-option--deselect-bg);
    color: var(--vs-dropdown-option--deselect-color)
}

.vs__dropdown-option--disabled {
    background: var(--vs-state-disabled-bg);
    color: var(--vs-state-disabled-color);
    cursor: var(--vs-state-disabled-cursor)
}

.vs__selected {
    display: flex;
    align-items: center;
    background-color: var(--vs-selected-bg);
    border: var(--vs-selected-border-width) var(--vs-selected-border-style) var(--vs-selected-border-color);
    border-radius: var(--vs-border-radius);
    color: var(--vs-selected-color);
    line-height: var(--vs-line-height);
    margin: 4px 2px 0;
    padding: 0 .25em;
    z-index: 0
}

.vs__deselect {
    display: inline-flex;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin-left: 4px;
    padding: 0;
    border: 0;
    cursor: pointer;
    background: none;
    fill: var(--vs-controls-color);
    text-shadow: var(--vs-controls--deselect-text-shadow)
}

.vs__selected {
    /*height: 33px;*/
}

.vs--single .vs__selected {
    background-color: transparent;
    border-color: transparent
}

.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {
    position: absolute;
    opacity: .4
}

.vs--single.vs--searching .vs__selected {
    display: none
}

.vs__search::-webkit-search-cancel-button {
    display: none
}

.vs__search::-webkit-search-decoration, .vs__search::-webkit-search-results-button, .vs__search::-webkit-search-results-decoration, .vs__search::-ms-clear {
    display: none
}

.vs__search, .vs__search:focus {
    color: var(--vs-search-input-color);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    line-height: var(--vs-line-height);
    font-size: var(--vs-font-size);
    border: 1px solid transparent;
    border-left: none;
    outline: none;
    margin: 4px 0 0;
    padding: 0 7px;
    background: none;
    box-shadow: none;
    width: 0;
    max-width: 100%;
    flex-grow: 1;
    z-index: 1
}

.vs__search::-moz-placeholder {
    color: var(--vs-search-input-placeholder-color)
}

.vs__search::placeholder {
    color: var(--vs-search-input-placeholder-color)
}

.vs--unsearchable .vs__search {
    opacity: 1
}

.vs--unsearchable:not(.vs--disabled) .vs__search {
    cursor: pointer
}

.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {
    opacity: .2
}

.vs__spinner {
    align-self: center;
    opacity: 0;
    font-size: 5px;
    text-indent: -9999em;
    overflow: hidden;
    border-top: .9em solid rgba(100, 100, 100, .1);
    border-right: .9em solid rgba(100, 100, 100, .1);
    border-bottom: .9em solid rgba(100, 100, 100, .1);
    border-left: .9em solid rgba(60, 60, 60, .45);
    transform: translateZ(0) scale(var(--vs-controls--spinner-size, var(--vs-controls-size)));
    -webkit-animation: vSelectSpinner 1.1s infinite linear;
    animation: vSelectSpinner 1.1s infinite linear;
    transition: opacity .1s
}

.vs__spinner, .vs__spinner:after {
    border-radius: 50%;
    width: 5em;
    height: 5em;
    transform: scale(var(--vs-controls--spinner-size, var(--vs-controls-size)))
}

.vs--loading .vs__spinner {
    opacity: 1
}

```
`plugins/zen/threes/traits/QueryLogTrait.php`
```<?php

namespace Zen\Threes\Traits;

use ReflectionClass;

use Zen\Threes\Models\Query as QueryModel;

/**
 * Логирование запросов
 * Использование: Добавить трейт в класс и все protected методы будут вызваны через эту прослойку
 * Например чтобы повторить последний запрос, достаточно к эндпоинту api добавить &debug
 */
trait QueryLogTrait
{

    public function __call($method, $arguments)
    {
        $class_name = str_replace('\\', '.', (new ReflectionClass($this))->getName());
        $call = "$class_name.$method";

        if (request()->has('debug')) {
            $last_query = QueryModel::where('call', $call)
                ->orderBy('id', 'desc')
                ->first();
            if ($last_query) {
                $data = ths()->fromJson($last_query->data);
                unset($data['debug']);
                request()->merge($data);
            }
        } else {
            QueryModel::create([
                'call'=> $call,
                'data' => request()->all()
            ]);
        }

        if (method_exists($this, $method)) {
            return call_user_func_array([$this, $method], $arguments);
        } else {
            throw new \BadMethodCallException("Method $method does not exist");
        }
    }
}

```
`plugins/zen/threes/traits/SingletonTrait.php`
```<?php

namespace Zen\Threes\Traits;

trait SingletonTrait
{
    private static ?self $instance = null;

    public static function getInstance(mixed $var = null): self {
        if (!self::$instance) {
            self::$instance = new self($var);
        }

        return self::$instance;
    }

    /* zenc0dr: Раскомментировать при явной необходимости
    private function __construct() {}
    private function __clone() {}
    public function __wakeup() {}
    */
}

```
`plugins/zen/threes/updates/m001_frames.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M001Frames extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_frames', function($table)
        {
            $table->increments('id')->comment('Идентификатор фрейма'); # нигде не должен играть роль кроме дерева
            $table->integer('parent_id')->unsigned()->nullable()->comment('Родительский фрейм');
            $table->string('nid')->comment('Идентификатор нода');
            $table->integer('sort_order')->unsigned()->default(0)->comment('Порядок сортировки');
            $table->integer('nest_left')->unsigned()->comment('Левая граница узла');
            $table->integer('nest_right')->unsigned()->comment('Правая граница узла');
            $table->integer('nest_depth')->unsigned()->comment('Уровень вложенности');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_frames');
    }
}

```
`plugins/zen/threes/updates/m002_nodes.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M002Nodes extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_nodes', function($table)
        {
            $table->string('nid')->primary()->comment('Токен нода');
            $table->text('svg')->nullable()->comment('Код SVG иконки');
            $table->string('svg_name')->nullable()->comment('Имя файла svg');
            $table->string('name')->nullable()->comment('Имя нода');
            $table->string('description')->nullable()->comment('Описание нода');
            $table->text('data')->nullable()->comment('Данные схемы');
            $table->text('scheme')->nullable()->comment('Схема интерфейса (yaml)');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->unique('nid', 'nid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_nodes');
    }
}
```
`plugins/zen/threes/updates/m003_queries.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M003Queries extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_queries', function($table)
        {
            $table->id();
            $table->string('call');
            $table->text('data')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_queries');
    }
}

```
`plugins/zen/threes/updates/m004_versions.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M004Versions extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_versions', function($table)
        {
            $table->increments('id')->unsigned();
            $table->integer('version')->unsigned()->nullable();
            $table->text('nid')->nullable();
            $table->text('data')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_versions');
    }
}
```
`plugins/zen/threes/updates/m005_features.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M005Features extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_features', function($table)
        {
            $table->increments('id');
            $table->text('name')->nullable()->comment('Название феномена');
            $table->text('description')->nullable()->comment('Описание феномена');

            $table->text('category')->nullable()->comment('Категория феномена');
            $table->text('priority')->nullable()->comment('Приоритет феномена');
            $table->text('status')->nullable()->comment('Статус феномена');
            $table->text('module')->nullable()->comment('Модуль?');
            

            $table->text('data')->nullable();
            $table->integer('release')->nullable()->comment('Релиз');
            $table->text('acceptance_criteria')->nullable()->comment('Критерии приёмки');
            $table->integer('parent_id')->unsigned()->nullable();
            $table->integer('sort_order')->unsigned()->default(0);
            $table->integer('nest_left')->unsigned();
            $table->integer('nest_right')->unsigned();
            $table->integer('nest_depth')->unsigned();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_features');
    }
}

```
`plugins/zen/threes/updates/version.yaml`
```v1.0.1:
    - 'Initialize plugin'
v1.0.2:
    - 'Create Frames'
    - m001_frames.php
v1.0.3:
    - 'Create Nodes'
    - m002_nodes.php
v1.0.4:
    - 'Create Queries'
    - m003_queries.php
v1.0.5:
    - 'Create Versions'
    - m004_versions.php
v1.0.6:
    - 'Created Features'
    - m005_features.php

```
`plugins/zen/threes/views/blueprints/frames/frame.htm`
```<?php

namespace Zen\Threes\Classes\Frames;

class Frame_{{ frame_id }}
{
    public function flow()
    {
#%code_writer%#
    }
}

```
`plugins/zen/threes/webpack.mix.js`
```const mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack');

mix.sass('src/scss/threes.scss', 'css')
    .options({
        processCssUrls: false // Отключает автоматическую обработку относительных URL в CSS
    })
    .webpackConfig({
        output: {
            filename: '[name].js',
            chunkFilename: 'js/[name].app.js',
            publicPath: '/plugins/zen/threes/assets/', // Указывает базовый путь для публичных файлов
        },
        // stats: {
        //     children: true // Раскомментировать только если будут ошибки сборки
        // },
        devtool: mix.inProduction() ? false : 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/, // Обработка шрифтов и SVG
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/vendor/primeicons/[name].[ext]', // Название файлов
                        publicPath: '/plugins/zen/threes/assets/', // Путь для использования в браузере
                        outputPath: 'fonts/vendor/primeicons/', // Путь для сохранения файлов
                    },
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: JSON.stringify(true),
                __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
            }),
        ],
    });

mix.js('src/js/threes.js', 'js').vue();
mix.setPublicPath('assets');

if (mix.inProduction()) {
    mix.version();
}

// Настройка alias для удобства работы с путями
mix.alias({ '@': path.join(__dirname, 'src/js') });

// Копирование дополнительных ресурсов
mix.copyDirectory(path.join(__dirname, 'src/images'), 'assets/images');
mix.copyDirectory('node_modules/primeicons/fonts', 'assets/fonts/vendor/primeicons');

```