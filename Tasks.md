# Pautas:

- Cuando se finalice una feature/fix/tarea, se debe realizar un commit del mismo para no perder el historial de cambios.
- Cuando finalices una feature/fix/tarea, deben correrse todos los tests relacionados para validar que todo sigue funcionando correctamente. Si hay algún cambio a nivel de UI debe validarse con Playwright MCP para asegurar que el flujo de usuario sigue funcionando correctamente.
- Cuando finalices una feature/fix/tarea, debes construir las imágenes de Docker relacionadas para validar que siguen construyéndose correctamente. Recuerda que el DevOps Engineer debe validar que todas las imágenes afectadas por los cambios se construyen correctamente antes de aprobar cualquier cambio.




# ToDo
**Tareas, bug, features, etc. que el equipo de agentes debe realizar.**

- Crea un landing para este proyecto que estoy creando: `/Users/barckcode/repository/helmcode/ai/agent_crew`. Este landing debe ser una página web que explique de forma clara y concisa qué es este proyecto, qué funcionalidades tiene, cómo usarlo, etc. El diseño debe ser atractivo y profesional y su diseño debe basarse en `https://helmcode.com/`. Debe ser contenido estático ya que se desplegará sobre Cloudflare Pages por ende debes usar Astro para crear esta página. El código de esta página debe vivir dentro de `/Users/barckcode/repository/helmcode/ai/agent_crew_landing/web`  debe ser desplegado automáticamente a Cloudflare Pages cada vez que se hagan cambios en esa carpeta. El dominio donde se desplegará esta página es `https://agentcrew.helmcode.com/`. Recuerda que cada vez que termines esta tarea debes correr todos los tests relacionados para validar que todo sigue funcionando correctamente, incluyendo Playwright MCP para validar los flujos de usuario.


# MUST:
Necesito que crees todos los tests e2n, funcionales, unitarios y los que hagan falta para validar que todo lo anterior funciona correctamente. Recuerda que cada vez que termines una tarea debes correr todos los tests relacionados para validar que todo sigue funcionando correctamente, incluyendo Playwright MCP para validar los flujos de usuario.
