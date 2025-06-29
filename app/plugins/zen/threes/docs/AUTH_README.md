# Система аутентификации Threes

## Обзор

Система аутентификации Threes построена на основе файловых токенов без использования Laravel-сессий. Каждый пользователь представлен одним токеном, хранящимся в зашифрованном виде.

## Архитектура

### Токены пользователей
- **Формат**: `user.{md5_hash_login}`
- **Хранение**: JSON-файлы в `TOKENS_STORAGE`
- **Шифрование**: Вся `data` токена шифруется через `TokensAuthHandler`

### Структура токена пользователя
```json
{
  "uuid": "user.7e9aedd97b5ec4590edb8281ff12b168",
  "subtype": "user",
  "write": true,
  "data": {
    "password": "$2y$12$...",  // bcrypt хэш
    "email": "zen@example.com",
    "telegram_id": "123456789",
    "name": "ZenMaster",
    "data": {...} // произвольные данные
  },
  "created_at": "2024-01-01T00:00:00.000000Z",
  "storage_at": null,
  "last_call_at": "2024-01-01T12:00:00.000000Z"
}
```

## API Endpoints

### Регистрация
```
POST /threes.api/auth.register:register
```

**Параметры:**
- `login` (обязательно) - логин пользователя (3-20 символов, буквы, цифры, подчеркивания)
- `password` (обязательно) - пароль (минимум 6 символов)
- `email` (опционально) - email пользователя
- `name` (опционально) - имя пользователя
- `telegram_id` (опционально) - Telegram ID
- `data` (опционально) - произвольные данные

**Ответ:**
```json
{
  "success": true,
  "messages": [{"type": "success", "text": "Пользователь успешно зарегистрирован"}],
  "token": "user.7e9aedd97b5ec4590edb8281ff12b168"
}
```

### Аутентификация
```
POST /threes.api/auth.login:login
```

**Параметры:**
- `login` (обязательно) - логин пользователя
- `password` (обязательно) - пароль

**Ответ:**
```json
{
  "success": true,
  "messages": [{"type": "success", "text": "Успешная авторизация"}],
  "token": "user.7e9aedd97b5ec4590edb8281ff12b168",
  "user": {
    "login": "zen",
    "email": "zen@example.com",
    "name": "ZenMaster",
    "telegram_id": "123456789"
  }
}
```

### Получение профиля
```
GET /threes.api/user.profile:get
```

**Заголовки:**
- `ThreesAuth: user.7e9aedd97b5ec4590edb8281ff12b168`

**Ответ:**
```json
{
  "success": true,
  "user": {
    "login": "zen",
    "email": "zen@example.com",
    "name": "ZenMaster",
    "telegram_id": "123456789",
    "created_at": "2024-01-01T00:00:00.000000Z",
    "last_call_at": "2024-01-01T12:00:00.000000Z"
  }
}
```

### Обновление профиля
```
POST /threes.api/user.update:update
```

**Заголовки:**
- `ThreesAuth: user.7e9aedd97b5ec4590edb8281ff12b168`

**Параметры:**
- `email` (опционально) - новый email
- `name` (опционально) - новое имя
- `telegram_id` (опционально) - новый Telegram ID
- `data` (опционально) - новые произвольные данные
- `current_password` (обязательно при смене пароля) - текущий пароль
- `new_password` (опционально) - новый пароль

**Ответ:**
```json
{
  "success": true,
  "messages": [{"type": "success", "text": "Данные пользователя обновлены"}],
  "user": {
    "login": "zen",
    "email": "new@example.com",
    "name": "NewName",
    "telegram_id": "987654321"
  }
}
```

### Удаление аккаунта
```
POST /threes.api/user.delete:delete
```

**Заголовки:**
- `ThreesAuth: user.7e9aedd97b5ec4590edb8281ff12b168`

**Параметры:**
- `password` (обязательно) - пароль для подтверждения

**Ответ:**
```json
{
  "success": true,
  "messages": [{"type": "success", "text": "Аккаунт успешно удален"}]
}
```

## Фронтенд

### Авторизация на клиенте

1. **Сохранение токена после входа:**
```javascript
localStorage.setItem('ths_token', response.token);
```

2. **Автоматическое добавление заголовка в API запросы:**
```javascript
const authToken = localStorage.getItem('ths_token');
const axios_options = authToken ? {
    headers: {
        'ThreesAuth': authToken
    }
} : null;
```

3. **Выход из системы:**
```javascript
localStorage.removeItem('ths_token');
```

### Компоненты

- **Login.vue** - форма входа/регистрации с переключением режимов
- **Profile.vue** - управление профилем пользователя (обновление данных, смена пароля, удаление аккаунта)
- **Logout.vue** - компонент выхода из системы

### Роутинг

Система использует Vue Router с защищенными маршрутами:

```javascript
const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true }
    },
    {
        path: "/profile",
        name: "Profile", 
        component: Profile,
        meta: { requiresAuth: true }
    },
    {
        path: "/app/node/:nid?",
        name: "FrameShort",
        component: Ui,
        meta: { requiresAuth: true },
    }
];
```

### Проверка авторизации

Компонент `Threes.vue` автоматически проверяет валидность токена при загрузке:

```javascript
checkAuth() {
    const token = localStorage.getItem('ths_token')
    if (!token) {
        this.checkingAuth = false
        this.$router.push('/login')
        return;
    }

    // Проверяем валидность токена
    ths.api({
        api: 'user.profile:get',
        then: (response) => {
            this.checkingAuth = false
            if (response.success) {
                this.user = response.user
            } else {
                // Токен недействителен
                localStorage.removeItem('ths_token')
                this.$router.push('/login')
            }
        }
    });
}
```

## Безопасность

### Шифрование
- Вся `data` токена шифруется при создании и обновлении через `TokensAuthHandler`
- Расшифровка происходит автоматически при `Tokens::get()`
- Используется `ths()->crypt()->encrypt()` и `ths()->crypt()->decrypt()`

### Пароли
- Пароли хэшируются через `bcrypt` (`password_hash`)
- Проверка через `password_verify`
- Минимальная длина: 6 символов

### Валидация
- Логин: 3-20 символов, только буквы, цифры, подчеркивания
- Email: опциональная валидация формата
- Пароль: минимум 6 символов

### Защита токенов
- Токены имеют флаг `write` для предотвращения повторного обновления
- При обновлении токена флаг `write` устанавливается в `false`
- Только токены с `write: true` могут быть обновлены

## Тестирование

### Тестовые API

```
GET /threes.api/auth.test:test
GET /threes.api/auth.test:create-test-user
GET /threes.api/auth.test:check-auth
```

### Создание тестового пользователя
```bash
curl -X POST "http://threes.dc/threes.api/auth.test:create-test-user"
```

### Проверка авторизации
```bash
curl -H "ThreesAuth: user.test_user_1234567890" \
     "http://threes.dc/threes.api/auth.test:check-auth"
```

### Полные тесты системы
```
GET /threes.api/tests.AuthTests:testRegistrationAndLogin
GET /threes.api/tests.TokensTests:testTokenOperations
GET /threes.api/tests.TokensTests:testAuthTokenEncryption
```

## Классы и интерфейсы

### Auth
Класс `Zen\Threes\Classes\Auth` предоставляет методы для проверки авторизации:

```php
// Проверка авторизации
$auth_data = Auth::getAuthData();

// Обязательная проверка с возвратом ошибки
$auth_data = Auth::check();

// Проверка пароля
$is_valid = Auth::verifyPassword($auth_data, $password);
```

### Tokens
Класс `Zen\Threes\Classes\Tokens` управляет токенами:

```php
// Создание токена
$token = Tokens::create('user', $data);

// Получение токена
$token_data = Tokens::get($token_id);

// Обновление токена
$updated = Tokens::update($token_id, $updates);

// Удаление токена
$deleted = Tokens::remove($token_id);
```

### ThreesApi
Базовый класс для API с авторизацией:

```php
abstract class ThreesApi
{
    protected function requireAuth(callable $callback): array
    {
        try {
            $this->auth = ths()->auth()::check();
            return $callback();
        } catch (AuthException $e) {
            ths()->messages()->addMessage($e->getMessage(), 'error');
            return ['success' => false];
        }
    }
}
```

## Конфигурация

### Переменные окружения

```env
TOKENS_STORAGE=/path/to/tokens/storage
```

### Структура папок

```
storage/threes/tokens/
├── user.7e9aedd97b5ec4590edb8281ff12b168.json
├── user.admin.json
└── user.test_user_1234567890.json
```

## Обработчики токенов

### TokensAuthHandler
Обработчик для токенов типа `auth` и `user`:

- **onCreate**: Шифрует данные при создании токена
- **onGet**: Расшифровывает данные при получении токена  
- **onUpdate**: Шифрует данные при обновлении токена
- **onRemove**: Хук при удалении токена

### Регистрация обработчиков
```php
protected static array $handlers_map = [
    'auth' => \Zen\Threes\Handlers\TokensAuthHandler::class,
    'user' => \Zen\Threes\Handlers\TokensAuthHandler::class,
];
```

## Сообщения и уведомления

Система использует встроенную систему сообщений:

```php
ths()->messages()->addMessage('Сообщение', 'success|error|warning|info');
```

Сообщения отображаются через компонент `ThreesAlerts.vue`.

## Будущие возможности

- Синхронизация токенов между серверами через Threes API
- Расширение системы ролей и разрешений
- Интеграция с внешними системами аутентификации
- Двухфакторная аутентификация
- Ограничение попыток входа
- Автоматическое удаление неактивных токенов 