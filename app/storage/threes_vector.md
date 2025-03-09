`plugins/zen/threes/Plugin.php`
```<?php namespace Zen\Threes;

use System\Classes\PluginBase;
use Zen\Threes\Console\Vector;

class Plugin extends PluginBase
{
    public function register(): void
    {
        # Регистрация консольных команд
        $this->registerConsoleCommand('threes:vector', Vector::class);
    }

    public function boot()
    {
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
        return app("Zen\Threes\Api\\$path")->{$method}(...$data);
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
        $is_static = (new \ReflectionMethod($class, $method))->isStatic();
        if ($is_static) {
            return $class::$method($arguments);
        } else {
            $instance = new $class($constructor);
            return $instance->$method($arguments);
        }
    }

    /**
     * Интерфейс для настроек
     * @param string $key
     * @return mixed
     */
    public function settings(string $key)
    {
        return Settings::get($key);
    }
}

```
`plugins/zen/threes/api/debug/Tests.php`
```<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Layer;
use Zen\Threes\Models\Unit;
use Zen\Threes\Console\Vector;
use Zen\Threes\Classes\units\OpcodeGenerator;


class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        $layer_data = ths()->fromJsonFile(
            storage_path('layer_data.json')
        );

        Layer::set($layer_data);
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}

```
`plugins/zen/threes/api/frames/Frame.php`
```<?php

namespace Zen\Threes\Api\Frames;

class Frame
{
    # http://threes.dc/threes.api/frames.Frame:saveProgram
    public function saveProgram(): array
    {
        ths()->requestDebug('saveProgram');
        ths()->frames()->saveProgram(
            request('fid'),
            request('program')
        );
        return [];
    }

    # http://threes.dc/threes.api/frames.Frame:loadProgram?fid=test1
    public function loadProgram(): array
    {
        return [
            'program' => ths()->frames()->loadProgram(request('fid'))
        ];
    }

    # http://threes.dc/threes.api/frames.Frame:addLine?fid=test1
    public function addLine()
    {
        $fid = request('fid');
        ths()->frames()->addLine($fid);
        return [];
    }


}

```
`plugins/zen/threes/api/nodes/Node.php`
```<?php

namespace Zen\Threes\Api\Nodes;

class Node
{
    # http://threes.dc/threes.api/nodes.Node:Create?fid=test1&line_index=0
    public function Create(): array
    {
        $fid = request('fid');
        $line_index = request('line_index');
        ths()->nodes()->addNode($fid, $line_index);
        return [];
    }
}

```
`plugins/zen/threes/classes/Frames.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Models\Frame;
use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Node;
use Zen\Threes\Models\Layer;

class Frames
{
    use SingletonTrait;

    public function saveProgram(string $fid, array $program): void
    {
        //Frame::findByFid($fid)->update(['program' => $program]);

        $dsl = [];

        foreach ($program as $line_index => $line) {
            foreach ($line as $node) {
                $nid = $node['nid'];
                $description = $node['description'];

                Node::set([
                    'fid' => $fid,
                    'nid' => $nid,
                    'name' => $node['name'],
                    'description' => $description,
                ]);

                if (isset($node['layers'])) {
                    $layer_index = 0;
                    foreach ($node['layers'] as $lid => $attribute) {
                        Layer::set([
                            'nid' => $nid,
                            'lid' => $lid,
                            'exe' => $attribute,
                            'sort_order' => $layer_index,
                        ]);
                        $layer_index++;
                    }
                }

                $dsl[$line_index][] = $node['nid'];
            }
            if (!isset($dsl[$line_index])) {
                $dsl[$line_index] = [];
            }
        }

        dd($dsl);
    }

    public function loadProgram(string $fid): array
    {
        return Frame::findByFid($fid)->program;
    }

    public function addLine(string $fid): void
    {
        $frame = Frame::findByFid($fid);
        $program = $frame->program;
        $program[] = [];
        $frame->program = $program;
        $frame->save();
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
use Zen\Threes\Classes\Helpers\State;
use Zen\Threes\Classes\Helpers\Carbon;

class Helpers
{
    use Debug;    # Методы отладки
    use Files;    # Работа с файлами
    use Json;     # Работа с JSON
    use Yaml;     # Работа с YAML
    use Strings;  # Слой настроек
    use State;    # Управлением состоянием (сессия Threes)
    use Carbon;   # Создание объекта Carbon

    public function units(): Units
    {
        return Units::getInstance();
    }

    public function nodes(): Nodes
    {
        return Nodes::getInstance();
    }

    public function frames(): Frames
    {
        return Frames::getInstance();
    }
}

```
`plugins/zen/threes/classes/Nodes.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Frame;

class Nodes
{
    use SingletonTrait;

    /**
     * Добавить новый нод в программу
     * @param string $fid
     * @param int $line_index
     * @return array
     */
    public function addNode(string $fid, int $line_index): array
    {
        $frame = Frame::findByFid($fid);
        $program = $frame->program ?? [];
        $program[$line_index][] = [
            'nid' => ths()->createToken(),
            'name' => '#',
            'description' => null,
            'layers' => [
                'threes.units.oc@write' => '#'
            ]
        ];
        $frame->program = $program;
        $frame->save();
        return [];
    }
}

```
`plugins/zen/threes/classes/Units.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

class Units
{
    use SingletonTrait;
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
    public function setState(string $key, mixed $value): void
    {
        $this->state[$key] = $value;
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
     * Сгенерировать случайную строку с заданной длинной
     * @param int $length
     * @return string
     */
    public function createToken(int $length = 8): string
    {
        return strtolower(Str::random($length));
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
`plugins/zen/threes/classes/units/OpcodeGenerator.php`
```<?php

