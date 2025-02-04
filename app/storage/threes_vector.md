`plugins/zen/threes/Plugin.php`
```<?php namespace Zen\Threes;

use System\Classes\PluginBase;
use Zen\Threes\Console\Vector;

/**
 * Plugin class
 */
class Plugin extends PluginBase
{
    /**
     * register method, called when the plugin is first registered.
     */
    public function register(): void
    {
        $this->registerConsoleCommand('threes:vector', Vector::class);
    }

    /**
     * boot method, called right before the request route.
     */
    public function boot()
    {
    }

    /**
     * registerComponents used by the frontend.
     */
    public function registerComponents()
    {
    }

    /**
     * registerSettings used by the backend.
     */
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
use Zen\Threes\Classes\Fitter;

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
        return app("Zen\Threes\Api\\$path")->{$method}(...$data);
    }

    public function settings(string $key)
    {
        return Settings::get($key);
    }

    public function fitter(): Fitter
    {
        return Fitter::getInstance();
    }
}

```
`plugins/zen/threes/api/debug/Tests.php`
```<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Unit;
use Zen\Threes\Console\Vector;
class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        ths()->fitter()->build('');
    }

    # http://threes.dc/threes.api/debug.Tests:apiTest
    public function apiTest()
    {
        return 'Отлично, ajax работает!';
    }

    # http://threes.dc/threes.api/debug.Tests:loadUnit?tid=
    public function loadUnit()
    {
        $unit = Unit::find(request('tid'));
        dd($unit->toArray());
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}

```
`plugins/zen/threes/api/sprites/Program.php`
```<?php

namespace Zen\Threes\Api\Sprites;

use Zen\Threes\Models\Sprite;

class Program
{
    # http://threes.dc/threes.api/Sprites.Program:save
    public function save(): array
    {
        ths()->sprites()->programSave(
            request('sid'),
            request('program')
        );

        return [
            'success' => true
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:load?sid=acme
    public function load(): array
    {
        return [
            'success' => true,
            'program' => Sprite::find(request('sid'))?->program
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:move
    public function move(): array
    {
        ths()->sprites()->moveNode(
            request('sid'),
            request('nid'),
            request('after_nid')
        );

        return [
            'success' => true,
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:copy
    public function copy(): array
    {
        ths()->sprites()->copyNode(
            request('sid'),
            request('nid')
        );

        return [
            'success' => true,
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:delete
    public function delete(): array
    {
        ths()->sprites()->deleteNode(
            request('sid'),
            request('nid')
        );

        return [
            'success' => true,
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:lineActions
    public function lineActions(): array
    {
        ths()->sprites()->lineActions(
            request('sid'),
            request('action'),
            request('line_index')
        );
        return [
            'success' => true,
        ];
    }
}

```
`plugins/zen/threes/api/sprites/SelectNode.php`
```<?php

namespace Zen\Threes\Api\Sprites;

class SelectNode
{
    /**
     * http://threes.dc/threes.api/Sprites.SelectNode:records
     * @return array[]
     */
    public function records(): array
    {
        $node_types = [
            [
                'type' => 'input',
                'name' => 'Вход',
                'icon' => 'input.svg',
                'desc' => 'Входной пин для входных данных',
            ],
            [
                'type' => 'unit',
                'name' => 'Юнит',
                'icon' => 'unit.svg',
                'desc' => 'Нод подключающий юнит',
            ],
            [
                'type' => 'if',
                'name' => 'Условие',
                'icon' => 'if.svg',
                'desc' => 'Условие ЕСЛИ',
            ],
            [
                'type' => 'else',
                'name' => 'Условие',
                'icon' => 'else.svg',
                'desc' => 'Условие ИЛИ',
            ],
            [
                'type' => 'do',
                'name' => 'Делать',
                'icon' => 'do.svg',
                'desc' => 'Делать',
            ],
        ];


        return [
            'node_types' => $node_types,
        ];
    }
}

```
`plugins/zen/threes/api/units/Records.php`
```<?php

namespace Zen\Threes\Api\Units;

class Records
{
    /**
     * http://threes.dc/threes.api/Units.Records:get
     * plugins/zen/threes/classes/units/Records.php
     * @return void
     */
    public function get()
    {
        dd(
            ths()->units()->getRecords()
        );
    }
}

```
`plugins/zen/threes/api/units/SelectUnit.php`
```<?php

namespace Zen\Threes\Api\Units;

use Zen\Threes\Models\Unit;

class SelectUnit
{
    /**
     * http://threes.dc/threes.api/Units.SelectUnit:records
     */
    public function records()
    {
        $units = Unit::active()->get();

        $output = [];
        foreach ($units as $unit) {
            $output[] = [
                'tid' => $unit->tid,
                'name' => $unit->name,
                'icon' => $unit->icon_path,
                'description' => $unit->description,
            ];
        }

        return [
            'units' => $output
        ];
    }

    /**
     * http://threes.dc/threes.api/Units.SelectUnit:makeNode
     * @return array
     */
    public function makeNode(): array
    {
        $tid = request('tid');
        $unit = Unit::find($tid);
        if (!$unit) {
            return [
                'success' => false
            ];
        }
        return [
            'success' => true,
            'node' => [
                'tid' => $tid,
                'name' => $unit->name,
                'icon' => env('APP_URL') . $unit->icon_path,
                'io' => $unit->io,
            ]
        ];
    }
}

```
`plugins/zen/threes/classes/Fitter.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

class Fitter
{
    use SingletonTrait;

    public function build(string $sid)
    {
        dd('ok', $sid);
    }
}

```
`plugins/zen/threes/classes/Helpers.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Classes\Helpers\Debug;
use Zen\Threes\Classes\Helpers\Files;
use Zen\Threes\Classes\Helpers\Json;
use Zen\Threes\Classes\Helpers\Strings;
use Zen\Threes\Classes\Helpers\Yaml;

class Helpers
{
    use Debug;    # Методы отладки
    use Files;    # Работа с файлами
    use Json;     # Работа с JSON
    use Yaml;     # Работа с YAML
    use Strings;  # Слой настроек

    public function units(): Units
    {
        return Units::getInstance();
    }

    public function sprites(string | null $sid = null): Sprites
    {
        return Sprites::getInstance($sid);
    }
}

```
`plugins/zen/threes/classes/Sprites.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Classes\Sprites\Program;

class Sprites
{
    private ?string $sid = null;

    public function __construct(string | null $sid = null)
    {
        $this->sid = $sid;
    }


    use SingletonTrait;
    use Program;
}

```
`plugins/zen/threes/classes/Units.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Classes\Units\UnitRecords;
use Zen\Threes\Classes\Units\UnitRecord;
use Zen\Threes\Traits\SingletonTrait;

class Units
{
    use SingletonTrait;
    use UnitRecords;
    use UnitRecord;
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
     * @param string $dir_path
     * @param int $permissions
     * @return string
     */
    public function checkDir(string $dir_path, int $permissions = 0777): string
    {
        $dirname = dirname($dir_path);
        if (!is_dir($dirname)) {
            mkdir($dirname, $permissions, true);
        }
        return $dir_path;
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
`plugins/zen/threes/classes/helpers/Json.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

