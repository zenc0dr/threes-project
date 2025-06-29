# Система токенов Threes

## Обзор

Класс `Zen\Threes\Classes\Tokens` представляет собой центральную систему управления токенами в Threes. Токены - это файловые JSON-объекты, которые могут содержать произвольные данные и поддерживают различные типы обработки через систему обработчиков.

## Архитектура

### Структура токена
```json
{
  "uuid": "auth.7e9aedd97b5ec4590edb8281ff12b168",
  "subtype": "auth",
  "write": true,
  "data": {
    "user_id": 123,
    "permissions": ["read", "write"],
    "session": {
      "ip": "192.168.1.1",
      "user_agent": "Mozilla/5.0..."
    }
  },
  "created_at": "2024-01-01T00:00:00.000000Z",
  "storage_at": null
}
```

### Поля токена
- **uuid** - уникальный идентификатор токена (формат: `{subtype}.{32-символьный_хэш}`)
- **subtype** - тип токена (auth, user, session, magic и др.)
- **write** - флаг разрешения записи (защита от повторного обновления)
- **data** - произвольные данные токена (может быть зашифрованы)
- **created_at** - время создания токена
- **storage_at** - время последнего сохранения (опционально)

## Основные методы

### Создание токена
```php
// Создание простого токена
$token = Tokens::create('auth');

// Создание токена с данными
$token = Tokens::create('user', [
    'uuid' => 'user.custom_id',
    'data' => ['user_id' => 123, 'permissions' => ['admin']],
    'write' => true
]);
```

**Параметры:**
- `$subtype` (обязательно) - тип токена
- `$payload` (опционально) - массив с данными токена

**Возвращает:** массив с данными созданного токена

### Получение токена
```php
$token_data = Tokens::get('auth.7e9aedd97b5ec4590edb8281ff12b168');
```

**Параметры:**
- `$token` - полный идентификатор токена

**Возвращает:** массив с данными токена или `null` если не найден

### Проверка существования
```php
if (Tokens::exists('auth.7e9aedd97b5ec4590edb8281ff12b168')) {
    // Токен существует
}
```

**Возвращает:** `bool`

### Обновление токена
```php
$updated = Tokens::update('auth.7e9aedd97b5ec4590edb8281ff12b168', [
    'data' => ['new_field' => 'value'],
    'write' => false
]);
```

**Параметры:**
- `$token` - идентификатор токена
- `$updates` - массив с обновлениями

**Возвращает:** обновленный токен или `null` если обновление невозможно

**Ограничения:**
- Токен должен существовать
- Флаг `write` должен быть `true`
- При установке `write: true` в обновлениях, поле игнорируется

### Удаление токена
```php
$deleted = Tokens::remove('auth.7e9aedd97b5ec4590edb8281ff12b168');
```

**Возвращает:** `bool` - успешность удаления

## Система обработчиков

### Концепция
Обработчики позволяют настраивать поведение токенов разных типов:
- Шифрование/дешифрование данных
- Валидация при создании/обновлении
- Дополнительная логика при операциях

### Регистрация обработчиков
```php
protected static array $handlers_map = [
    'auth' => \Zen\Threes\Handlers\TokensAuthHandler::class,
    'user' => \Zen\Threes\Handlers\TokensAuthHandler::class,
    // 'session' => \Zen\Threes\Handlers\TokensSessionHandler::class,
];
```

### Интерфейс обработчика
```php
interface TokensHandlerInterface
{
    public function onCreate(array $data): array;
    public function onGet(array $data): array;
    public function onUpdate(array $data, array $updates): array;
    public function onRemove(array $data): void;
}
```

### Методы обработчика

#### onCreate
Вызывается при создании токена. Позволяет модифицировать данные перед сохранением.
```php
public function onCreate(array $data): array
{
    if (isset($data['data'])) {
        // Шифруем данные
        $json = ths()->toJson([$data['data']]);
        $data['data'] = ths()->crypt()->encrypt($json);
    }
    return $data;
}
```

#### onGet
Вызывается при получении токена. Позволяет модифицировать данные перед возвратом.
```php
public function onGet(array $data): array
{
    if (isset($data['data'])) {
        // Расшифровываем данные
        $json = ths()->crypt()->decrypt($data['data']);
        $data['data'] = ths()->fromJson($json)[0];
    }
    return $data;
}
```

#### onUpdate
Вызывается при обновлении токена. Позволяет модифицировать обновления.
```php
public function onUpdate(array $data, array $updates): array
{
    if (array_key_exists('data', $updates)) {
        // Шифруем новые данные
        $json = ths()->toJson([$updates['data']]);
        $updates['data'] = ths()->crypt()->encrypt($json);
    }
    return array_merge($data, $updates);
}
```

#### onRemove
Вызывается при удалении токена. Позволяет выполнить дополнительную логику.
```php
public function onRemove(array $data): void
{
    // Дополнительная логика при удалении
    // Например, очистка связанных ресурсов
}
```

## Типы токенов

### Auth токены
- **Обработчик:** `TokensAuthHandler`
- **Назначение:** Аутентификация пользователей
- **Особенности:** Данные автоматически шифруются
### User токены
- **Обработчик:** `TokensAuthHandler`
- **Назначение:** Хранение данных пользователей
- **Особенности:** Данные автоматически шифруются
### Magic токены
- **Обработчик:** отсутствует
- **Назначение:** Простые токены без шифрования
- **Особенности:** Данные хранятся в открытом виде
### Session токены
- **Обработчик:** закомментирован
- **Назначение:** Сессии пользователей
- **Особенности:** Планируется для будущих версий