namespace Zen\Threes\Classes\Units;

class OpcodeGenerator
{
    public static function generateOpcode()
    {
        dd('OKAY');
    }
}

```
`plugins/zen/threes/console/Vector.php`
```<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;

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
`plugins/zen/threes/controllers/FrameController.php`
```<?php namespace Zen\Threes\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use Zen\Threes\Models\Frame;

class FrameController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class,
        \Backend\Behaviors\ListController::class
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public $requiredPermissions = [
        'zen.threes.main',
        'zen.threes.frames'
    ];

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Zen.Threes', 'main', 'frames');
        $this->addCss(mix('css/threes.css', 'plugins/zen/threes/assets'));
        $this->addJs(mix('js/threes.js', 'plugins/zen/threes/assets'), ['defer' => true]);
    }

    public function update($fid)
    {
        // Ищем запись по fid
        $frame = Frame::findByFid($fid);

        // Передаём ID в стандартный update
        return $this->asExtension('FormController')->update($frame->id);
    }

}

```
`plugins/zen/threes/controllers/UnitController.php`
```<?php namespace Zen\Threes\Controllers;

use Backend\Classes\Controller;
use BackendMenu;
use Flash;
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
    public function formExtendFields($form): void
    {
        if (!isset($this->params[0])) {
            return;
        }

        $sid = request('sid');
        $nid = request('nid');

        if ($sid) {
            foreach (['name', 'uid', 'description', 'fields', 'icon'] as $field) {
                if ($form->getField($field)) {
                    $form->removeField($field);
                }
            }
        }

        $unit = Unit::find($this->params[0]);
        if ($unit && $unit->additional_fields) {
            $this->clearMissingFields($unit);
            $form->addFields($unit->additional_fields, 'primary');
        }

        # Загружаем настройки нода после добавления полей
        if ($sid && $nid) {
            $node_settings = ths()->sprites()->loadNodeSettings($nid);

            if ($node_settings) {
                foreach ($node_settings as $key => $value) {
                    if ($form->getField($key)) {
                        $form->getField($key)->value = $value;
                    }
                }
            }
        }
    }


    /**
     * Переопределение метода сохранения формы
     * @param $model
     * @return void
     * @throws \Exception
     */
    public function formBeforeSave($model): void
    {
        $sid = request('sid');
        $node_uuid = request('node');

        if ($sid && $node_uuid) {
            Flash::info('Настройки нода сохранены');

            $node_settings = request('Unit');
            unset($node_settings['uid']);
            unset($node_settings['name']);
            unset($node_settings['description']);

            # Останавливаем дальнейшее выполнение сохранения
            # Проверяется в plugins/zen/threes/models/Unit@boot
            ths()->setState('unit.prevent_save', [
                'node_uuid' => $node_uuid,
                'settings' => $node_settings
            ]);
        }
    }

    /**
     * При изменении состава дополнительных полей, необходимо подчистить settings
     * @param Unit $unit
     * @return void
     */
    private function clearMissingFields(Unit $unit): void
    {
        $missing_fields = array_keys(array_diff_key($unit->settings, $unit->additional_fields));
        $keys_to_remove  = array_flip($missing_fields);
        if (!$keys_to_remove) {
            return;
        }
        $data = $unit->data;
        $data['settings'] = array_diff_key($data['settings'], $keys_to_remove);
        \DB::table('zen_threes_units')
            ->where('uid', $unit->uid)
            ->update([
                'data' => ths()->toJson($data),
            ]);
    }
}

```
`plugins/zen/threes/controllers/framecontroller/_list_toolbar.php`
```<div data-control="toolbar">
    <a
        href="<?= Backend::url('zen/threes/framecontroller/create') ?>"
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
`plugins/zen/threes/controllers/framecontroller/config_form.yaml`
```name: FrameController
form: $/zen/threes/models/frame/fields.yaml
modelClass: Zen\Threes\Models\Frame
defaultRedirect: zen/threes/framecontroller
create:
    redirect: 'zen/threes/framecontroller/update/:fid'
    redirectClose: zen/threes/framecontroller