trait Json
{
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
        bool $pretty_print = false,
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
        bool $pretty_print = false,
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
`plugins/zen/threes/classes/helpers/Strings.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

use Str;

trait Strings
{
    public function createUuid(): string
    {
        return Str::uuid()->toString();
    }

    public function createToken($length = 8): string
    {
        return Str::random($length);
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
`plugins/zen/threes/classes/sprites/Program.php`
```<?php

namespace Zen\Threes\Classes\Sprites;

use Zen\Threes\Models\Sprite;

trait Program
{
    /**
     * Сохранить программу спрайта
     * @param string $sid
     * @param array $program
     * @return string[]
     */
    public function programSave(string $sid, array $program): array
    {
        $sprite = Sprite::find($sid);
        $sprite->program = $program;
        $sprite->save();

        return [
            'success' => 'true',
        ];
    }

    public function programLoad(string $sid): array
    {
        $sprite = Sprite::find($sid);
        return [
            'success' => true,
            'program' => $sprite,
        ];
    }

    /**
     * Метод перемещения нодов
     * @param string $sid
     * @param string $nid
     * @param string $after_nid
     * @return void
     */
    public function moveNode(string $sid, string $nid, string $after_nid): void
    {
        $sprite = Sprite::find($sid);
        $program = $sprite->program;

        $node_dump = null;
        $source_line_index = null;
        $source_node_index = null;
        $target_line_index = null;
        $target_node_index = null;

        $is_target_line_only = (!str_contains($after_nid, '.'));

        foreach ($program as $line_index => &$line) {
            foreach ($line as $node_index => $node) {
                if ($nid === $line_index . '.' . $node_index) {
                    $node_dump = $node;
                    $source_line_index = $line_index;
                    $source_node_index = $node_index;
                }
                if (!$is_target_line_only && $after_nid === $line_index . '.' . $node_index) {
                    $target_line_index = $line_index;
                    $target_node_index = $node_index;
                }
            }
        }

        if ($node_dump === null) {
            return;
        }

        unset($program[$source_line_index][$source_node_index]);

        $program[$source_line_index] = array_values($program[$source_line_index]);

        if ($is_target_line_only) {
            $target_line_index = $after_nid;
            if (!isset($program[$target_line_index])) {
                $program[$target_line_index] = [];
            }
            $program[$target_line_index][] = $node_dump;
        } else {
            if ($target_line_index === null) {
                $program[0][] = $node_dump;
            } else {
                array_splice($program[$target_line_index], $target_node_index + 1, 0, [$node_dump]);
            }
        }

        $sprite->program = $program;
        $sprite->save();
    }

    public function copyNode(string $sid, string $nid): void
    {
        $sprite = Sprite::find($sid);
        $program = $sprite->program;

        $node_copy = null;
        $source_line_index = null;
        $source_node_index = null;

        // Найти узел, который нужно скопировать
        foreach ($program as $line_index => $line) {
            foreach ($line as $node_index => $node) {
                if ($nid === $line_index . '.' . $node_index) {
                    $node_copy = $node;
                    $source_line_index = $line_index;
                    $source_node_index = $node_index;
                    break 2; // Выход из обоих циклов
                }
            }
        }

        // Если узел не найден, выходим
        if ($node_copy === null) {
            return;
        }

        // Создаём уникальный идентификатор для копии узла
        $node_copy['id'] = uniqid('node_', true);

        // Добавляем копию узла в конец той же строки
        $program[$source_line_index][] = $node_copy;

        // Сохраняем изменения обратно в базу данных
        $sprite->program = $program;
        $sprite->save();
    }

    /**
     * Удалить узел из программы спрайта
     *
     * @param string $sid ID спрайта
     * @param string $nid ID узла
     * @return void
     */
    public function deleteNode(string $sid, string $nid): void
    {
        $sprite = Sprite::find($sid);
        $program = $sprite->program;

        $found = false;

        // Найти и удалить узел с указанным nid
        foreach ($program as $line_index => &$line) {
            foreach ($line as $node_index => $node) {
                if ($nid === $line_index . '.' . $node_index) {
                    unset($line[$node_index]);
                    $line = array_values($line); // Уплотняем индексы
                    $found = true;
                    break 2; // Выходим из обоих циклов
                }
            }
        }

        // Если узел не найден, выходим
        if (!$found) {
            return;
        }

        // Сохраняем обновлённую программу обратно в базу
        $sprite->program = $program;
        $sprite->save();
    }

    /**
     * Произвести действие над линией
     * @param string $sid
     * @param string $action
     * @param int $line_index
     * @return void
     */
    public function lineActions(string $sid, string $action, int $line_index): void
    {
        if ($action === 'copy') {
            $this->lineCopyAction($sid, $action, $line_index);
        }
        if ($action === 'delete') {
            $this->lineDeleteAction($sid, $action, $line_index);
        }
    }

    /**
     * Копировать линию
     * @param string $sid
     * @param string $action
     * @param int $line_index
     * @return void
     */
    private function lineCopyAction(string $sid, string $action, int $line_index): void
    {
        $sprite = Sprite::find($sid);
        if (!$sprite) {
            return;
        }

        $program = $sprite->program;
        if (!isset($program[$line_index])) {
            return;
        }

        $lineToCopy = $program[$line_index];
        $lineCopy = [];
        foreach ($lineToCopy as $node) {
            $nodeCopy = $node;
            $nodeCopy['id'] = uniqid('node_', true);
            $lineCopy[] = $nodeCopy;
        }

        array_splice($program, $line_index + 1, 0, [$lineCopy]);

        $sprite->program = $program;
        $sprite->save();
    }

    /**
     * Удалить линию
     * @param string $sid
     * @param string $action
     * @param int $line_index
     * @return void
     */
    private function lineDeleteAction(string $sid, string $action, int $line_index): void
    {
        $sprite = Sprite::find($sid);
        if (!$sprite) {
            return;
        }

        $program = $sprite->program;
        if (!isset($program[$line_index])) {
            return;
        }

        unset($program[$line_index]);

        $program = array_values($program);

        $sprite->program = $program;
        $sprite->save();
    }
}

```
`plugins/zen/threes/classes/units/UnitRecord.php`
```<?php

namespace Zen\Threes\Classes\Units;

use Zen\Threes\Models\Unit;

trait UnitRecord
{
    public function getUnitData(string $uid)
    {
        $unit = Unit::find($uid);
        if (!$unit) {
            return null;
        }

        return [
            'io' => $unit->io,
        ];
    }
}

```
`plugins/zen/threes/classes/units/UnitRecords.php`
```<?php

namespace Zen\Threes\Classes\Units;

trait UnitRecords
{
    public function getRecords()
    {
        dd('units records');
    }
}

```
`plugins/zen/threes/console/Vector.php`
```<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;
use Exception;

/**
 * Vector Command
 *
 * @link https://docs.octobercms.com/3.x/extend/console-commands.html
 */
class Vector extends Command
{
    protected $signature = 'threes:vector';
    protected $description = 'Generate vector.md for ai';

