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

- Para que los archivos markdown se vean los estilos, necesito instalar **"@tailwindcss/line-clamp@0.4.2"** y habilitar el plugin en el tailwind.config

- Para poder tener elementos jsx en markdown voy a intalar la extensión **pnpm install @astrojs/mdx@0.16.0 -E** y en el archivo astro.config, tienes que importar el archivo mdx y añadirlo a las integraciones.

  Para no tener que hacer las configuraciones, también se puede añadir con **pnpn astro add mdx** y astro haría las configuraciones por ti

  Si no se te ve el formato del archivo .mdx, instala la extensión [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

## Comentarios

-
