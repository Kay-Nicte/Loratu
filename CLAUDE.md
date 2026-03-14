# Loratu

## Proyecto
App-juego educativa: aprende cultura general / idiomas / programación y cultiva tu patio andaluz. HTML/CSS/JS single-file (por ahora).

## Agentes

| Agente | Modelo | Rol |
|---|---|---|
| researcher | Opus | Investiga antes de implementar: docs, SDKs, issues conocidos. Crea plan en `docs/` |
| implementer | Sonnet | Ejecuta el plan paso a paso. Lee de `docs/`, no improvisa |
| tester | Haiku | Traduce el test plan del researcher a código. No decide qué testear |
| fixer | Sonnet | Diagnostica y arregla bugs con análisis de impacto |
| explorer | Haiku | Solo lectura. Responde preguntas rápidas sobre el codebase |

## Flujo
`researcher (Opus)` → `/clear` → `implementer (Sonnet)` → `/clear` → `tester (Haiku)`

## Reglas
- El researcher escribe el plan en `docs/plan.md` antes de cualquier implementación
- El implementer sigue el plan estrictamente, no improvisa
- El tester no decide qué testear — sigue el test plan del researcher
- El fixer analiza impacto antes de tocar código
- Rama principal de trabajo: `develop`
- Commits en español
- HTML single-file por ahora (garden-learn.html)

## Stack
- HTML5 / CSS3 / Vanilla JS
- Single file: `garden-learn.html`
- Sin frameworks ni bundlers
- localStorage para persistencia
- Diseño: patio andaluz (azulejos, fuente, terracota, arcos)