    public function handle()
    {
        $exclude = [
            '/app/plugins/zen/threes/node_modules',
            '/app/plugins/zen/threes/package-lock.json',
            '/app/plugins/zen/threes/assets'
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

            if (!in_array($ext, $allow_extensions)) {
                continue;
            }

            foreach ($exclude as $item) {
                if (str_starts_with($path, $item)) {
                    continue 2;
                }
            }

            if (str_contains($path, 'node_modules')) {
                dd('stop', $path);
            }

            $this->output->writeln("Render file: $path");
            $code = file_get_contents($path);
            $path = preg_replace('/^\/app\//', '', $path);
            $output[] = "`$path`" . PHP_EOL . '```' . $code . PHP_EOL . '```';
        }

        $markdown = join(PHP_EOL, $output);
        $output_path = storage_path('threes_vector.md');
        file_put_contents(
            $output_path,
            $markdown
        );
        $this->output->writeln("Joutput: $output_path");
    }
}

```
`plugins/zen/threes/controllers/SpriteController.php`
```<?php namespace Zen\Threes\Controllers;

use Backend;
use BackendMenu;
use Backend\Classes\Controller;

class SpriteController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class,
        \Backend\Behaviors\ListController::class
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Zen.Threes', 'main', 'sprites');
        $this->addCss(mix('css/threes.css', 'plugins/zen/threes/assets'));
        $this->addJs(mix('js/threes.js', 'plugins/zen/threes/assets'), ['defer' => true]);
    }
}

```
`plugins/zen/threes/controllers/UnitController.php`
```<?php namespace Zen\Threes\Controllers;

use Backend;
use BackendMenu;
use Backend\Classes\Controller;
use Zen\Threes\Models\Unit;

class UnitController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class,
        \Backend\Behaviors\ListController::class
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public $requiredPermissions = [
        'zen.threes.main',
        'zen.threes.units'
    ];

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Zen.Threes', 'main', 'units');
        $this->addCss('/plugins/zen/threes/controllers/unitcontroller/assets/css/unitcontroller.css');
    }

    /**
     * Расширение интерфейса
     * @param $form
     * @return void
     */
    public function formExtendFields($form)
    {
        if (!isset($this->params[0])) {
            return;
        }

        $sid = request('sid');
        # ??????????????

        $unit = Unit::find($this->params[0]);
        if ($unit && $unit->additional_fields) {
            $this->clearMissingFields($unit);
            $form->addFields($unit->additional_fields, 'primary');
        }
    }

    /**
     * При изменении состава дополнительных полей, необходимо подчистить settings
     * @param Unit $unit
     * @return void
     */
    private function clearMissingFields(Unit $unit)
    {
        $missing_fields = array_keys(array_diff_key($unit->settings, $unit->additional_fields));
        $keys_to_remove  = array_flip($missing_fields);
        if (!$keys_to_remove) {
            return;
        }
        $data = $unit->data;
        $data['settings'] = array_diff_key($data['settings'], $keys_to_remove);
        \DB::table('zen_threes_units')
            ->where('tid', $unit->tid)
            ->update([
                'data' => ths()->toJson($data, true),
            ]);
    }
}

```
`plugins/zen/threes/controllers/spritecontroller/_list_toolbar.php`
```<div data-control="toolbar">
    <a
        href="<?= Backend::url('zen/threes/spritecontroller/create') ?>"
        class="btn btn-primary oc-icon-plus">
        <?= e(trans('backend::lang.form.create')) ?>
    </a>
    <button
        class="btn btn-default oc-icon-trash-o"
        data-request="onDelete"
        data-request-confirm="<?= e(trans('backend::lang.list.delete_selected_confirm')) ?>"
        data-list-checked-trigger
        data-list-checked-request
        data-stripe-load-indicator>
        <?= e(trans('backend::lang.list.delete_selected')) ?>
    </button>
</div>

```
`plugins/zen/threes/controllers/spritecontroller/config_form.yaml`
```name: SpriteController
form: $/zen/threes/models/sprite/fields.yaml
modelClass: Zen\Threes\Models\Sprite
defaultRedirect: zen/threes/spritecontroller
create:
    redirect: 'zen/threes/spritecontroller/update/:sid'
    redirectClose: zen/threes/spritecontroller
update:
    redirect: zen/threes/spritecontroller
    redirectClose: zen/threes/spritecontroller

```
`plugins/zen/threes/controllers/spritecontroller/config_list.yaml`
```title: SpriteController
modelClass: Zen\Threes\Models\Sprite
list: $/zen/threes/models/sprite/columns.yaml
recordUrl: 'zen/threes/spritecontroller/update/:sid'
noRecordsMessage: 'backend::lang.list.no_records'
recordsPerPage: 20
showSetup: true
showCheckboxes: true
structure:
    maxDepth: 0
defaultSort:
    column: sid
    direction: asc
toolbar:
    buttons: list_toolbar
    search:
        prompt: 'backend::lang.list.search_prompt'

```
`plugins/zen/threes/controllers/spritecontroller/create.php`
```<?php Block::put('breadcrumb') ?>
    <ul>
        <li><a href="<?= Backend::url('zen/threes/spritecontroller') ?>">SpriteController</a></li>
        <li><?= e($this->pageTitle) ?></li>
    </ul>
<?php Block::endPut() ?>

<?php if (!$this->fatalError): ?>

    <?= Form::open(['class' => 'layout']) ?>

        <div class="layout-row">
            <?= $this->formRender() ?>
        </div>

        <div class="form-buttons">
            <div class="loading-indicator-container">
                <button
                    type="submit"
                    data-request="onSave"
                    data-hotkey="ctrl+s, cmd+s"
                    data-load-indicator="<?= e(trans('backend::lang.form.saving')) ?>"
                    class="btn btn-primary">
                    <?= e(trans('backend::lang.form.create')) ?>
                </button>
                <button
                    type="button"
                    data-request="onSave"
                    data-request-data="close:1"
                    data-hotkey="ctrl+enter, cmd+enter"
                    data-load-indicator="<?= e(trans('backend::lang.form.saving')) ?>"
                    class="btn btn-default">
                    <?= e(trans('backend::lang.form.create_and_close')) ?>
                </button>
                <span class="btn-text">
                    <?= e(trans('backend::lang.form.or')) ?> <a href="<?= Backend::url('zen/threes/spritecontroller') ?>"><?= e(trans('backend::lang.form.cancel')) ?></a>
                </span>
            </div>
        </div>

    <?= Form::close() ?>

<?php else: ?>
    <p class="flash-message static error"><?= e(trans($this->fatalError)) ?></p>
    <p><a href="<?= Backend::url('zen/threes/spritecontroller') ?>" class="btn btn-default"><?= e(trans('backend::lang.form.return_to_list')) ?></a></p>
<?php endif ?>
```
`plugins/zen/threes/controllers/spritecontroller/index.php`
```<?= $this->listRender() ?>

```
`plugins/zen/threes/controllers/spritecontroller/partials/scheme.php`
```<div id="threes"></div>

