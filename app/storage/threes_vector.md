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
            'plugins/zen/threes/api/debug',
            'plugins/zen/threes/node_modules'
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

            $this->output->writeln("Render file: $path");
            $code = file_get_contents($path);
            $path = preg_replace('/^\/app\//', '', $path);

            foreach ($exclude as $item) {
                if (str_starts_with($path, $item)) {
                    continue 2;
                }
            }

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
`plugins/zen/threes/controllers/spritecontroller/partials/schema.php`
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
    sid:
        label: Sid
        type: text
        searchable: true
        sortable: true
    name:
        label: Наименование
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
    schema:
        label: Схема
        span: full
        path: $/zen/threes/controllers/spritecontroller/partials/schema.php
        type: partial
    name:
        label: 'Название спрайта'
        span: auto
        type: text
    sid:
        label: 'Код спрайта'
        span: auto
        type: text
    parent_sid:
        label: 'Родительский спрайт'
        showSearch: true
        span: auto
        type: dropdown
    description:
        label: Описание
        size: large
        span: full
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
`plugins/zen/threes/package-lock.json`
```{
  "name": "threes",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "threes",
      "version": "1.0.0",
      "license": "MIT",
      "devDependencies": {
        "@vitejs/plugin-vue": "^5.2.1",
        "vite": "^6.0.6",
        "vue": "^3.5.13"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz",
      "integrity": "sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz",
      "integrity": "sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.26.3",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.3.tgz",
      "integrity": "sha512-WJ/CvmY8Mea8iDXo6a7RK2wbmJITT5fN3BEkRuFlxVyNx8jOKIIhmC4fSkTcPcf8JyavbBwIe6OpiCOBXt/IcA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.26.3"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.26.3",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.3.tgz",
      "integrity": "sha512-vN5p+1kl59GVKMvTHt55NzzmYVxprfJD+ql7U9NFIfKCBkYE55LYtS+WtPlaYOyzydrKI8Nezd+aZextrd+FMA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-string-parser": "^7.25.9",
        "@babel/helper-validator-identifier": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.24.2.tgz",
      "integrity": "sha512-thpVCb/rhxE/BnMLQ7GReQLLN8q9qbHmI55F4489/ByVg2aQaQ6kbcLb6FHkocZzQhxc4gx0sCk0tJkKBFzDhA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.24.2.tgz",
      "integrity": "sha512-tmwl4hJkCfNHwFB3nBa8z1Uy3ypZpxqxfTQOcHX+xRByyYgunVbZ9MzUUfb0RxaHIMnbHagwAxuTL+tnNM+1/Q==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.24.2.tgz",
      "integrity": "sha512-cNLgeqCqV8WxfcTIOeL4OAtSmL8JjcN6m09XIgro1Wi7cF4t/THaWEa7eL5CMoMBdjoHOTh/vwTO/o2TRXIyzg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.24.2.tgz",
      "integrity": "sha512-B6Q0YQDqMx9D7rvIcsXfmJfvUYLoP722bgfBlO5cGvNVb5V/+Y7nhBE3mHV9OpxBf4eAS2S68KZztiPaWq4XYw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.24.2.tgz",
      "integrity": "sha512-kj3AnYWc+CekmZnS5IPu9D+HWtUI49hbnyqk0FLEJDbzCIQt7hg7ucF1SQAilhtYpIujfaHr6O0UHlzzSPdOeA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.24.2.tgz",
      "integrity": "sha512-WeSrmwwHaPkNR5H3yYfowhZcbriGqooyu3zI/3GGpF8AyUdsrrP0X6KumITGA9WOyiJavnGZUwPGvxvwfWPHIA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.24.2.tgz",
      "integrity": "sha512-UN8HXjtJ0k/Mj6a9+5u6+2eZ2ERD7Edt1Q9IZiB5UZAIdPnVKDoG7mdTVGhHJIeEml60JteamR3qhsr1r8gXvg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.24.2.tgz",
      "integrity": "sha512-TvW7wE/89PYW+IevEJXZ5sF6gJRDY/14hyIGFXdIucxCsbRmLUcjseQu1SyTko+2idmCw94TgyaEZi9HUSOe3Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.24.2.tgz",
      "integrity": "sha512-n0WRM/gWIdU29J57hJyUdIsk0WarGd6To0s+Y+LwvlC55wt+GT/OgkwoXCXvIue1i1sSNWblHEig00GBWiJgfA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.24.2.tgz",
      "integrity": "sha512-7HnAD6074BW43YvvUmE/35Id9/NB7BeX5EoNkK9obndmZBUk8xmJJeU7DwmUeN7tkysslb2eSl6CTrYz6oEMQg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.24.2.tgz",
      "integrity": "sha512-sfv0tGPQhcZOgTKO3oBE9xpHuUqguHvSo4jl+wjnKwFpapx+vUDcawbwPNuBIAYdRAvIDBfZVvXprIj3HA+Ugw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.24.2.tgz",
      "integrity": "sha512-CN9AZr8kEndGooS35ntToZLTQLHEjtVB5n7dl8ZcTZMonJ7CCfStrYhrzF97eAecqVbVJ7APOEe18RPI4KLhwQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.24.2.tgz",
      "integrity": "sha512-iMkk7qr/wl3exJATwkISxI7kTcmHKE+BlymIAbHO8xanq/TjHaaVThFF6ipWzPHryoFsesNQJPE/3wFJw4+huw==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.24.2.tgz",
      "integrity": "sha512-shsVrgCZ57Vr2L8mm39kO5PPIb+843FStGt7sGGoqiiWYconSxwTiuswC1VJZLCjNiMLAMh34jg4VSEQb+iEbw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.24.2.tgz",
      "integrity": "sha512-4eSFWnU9Hhd68fW16GD0TINewo1L6dRrB+oLNNbYyMUAeOD2yCK5KXGK1GH4qD/kT+bTEXjsyTCiJGHPZ3eM9Q==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.24.2.tgz",
      "integrity": "sha512-S0Bh0A53b0YHL2XEXC20bHLuGMOhFDO6GN4b3YjRLK//Ep3ql3erpNcPlEFed93hsQAjAQDNsvcK+hV90FubSw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.24.2.tgz",
      "integrity": "sha512-8Qi4nQcCTbLnK9WoMjdC9NiTG6/E38RNICU6sUNqK0QFxCYgoARqVqxdFmWkdonVsvGqWhmm7MO0jyTqLqwj0Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.24.2.tgz",
      "integrity": "sha512-wuLK/VztRRpMt9zyHSazyCVdCXlpHkKm34WUyinD2lzK07FAHTq0KQvZZlXikNWkDGoT6x3TD51jKQ7gMVpopw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.24.2.tgz",
      "integrity": "sha512-VefFaQUc4FMmJuAxmIHgUmfNiLXY438XrL4GDNV1Y1H/RW3qow68xTwjZKfj/+Plp9NANmzbH5R40Meudu8mmw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.24.2.tgz",
      "integrity": "sha512-YQbi46SBct6iKnszhSvdluqDmxCJA+Pu280Av9WICNwQmMxV7nLRHZfjQzwbPs3jeWnuAhE9Jy0NrnJ12Oz+0A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.24.2.tgz",
      "integrity": "sha512-+iDS6zpNM6EnJyWv0bMGLWSWeXGN/HTaF/LXHXHwejGsVi+ooqDfMCCTerNFxEkM3wYVcExkeGXNqshc9iMaOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.24.2.tgz",
      "integrity": "sha512-hTdsW27jcktEvpwNHJU4ZwWFGkz2zRJUz8pvddmXPtXDzVKTTINmlmga3ZzwcuMpUvLw7JkLy9QLKyGpD2Yxig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.24.2.tgz",
      "integrity": "sha512-LihEQ2BBKVFLOC9ZItT9iFprsE9tqjDjnbulhHoFxYQtQfai7qfluVODIYxt1PgdoyQkz23+01rzwNwYfutxUQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.24.2.tgz",
      "integrity": "sha512-q+iGUwfs8tncmFC9pcnD5IvRHAzmbwQ3GPS5/ceCyHdjXubwQWI12MKWSNSMYLJMq23/IUCvJMS76PDqXe1fxA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.24.2.tgz",
      "integrity": "sha512-7VTgWzgMGvup6aSqDPLiW5zHaxYJGTO4OokMjIlrCtf+VpEL+cXKtCvg723iguPYI5oaUNdS+/V7OU2gvXVWEg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
      "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
      "dev": true
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.29.1.tgz",
      "integrity": "sha512-ssKhA8RNltTZLpG6/QNkCSge+7mBQGUqJRisZ2MDQcEGaK93QESEgWK2iOpIDZ7k9zPVkG5AS3ksvD5ZWxmItw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.29.1.tgz",
      "integrity": "sha512-CaRfrV0cd+NIIcVVN/jx+hVLN+VRqnuzLRmfmlzpOzB87ajixsN/+9L5xNmkaUUvEbI5BmIKS+XTwXsHEb65Ew==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.29.1.tgz",
      "integrity": "sha512-2ORr7T31Y0Mnk6qNuwtyNmy14MunTAMx06VAPI6/Ju52W10zk1i7i5U3vlDRWjhOI5quBcrvhkCHyF76bI7kEw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.29.1.tgz",
      "integrity": "sha512-j/Ej1oanzPjmN0tirRd5K2/nncAhS9W6ICzgxV+9Y5ZsP0hiGhHJXZ2JQ53iSSjj8m6cRY6oB1GMzNn2EUt6Ng==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.29.1.tgz",
      "integrity": "sha512-91C//G6Dm/cv724tpt7nTyP+JdN12iqeXGFM1SqnljCmi5yTXriH7B1r8AD9dAZByHpKAumqP1Qy2vVNIdLZqw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.29.1.tgz",
      "integrity": "sha512-hEioiEQ9Dec2nIRoeHUP6hr1PSkXzQaCUyqBDQ9I9ik4gCXQZjJMIVzoNLBRGet+hIUb3CISMh9KXuCcWVW/8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.29.1.tgz",
      "integrity": "sha512-Py5vFd5HWYN9zxBv3WMrLAXY3yYJ6Q/aVERoeUFwiDGiMOWsMs7FokXihSOaT/PMWUty/Pj60XDQndK3eAfE6A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.29.1.tgz",
      "integrity": "sha512-RiWpGgbayf7LUcuSNIbahr0ys2YnEERD4gYdISA06wa0i8RALrnzflh9Wxii7zQJEB2/Eh74dX4y/sHKLWp5uQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.29.1.tgz",
      "integrity": "sha512-Z80O+taYxTQITWMjm/YqNoe9d10OX6kDh8X5/rFCMuPqsKsSyDilvfg+vd3iXIqtfmp+cnfL1UrYirkaF8SBZA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.29.1.tgz",
      "integrity": "sha512-fOHRtF9gahwJk3QVp01a/GqS4hBEZCV1oKglVVq13kcK3NeVlS4BwIFzOHDbmKzt3i0OuHG4zfRP0YoG5OF/rA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loongarch64-gnu": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loongarch64-gnu/-/rollup-linux-loongarch64-gnu-4.29.1.tgz",
      "integrity": "sha512-5a7q3tnlbcg0OodyxcAdrrCxFi0DgXJSoOuidFUzHZ2GixZXQs6Tc3CHmlvqKAmOs5eRde+JJxeIf9DonkmYkw==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.29.1.tgz",
      "integrity": "sha512-9b4Mg5Yfz6mRnlSPIdROcfw1BU22FQxmfjlp/CShWwO3LilKQuMISMTtAu/bxmmrE6A902W2cZJuzx8+gJ8e9w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.29.1.tgz",
      "integrity": "sha512-G5pn0NChlbRM8OJWpJFMX4/i8OEU538uiSv0P6roZcbpe/WfhEO+AT8SHVKfp8qhDQzaz7Q+1/ixMy7hBRidnQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.29.1.tgz",
      "integrity": "sha512-WM9lIkNdkhVwiArmLxFXpWndFGuOka4oJOZh8EP3Vb8q5lzdSCBuhjavJsw68Q9AKDGeOOIHYzYm4ZFvmWez5g==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.29.1.tgz",
      "integrity": "sha512-87xYCwb0cPGZFoGiErT1eDcssByaLX4fc0z2nRM6eMtV9njAfEE6OW3UniAoDhX4Iq5xQVpE6qO9aJbCFumKYQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.29.1.tgz",
      "integrity": "sha512-xufkSNppNOdVRCEC4WKvlR1FBDyqCSCpQeMMgv9ZyXqqtKBfkw1yfGMTUTs9Qsl6WQbJnsGboWCp7pJGkeMhKA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.29.1.tgz",
      "integrity": "sha512-F2OiJ42m77lSkizZQLuC+jiZ2cgueWQL5YC9tjo3AgaEw+KJmVxHGSyQfDUoYR9cci0lAywv2Clmckzulcq6ig==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.29.1.tgz",
      "integrity": "sha512-rYRe5S0FcjlOBZQHgbTKNrqxCBUmgDJem/VQTCcTnA2KCabYSWQDrytOzX7avb79cAAweNmMUb/Zw18RNd4mng==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.29.1.tgz",
      "integrity": "sha512-+10CMg9vt1MoHj6x1pxyjPSMjHTIlqs8/tBztXvPAx24SKs9jwVnKqHJumlH/IzhaPUaj3T6T6wfZr8okdXaIg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@types/estree": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
      "integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
      "dev": true
    },
    "node_modules/@vitejs/plugin-vue": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-vue/-/plugin-vue-5.2.1.tgz",
      "integrity": "sha512-cxh314tzaWwOLqVes2gnnCtvBDcM1UMdn+iFR+UjAn411dPT3tOmqrJjbMd7koZpMAmBM/GqeV4n9ge7JSiJJQ==",
      "dev": true,
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "peerDependencies": {
        "vite": "^5.0.0 || ^6.0.0",
        "vue": "^3.2.25"
      }
    },
    "node_modules/@vue/compiler-core": {
      "version": "3.5.13",
      "resolved": "https://registry.npmjs.org/@vue/compiler-core/-/compiler-core-3.5.13.tgz",
      "integrity": "sha512-oOdAkwqUfW1WqpwSYJce06wvt6HljgY3fGeM9NcVA1HaYOij3mZG9Rkysn0OHuyUAGMbEbARIpsG+LPVlBJ5/Q==",
      "dev": true,
      "dependencies": {
        "@babel/parser": "^7.25.3",
        "@vue/shared": "3.5.13",
        "entities": "^4.5.0",
        "estree-walker": "^2.0.2",
        "source-map-js": "^1.2.0"
      }
    },
    "node_modules/@vue/compiler-dom": {
      "version": "3.5.13",
      "resolved": "https://registry.npmjs.org/@vue/compiler-dom/-/compiler-dom-3.5.13.tgz",
      "integrity": "sha512-ZOJ46sMOKUjO3e94wPdCzQ6P1Lx/vhp2RSvfaab88Ajexs0AHeV0uasYhi99WPaogmBlRHNRuly8xV75cNTMDA==",
      "dev": true,
      "dependencies": {
        "@vue/compiler-core": "3.5.13",
        "@vue/shared": "3.5.13"
      }
    },
    "node_modules/@vue/compiler-sfc": {
      "version": "3.5.13",
      "resolved": "https://registry.npmjs.org/@vue/compiler-sfc/-/compiler-sfc-3.5.13.tgz",
      "integrity": "sha512-6VdaljMpD82w6c2749Zhf5T9u5uLBWKnVue6XWxprDobftnletJ8+oel7sexFfM3qIxNmVE7LSFGTpv6obNyaQ==",
      "dev": true,
      "dependencies": {
        "@babel/parser": "^7.25.3",
        "@vue/compiler-core": "3.5.13",
        "@vue/compiler-dom": "3.5.13",
        "@vue/compiler-ssr": "3.5.13",
        "@vue/shared": "3.5.13",
        "estree-walker": "^2.0.2",
        "magic-string": "^0.30.11",
        "postcss": "^8.4.48",
        "source-map-js": "^1.2.0"
      }
    },
    "node_modules/@vue/compiler-ssr": {
      "version": "3.5.13",
      "resolved": "https://registry.npmjs.org/@vue/compiler-ssr/-/compiler-ssr-3.5.13.tgz",
      "integrity": "sha512-wMH6vrYHxQl/IybKJagqbquvxpWCuVYpoUJfCqFZwa/JY1GdATAQ+TgVtgrwwMZ0D07QhA99rs/EAAWfvG6KpA==",
      "dev": true,
      "dependencies": {
        "@vue/compiler-dom": "3.5.13",
        "@vue/shared": "3.5.13"
      }
    },
    "node_modules/@vue/reactivity": {
      "version": "3.5.13",
      "resolved": "https://registry.npmjs.org/@vue/reactivity/-/reactivity-3.5.13.tgz",
      "integrity": "sha512-NaCwtw8o48B9I6L1zl2p41OHo/2Z4wqYGGIK1Khu5T7yxrn+ATOixn/Udn2m+6kZKB/J7cuT9DbWWhRxqixACg==",
      "dev": true,
      "dependencies": {
        "@vue/shared": "3.5.13"
      }
    },
    "node_modules/@vue/runtime-core": {
      "version": "3.5.13",
      "resolved": "https://registry.npmjs.org/@vue/runtime-core/-/runtime-core-3.5.13.tgz",
      "integrity": "sha512-Fj4YRQ3Az0WTZw1sFe+QDb0aXCerigEpw418pw1HBUKFtnQHWzwojaukAs2X/c9DQz4MQ4bsXTGlcpGxU/RCIw==",
      "dev": true,
      "dependencies": {
        "@vue/reactivity": "3.5.13",
        "@vue/shared": "3.5.13"
      }
    },
    "node_modules/@vue/runtime-dom": {
      "version": "3.5.13",
      "resolved": "https://registry.npmjs.org/@vue/runtime-dom/-/runtime-dom-3.5.13.tgz",
      "integrity": "sha512-dLaj94s93NYLqjLiyFzVs9X6dWhTdAlEAciC3Moq7gzAc13VJUdCnjjRurNM6uTLFATRHexHCTu/Xp3eW6yoog==",
      "dev": true,
      "dependencies": {
        "@vue/reactivity": "3.5.13",
        "@vue/runtime-core": "3.5.13",
        "@vue/shared": "3.5.13",
        "csstype": "^3.1.3"
      }
    },
    "node_modules/@vue/server-renderer": {
      "version": "3.5.13",
      "resolved": "https://registry.npmjs.org/@vue/server-renderer/-/server-renderer-3.5.13.tgz",
      "integrity": "sha512-wAi4IRJV/2SAW3htkTlB+dHeRmpTiVIK1OGLWV1yeStVSebSQQOwGwIq0D3ZIoBj2C2qpgz5+vX9iEBkTdk5YA==",
      "dev": true,
      "dependencies": {
        "@vue/compiler-ssr": "3.5.13",
        "@vue/shared": "3.5.13"
      },
      "peerDependencies": {
        "vue": "3.5.13"
      }
    },
    "node_modules/@vue/shared": {
      "version": "3.5.13",
      "resolved": "https://registry.npmjs.org/@vue/shared/-/shared-3.5.13.tgz",
      "integrity": "sha512-/hnE/qP5ZoGpol0a5mDi45bOd7t3tjYJBjsgCsivow7D48cJeV5l05RD82lPqi7gRiphZM37rnhW1l6ZoCNNnQ==",
      "dev": true
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
      "dev": true
    },
    "node_modules/entities": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-4.5.0.tgz",
      "integrity": "sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==",
      "dev": true,
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/esbuild": {
      "version": "0.24.2",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.24.2.tgz",
      "integrity": "sha512-+9egpBW8I3CD5XPe0n6BfT5fxLzxrlDzqydF3aviG+9ni1lDC/OvMHcxqEFV0+LANZG5R1bFMWfUrjVsdwxJvA==",
      "dev": true,
      "hasInstallScript": true,
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.24.2",
        "@esbuild/android-arm": "0.24.2",
        "@esbuild/android-arm64": "0.24.2",
        "@esbuild/android-x64": "0.24.2",
        "@esbuild/darwin-arm64": "0.24.2",
        "@esbuild/darwin-x64": "0.24.2",
        "@esbuild/freebsd-arm64": "0.24.2",
        "@esbuild/freebsd-x64": "0.24.2",
        "@esbuild/linux-arm": "0.24.2",
        "@esbuild/linux-arm64": "0.24.2",
        "@esbuild/linux-ia32": "0.24.2",
        "@esbuild/linux-loong64": "0.24.2",
        "@esbuild/linux-mips64el": "0.24.2",
        "@esbuild/linux-ppc64": "0.24.2",
        "@esbuild/linux-riscv64": "0.24.2",
        "@esbuild/linux-s390x": "0.24.2",
        "@esbuild/linux-x64": "0.24.2",
        "@esbuild/netbsd-arm64": "0.24.2",
        "@esbuild/netbsd-x64": "0.24.2",
        "@esbuild/openbsd-arm64": "0.24.2",
        "@esbuild/openbsd-x64": "0.24.2",
        "@esbuild/sunos-x64": "0.24.2",
        "@esbuild/win32-arm64": "0.24.2",
        "@esbuild/win32-ia32": "0.24.2",
        "@esbuild/win32-x64": "0.24.2"
      }
    },
    "node_modules/estree-walker": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
      "integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==",
      "dev": true
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.17",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.17.tgz",
      "integrity": "sha512-sNPKHvyjVf7gyjwS4xGTaW/mCnF8wnjtifKBEhxfZ7E/S8tQ0rssrwGNn6q8JH/ohItJfSQp9mBtQYuTlH5QnA==",
      "dev": true,
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.8",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.8.tgz",
      "integrity": "sha512-WNLf5Sd8oZxOm+TzppcYk8gVOgP+l58xNy58D0nbUnOxOWRWvlcCV4kUF7ltmI6PsrLl/BgKEyS4mqsGChFN0w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true
    },
    "node_modules/postcss": {
      "version": "8.4.49",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.49.tgz",
      "integrity": "sha512-OCVPnIObs4N29kxTjzLfUryOkvZEq+pf8jTF0lg8E7uETuWHA+v7j3c/xJmiqpX450191LlmZfUKkXxkTry7nA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "nanoid": "^3.3.7",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/rollup": {
      "version": "4.29.1",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.29.1.tgz",
      "integrity": "sha512-RaJ45M/kmJUzSWDs1Nnd5DdV4eerC98idtUOVr6FfKcgxqvjwHmxc5upLF9qZU9EpsVzzhleFahrT3shLuJzIw==",
      "dev": true,
      "dependencies": {
        "@types/estree": "1.0.6"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.29.1",
        "@rollup/rollup-android-arm64": "4.29.1",
        "@rollup/rollup-darwin-arm64": "4.29.1",
        "@rollup/rollup-darwin-x64": "4.29.1",
        "@rollup/rollup-freebsd-arm64": "4.29.1",
        "@rollup/rollup-freebsd-x64": "4.29.1",
        "@rollup/rollup-linux-arm-gnueabihf": "4.29.1",
        "@rollup/rollup-linux-arm-musleabihf": "4.29.1",
        "@rollup/rollup-linux-arm64-gnu": "4.29.1",
        "@rollup/rollup-linux-arm64-musl": "4.29.1",
        "@rollup/rollup-linux-loongarch64-gnu": "4.29.1",
        "@rollup/rollup-linux-powerpc64le-gnu": "4.29.1",
        "@rollup/rollup-linux-riscv64-gnu": "4.29.1",
        "@rollup/rollup-linux-s390x-gnu": "4.29.1",
        "@rollup/rollup-linux-x64-gnu": "4.29.1",
        "@rollup/rollup-linux-x64-musl": "4.29.1",
        "@rollup/rollup-win32-arm64-msvc": "4.29.1",
        "@rollup/rollup-win32-ia32-msvc": "4.29.1",
        "@rollup/rollup-win32-x64-msvc": "4.29.1",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/vite": {
      "version": "6.0.6",
      "resolved": "https://registry.npmjs.org/vite/-/vite-6.0.6.tgz",
      "integrity": "sha512-NSjmUuckPmDU18bHz7QZ+bTYhRR0iA72cs2QAxCqDpafJ0S6qetco0LB3WW2OxlMHS0JmAv+yZ/R3uPmMyGTjQ==",
      "dev": true,
      "dependencies": {
        "esbuild": "^0.24.2",
        "postcss": "^8.4.49",
        "rollup": "^4.23.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || ^20.0.0 || >=22.0.0",
        "jiti": ">=1.21.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vue": {
      "version": "3.5.13",
      "resolved": "https://registry.npmjs.org/vue/-/vue-3.5.13.tgz",
      "integrity": "sha512-wmeiSMxkZCSc+PM2w2VRsOYAZC8GdipNFRTsLSfodVqI9mbejKeXEGr8SckuLnrQPGe3oJN5c3K0vpoU9q/wCQ==",
      "dev": true,
      "dependencies": {
        "@vue/compiler-dom": "3.5.13",
        "@vue/compiler-sfc": "3.5.13",
        "@vue/runtime-dom": "3.5.13",
        "@vue/server-renderer": "3.5.13",
        "@vue/shared": "3.5.13"
      },
      "peerDependencies": {
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    }
  }
}

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
  "author": "Zenc0dr",
  "license": "MIT",
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.1",
    "vite": "^6.0.6",
    "vue": "^3.5.13"
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
`plugins/zen/threes/vite.config.js`
```
```