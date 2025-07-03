# База знаний проекта

Эта папка содержит описания фич проекта в плоской структуре для максимальной масштабируемости.

## Назначение

Это не классический бэклог менеджмента, а **база знаний** для понимания архитектуры и механик проекта. Каждая фича описывает модуль/феномен/смысл/слой/сервис проекта.

## Структура

```
backlog/
├── README.md                    # Этот файл
├── dashboard.md                 # Автоматические отчёты
├── templates/
│   └── feature-template.md      # Шаблон для новых фич
└── [фичи проекта...]           # Описания фич
```

## Принципы организации

1. **Плоская структура** - все фичи в одной папке
2. **Метаданные-управляемая** - фильтрация через YAML frontmatter
3. **Тег-ориентированная** - группировка через теги
4. **Связно-центричная** - связи важнее иерархии папок

## Домены проекта

- `auth` - аутентификация и авторизация
- `api` - API endpoints и интеграции
- `ui` - пользовательский интерфейс
- `infra` - инфраструктура и DevOps
- `data` - работа с данными
- `business` - бизнес-логика

## Быстрые ссылки

### По домену
- [Аутентификация](obsidian://search?query=tag%3A%23domain%2Fauth)
- [API](obsidian://search?query=tag%3A%23domain%2Fapi)
- [UI](obsidian://search?query=tag%3A%23domain%2Fui)
- [Инфраструктура](obsidian://search?query=tag%3A%23domain%2Finfra)

### По технологии
- [Backend](obsidian://search?query=tag%3A%23tech%2Fbackend)
- [Frontend](obsidian://search?query=tag%3A%23tech%2Ffrontend)
- [API](obsidian://search?query=tag%3A%23tech%2Fapi)

### По статусу
- [Активные](obsidian://search?query=tag%3A%23status%2Factive)
- [Архивные](obsidian://search?query=tag%3A%23status%2Farchived)

## Создание новой фичи

1. Скопируйте шаблон: `templates/feature-template.md`
2. Заполните метаданные в YAML frontmatter
3. Добавьте описание и документацию
4. Установите связи с другими фичами
5. Добавьте соответствующие теги

### Рекомендуемые теги
```yaml
tags: 
  - "type/feature"
  - "domain/api"          # или другой домен
  - "tech/backend"
  - "status/active"
```

## Полезные команды

- `Ctrl+Shift+F` - глобальный поиск
- `Ctrl+G` - граф связей
- `Ctrl+Shift+E` - обратные ссылки
- `Ctrl+Shift+L` - исходящие ссылки 