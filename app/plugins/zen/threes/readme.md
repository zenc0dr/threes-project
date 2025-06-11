### Threes
Threes — это инструмент разработчика, позволяющий создавать сложные бизнес-логики и автоматизации с помощью рекурсивной модульной транспиляции, посредством описания существующего кода в абстрактные структуры, которые затем преобразуются в исполняемый код.
### Стадия разработки
Пока проект находится на стадии разработки, этот readme.md будет постоянно изменяться, так что пока что нет какой-то понятно структуры. Какие-то разделы могу быть в начале а какие-то в конце, так что предлагаю использовать меню-структуру в Obsidian чтобы быстро перемещаться между нужными разделами.
### Форма интеграции
В данной реализации платформа выполнена в виде плагина к OctoberCMS v3, который в свою очередь работает на Laravel, что позволяет системе гибко развиваться и иметь готовые инструменты для построения интерфейсов.
### Корневые файлы Threes
Файлы Threes находятся по адресу `plugins/zen/threes/` все дальнейшие внутренние пути формируются на основании этого
1. `.gitignore`  - Правила для системы версионирования
2. `init.php` - Инициализатор: Регистрирует функции-хелперы (на данный момент она одна `ths()->`)
3. `package.json` - Файл, содержащий метаданные, включая зависимости и скрипты для системы сборки
4. `package-lock.json`-  Файл, фиксирующий точные версии зависимостей для системы сборки
5. `Plugin.php`  - Основной файл плагина в OctoberCMS, содержащий его метаданные, регистрацию компонентов и обработку событий
6. `plugin.yaml` - Файл конфигурации плагина в OctoberCMS, содержащий метаданные, такие как название, описание, автор и зависимости
7. `readme.md` - Этот файл
8. `routes.php` - Маршрутизация
9. `Threes.php` - Родительский класс Threes
10. `webpack.mix.js` - Файл сборки Laravel mix

### Переменные окружения
`.evn`
```bash
APP_URL=http://threes.dc
BACKEND_URI=/console
DB_CONNECTION=pgsql
DB_HOST=threes-db
DB_PORT=5432
DB_DATABASE=threes
DB_USERNAME=threes
DB_PASSWORD=threes
# Тут идут настройки и их значения по умолчанию, в .env они добавляются только при переопределении
NODES_STORAGE=storage/threes/nodes
```
>Посмотреть какие переменные окружения существуют и механики их формирования, можно в файле `plugins/zen/threes/classes/helpers/Env.php`

### Сборка фронтенда
Актуализация исходников - `npm i`
Сборка в режиме dev - `npx mix`
Сборка в режиме обновления - `npx mix watch` || `pnpm exec mix watch`
Сборка production - `npx mix --production` || `pnpm exec mix --production`

### ths() Хелпер
Инициация плагина начинается с файла `plugins/zen/threes/init.php` в котором объявляется хелпер `Ths`
```php
if (!function_exists('ths')) {  
    function ths(): \Zen\Threes\Threes
    {
        return \Zen\Threes\Threes::getInstance();
    }
}
```
>С этого момента, в системе доступен хелпер `ths()`