## Безопасность

### Защита от повторного обновления
```php
// При создании токена
$token = Tokens::create('auth', ['write' => true]);

// При первом обновлении
$updated = Tokens::update($token['uuid'], [
    'data' => ['modified' => true],
    'write' => false  // Блокируем дальнейшие обновления
]);

// Последующие попытки обновления вернут null
$blocked = Tokens::update($token['uuid'], ['data' => ['blocked' => true]]);
// $blocked === null
```

### Шифрование данных
- Токены с обработчиками автоматически шифруют данные
- Шифрование происходит на уровне файловой системы
- Расшифровка прозрачна для пользователя API

### Валидация токенов
- Проверка формата UUID при парсинге
- Валидация существования файлов
- Проверка прав на запись

## Хранение

### Структура файлов
```
storage/threes/tokens/
├── auth.7e9aedd97b5ec4590edb8281ff12b168.json
├── user.admin.json
├── magic.test_token.json
└── session.user_session.json
```

### Формат файлов
- Каждый токен хранится в отдельном JSON-файле
- Имя файла соответствует UUID токена
- Расширение: `.json`

### Путь к хранилищу
```php
protected static function path(): string
{
    return self::$storage_path ??= rtrim(ths()->env('TOKENS_STORAGE'), '/');
}
```

## Конфигурация

### Переменные окружения
```env
TOKENS_STORAGE=/path/to/tokens/storage
```

### Настройка обработчиков
```php
// Добавление нового обработчика
protected static array $handlers_map = [
    'auth' => \Zen\Threes\Handlers\TokensAuthHandler::class,
    'user' => \Zen\Threes\Handlers\TokensAuthHandler::class,
    'custom' => \App\Handlers\CustomTokensHandler::class,
];
```

## Примеры использования

### Создание токена аутентификации
```php
$auth_token = Tokens::create('auth', [
    'data' => [
        'user_id' => 123,
        'permissions' => ['read', 'write'],
        'session' => [
            'ip' => $_SERVER['REMOTE_ADDR'],
            'user_agent' => $_SERVER['HTTP_USER_AGENT'],
            'created_at' => now()->toISOString()
        ]
    ]
]);
```

### Создание пользовательского токена
```php
$user_token = Tokens::create('user', [
    'uuid' => 'user.' . md5($login),
    'data' => [
        'password' => password_hash($password, PASSWORD_BCRYPT),
        'email' => $email,
        'name' => $name,
        'telegram_id' => $telegram_id
    ],
    'last_call_at' => now()->toISOString()
]);
```

### Создание простого токена
```php
$magic_token = Tokens::create('magic', [
    'data' => ['simple' => 'data', 'without' => 'encryption']
]);
```

### Обновление токена
```php
$updated = Tokens::update($token_id, [
    'data' => array_merge($current_data, ['new_field' => 'value']),
    'storage_at' => now()->toISOString(),
    'write' => false  // Блокируем дальнейшие обновления
]);
```

### Проверка и получение токена
```php
if (Tokens::exists($token_id)) {
    $token_data = Tokens::get($token_id);
    if ($token_data && $token_data['write']) {
        // Токен существует и может быть обновлен
        $can_update = true;
    }
}
```

## Тестирование

### Тестовые методы
```php
// Тест основных операций с токенами
GET /threes.api/tests.TokensTests:testTokenOperations

// Тест шифрования auth токенов
GET /threes.api/tests.TokensTests:testAuthTokenEncryption
```

### Примеры тестов
```php
// Создание и проверка токена
$token = Tokens::create('auth');
$uuid = $token['uuid'];
$token_id = "auth.{$uuid}";

assert(Tokens::exists($token_id), 'Token must exist');
assert(Tokens::get($token_id) !== null, 'Token must be retrievable');

// Тест обновления
$updated = Tokens::update($token_id, ['data' => ['test' => true]]);
assert($updated !== null, 'Update must succeed');

// Тест блокировки
$blocked = Tokens::update($token_id, ['data' => ['blocked' => true]]);
assert($blocked === null, 'Locked token must not allow update');

// Тест удаления
assert(Tokens::remove($token_id), 'Token must be deleted');
assert(!Tokens::exists($token_id), 'Token must no longer exist');
```

## Ограничения и особенности

### Ограничения
- Токены с `write: false` не могут быть обновлены
- UUID должен соответствовать формату `{subtype}.{32_символа}`
- Файловая система должна поддерживать запись

### Особенности
- Автоматическое создание UUID при отсутствии
- Ленивая загрузка обработчиков
- Прозрачное шифрование/дешифрование
- Поддержка произвольных данных

### Производительность
- Кэширование обработчиков в памяти
- Прямая работа с файловой системой
- Минимальные накладные расходы

## Будущие возможности

- Поддержка Redis для кэширования
- Автоматическая очистка устаревших токенов
- Система событий для токенов
- Поддержка метаданных токенов
- Интеграция с системой логирования
- Поддержка токенов с TTL (Time To Live)
- Система миграций для токенов 