```
`plugins/zen/threes/controllers/spritecontroller/preview.php`
```<?php Block::put('breadcrumb') ?>
    <ul>
        <li><a href="<?= Backend::url('zen/threes/spritecontroller') ?>">SpriteController</a></li>
        <li><?= e($this->pageTitle) ?></li>
    </ul>
<?php Block::endPut() ?>

<?php if (!$this->fatalError): ?>

    <div class="form-preview">
        <?= $this->formRenderPreview() ?>
    </div>

<?php else: ?>
    <p class="flash-message static error"><?= e($this->fatalError) ?></p>
<?php endif ?>

<p>
    <a href="<?= Backend::url('zen/threes/spritecontroller') ?>" class="btn btn-default oc-icon-chevron-left">
        <?= e(trans('backend::lang.form.return_to_list')) ?>
    </a>
</p>
```
`plugins/zen/threes/controllers/spritecontroller/update.php`
```<?php Block::put('breadcrumb') ?>
    <ul>
        <li><a href="<?= Backend::url('zen/threes/spritecontroller') ?>">SpriteController</a></li>
        <li><?= e($this->pageTitle) ?></li>
    </ul>
<?php Block::endPut() ?>

<?php if (!$this->fatalError): ?>

    <?= Form::open(['class' => 'layout']) ?>

        <div class="layout-row">
            <?= $this->formRender() ?>
        </div>

        <div class="form-buttons">
            <div class="loading-indicator-container">
                <button
                    type="submit"
                    data-request="onSave"
                    data-request-data="redirect:0"
                    data-hotkey="ctrl+s, cmd+s"
                    data-load-indicator="<?= e(trans('backend::lang.form.saving')) ?>"
                    class="btn btn-primary">
                    <?= e(trans('backend::lang.form.save')) ?>
                </button>
                <button
                    type="button"
                    data-request="onSave"
                    data-request-data="close:1"
                    data-hotkey="ctrl+enter, cmd+enter"
                    data-load-indicator="<?= e(trans('backend::lang.form.saving')) ?>"
                    class="btn btn-default">
                    <?= e(trans('backend::lang.form.save_and_close')) ?>
                </button>
                <button
                    type="button"
                    class="oc-icon-trash-o btn-icon danger pull-right"
                    data-request="onDelete"
                    data-load-indicator="<?= e(trans('backend::lang.form.deleting')) ?>"
                    data-request-confirm="<?= e(trans('backend::lang.form.confirm_delete')) ?>">
                </button>

                <span class="btn-text">
                    <?= e(trans('backend::lang.form.or')) ?> <a href="<?= Backend::url('zen/threes/spritecontroller') ?>"><?= e(trans('backend::lang.form.cancel')) ?></a>
                </span>
            </div>
        </div>
    <?= Form::close() ?>

<?php else: ?>
    <p class="flash-message static error"><?= e(trans($this->fatalError)) ?></p>
    <p><a href="<?= Backend::url('zen/threes/spritecontroller') ?>" class="btn btn-default"><?= e(trans('backend::lang.form.return_to_list')) ?></a></p>
<?php endif ?>

```
`plugins/zen/threes/controllers/unitcontroller/_list_toolbar.php`
```<div data-control="toolbar">
    <a
        href="<?= Backend::url('zen/threes/unitcontroller/create') ?>"
        class="btn btn-primary oc-icon-plus">
        <?= e(trans('backend::lang.form.create')) ?>
    </a>
    <button
        class="btn btn-default oc-icon-trash-o"
        data-request="onDelete"
        data-request-confirm="<?= e(trans('backend::lang.list.delete_selected_confirm')) ?>"
        data-list-checked-trigger
        data-list-checked-request
        data-stripe-load-indicator>
        <?= e(trans('backend::lang.list.delete_selected')) ?>
    </button>
</div>

```
`plugins/zen/threes/controllers/unitcontroller/assets/css/unitcontroller.css`
```.threes-icon {
    width: 26px;
    height: 26px;
    margin-top: -3px;
    margin-bottom: -10px;
    margin-left: -7px;
}

```
`plugins/zen/threes/controllers/unitcontroller/config_form.yaml`
```name: UnitController
form: $/zen/threes/models/unit/fields.yaml
modelClass: Zen\Threes\Models\Unit
defaultRedirect: zen/threes/unitcontroller
create:
    redirect: 'zen/threes/unitcontroller/update/:tid'
    redirectClose: zen/threes/unitcontroller
update:
    redirect: zen/threes/unitcontroller
    redirectClose: zen/threes/unitcontroller

```
`plugins/zen/threes/controllers/unitcontroller/config_list.yaml`
```list: $/zen/threes/models/unit/columns.yaml
modelClass: Zen\Threes\Models\Unit
title: UnitController
noRecordsMessage: 'backend::lang.list.no_records'
showSetup: true
showCheckboxes: true
recordsPerPage: 20
toolbar:
    buttons: list_toolbar
    search:
        prompt: 'backend::lang.list.search_prompt'
recordUrl: 'zen/threes/unitcontroller/update/:tid'

```
`plugins/zen/threes/controllers/unitcontroller/create.php`
```<?php Block::put('breadcrumb') ?>
    <ul>
        <li><a href="<?= Backend::url('zen/threes/unitcontroller') ?>">UnitController</a></li>
        <li><?= e($this->pageTitle) ?></li>
    </ul>
<?php Block::endPut() ?>

<?php if (!$this->fatalError): ?>

    <?= Form::open(['class' => 'layout']) ?>

        <div class="layout-row">
            <?= $this->formRender() ?>
        </div>

        <div class="form-buttons">
            <div class="loading-indicator-container">
                <button
                    type="submit"
                    data-request="onSave"
                    data-hotkey="ctrl+s, cmd+s"
                    data-load-indicator="<?= e(trans('backend::lang.form.saving')) ?>"
                    class="btn btn-primary">
                    <?= e(trans('backend::lang.form.create')) ?>
                </button>
                <button
                    type="button"
                    data-request="onSave"
                    data-request-data="close:1"
                    data-hotkey="ctrl+enter, cmd+enter"
                    data-load-indicator="<?= e(trans('backend::lang.form.saving')) ?>"
                    class="btn btn-default">
                    <?= e(trans('backend::lang.form.create_and_close')) ?>
                </button>
                <span class="btn-text">
                    <?= e(trans('backend::lang.form.or')) ?> <a href="<?= Backend::url('zen/threes/unitcontroller') ?>"><?= e(trans('backend::lang.form.cancel')) ?></a>
                </span>
            </div>
        </div>

    <?= Form::close() ?>

<?php else: ?>
    <p class="flash-message static error"><?= e(trans($this->fatalError)) ?></p>
    <p><a href="<?= Backend::url('zen/threes/unitcontroller') ?>" class="btn btn-default"><?= e(trans('backend::lang.form.return_to_list')) ?></a></p>
<?php endif ?>
```
`plugins/zen/threes/controllers/unitcontroller/index.php`
```<?= $this->listRender() ?>

