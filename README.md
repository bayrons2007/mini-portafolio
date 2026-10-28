# Mini portafolio personal

Portafolio web de Bayron Salgado, estudiante de Ingeniería Civil Informática. Presenta informacion sobre los proyectos realizados durante su formacion, fue realizado con React y Vite, con 5 secciones Inicio, Sobre mí, Habilidades, Proyectos y Contacto.

## Requisitos

- Node.js y npm.
- Un navegador web.
- Git para clonar el repositorio.

Comprueba que Node.js y npm estén instalados:

```bash
node --version
npm --version
```

## Instalación y ejecución

Clona el repositorio y entra en su carpeta:

```bash
git clone ```https://github.com/bayrons2007/mini-portafolio.git```
cd mini-portafolio
```

Instala las dependencias e inicia el servidor local:

```bash
npm install
npm run dev
```

Abre en el navegador la dirección que muestra la terminal. Para detener el servidor, presiona `Ctrl + C`.

## Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo de Vite. |

## Páginas

| Página | Ruta | Contenido |
|---|---|---|
| Inicio | `/` | Presentación personal y acceso a los proyectos. |
| Sobre mí | `/sobre-mi` | Estudios, intereses y objetivos. |
| Habilidades | `/habilidades` | Tecnologías, niveles estimados y herramientas. |
| Proyectos | `/proyectos` | Proyectos de menú y Tetris. |
| Contacto | `/contacto` | Formulario de nombre, correo y mensaje. |

El encabezado y el pie de página se comparten entre las páginas mediante el componente `Layout`.

## Proyectos incluidos

Los proyectos de menú y Tetris son páginas estáticas independientes guardadas en `public/`. Con el servidor de desarrollo activo, sus archivos de entrada son:

- Menú: `/menu/index.html`
- Tetris: `/tetris/index.html`

Las imágenes relacionadas están en `public/imagenes/`.

## Estructura

```text
mini-portafolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── imagenes/
│   │   ├── menu.png
│   │   ├── polar.jpeg
│   │   └── tetris.png
│   ├── menu/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   └── tetris/
│       ├── index.html
│       ├── script.js
│       └── style.css
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── FormularioContacto.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── TarjetaProyecto.jsx
│   ├── pages/
│   │   ├── Contacto.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Inicio.jsx
│   │   ├── Proyectos.jsx
│   │   └── SobreMi.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── .gitignore
├── .oxlintrc.json
├── package.json
├── package-lock.json
├── uso_de_IA
├── vite.config.js
└── README.md
└── Uso_de_IA

## Dificultades y soluciones

- Tuve problemas porque algunos nombres de archivos no coincidían con sus importaciones.
Lo solucioné haciendo coincidir las mayúsculas y minúsculas.

- La primera propuesta de la IA no incluía todos los bloques de la referencia visual.
Revisé la pauta y adapté el diseño y el contenido.

- Vite no encontraba React Router. Lo solucioné
instalando `react-router-dom` en la carpeta del proyecto.