update:
    redirect: zen/threes/framecontroller
    redirectClose: zen/threes/framecontroller

```
`plugins/zen/threes/controllers/framecontroller/config_list.yaml`
```list: $/zen/threes/models/frame/columns.yaml
modelClass: Zen\Threes\Models\Frame
title: FrameController
noRecordsMessage: 'backend::lang.list.no_records'
showSetup: true
showCheckboxes: true
recordsPerPage: 20
toolbar:
    buttons: list_toolbar
    search:
        prompt: 'backend::lang.list.search_prompt'
structure:
    maxDepth: 0
    treeExpanded: false
recordUrl: 'zen/threes/framecontroller/update/:fid'

```
`plugins/zen/threes/controllers/framecontroller/create.php`
```<?php Block::put('breadcrumb') ?>
    <ul>
        <li><a href="<?= Backend::url('zen/threes/framecontroller') ?>">FrameController</a></li>
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
                    <?= e(trans('backend::lang.form.or')) ?> <a href="<?= Backend::url('zen/threes/framecontroller') ?>"><?= e(trans('backend::lang.form.cancel')) ?></a>
                </span>
            </div>
        </div>

    <?= Form::close() ?>

<?php else: ?>
    <p class="flash-message static error"><?= e(trans($this->fatalError)) ?></p>
    <p><a href="<?= Backend::url('zen/threes/framecontroller') ?>" class="btn btn-default"><?= e(trans('backend::lang.form.return_to_list')) ?></a></p>
<?php endif ?>
```
`plugins/zen/threes/controllers/framecontroller/index.php`
```<?= $this->listRender() ?>

```
`plugins/zen/threes/controllers/framecontroller/preview.php`
```<?php Block::put('breadcrumb') ?>
    <ul>
        <li><a href="<?= Backend::url('zen/threes/framecontroller') ?>">FrameController</a></li>
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
    <a href="<?= Backend::url('zen/threes/framecontroller') ?>" class="btn btn-default oc-icon-chevron-left">
        <?= e(trans('backend::lang.form.return_to_list')) ?>
    </a>
</p>
```
`plugins/zen/threes/controllers/framecontroller/update.php`
```<?php Block::put('breadcrumb') ?>
    <ul>
        <li><a href="<?= Backend::url('zen/threes/framecontroller') ?>">FrameController</a></li>
        <li><?= e($this->pageTitle) ?></li>
    </ul>
<?php Block::endPut() ?>

