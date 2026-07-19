# Enjoying the programming

Rediseño del ejercicio **Instagram Photo Feed with Bootstrap**. El objetivo fue transformar una maqueta básica en una experiencia visual presentable, responsive y con interacciones reales. El contenido está dedicado a explorar lenguajes y tecnologías de programación.

## Qué se corrigió

- Se corrigió `nav-pill` por `nav-pills`, por lo que los controles de vistas usan ahora las clases correctas de Bootstrap.
- Se eliminaron los estilos en línea de cada imagen y se reemplazaron por una cuadrícula CSS reutilizable y adaptable.
- Se sustituyeron enlaces sin destino y controles poco accesibles por botones semánticos, con `aria-label` y textos alternativos.
- Se actualizó Bootstrap a la versión 5.3.3 e incorporó el bundle, que ya incluye Popper.
- Se corrigieron errores de escritura de la interfaz y se unificó el contenido en inglés.

## Mejoras de diseño

- Identidad visual nueva: tipografías DM Sans y Playfair Display, paleta cálida, mejor espaciado y jerarquía.
- El nombre de la página se actualizó a **Enjoying the programming** y el feed se amplió con 28 lenguajes y tecnologías de programación, incluyendo la lista de la encuesta mostrada en el proyecto (JavaScript, HTML/CSS, SQL, Python, Bash/Shell, TypeScript, Java, C#, C++, PowerShell, C, PHP, Go, Rust, Kotlin, Lua, Assembly, Ruby, Dart y Swift).
- Cuadrícula editorial con diferentes alturas para que el feed no se vea rígido o “cuadrado”.
- Vista alternativa en formato lista mediante las pestañas de Bootstrap.
- Diseño responsive para móvil, tableta y escritorio.
- Tema claro/oscuro con la preferencia guardada en `localStorage`.

## Funcionalidad añadida

El botón **New post** abre un formulario. Al publicar, se crea una nueva tarjeta al inicio de las dos vistas, sin recargar la página. Cada post se presenta en este orden: nombre de la página, nombre del lenguaje y explicación en inglés.

Los logotipos se sirven desde [Simple Icons](https://simpleicons.org/), un proyecto de iconos publicado bajo licencia CC0 1.0. Las marcas siguen perteneciendo a sus respectivos propietarios; los iconos se usan aquí únicamente para identificar las tecnologías.

## Cómo ejecutarlo

No requiere instalación ni servidor. Abre `index.html` en un navegador moderno. Para que los iconos, tipografías y Bootstrap se carguen correctamente, se necesita conexión a internet porque se obtienen desde CDN.

## Estructura

```
index.html   # Estructura, navegación, modal y contenedores de vistas
styles.css   # Sistema visual, layout responsive y temas
scripts.js   # Renderizado del feed, publicación y cambio de tema
```
