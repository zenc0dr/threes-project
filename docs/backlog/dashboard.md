---
title: "Обзор базы знаний"
---

# Обзор базы знаний проекта

## Общая статистика

```dataview
TABLE 
  length(rows) as "Количество фич"
FROM "backlog"
WHERE file.name != "README" AND file.name != "dashboard" AND file.name != "feature-template"
```

## Фичи по доменам

```dataview
TABLE 
  status as "Статус",
  epic as "Эпик",
  length(dependencies) as "Зависимости"
FROM "backlog"
WHERE file.name != "README" AND file.name != "dashboard" AND file.name != "feature-template"
SORT domain ASC
```

## Активные фичи

```dataview
TABLE 
  domain as "Домен",
  epic as "Эпик",
  length(dependencies) as "Зависимости"
FROM "backlog"
WHERE status = "active" AND file.name != "README" AND file.name != "dashboard" AND file.name != "feature-template"
SORT domain ASC
```

## Фичи по технологиям

```dataview
TABLE 
  status as "Статус",
  domain as "Домен",
  epic as "Эпик"
FROM "backlog"
WHERE file.name != "README" AND file.name != "dashboard" AND file.name != "feature-template"
SORT domain ASC
```

## Фичи с зависимостями

```dataview
TABLE 
  status as "Статус",
  domain as "Домен",
  dependencies as "Зависимости"
FROM "backlog"
WHERE dependencies AND file.name != "README" AND file.name != "dashboard" AND file.name != "feature-template"
SORT domain ASC
```

## Недавно обновлённые

```dataview
TABLE 
  status as "Статус",
  domain as "Домен",
  updated as "Обновлено"
FROM "backlog"
WHERE file.name != "README" AND file.name != "dashboard" AND file.name != "feature-template"
SORT updated DESC
LIMIT 10
```

## Архивные фичи

```dataview
TABLE 
  domain as "Домен",
  epic as "Эпик",
  updated as "Обновлено"
FROM "backlog"
WHERE status = "archived" AND file.name != "README" AND file.name != "dashboard" AND file.name != "feature-template"
SORT updated DESC
```

---

*Дашборд автоматически обновляется при изменении фич. Используйте фильтры в Obsidian для более детального анализа.* 