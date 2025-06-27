# Система аутентификации Threes

## Обзор

Система аутентификации Threes представляет собой файловую систему управления пользователями, построенную на основе токенов без использования традиционных сессий Laravel. Каждый пользователь представлен одним токеном, хранящимся в зашифрованном виде в файловой системе.

## Архитектура системы

### Основные компоненты

1. **Система токенов** - основа для хранения данных пользователей
2. **API аутентификации** - эндпоинты для регистрации, входа и управления
3. **Middleware авторизации** - проверка прав доступа
4. **Фронтенд компоненты** - интерфейс пользователя
5. **Система шифрования** - защита данных токенов

## Файловая структура

### Backend компоненты

#### 1. Система токенов
- **`app/plugins/zen/threes/classes/Tokens.php`** - основной класс для работы с токенами
- **`app/plugins/zen/threes/handlers/TokensHandlerInterface.php`** - интерфейс обработчиков токенов
- **`app/plugins/zen/threes/handlers/TokensAuthHandler.php`** - обработчик шифрования для токенов аутентификации

#### 2. API аутентификации
- **`app/plugins/zen/threes/api/auth/Register.php`** - регистрация пользователей
- **`app/plugins/zen/threes/api/auth/Login.php`** - вход в систему
- **`app/plugins/zen/threes/api/auth/Test.php`** - тестовые эндпоинты

#### 3. API управления пользователями
- **`app/plugins/zen/threes/api/user/Profile.php`** - получение профиля пользователя
- **`app/plugins/zen/threes/api/user/Update.php`** - обновление данных пользователя
- **`app/plugins/zen/threes/api/user/Delete.php`** - удаление аккаунта

#### 4. Middleware и утилиты
- **`app/plugins/zen/threes/classes/AuthMiddleware.php`** - проверка авторизации
- **`app/plugins/zen/threes/AUTH_README.md`** - документация по аутентификации

#### 5. Тестирование
- **`app/plugins/zen/threes/api/tests/AuthTests.php`** - тесты аутентификации
- **`app/plugins/zen/threes/api/tests/TokensTests.php`** - тесты системы токенов
- **`app/plugins/zen/threes/test_auth.php`** - скрипт тестирования

### Frontend компоненты

#### 1. Vue.js компоненты
- **`app/plugins/zen/threes/src/vue/screens/Login.vue`** - страница входа/регистрации
- **`app/plugins/zen/threes/src/vue/screens/Profile.vue`** - страница профиля
- **`app/plugins/zen/threes/src/vue/components/Logout.vue`** - компонент выхода
- **`app/plugins/zen/threes/src/vue/Threes.vue`** - главный компонент приложения

#### 2. Маршрутизация
- **`app/plugins/zen/threes/src/js/routes.js`** - конфигурация маршрутов Vue Router

## Механизм работы

### 1. Система токенов

#### Структура токена пользователя
```json
{
  "uuid": "user.{md5_hash_login}",
  "subtype": "user",
  "write": true,
  "data": {
    "password": "$2y$12$...",  // bcrypt хэш
    "email": "user@example.com",
    "telegram_id": "123456789",
    "name": "User Name",
    "data": {...} // произвольные данные
  },
  "created_at": "2024-01-01T00:00:00.000000Z",
  "last_call_at": "2024-01-01T12:00:00.000000Z"
}
```

#### Основные методы класса Tokens
- `Tokens::create($subtype, $payload)` - создание токена
- `Tokens::get($token)` - получение токена (с автоматической расшифровкой)
- `Tokens::update($token, $updates)` - обновление токена
- `Tokens::remove($token)` - удаление токена
- `Tokens::exists($token)` - проверка существования токена

#### Шифрование данных
- Все данные в поле `data` автоматически шифруются через `TokensAuthHandler`
- Шифрование происходит при создании и обновлении токена
- Расшифровка происходит автоматически при получении токена
- Используется `ths()->crypt()->encrypt()` и `ths()->crypt()->decrypt()`

### 2. Процесс регистрации

#### API эндпоинт: `POST /threes.api/auth.register:register`

**Валидация:**
- Логин: 3-20 символов, только буквы, цифры, подчеркивания
- Пароль: минимум 6 символов
- Email: опционально
- Проверка уникальности логина

**Процесс:**
1. Валидация входных данных
2. Создание MD5 хэша от логина
3. Формирование UUID токена: `user.{md5_hash}`
4. Хэширование пароля через `password_hash($password, PASSWORD_BCRYPT)`
5. Создание токена через `Tokens::create()`
6. Возврат токена пользователю

### 3. Процесс входа

#### API эндпоинт: `POST /threes.api/auth.login:login`

**Процесс:**
1. Валидация логина и пароля
2. Создание MD5 хэша от логина
3. Поиск токена: `user.{md5_hash}`
4. Проверка пароля через `password_verify()`
5. Обновление `last_call_at`
6. Возврат токена и данных пользователя

