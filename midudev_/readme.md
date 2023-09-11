# Proyectos con Astro

En esta carpeta voy a tener todos los proyectos que [Midudev](https://midu.dev) vaya creando y yo ppracticarlos

## Comentarios importantes

- 👀 Ten activada la extensión de Astro para que se te vean los ficheros de manera correcta

- Los estilos en Astro tienen **scope**

- **color-scheme: dark light;** Propiedad de css que le dice que vamos a usar el modo oscuro y que los colores se adecuen a dicho modo. Siempre se puede cambiar de forma manual

- Astro es compatible con **archivos Markdown** de forma nativa

- Tmabién soporta archivos **.html**

- Para las rutas dinámicas, _aquellas que están dentro de subcarpetas dentro de la carpeta pages_, se necesita un `getStaticPath`:

  ```ts
    export function getStaticPath() {
        return [
            {params: {dog: 'clifford'}},
            {params: {dog: 'rover'}},
            {params: {dog: 'spot'}},
        ];
    }
  ```

- Astro, como componente, a veces vscode no lo pilla o te da errores que no son realies porque en el pnpm dev funciona, así que lo mejor es cerrar y abrir vsc y ya

- POr defecto los componentes son ESTÁTICOS, hasta los useStates de react o preact. Para hacerlos dinámicos, hay que añadirles al componente donde esté renderizándose, el counter por ejemplo en el Header, **client:visible**. Esto quiere decir que va a ser interactivo cunado sea visible para el cliente ( es la opción por default )

- Si queiro mantener un estado de algún componente cuando cambie de ruta añades al **componente** el **transition:persist**
