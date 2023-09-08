# Astro Starter Kit: Basics

Proyacto de astro para practicar. He inicializado el proyecto con **pnpm**

## Instalaciones

- Voy a tener como dependencia para los estilos Tailwind, la versión 3.2.4 -> **pnpm install @astrojs/tailwind@3.0.1 tailwindcss@3.2.4** o hacer un **pnpm astro add tailwind** y me olvido de todo. Hago la primera para hacer las configuraciones pertinentes.

  En la primera config, necesita importar en el archivo astro.config.mjs el propio tailwind e integrarlo en defindConfig

  Además, necesitas crear la carpeta styles y dentro de esta un **bases.css** donde tengas la siguiente configuración:

  ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  ```

- Voy a usar la página [HyperUi](https://www.hyperui.dev), una librería de componentes de tailwind que simplemente es copiar y pegar

## Comentarios

-