```
`plugins/zen/threes/controllers/unitcontroller/partials/icon.php`
```<div class="threes-icon">
    <img src="<?=$record->icon_path?>" alt="<?php echo $record->name; ?>">
</div>

```
`plugins/zen/threes/controllers/unitcontroller/preview.php`
```<?php Block::put('breadcrumb') ?>
    <ul>
        <li><a href="<?= Backend::url('zen/threes/unitcontroller') ?>">UnitController</a></li>
        <li><?= e($this->pageTitle) ?></li>
    </ul>
<?php Block::endPut() ?>

<?php if (!$this->fatalError): ?>

    <div class="form-preview">
        <?= $this->formRenderPreview() ?>
    </div>

<?php else: ?>
    <p class="flash-message static error"><?= e($this->fatalError) ?></p>
<?php endif ?>

<p>
    <a href="<?= Backend::url('zen/threes/unitcontroller') ?>" class="btn btn-default oc-icon-chevron-left">
        <?= e(trans('backend::lang.form.return_to_list')) ?>
    </a>
</p>
```
`plugins/zen/threes/controllers/unitcontroller/update.php`
```<?php Block::put('breadcrumb') ?>
    <ul>
        <li><a href="<?= Backend::url('zen/threes/unitcontroller') ?>">UnitController</a></li>
        <li><?= e($this->pageTitle) ?></li>
    </ul>
<?php Block::endPut() ?>

<?php if (!$this->fatalError): ?>

    <?= Form::open(['class' => 'layout']) ?>

        <div class="layout-row">
            <?= $this->formRender() ?>
        </div>

        <div class="form-buttons">
            <div class="loading-indicator-container">
                <button
                    type="submit"
                    data-request="onSave"
                    data-request-data="redirect:0"
                    data-hotkey="ctrl+s, cmd+s"
                    data-load-indicator="<?= e(trans('backend::lang.form.saving')) ?>"
                    class="btn btn-primary">
                    <?= e(trans('backend::lang.form.save')) ?>
                </button>
                <button
                    type="button"
                    data-request="onSave"
                    data-request-data="close:1"
                    data-hotkey="ctrl+enter, cmd+enter"
                    data-load-indicator="<?= e(trans('backend::lang.form.saving')) ?>"
                    class="btn btn-default">
                    <?= e(trans('backend::lang.form.save_and_close')) ?>
                </button>
                <button
                    type="button"
                    class="oc-icon-trash-o btn-icon danger pull-right"
                    data-request="onDelete"
                    data-load-indicator="<?= e(trans('backend::lang.form.deleting')) ?>"
                    data-request-confirm="<?= e(trans('backend::lang.form.confirm_delete')) ?>">
                </button>

                <span class="btn-text">
                    <?= e(trans('backend::lang.form.or')) ?> <a href="<?= Backend::url('zen/threes/unitcontroller') ?>"><?= e(trans('backend::lang.form.cancel')) ?></a>
                </span>
            </div>
        </div>
    <?= Form::close() ?>

<?php else: ?>
    <p class="flash-message static error"><?= e(trans($this->fatalError)) ?></p>
    <p><a href="<?= Backend::url('zen/threes/unitcontroller') ?>" class="btn btn-default"><?= e(trans('backend::lang.form.return_to_list')) ?></a></p>
<?php endif ?>
```
`plugins/zen/threes/init.php`
```<?php

if (!function_exists('ths')) {
    function ths(): \Zen\Threes\Threes
    {
        return \Zen\Threes\Threes::getInstance();
    }
}

```
`plugins/zen/threes/lang/ru/lang.php`
```<?php return [
    'plugin' => [
        'name' => 'Threes',
        'description' => ''
    ]
];
```
`plugins/zen/threes/models/Settings.php`
```<?php

namespace Zen\Threes\Models;

use Config;
use October\Rain\Database\Model;
use October\Rain\Database\Traits\Validation as ValidationTrait;

class Settings extends Model
{
    use ValidationTrait;

    public $implement = [
        'System.Behaviors.SettingsModel',
    ];

    public $settingsCode = 'zen_threes_settings';

    public $settingsFields = 'fields.yaml';

    public $rules = [
    ];
}

```
`plugins/zen/threes/models/Sprite.php`
```<?php namespace Zen\Threes\Models;

use Model;
use Zen\Threes\Traits\SimpleTree;
use October\Rain\Database\Traits\Validation;

/**
 * @method static find(string $tid)
 */

class Sprite extends Model
{
    use Validation;
    use SimpleTree;

    public $table = 'zen_threes_sprites';
    protected $primaryKey = 'sid';
    protected $keyType = 'string';
    public $incrementing = false;
    public $rules = [
        'sid' => 'required|unique:zen_threes_sprites,sid',
    ];

    protected $fillable = [
        'sid',
        'parent_sid',
        'name',
        'description',
        'data',
        'active',
        'program',
    ];

    protected array $data_dump = [];

    ### begin:Events
    public function afterFetch(): void
    {
        $this->data_dump = $this->data;
    }

    public function beforeSave(): void
    {
        $this->saveData();
    }

    ### end:Events

    public function saveData(): void
    {
        if (empty($this->attributes['sid'])) {
            $this->attributes['sid'] = $this->sid ?? 's_'. ths()->createToken();
        }
        $this->attributes['data'] = ths()->toJson($this->data_dump, true);
    }

    public function getDataAttribute(?string $record): array
    {
        if ($record) {
            return ths()->fromJson($record) ?? [];
        }
        return [];
    }

    public function setDataAttribute(?array $record): void
    {
        $this->attributes['data'] = $record ? ths()->toJson($record, true) : null;
    }

    public function getProgramAttribute()
    {
        return $this->data_dump['program'] ?? [];
    }

    public function setProgramAttribute(?array $fields = null): void
    {
        $this->data_dump['program'] = $fields ?? [];
    }
}

```
`plugins/zen/threes/models/Unit.php`
```<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;

/**
 * @property bool $active - Активность юнита
 * @property string $tid - ThreesID (Уникальный код юнита)
 * @property string $name - Имя юнита
 * @property string $description - Описание юнита
 * @property string $icon - SVG-иконка из базы данных
 * @property string $icon_path - Путь до SVG иконки
 * @property array $io - Массив соединений (пинов)
 * @property array $fields - Поля настроек юнита
 * @method static active - Активные юниты
 * @method static find(string $tid)
 */
class Unit extends Model
{
    use Validation;

    public $table = 'zen_threes_units';
    protected $primaryKey = 'tid';
    protected $keyType = 'string';
    public $incrementing = false;
    public $rules = [
        'tid' => 'required|unique:zen_threes_units,tid',
    ];

    protected $fillable = [
        'icon',
        'icon_path',
        'tid',
        'io',
        'name',
        'description',
        'active',
        'fields',
    ];

    protected array $dynamic_attributes = [];
    protected array $data_dump = [];

    public function __set($name, $value)
    {
        if (!$this->hasAttribute($name)) {
            $this->dynamic_attributes[$name] = $value;
            unset($this->attributes[$name]);
        } else {
            parent::__set($name, $value);
        }
    }

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    private function hasAttribute(string $key): bool
    {
        return in_array($key, $this->fillable);
    }

