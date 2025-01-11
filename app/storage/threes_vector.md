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
}

```
`plugins/zen/threes/api/debug/Tests.php`
```<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Unit;
use Zen\Threes\Console\Vector;
class Tests
{
    # http://threes.dc/zen/threes/api/debug.Tests:debug
    public function debug()
    {
        $vector = new Vector();
        $vector->handle();
    }

    # http://threes.dc/zen/threes/api/debug.Tests:loadUnit?tid=
    public function loadUnit()
    {
        $unit = Unit::find(request('tid'));
        dd($unit->toArray());
    }

    # http://threes.dc/zen/threes/api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}

```
`plugins/zen/threes/classes/Helpers.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Classes\Helpers\Files;
use Zen\Threes\Classes\Helpers\Json;
use Zen\Threes\Classes\Helpers\Yaml;

class Helpers
{
    use Files;
    use Json;
    use Yaml;
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
    }

    public function formExtendFields($form)
    {
        if (!isset($this->params[0])) {
            return;
        }

        $unit = Unit::find($this->params[0]);
        if ($unit && $unit->additional_fields) {
            $form->addFields($unit->additional_fields, 'primary');
        }
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
```<?php

echo "Hallo";

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


class Sprite extends Model
{
    use Validation;
    use SimpleTree;

    public $table = 'zen_threes_sprites';
    protected $primaryKey = 'sid';
    protected $keyType = 'string';
    public $incrementing = false;
    public $rules = [
        'sid' => 'unique:zen_threes_sprites,sid',
    ];

//    public function getUnitsOptions()
//    {
//        return Unit::active()->lists('name', 'tid');
//    }

    public function getParentSidOptions()
    {
        return [null => '--'] + self::all()->lists('name', 'sid');
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

    public function getUnitsAttribute()
    {
        $data = $this->data ?? [];
        return $data['units'] ?? [];
    }

    public function setUnitsAttribute(?array $fields = null): void
    {
        $data = $this->data ?? [];
        $data['units'] = $fields ?? [];
        $this->attributes['data'] = ths()->toJson($data, true);
    }
}

```
`plugins/zen/threes/models/Unit.php`
```<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use Log;

/**
 * @property bool $active
 */
class Unit extends Model
{
    use Validation;

    public $table = 'zen_threes_units';
    protected $primaryKey = 'tid';
    protected $keyType = 'string';
    public $incrementing = false;
    public $rules = [
        'tid' => 'unique:zen_threes_units,tid',
    ];

    protected $fillable = [
        'tid',
        'name',
        'description',
        'active',
        'fields',
    ];

    protected array $dynamic_attributes = [];

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

    public function afterFetch()
    {
        $settings = $this->data['settings'] ?? null;
        if ($settings) {
            foreach ($settings as $field => $value) {
                $this->attributes[$field] = $value;
            }
        }
    }

    public function beforeSave()
    {
        $this->saveSettings();
    }

    public function saveSettings()
    {
        $attributes = $this->dynamic_attributes;
        $data = $this->data ?? [];
        $data['settings'] = $attributes ?? [];
        $this->attributes['data'] = ths()->toJson($data, true);
    }

    public function getTidAttribute($value)
    {
        if ($value) {
            return $value;
        }

        $author_token = ths()->settings('author_token') ?? 'project';
        return $author_token . '.';
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

    public function getFieldsAttribute()
    {
        $data = $this->data ?? [];
        return $data['fields'] ?? [];
    }

    public function setFieldsAttribute(?array $fields = null): void
    {
        $data = $this->data ?? [];
        $data['fields'] = $fields ?? [];
        $this->attributes['data'] = ths()->toJson($data, true);
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
    name:
        label: 'Название спрайта'
        span: left
        type: text
    sid:
        label: 'Код спрайта'
        span: left
        type: text
    description:
        label: Описание
        size: large
        span: left
        type: richeditor
    scheme:
        label: ''
        span: right
        path: $/zen/threes/controllers/spritecontroller/partials/scheme.php
        type: partial

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

```
`plugins/zen/threes/models/unit/fields.yaml`
```fields:
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
tabs:
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
    "laravel-mix": "^6.0.49",
    "resolve-url-loader": "^5.0.0",
    "sass": "^1.83.1",
    "sass-loader": "^12.6.0",
    "vue-loader": "^16.8.3"
  },
  "dependencies": {
    "axios": "^1.7.9",
    "vue": "^3.5.13",
    "vue-router": "^4.5.0"
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
    '/zen/threes/api/{path}:{method}',
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
        path: "/",
        name: "Threes",
        component: () => import("../vue/Threes.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

```
`plugins/zen/threes/src/js/threes.js`
```import {createApp} from 'vue';
import router from './routes';

import Threes from '../vue/Threes.vue'

const app = createApp(Threes)
app.use(router)
app.mount("#threes")

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

    public static function getInstance(): self {
        if (!self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    private function __construct() {}

    private function __clone() {}

    public function __wakeup() {}
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
```v1.0.1:
    - 'Initialize plugin'
v1.0.2:
    - 'Create units'
    - builder_table_create_zen_threes_units.php
v1.0.3:
    - 'Create sprites'
    - builder_table_create_zen_threes_sprites.php

```
`plugins/zen/threes/webpack.mix.js`
```const mix = require('laravel-mix');
const path = require('path');
mix.sass('src/scss/threes.scss', 'css');
mix.js('src/js/threes.js', 'js').vue();

mix.setPublicPath('assets');

mix.options({
    terser: {
        ecma: 2020
    }
})

if (mix.inProduction()) {
    mix.webpackConfig({
        output: {
            filename: '[name].js',
            chunkFilename: 'js/[name].app.js',
            publicPath: 'assets'
        }
    })
    mix.version();
} else {
    mix.webpackConfig({
        output: {
            filename: '[name].js',
            chunkFilename: 'js/[name].app.js',
            publicPath: 'assets'
        },
        devtool: 'inline-source-map'
    })
}

mix.alias({
    '@': path.join(__dirname, 'src/js')
});

mix.copyDirectory(path.join(__dirname, 'src/images'), 'assets/images');

```