### 4. Проверка авторизации

#### AuthMiddleware методы

**`AuthMiddleware::checkAuth()`**
- Проверяет заголовок `ThreesAuth` в запросе
- Получает данные токена через `Tokens::get()`
- Возвращает данные пользователя или `null`

**`AuthMiddleware::requireAuth()`**
- Вызывает `checkAuth()`
- Возвращает ошибку если пользователь не авторизован

**`AuthMiddleware::verifyPassword()`**
- Проверяет пароль через `password_verify()`

### 5. Управление профилем

#### Получение профиля: `GET /threes.api/user.profile:get`
- Требует авторизацию
- Возвращает данные пользователя без пароля

#### Обновление профиля: `POST /threes.api/user.update:update`
- Требует авторизацию
- Поддерживает смену пароля (с проверкой текущего)
- Обновляет email, имя, telegram_id, произвольные данные

#### Удаление аккаунта: `POST /threes.api/user.delete:delete`
- Требует авторизацию и подтверждение паролем
- Удаляет токен через `Tokens::remove()`

### 6. Фронтенд авторизация

#### Хранение токена
```javascript
// Сохранение после входа
localStorage.setItem('ths_token', response.token);

// Удаление при выходе
localStorage.removeItem('ths_token');
```

#### Автоматическое добавление заголовка
```javascript
const authToken = localStorage.getItem('ths_token');
const axios_options = authToken ? {
    headers: {
        'ThreesAuth': authToken
    }
} : null;
```

#### Защита маршрутов
```javascript
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('ths_token');
    const isAuthenticated = !!token;

    if (to.meta.requiresAuth && !isAuthenticated) {
        return next({ name: "Login" });
    }

    if (to.meta.requiresGuest && isAuthenticated) {
        return next({ name: "FrameShort" });
    }

    next();
});
```

## Безопасность

### 1. Шифрование данных
- Все данные пользователей шифруются в файлах токенов
- Используется `TokensAuthHandler` для автоматического шифрования/расшифровки
- Ключи шифрования управляются через `ths()->crypt()`

### 2. Хэширование паролей
- Пароли хэшируются через `password_hash($password, PASSWORD_BCRYPT)`
- Проверка через `password_verify($password, $hash)`
- Минимальная длина пароля: 6 символов

### 3. Валидация данных
- Логин: регулярное выражение `/^[a-zA-Z0-9_]{3,20}$/`
- Пароль: минимум 6 символов
- Email: опциональная валидация
- Проверка уникальности логинов

### 4. Защита API
- Все защищенные эндпоинты используют `AuthMiddleware::requireAuth()`
- Токен передается через заголовок `ThreesAuth`
- Автоматическая проверка валидности токена

## Тестирование

### Тестовые эндпоинты
- `GET /threes.api/auth.test:test` - проверка работы API
- `GET /threes.api/auth.test:create-test-user` - создание тестового пользователя
- `GET /threes.api/auth.test:check-auth` - проверка авторизации

### Автоматические тесты
- `AuthTests.php` - полный цикл тестирования регистрации/входа/профиля
- `TokensTests.php` - тестирование операций с токенами
- `test_auth.php` - скрипт для ручного тестирования

## Конфигурация

### Переменные окружения
- `TOKENS_STORAGE` - путь к папке хранения токенов
- Ключи шифрования для `ths()->crypt()`

### Структура папок
```
storage/threes/tokens/
├── user.{md5_hash_1}.json
├── user.{md5_hash_2}.json
└── ...
```

## Особенности реализации

### 1. Файловая система вместо БД
- Пользователи хранятся как JSON файлы
- Каждый файл представляет одного пользователя
- Автоматическое шифрование данных

### 2. Отсутствие сессий
- Нет зависимости от Laravel сессий
- Авторизация через токены в заголовках
- Статус авторизации хранится в localStorage

### 3. Простота масштабирования
- Легко добавлять новые поля пользователя
- Простая миграция данных
- Независимость от структуры БД

### 4. Безопасность
- Шифрование всех данных пользователей
- Хэширование паролей через bcrypt
- Валидация всех входных данных

## API Reference

### Аутентификация
- `POST /threes.api/auth.register:register` - регистрация
- `POST /threes.api/auth.login:login` - вход

### Управление пользователями
- `GET /threes.api/user.profile:get` - получение профиля
- `POST /threes.api/user.update:update` - обновление профиля
- `POST /threes.api/user.delete:delete` - удаление аккаунта

### Тестирование
- `GET /threes.api/auth.test:test` - тест API
- `GET /threes.api/auth.test:create-test-user` - создание тестового пользователя
- `GET /threes.api/auth.test:check-auth` - проверка авторизации

## Заключение

Система аутентификации Threes представляет собой современное решение для управления пользователями с акцентом на безопасность и простоту использования. Архитектура на основе токенов обеспечивает гибкость и масштабируемость, а файловая система хранения упрощает развертывание и обслуживание. 