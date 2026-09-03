# Regalo para mi hamstercito 🐹💛

Una pequeña página animada de cumpleaños: un bosquecito de flores amarillas, un regalo que se abre con un click, y un hámster que aparece con un ramo en las patitas.

## Ver la página

Simplemente abre `index.html` en cualquier navegador — no necesita instalación ni servidor.

## Estructura del proyecto

```
.
├── index.html        # estructura de la página
├── css/
│   └── style.css     # estilos y animaciones
├── js/
│   └── script.js      # lógica de apertura del regalo
└── README.md
```

## Publicarla con un link (GitHub Pages)

1. Sube estos archivos a un repositorio nuevo en GitHub (respetando la misma estructura de carpetas).
2. En el repositorio, ve a **Settings → Pages**.
3. En "Build and deployment", elige **Deploy from a branch**, rama `main` y carpeta `/root`.
4. Guarda. En un par de minutos GitHub te dará un link como:
   `https://tu-usuario.github.io/nombre-del-repositorio/`
5. Ese es el link que puedes compartir 🎁

## Personalizar

- El mensaje final está en `index.html`, dentro de la clase `message-body`.
- Los colores (flores, caja, cielo, etc.) están centralizados como variables al inicio de `css/style.css`, en `:root`.
