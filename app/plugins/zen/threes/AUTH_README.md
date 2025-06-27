# Система аутентификации Threes

## Обзор

Система аутентификации Threes построена на основе файловых токенов без использования Laravel-сессий. Каждый пользователь представлен одним токеном, хранящимся в зашифрованном виде.

## Архитектура

### Токены пользователей
- **Формат**: `user.{login}`
- **Хранение**: JSON-файлы в `TOKENS_STORAGE`
- **Шифрование**: Вся `data` токена шифруется через `TokensAuthHandler`

### Структура токена пользователя
```json
{
  "uuid": "user.zen",
  "data": {
    "password": "$2y$12$...",  // bcrypt хэш
    "email": "zen@example.com",
    "telegram_id": "123456789",
    "name": "ZenMaster",
    "data": {...} // произвольные данные
  },
  "created_at": "2024-01-01T00:00:00.000000Z",
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
  "token": "user.zen"
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
  "token": "user.zen",
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
- `ThreesAuth: user.zen`

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
- `ThreesAuth: user.zen`

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
- `ThreesAuth: user.zen`

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

- **Login.vue** - форма входа/регистрации
- **Profile.vue** - управление профилем пользователя
- **Logout.vue** - компонент выхода

## Безопасность

### Шифрование
- Вся `data` токена шифруется при создании и обновлении
- Расшифровка происходит автоматически при `Tokens::get()`
- Используется `TokensAuthHandler` для обработки шифрования

### Пароли
- Пароли хэшируются через `bcrypt` (`password_hash`)
- Проверка через `password_verify`
- Минимальная длина: 6 символов

### Валидация
- Логин: 3-20 символов, только буквы, цифры, подчеркивания
- Email: опциональная валидация формата
- Пароль: минимум 6 символов

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

## Middleware

### AuthMiddleware

Класс `Zen\Threes\Classes\AuthMiddleware` предоставляет методы для проверки авторизации:

```php
// Проверка авторизации
$auth_data = AuthMiddleware::checkAuth();

// Обязательная проверка с возвратом ошибки
$auth_data = AuthMiddleware::requireAuth();

// Проверка пароля
$is_valid = AuthMiddleware::verifyPassword($auth_data, $password);
```

## Конфигурация

### Переменные окружения

```env
TOKENS_STORAGE=/path/to/tokens/storage
```

### Структура папок

```
storage/threes/tokens/
├── user.zen.json
├── user.admin.json
└── user.test_user_1234567890.json
```

## Будущие возможности

- Синхронизация токенов между серверами через Threes API
- Добавление `last_call_at` для отслеживания активности
- Расширение системы ролей и разрешений
- Интеграция с внешними системами аутентификации 