    //region События модели
    /**
     * Событие после загрузки данных в экземпляр
     * @return void
     */
    public function afterFetch(): void
    {
        $this->data_dump = $this->data;
        $this->fillSettings();
    }

    /**
     * Событие перед сохранением экземпляра
     * @return void
     */
    public function beforeSave(): void
    {
        $this->saveData();
        $this->saveSvgIcon();
    }

    /**
     * Событие после сохранения экземпляра
     * @return void
     */
    /*
    public function afterSave()
    {
    }
    */
    //endregion

    /**
     * Сохраняет иконку в специальное место и возвращает её имя
     * @return string|null
     */
    private function saveSvgIcon(): void
    {
        if (!$this->icon) {
            return;
        }
        $icon_name = md5($this->icon) . '.svg';
        $path = ths()->checkDir(storage_path('app/uploads/public/threes/icons/' . $icon_name));
        file_put_contents(
            $path,
            $this->icon
        );
        $this->attributes['icon_name'] = $icon_name;
    }

    ### Getters and setters

    public function getTidAttribute($value)
    {
        if ($value) {
            return $value;
        }

        $author_token = ths()->settings('author_token') ?? 'project';
        return $author_token . '.';
    }

    public function getSettingsAttribute()
    {
        return $this->data_dump['settings'] ?? [];
    }

    public function getIconAttribute($svg)
    {
        if (!$svg) {
            return file_get_contents(
                base_path('plugins/zen/threes/assets/images/icons/default-icon.svg')
            );
        }
        return $svg;
    }

    public function getIconPathAttribute()
    {
        if (!$this->icon) {
            return '/plugins/zen/threes/assets/images/icons/default-icon.svg';
        }

        return '/storage/app/uploads/public/threes/icons/' . $this->icon_name;
    }

    public function setIoAttribute($io)
    {
        $this->data_dump['io'] = $io ?? [];
    }

    public function getIoAttribute()
    {
        return $this->data_dump['io'] ?? [];
    }

    public function getDataAttribute(?string $data): array
    {
        if ($data) {
            return ths()->fromJson($data) ?? [];
        }
        return [];
    }

    public function getFieldsAttribute()
    {
        return $this->data_dump['fields'] ?? [];
    }

    public function setFieldsAttribute(?array $fields = null): void
    {
        $this->data_dump['fields'] = $fields ?? [];
    }

    public function getAdditionalFieldsAttribute()
    {
        if ($this->fields) {
            $add_fields = [];
            foreach ($this->fields as $field) {
                $add_fields[$field['field']] = [
                    'label' => $field['label'],
                    'type' => $field['type'],
                    'tab' => $field['tab'],
                    'span' => $field['span'],
                ];

                if ($size = $field['size'] ?? null) {
                    $add_fields[$field['field']]['size'] = $size;
                }

                if ($additional = $field['additional'] ?? null) {
                    foreach ($additional as $batch) {
                        $batch = ths()->fromYaml($batch['rule']);
                        $add_fields[$field['field']] = array_merge($add_fields[$field['field']], $batch);
                    }
                }
            }
            return $add_fields;
        }
        return [];
    }

    ### Options methods

    public function getSpanOptions()
    {
        return [
            'auto' => 'Авто',
            'full' => '100%',
            'left' => 'Влево',
            'right' => 'Вправо',
        ];
    }

    public function getTypeOptions()
    {
        return [
            'text' => 'String',
            'textarea' => 'Textarea',
            'number' => 'Number',
            'password' => 'Password',
            'dropdown' => 'Dropdown',
            'checkbox' => 'Checkbox',
            'switch' => 'Switch',
            'email' => 'Email',
            'radio' => 'Radio',
            'balloon-selector' => 'Balloon selector',
            'checkboxlist' => 'Checkboxlist',
            'codeeditor' => 'Code editor',
            'colorpicker' => 'Colorpicker',
            'datatable' => 'Datatable',
            'datepicker' => 'Datepicker',
            'fileupload' => 'File upload',
            'markdown' => 'Markdown editor',
            'mediafinder' => 'Media finder',
            'repeater' => 'Repeater',
            'richeditor' => 'Richeditor',
            'taglist' => 'Taglist',
        ];
    }

    public function getSizeOptions()
    {
        return [
            null => ' -- ',
            'tiny' => 'Tiny',
            'small' => 'Small',
            'large' => 'Large',
            'huge' => 'Huge',
            'giant' => 'Giant',
        ];
    }

    public function getIoTypeOptions()
    {
        return [
            'string' => 'Строка',
            'bool' => 'Булево',
            'int' => 'Целое число',
            'float' => 'Дробное число',
            'array' => 'Массив',
            'object' => 'Объект'
        ];
    }

    public function getIoDirectionOptions()
    {
        return [
            'input' => 'Вход',
            'output' => 'Выход',
            'event' => 'Событие'
        ];
    }

    ### Inner methods


    /**
     * Заполняет поля из настроек при загрузке fillSettings()
     * @return void
     */
    private function fillSettings(): void
    {
        $settings = $this->data_dump['settings'] ?? null;
        if ($settings) {
            foreach ($settings as $field => $value) {
                $this->attributes[$field] = $value;
            }
        }
    }

    public function saveData()
    {
        if (empty($this->attributes['tid'])) {
            $this->attributes['tid'] = $this->tid ?? ths()->settings('author_token') ?? 'project';
        }
        $settings = $this->dynamic_attributes;
        $this->data_dump['settings'] = $settings;
        $this->attributes['data'] = ths()->toJson($this->data_dump, true);
    }
}

```
`plugins/zen/threes/models/settings/fields.yaml`
```fields:
    author_token:
        label: 'Токен автора'
        span: auto
        default: project
        type: text

```
`plugins/zen/threes/models/sprite/columns.yaml`
```columns:
    name:
        label: Наименование
        type: text
        searchable: true
        sortable: true
    sid:
        label: Sid
        type: text
        searchable: true
        sortable: true
    active:
        label: Активность
        type: switch
        sortable: true
    updated_at:
        label: Обновление
        type: datetime
        sortable: true

```
`plugins/zen/threes/models/sprite/fields.yaml`
```fields:
    scheme:
        label: ''
        span: full
        path: $/zen/threes/controllers/spritecontroller/partials/scheme.php
        type: partial
    name:
        label: 'Название спрайта'
        span: auto
        type: text
    sid:
        label: 'Код спрайта'
        span: auto
        preset:
            field: name
            type: slug
        required: 1
        type: text
    description:
        label: Описание
        size: large
        span: auto
        type: richeditor

```
`plugins/zen/threes/models/unit/columns.yaml`
```columns:
    name:
        label: Название
        type: text
        searchable: true
        sortable: true
        width: 100%
    active:
        label: Активность
        type: switch
        searchable: true
        sortable: true
    tid:
        label: Tid
        type: text
        searchable: true
        sortable: true
    icon:
        label: i
        type: partial
        width: 40px
        path: $/zen/threes/controllers/unitcontroller/partials/icon.php