<?php if (!$this->fatalError): ?>

    <?= Form::open(['class' => 'layout']) ?>

        <div class="layout-row">
            <div id="threes"></div>
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
                    <?= e(trans('backend::lang.form.or')) ?> <a href="<?= Backend::url('zen/threes/framecontroller') ?>"><?= e(trans('backend::lang.form.cancel')) ?></a>
                </span>
            </div>
        </div>
    <?= Form::close() ?>

<?php else: ?>
    <p class="flash-message static error"><?= e(trans($this->fatalError)) ?></p>
    <p><a href="<?= Backend::url('zen/threes/framecontroller') ?>" class="btn btn-default"><?= e(trans('backend::lang.form.return_to_list')) ?></a></p>
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
    redirect: 'zen/threes/unitcontroller/update/:uid'
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
recordUrl: 'zen/threes/unitcontroller/update/:uid'

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
<?php

if (request('sid') && request('node')) {
    echo ths()->sprites()->getNodeTitle(
        $this->params[0],
        request('sid'),
        request('node')
    );
}

?>
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
`plugins/zen/threes/models/Frame.php`
```<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use October\Rain\Database\Traits\Sortable;
use October\Rain\Database\Traits\NestedTree;

/**
 * @property string $fid - Токен фрейма
 * @property string $name - Название фрейма
 * @property string $description - Описание фрейма
 * @property bool $active - Активность фрейма
 * @property array $program - Программа фрейма
 * @method static active() - Фильтр активности в запросе
 * @method static find($fid) - Найти фрейм по токену
 * @method static where(string $fid, int|string $value) - Условие where для фрейма
 */
class Frame extends Model
{
    use Validation;
    use Sortable;
    use NestedTree;

    public $table = 'zen_threes_frames';

    public $rules = [
        'fid' => 'required|unique:zen_threes_frames,fid',
        'name' => 'required',
    ];

    protected $fillable = [
        'id',
        'fid',
        'name',
        'description',
        'active',
        'program',
    ];

    protected array $data_dump = [];

    public static function findByFid($fid)
    {
        return self::where('fid', $fid)->firstOrFail();
    }

    //region Фильтры
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
    //endregion

    //region Геттеры
    public function getDataAttribute(?string $record): array
    {
        if ($record) {
            return ths()->fromJson($record) ?? [];
        }
        return [];
    }

    public function getProgramAttribute()
    {
        return $this->data_dump['program'] ?? [];
    }
    //endregion
    //region Сеттеры
    public function setDataAttribute(?array $record): void
    {
        $this->attributes['data'] = $record ? ths()->toJson($record, true) : null;
    }

    public function setProgramAttribute(?array $fields = null): void
    {
        $this->data_dump['program'] = $fields ?? [];
    }
    //endregion
    //region Методы
    public function saveData(): void
    {
        if (empty($this->attributes['fid'])) {
            $this->attributes['fid'] = $this->fid ?? ths()->createToken();
        }
        $this->attributes['data'] = ths()->toJson($this->data_dump);
    }
    //endregion
    //region События
    public function afterFetch(): void
    {
        $this->data_dump = $this->data;
    }

    public function beforeSave(): void
    {
        $this->saveData();
    }
    //endregion
}

```
`plugins/zen/threes/models/Layer.php`
```<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use Illuminate\Support\Facades\DB;

class Layer extends Model
{
    use Validation;

    public $timestamps = false;
    public $table = 'zen_threes_layers';
    public $rules = [];

    protected $primaryKey = null; // Оставляем null, так как нет единого PK
    public $incrementing = false;

    protected $fillable = [
        'nid',
        'lid',
        'name',
        'description',
        'exe',
        'sort_order',
        'updated_at',
    ];

    public static function set(array $layer): void
    {
        $nid = $layer['nid'];
        $lid = $layer['lid'];
        $data = [
            'nid' => $nid,
            'lid' => $lid,
            'name' => $layer['name'] ?? 'Без названия',
            'description' => $layer['description'] ?? null,
            'exe' => $layer['exe'],
            'sort_order' => $layer['sort_order'],
            'updated_at' => now(),
        ];

        // Проверяем существование записи
        $exists = DB::table('zen_threes_layers')
            ->where('nid', $nid)
            ->where('lid', $lid)
            ->exists();

        if ($exists) {
            // Обновляем запись напрямую через DB facade
            DB::table('zen_threes_layers')
                ->where('nid', $nid)
                ->where('lid', $lid)
                ->update($data);
        } else {
            // Создаем новую запись
            DB::table('zen_threes_layers')->insert($data);
        }
    }
}

```
`plugins/zen/threes/models/Node.php`
```<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use Illuminate\Support\Facades\DB;

class Node extends Model
{
    use Validation;

    public $timestamps = false;
    public $table = 'zen_threes_nodes';
    public $rules = [];

    protected $primaryKey = null; // Нет единого PK
    public $incrementing = false;

    protected $fillable = [
        'fid',
        'nid',
        'name',
        'description',
    ];

    public static function set(array $data): void
    {
        $fid = $data['fid'];
        $nid = $data['nid'];
        $name = $data['name'] ?? 'Без названия';
        $description = $data['description'] ?? null;

        $data_to_save = [
            'fid' => $fid,
            'nid' => $nid,
            'name' => $name,
            'description' => $description,
        ];

        $exists = DB::table('zen_threes_nodes')
            ->where('fid', $fid)
            ->where('nid', $nid)
            ->exists();

        if ($exists) {
            DB::table('zen_threes_nodes')
                ->where('fid', $fid)
                ->where('nid', $nid)
                ->update($data_to_save);
        } else {
            DB::table('zen_threes_nodes')
                ->insert($data_to_save);
        }
    }

    public static function fabric(string $fid, int $line_index = 0)
    {
        # Тут нужно создать новый нод для фрейма с токеном $fid который добавиться в конец линии $line_index
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
`plugins/zen/threes/models/Unit.php`
```<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;