За хелпер `ths()` отвечает класс `Zen\Threes\Threes` который наследуется от класса `Zen\Threes\classes\Helpers`
###### Таблица методов ths()
| Метод        | Входные параметры                                                                                                                                                                   | Класс в `Zen\Threes\`     | Назначение                                                                                                                                                                                                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| api          | `string $path*`  -  Путь до метода, включая класс<br>`string $method*`  -  Имя метода<br>`mixed $data` - Необяхательные передаваемые данные в метод                                 |                           | Базовый механизм внутреннего api, позволяет вызывать методы из папки `plugins/zen/threes/`<br>Пример: `ths()->api('debug.Tests', 'test');`<br>Данный метод api существует для динамической маршрутизации. Этот же метод можно запустить перейдя по ссылке http://threes.dc/threes.api/debug.Tests:test |
| settings     | `string $key`* - Ключ настройки                                                                                                                                                     | `Models\Settings`         | Доступ к настройкам плагина. Узнать какие поля в настройках существуют можно посмотрев файл `plugins/zen/threes/models/settings/fields.yaml`<br>На данный момент это author_token - Токен автора юнитов.                                                                                               |
| carbon       | `$date (null)` - Строка содержащая дату<br>`$format (null)` - Указание формата парсинга даты                                                                                        | `Classes\Helpers\Carbon`  | Преобразует строку $date в объет Carbon испольуя инструкцию $format                                                                                                                                                                                                                                    |
| requestSave  | `string $name` ("default") - Ключ запроса                                                                                                                                           | Classes\Helpers\Debug`    | Сохранить данные запроса (POST или GET)<br>Пример: `ths()->requestSave();`                                                                                                                                                                                                                             |
| requestLoad  | `string $name` ("default") - Ключ запроса                                                                                                                                           | `Classes\Helpers\Debug`   | Загрузить данные запроса                                                                                                                                                                                                                                                                               |
| requestExec  | `string $name` ("default") - Ключ запроса                                                                                                                                           | `Classes\Helpers\Debug`   | Выполнить запрос                                                                                                                                                                                                                                                                                       |
| requestDebug | `string $name` ("default") - Ключ запроса                                                                                                                                           | `Classes\Helpers\Debug`   | Автоматически сохранит данные если они подаются, и выполнит подгрузку данных если они НЕ подаются                                                                                                                                                                                                      |
| checkDir     | `string $file_path*` - Путь до файла<br>`int $permissions` (0777) - Права доступа<br>                                                                                               | `Classes\Helpers\Files`   | Проверить адрес файла и рекурсивно создать недостающие папки                                                                                                                                                                                                                                           |
| filesList    | `string $dir_path*` - Папка с файлами<br>`bool $recursive` (false)                                                                                                                  | `Classes\Helpers\Files`   | Возвращает коллекцию со списком файлов в указанной папке                                                                                                                                                                                                                                               |
| fromJson     | `string $string*` - Строка json<br>`int\|bool $assoc` (true) - Ассоциативный массив                                                                                                 | `Classes\Helpers\Json`    | Преобразовать json-строку в массив                                                                                                                                                                                                                                                                     |
| fromJsonFile | `string $file_path*` - Путь до json<br>`int\|bool $assoc` (true) - Ассоциативный массив                                                                                             | `Classes\Helpers\Json`    | Прочитать массив из json-файла                                                                                                                                                                                                                                                                         |
| toJson       | `array $arr*` - Входной массив<br>`bool $pretty_print` (true) - Красивый json  <br>`bool $no_slashes`  (false) - Подавлять экранирование                                            | `Classes\Helpers\Json`    | Преобразовать массив в json-строку                                                                                                                                                                                                                                                                     |
| toJsonFile   | `string $file_path*` - Путь до json<br>`array $arr*` - Входной массив<br>`bool $pretty_print` (true) - Красивый json  <br>`bool $no_slashes`  (false) - Подавлять экранирование<br> | `Classes\Helpers\Json`    | Сохранить массив в json-файл                                                                                                                                                                                                                                                                           |
| fromYaml     | `string $string` - Yaml-строка                                                                                                                                                      | `Classes\Helpers\Yaml`    | Преобразовать yaml-строку в массив                                                                                                                                                                                                                                                                     |
| fromYamlFile | `string $file_path*` - Путь до yaml<br>`int\|bool $assoc` (true) - Ассоциативный массив                                                                                             | `Classes\Helpers\Yaml`    | Прочитать массив из yaml-файла                                                                                                                                                                                                                                                                         |
| toYaml       | `array $arr*` - Входной массив<br>`int $inline` (10) - Вложенность<br>`int $indent` (4) - Отступы                                                                                   | `Classes\Helpers\Yaml`    | Преобразовать массив в yaml-строку                                                                                                                                                                                                                                                                     |
| toYamlFile   | `string $file_path*` - Путь к файлу<br>`int $inline` (10) - Вложенность<br>`int $indent` (4) - Отступы                                                                              | `Classes\Helpers\Yaml`    | Сохранить массив в yaml-файл                                                                                                                                                                                                                                                                           |
| createUuid   |                                                                                                                                                                                     | `Classes\Helpers\Strings` | Сгенерировать UUID                                                                                                                                                                                                                                                                                     |
| createToken  | `int $length` (8) - Длинна строки                                                                                                                                                   | `Classes\Helpers\Strings` | Сгенерировать случайную строку с заданной длинной                                                                                                                                                                                                                                                      |
>Все эти методы нужны для более простого и понятного взаимодействия с системой в отношении часто-встречающихся задач.
### Консольные команды artisan
| Команда                   | Описание                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| php artisan threes:vector | Сгенерировать описание кода файлов проекта для ai-анализа, в виде одного `.md` файла `app/storage/threes_vector.md` |

### Базовые нюансы которые нужно знать при разработке новых типов
###### 1. Конфигурация типа нода
Для того чтобы появился новый тип нод нужно создать вот такой файл `storage/threes/types/Threes.NodeText.json`.  Определить  хранилище можно в переменной окружения `TYPES_STORAGE` по умолчанию это `storage/threes/types`.
Имя типа состоит из двух фрагментов `{ИмяАвтора}.{ИмяТипа}.json`
```json
{  
    "class": "Zen.Threes.Nodes.NodeText.NodeText",  
    "files": [  
        "plugins/zen/threes/nodes/NodeText/NodeText.php",  
        "plugins/zen/threes/nodes/NodeText/NodeText.vue"  
    ],  
    "store": {  
        "group": "Документы",  
        "author": "Alex Blaze",  
        "tags": ["text", "document"],  
        "created_at": "2025-06-09 13:15"  
    }  
}
```

`class` - Класс типа нода указанный в формате dot notation
`files` - Файлы необходимые для работы нода
`store` - Узел магазина
	`group` - Группа нод
	`author` - Автор
	`tags` - Тэги
	`created_at` - Создано

###### 2. Необходимые методы класса типа нода
```php
<?php  
  
namespace Zen\Threes\Nodes\NodeText;  
  
use Zen\Threes\Models\Node;  
  
class NodeText  
{  
    private Node $node;  
    private mixed $data;  
  
    public function __construct($data = null)  
    {  
        if ($data) { // Вот такие данные будут входить в класс.
            $this->node = $data['node'];  
            $this->data = $data['data'];  
        }  
    }  
  
    public function template(): array  
    {  
        return [  
            'icon' => base_path('plugins/zen/threes/src/images/icons/document.svg'),  
            'name' => "Новый документ",  
            'data' => 'Привет мир!',  
            'props' => [  
                'self_content' => true,  
                'show_children' => true,  
                'tree' => true,  
                'schema' => true,  
                'store' => false,  
                'store_data' => [  
                    'group' => 'Документы',  
                    'author' => 'Threes',  
                    'tags' => ["text", "document"],  
                    'created_at' => now()->toDateTimeString(),  
                ]  
            ]  
        ];  
    }  
  
    public function component()  
    {  
  
    }  
  
    public function getSelfContent(): array  
    {  
        return $this->getSchema();  
    }  
  
    public function setSelfContent()  
    {  
        return $this->data;  
    }  
  
    public function getSchema(): array  
    {  
        return [  
            'component' => 'NodeText',  
            'data' => $this->data,  
        ];  
    }  
  
    public function setSchema()  
    {  
        return $this->data;  
    }  
}
```