```
`plugins/zen/threes/models/unit/fields.yaml`
```tabs:
    fields:
        fields:
            label: ''
            prompt: 'Добавить поле'
            displayMode: accordion
            span: full
            type: repeater
            tab: Интерфейс
            form:
                fields:
                    field:
                        label: Поле
                        span: auto
                        type: text
                    label:
                        label: Заголовок
                        span: auto
                        type: text
                    type:
                        label: Тип
                        showSearch: true
                        span: auto
                        type: dropdown
                    tab:
                        label: Таб
                        span: auto
                        type: text
                    span:
                        label: Ширина
                        showSearch: true
                        span: auto
                        default: auto
                        type: dropdown
                    size:
                        label: Размер
                        showSearch: true
                        span: auto
                        type: dropdown
                    additional:
                        label: 'Дополнительные правила'
                        prompt: 'Добавить правило'
                        displayMode: accordion
                        span: full
                        type: repeater
                        form:
                            fields:
                                rule:
                                    label: ''
                                    size: small
                                    language: plain_text
                                    span: full
                                    type: codeeditor
        io:
            label: ''
            prompt: Добавить
            displayMode: accordion
            span: full
            type: repeater
            tab: Интеграция
            form:
                fields:
                    io_key:
                        label: Ключ
                        span: auto
                        type: text
                    io_type:
                        label: 'Тип данных'
                        showSearch: true
                        span: auto
                        type: dropdown
                    io_direction:
                        label: Направление
                        showSearch: true
                        span: auto
                        type: dropdown
                    io_name:
                        label: Название
                        span: auto
                        type: text
                    io_description:
                        label: Описание
                        size: large
                        span: full
                        type: richeditor
secondaryTabs:
    fields:
        icon:
            label: 'SVG Иконка'
            span: full
            size: large
            language: php
            type: codeeditor
            tab: Иконка
fields:
    name:
        label: 'Название юнита'
        span: auto
        type: text
    tid:
        label: 'Адрес юнита'
        span: auto
        type: text
    description:
        label: Описание
        size: large
        span: full
        type: richeditor

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
        "lodash": "^4.17.21",
        "md5": "^2.3.0",
        "primeicons": "^5.0.0",
        "primevue": "^3.10.0",
        "vue": "^3.5.13",
        "vue-click-outside-element": "^3.1.2",
        "vue-router": "^4.5.0",
        "vue-select": "^4.0.0-beta.6"
    }
}

```
`plugins/zen/threes/plugin.yaml`
```plugin:
    name: 'zen.threes::lang.plugin.name'
    description: 'zen.threes::lang.plugin.description'
    author: 'October Studio'
    icon: oc-icon-cubes
    homepage: ''
permissions:
    zen.threes.main:
        tab: Threes
        label: 'Main access'
    zen.threes.options:
        tab: Threes
        label: 'Threes Options'
    zen.threes.units:
        tab: Threes
        label: 'Units control'
    zen.threes.sprites:
        tab: Threes
        label: 'Sprites control'
navigation:
    main:
        label: Threes
        url: zen/threes/spritecontroller
        icon: icon-cubes
        permissions:
            - zen.threes.main
        sideMenu:
            sprites:
                label: Спрайты
                url: zen/threes/spritecontroller
                icon: icon-play
                permissions:
                    - zen.threes.main
                    - zen.threes.sprites
            units:
                label: Юниты
                url: zen/threes/unitcontroller
                icon: icon-square
                permissions:
                    - zen.threes.main
                    - zen.threes.units

```
`plugins/zen/threes/routes.php`
```<?php