/**
 * @property bool $active - Активность юнита
 * @property string $uid - ThreesID (Уникальный код юнита)
 * @property string $name - Имя юнита
 * @property string $description - Описание юнита
 * @property string $icon - SVG-иконка из базы данных
 * @property string $icon_path - Путь до SVG иконки
 * @property array $fields - Поля интерфейса ???
 * @method static active - Активные юниты
 * @method static find(string $tid)
 */
class Unit extends Model
{
    use Validation;

    public $table = 'zen_threes_units';
    protected $primaryKey = 'uid';
    protected $keyType = 'string';
    public $incrementing = false;
    public $rules = [
        'uid' => 'required|unique:zen_threes_units,uid',
    ];

    protected $fillable = [
        'uid',
        'icon',
        'icon_path',
        'name',
        'description',
        'active',
        'fields', // Виртуальное поле (data.fields)
        'layers' // Виртуальное поле (data.layers)
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

    protected static function boot(): void
    {
        parent::boot();

        # Предотвращение сохранения модели
        # Устанавливается в plugins/zen/threes/controllers/UnitController@formBeforeSave
        static::saving(function ($model) {
            #TODO: Старая механика сохранения данных нода
            if ($save_data = ths()->getState('unit.prevent_save')) {
                ths()->sprites()->saveNodeSettings(
                    $save_data['node_uuid'],
                    $save_data['settings']
                );
                return false;
            }
        });
    }

    /**
     * Фильтр активных юнитов
     * @param $query
     * @return mixed
     */
    public function scopeActive($query): mixed
    {
        return $query->where('active', 1);
    }

    /**
     * Определение нативного атрибута
     * @param string $key
     * @return bool
     */
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
    //endregion

    /**
     * Сохраняет иконку в специальное место и возвращает её имя
     * @return void
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
    public function getUidAttribute($value): string
    {
        if ($value) {
            return $value;
        }

        $author_token = ths()->settings('author_token') ?? 'project';
        return $author_token . '.units.' . ths()->createToken();
    }

    /**
     * Геттер для настроек
     * @return array
     */
    public function getSettingsAttribute(): array
    {
        return $this->data_dump['settings'] ?? [];
    }

    /**
     * Геттер для иконки
     * @param string|null $svg
     * @return string
     */
    public function getIconAttribute(?string $svg = null): string
    {
        if (!$svg) {
            return file_get_contents(
                base_path('plugins/zen/threes/assets/images/icons/default-icon.svg')
            );
        }
        return $svg;
    }

    /**
     * Путь до SVG - иконки в стандартном каталоге
     * @return string
     */
    public function getIconPathAttribute(): string
    {
        if (!$this->icon) {
            return '/plugins/zen/threes/assets/images/icons/default-icon.svg';
        }

        return '/storage/app/uploads/public/threes/icons/' . $this->icon_name;
    }

    /**
     * @param string|null $data
     * @return array
     */
    public function getDataAttribute(?string $data): array
    {
        if ($data) {
            return ths()->fromJson($data) ?? [];
        }
        return [];
    }

    /**
     * @return array
     */
    public function getFieldsAttribute(): array
    {
        return $this->data_dump['fields'] ?? [];
    }

    /**
     * @param array|null $fields
     * @return void
     */
    public function setFieldsAttribute(?array $fields = null): void
    {
        $this->data_dump['fields'] = $fields ?? [];
    }

    #TODO: Тут следует сделать преобразование
    // сохранять нужно в отдельную таблицу со слоями
    // НО при этом тут хранить только lid`s для связывания и хранения порядка сортировки
    public function getLayersAttribute()
    {
        return $this->data_dump['layers'] ?? [];
    }

    public function setLayersAttribute(?array $layers = null): void
    {
        $this->data_dump['layers'] = $layers ?? [];
    }

    /**
     * @return array
     */
    public function getAdditionalFieldsAttribute(): array
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

    /**
     * @return string[]
     */
    public function getSpanOptions(): array
    {
        return [
            'auto' => 'Авто',
            'full' => '100%',
            'left' => 'Влево',
            'right' => 'Вправо',
        ];
    }

    /**
     * @return string[]
     */
    public function getTypeOptions(): array
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

    /**
     * @return string[]
     */
    public function getSizeOptions(): array
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

    public function saveData(): void
    {
        if (empty($this->attributes['uid'])) {
            $this->attributes['uid'] = $this->uid ?? ths()->settings('author_token') ?? 'project';
        }
        $settings = $this->dynamic_attributes;
        $this->data_dump['settings'] = $settings;
        $this->attributes['data'] = ths()->toJson($this->data_dump);
    }
}

```
`plugins/zen/threes/models/frame/columns.yaml`
```columns:
    fid:
        label: fid
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
        type: text
    fid:
        label: 'Токен фрейма (fid)'
        span: auto
        preset:
            field: name
            type: slug
        type: text

```
`plugins/zen/threes/models/settings/fields.yaml`
```fields:
    author_token:
        label: 'Токен автора'
        span: auto
        default: project
        type: text

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
        icon:
            label: 'SVG Иконка'
            span: full
            size: large
            language: php
            type: codeeditor
            tab: Иконка
        layers:
            label: Аспекты
            prompt: 'Добавить аспект'
            displayMode: accordion
            span: full
            type: repeater
            tab: Аспекты
            form:
                fields:
                    aspect_lid:
                        label: 'Токен аспекта (lid)'
                        span: auto
                        type: text
                    aspect_name:
                        label: 'Название аспекта'
                        span: auto
                        type: text
                    aspect_exe:
                        label: 'Атрибут аспекта'
                        size: large
                        language: javascript
                        span: full
                        type: codeeditor
                    aspect_desc:
                        label: 'Описание аспекта'
                        size: large
                        span: full
                        type: richeditor
fields:
    name:
        label: 'Название юнита'
        span: auto
        type: text
    uid:
        label: 'Токен юнита (uid)'
        span: auto
        required: 1
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
        "vue-select": "^4.0.0-beta.6",
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
    zen.threes.units:
        tab: Threes
        label: 'Units control'
    zen.threes.frames:
        tab: Threes
        label: 'Frames control'
navigation:
    main:
        label: Threes
        url: zen/threes/spritecontroller
        icon: icon-cubes
        permissions:
            - zen.threes.main
        sideMenu:
            frames:
                label: Фреймы
                url: zen/threes/framecontroller
                icon: icon-play
                permissions:
                    - zen.threes.main
                    - zen.threes.frames
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

function handleResponse($response)
{
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


Route::match(
    ['get', 'post'],
    'threes.api/{path}:{method}',
    function (string $path, string $method) {
        $response = ths()->api($path, $method);
        return handleResponse($response);
    }
);

# Проверяем файл маршрутов
$generated_routes_path = ths()->checkDir(storage_path('temp/threes/generated_routes.php'));
if (!file_exists($generated_routes_path)) {
    file_put_contents($generated_routes_path, '<?php');
}

require_once $generated_routes_path;

```
`plugins/zen/threes/src/js/routes.js`
```import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/:backend/zen/threes/framecontroller/create",
        name: "CreateSprite",
        component: () => import("../vue/pages/Frame.vue"),
        props: true,
    },
    {
        path: "/:backend/zen/threes/framecontroller/update/:fid",
        name: "UpdateSprite",
        component: () => import("../vue/pages/Frame.vue"),
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
import vuedraggable from 'vuedraggable';
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
        let api_url = domain + opts.url + opts.api
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
app.component('draggable', vuedraggable);
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
`plugins/zen/threes/updates/m001_units.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M001Units extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_units', function($table)
        {
            $table->string('uid')->primary();
            $table->string('name');
            $table->text('icon')->nullable();
            $table->string('icon_name')->nullable();
            $table->text('description')->nullable();
            $table->text('data')->nullable();
            $table->smallInteger('active')->unsigned()->default(1);
            $table->timestamps();

            $table->unique('uid', 'uid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_units');
    }
}
```
`plugins/zen/threes/updates/m002_frames.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M002Frames extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_frames', function($table)
        {
            $table->increments('id')->comment('Не используется по назначению'); # Стандартный id, нигде не должен играть роль кроме дерева
            $table->integer('parent_id')->unsigned()->nullable()->comment('Родительский фрейм');
            $table->string('fid')->comment('Идентификатор фрейма');
            $table->string('name')->comment('Название фрейма');
            $table->text('description')->nullable()->comment('Описание фрейма');
            $table->smallInteger('active')->unsigned()->default(1)->comment('Активность фрейма');
            $table->integer('sort_order')->unsigned()->default(0)->comment('Порядок сортировки');
            $table->integer('nest_left')->unsigned()->comment('Левая граница узла');
            $table->integer('nest_right')->unsigned()->comment('Правая граница узла');
            $table->integer('nest_depth')->unsigned()->comment('Уровень вложенности');
            $table->timestamps();
            $table->text('data')->nullable()->comment('Данные фрейма');

            # Индексируем fid
            $table->unique('fid', 'fid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_frames');
    }
}
```
`plugins/zen/threes/updates/m003_nodes.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M003Nodes extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_nodes', function($table)
        {
            $table->string('fid')->index()->comment('Токен фрейма');
            $table->string('nid')->index()->comment('Токен нода');
            $table->string('name')->nullable()->comment('Имя нода');
            $table->string('description')->nullable()->comment('Описание нода');
            $table->unique(['fid', 'nid'], 'zen_threes_nodes_fid_nid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_nodes');
    }
}
```
`plugins/zen/threes/updates/m004_layers.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M004Layers extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_layers', function($table)
        {
            $table->string('nid')->comment('Токен нода');
            $table->string('lid')->comment('Токен слоя');
            $table->string('name')
                ->nullable()->default('Без названия')->comment('Название слоя');
            $table->string('description')->nullable()->comment('Описание аспекта');
            $table->string('exe')->nullable()->comment('Атрибут выполнения аспекта');
            $table->timestamp('updated_at')->nullable()->comment('Время последнего обновления');

            # уникальный составной ключ на nid и lid
            $table->primary(['nid', 'lid']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_layers');
    }
}
```
`plugins/zen/threes/updates/version.yaml`
```v1.0.1:
    - 'Initialize plugin'
v1.0.2:
    - 'Create Units'
    - m001_units.php
v1.0.3:
    - 'Create Frames'
    - m002_frames.php
v1.0.4:
    - 'Create Nodes'
    - m003_nodes.php
v1.0.5:
    - 'Create Layers'
    - m004_layers.php

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