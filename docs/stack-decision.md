# Технический стек (зафиксирован)

## Выбранный стек
- **Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS.
- **3D:** react-three-fiber + @react-three/drei + three.js.
- **State management:** Zustand.
- **Backend API:** FastAPI + Pydantic + SQLAlchemy 2.0.
- **База данных:** PostgreSQL 16.
- **Кэш/очереди (опционально на MVP+):** Redis.
- **Деплой:** Docker Compose (dev), затем Kubernetes/managed services (prod).

## Почему этот стек
- Быстрый time-to-market для web и Telegram WebApp.
- TypeScript на фронте снижает ошибки в сложном UI с 3D-сценой.
- FastAPI ускоряет разработку API и валидации медицинских анкет.
- PostgreSQL хорошо подходит для справочников, правил и аналитики.

## Целевые версии (MVP)
- Node.js 20 LTS
- Python 3.11+
- PostgreSQL 16

## Монорепо структура
```text
/apps/web            # Next.js frontend
/apps/api            # FastAPI backend
/packages/shared     # общие DTO/enum/схемы
/data                # seed-справочники
/docs                # архитектура и продуктовые артефакты
```