Route::match(
    ['get', 'post'],
    'threes.api/{path}:{method}',
    function (string $path, string $method) {
        $response = ths()->api($path, $method);
        if (is_null($response)) {
            return '';
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
);

```
`plugins/zen/threes/src/js/routes.js`
```import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/:backend/zen/threes/spritecontroller/create",
        name: "CreateSprite",
        component: () => import("../vue/pages/ThreesProgram.vue"),
        props: true,
    },
    {
        path: "/:backend/zen/threes/spritecontroller/update/:sid",
        name: "UpdateSprite",
        component: () => import("../vue/pages/ThreesProgram.vue"),
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
```
const axios = require('axios');
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

    // Объект для хранения глобальных данных
    data: reactive({
        mouse: {
            x: 0,
            y: 0,
        },
        sprite_pins: [], // Соединения в спрайте
    }),

    api(opts) {
        let domain = location.origin
        let data = (opts.data) ? opts.data : null
        let api_url = domain + opts.url
        let request_key = md5(api_url)
        let axios_options = null

        if (opts.api) {
            api_url = domain + '/threes.api/' + opts.api
        }

        // For debug
        console.log('Threes query [' + request_key + ']: ' + api_url, data)

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
    afterResponse(response, then, request_key) {
        delete this.requests_register[request_key]
        this.preloader(false)
        if (response.alerts) {
            this.pushAlerts(response.alerts)
        }
        if (then) {
            then(response)
        }
    },
    preloader(state) {
        console.log('Preloader = ' + state)
    },
    pushAlerts(alerts) {
        console.log('Alerts', alerts)
    },
}

import FormFitter from "../vue/components/ux/forms/FormFitter.vue";
import FormSection from "../vue/components/ux/forms/FormSection.vue";
import vueClickOutsideElement from 'vue-click-outside-element';

const app = createApp(Threes);
app.use(router);
app.use(PrimeVue, {ripple: true});
app.use(vueClickOutsideElement)
app.component('FormFitter', FormFitter);
app.component('FormSection', FormSection);
app.mount("#threes");

```
`plugins/zen/threes/src/vue/components/Dwarf/inputs/DwarfSelect.css`
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
`plugins/zen/threes/src/vue/components/ux/inputs/Select.css`
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
`plugins/zen/threes/traits/SimpleTree.php`
```<?php

namespace Zen\Threes\Traits;

use October\Rain\Database\Collection;
use October\Rain\Database\TreeCollection;
use Exception;

/**
 * SimpleTree model trait
 *
 * Simple tree implementation, for advanced implementation see:
 * October\Rain\Database\Traits\NestedTree
 *
 * SimpleTree is the bare minimum needed for tree functionality, the
 * methods defined here should be implemented by all "tree" traits.
 *
 * Usage:
 *
 * Model table must have parent_sid table column.
 * In the model class definition:
 *
 *   use \October\Rain\Database\Traits\SimpleTree;
 *
 * General access methods:
 *
 *   $model->getChildren(); // Returns children of this node
 *   $model->getChildCount(); // Returns number of all children.
 *   $model->getAllChildren(); // Returns all children of this node
 *   $model->getAllRoot(); // Returns all root level nodes (eager loaded)
 *   $model->getAll(); // Returns everything in correct order.
 *
 * Query builder methods:
 *
 *   $query->listsNested(); // Returns an indented array of key and value columns.
 *
 * You can change the sort field used by declaring:
 *
 *   const PARENT_SID = 'my_parent_column';
 *
 * @package october\database
 * @author Alexey Bobkov, Samuel Georges
 */
trait SimpleTree
{
    /**
     * initializeSimpleTree constructor
     */
    public function initializeSimpleTree()
    {
        // Define relationships
        $this->hasMany['children'] = [
            static::class,
            'key' => $this->getParentColumnName(),
            'replicate' => false
        ];

        $this->belongsTo['parent'] = [
            static::class,
            'key' => $this->getParentColumnName(),
            'replicate' => false
        ];

        // Multisite
        if (
            $this->isClassInstanceOf(\October\Contracts\Database\MultisiteInterface::class) &&
            $this->isMultisiteSyncEnabled() &&
            $this->getMultisiteConfig('structure', true)
        ) {
            $this->addPropagatable(['children', 'parent']);
        }
    }

    /**
     * getAll returns all nodes and children.
     * @return \October\Rain\Database\Collection
     */
    public function getAll()
    {
        $collection = [];
        foreach ($this->getAllRoot() as $rootNode) {
            $collection[] = $rootNode;
            $collection = $collection + $rootNode->getAllChildren()->getDictionary();
        }

        return new Collection($collection);
    }

    /**
     * getAllChildren gets a list of children records, with their children (recursive)
     * @return \October\Rain\Database\Collection
     */
    public function getAllChildren()
    {
        $result = [];
        $children = $this->getChildren();

        foreach ($children as $child) {
            $result[] = $child;

            $childResult = $child->getAllChildren();
            foreach ($childResult as $subChild) {
                $result[] = $subChild;
            }
        }

        return new Collection($result);
    }

    /**
     * getChildren returns direct child nodes.
     * @return \October\Rain\Database\Collection
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * getChildCount returns number of all children below it.
     * @return int
     */
    public function getChildCount()
    {
        return count($this->getAllChildren());
    }

    /**
     * getParents returns an array of parents, this is a heavy query and can produce
     * in multiple queries.
     */
    public function getParents()
    {
        $result = [];

        $parent = $this;
        $result[] = $parent;

        while ($parent = $parent->parent) {
            $result[] = $parent;
        }

        return array_reverse($result);
    }

    //
    // Scopes
    //

    /**
     * scopeGetAllRoot returns a list of all root nodes, without eager loading.
     * @return \October\Rain\Database\Collection
     */
    public function scopeGetAllRoot($query)
    {
        return $query->where($this->getParentColumnName(), null)->get();
    }

    /**
     * scopeGetNested is a non-chaining scope, returns an eager loaded hierarchy tree.
     * Children are eager loaded inside the $model->children relation.
     * @return Collection A collection
     */
    public function scopeGetNested($query)
    {
        return $query->get()->toNested();
    }

    /**
     * scopeListsNested gets an array with values of a given column. Values are indented
     * according to their depth.
     * @param  string $column Array values
     * @param  string $key    Array keys
     * @param  string $indent Character to indent depth
     * @return array
     */
    public function scopeListsNested($query, $column, $key = null, $indent = '&nbsp;&nbsp;&nbsp;')
    {
        $idName = $this->getKeyName();
        $parentName = $this->getParentColumnName();

        $columns = [$idName, $parentName, $column];
        if ($key !== null) {
            $columns[] = $key;
        }

        $collection = $query->getQuery()->get($columns);

        // Assign all child nodes to their parents
        $pairMap = [];
        $rootItems = [];
        foreach ($collection as $record) {
            if ($parentId = $record->{$parentName}) {
                if (!isset($pairMap[$parentId])) {
                    $pairMap[$parentId] = [];
                }
                $pairMap[$parentId][] = $record;
            }
            else {
                $rootItems[] = $record;
            }
        }

        // Recursive helper function
        $buildCollection = function(
            $items,
            $map,
            $depth = 0
        ) use (
            &$buildCollection,
            $column,
            $key,
            $indent,
            $idName
        ) {
            $result = [];

            $indentString = str_repeat($indent, $depth);

            foreach ($items as $item) {
                if (!property_exists($item, $column)) {
                    throw new Exception('Column mismatch in listsNested method. Are you sure the columns exist?');
                }

                if ($key !== null) {
                    $result[$item->{$key}] = $indentString . $item->{$column};
                }
                else {
                    $result[] = $indentString . $item->{$column};
                }

                // Add the children
                $childItems = array_get($map, $item->{$idName}, []);
                if (count($childItems) > 0) {
                    $result = $result + $buildCollection($childItems, $map, $depth + 1);
                }
            }

            return $result;
        };

        // Build a nested collection
        return $buildCollection($rootItems, $pairMap);
    }

    /**
     * getParentColumnName
     * @return string
     */
    public function getParentColumnName()
    {
        return defined('static::PARENT_SID') ? static::PARENT_SID : 'parent_sid';
    }

    /**
     * getQualifiedParentColumnName
     * @return string
     */
    public function getQualifiedParentColumnName()
    {
        return $this->getTable(). '.' .$this->getParentColumnName();
    }

    /**
     * getParentId gets value of the model parent_sid column.
     * @return int
     */
    public function getParentId()
    {
        return $this->getAttribute($this->getParentColumnName());
    }

    /**
     * newCollection returns a custom TreeCollection collection.
     */
    public function newCollection(array $models = [])
    {
        return new TreeCollection($models);
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
`plugins/zen/threes/updates/builder_table_create_zen_threes_sprites.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateZenThreesSprites extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_sprites', function($table)
        {
            $table->string('sid')->primary();
            $table->string('parent_sid')->nullable();
            $table->string('name');
            $table->text('description')->nullable();
            $table->text('data')->nullable();
            $table->smallInteger('active')->unsigned()->default(1);
            $table->timestamps();

            $table->unique('sid', 'sid_unique');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('zen_threes_sprites');
    }
}
```
`plugins/zen/threes/updates/builder_table_create_zen_threes_units.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateZenThreesUnits extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_units', function($table)
        {
            $table->string('tid')->primary();
            $table->text('icon')->nullable();
            $table->string('icon_name')->nullable();
            $table->string('name');
            $table->text('description')->nullable();
            $table->text('data')->nullable();
            $table->smallInteger('active')->unsigned()->default(1);
            $table->timestamps();

            $table->unique('tid', 'tid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_units');
    }
}
```
`plugins/zen/threes/updates/version.yaml`
```1.0.1:
    - 'Initialize plugin'
1.0.2:
    - 'Create units'
    - builder_table_create_zen_threes_units.php
1.0.3:
    - 'Create sprites'
    - builder_table_create_zen_threes_sprites.php

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

mix.js('src/js/threes.js', 'js').vue(); // Обработка Vue.js файлов
mix.setPublicPath('assets'); // Путь к папке публичных файлов

if (mix.inProduction()) {
    mix.version(); // Версионирование файлов в продакшене
}

// Настройка alias для удобства работы с путями
mix.alias({ '@': path.join(__dirname, 'src/js') });

// Копирование дополнительных ресурсов
mix.copyDirectory(path.join(__dirname, 'src/images'), 'assets/images');
mix.copyDirectory('node_modules/primeicons/fonts', 'assets/fonts/vendor/primeicons');

```