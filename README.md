# Serna Elegance Showroom

Proyecto de frontend en React + TypeScript + Vite para tienda de camisas premium.

## Setup

```bash
git clone <repo-url>
cd serna-elegance-showroom
npm install
npm run dev
```

## Scripts

- `npm run dev` - iniciar servidor de desarrollo
- `npm run build` - generar build de producción
- `npm run preview` - previsualizar build
- `npm run test` - ejecutar Vitest

## Estructura principal

- `src/` - código fuente
- `public/` - archivos estáticos (`serna.png`, `photos/`)
- `src/pages/Index.tsx` - landing principal

## Prueba local y despliegue

- `npm run build` y subir carpeta `dist`

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Cómo desplegar

- Ejecuta `npm run build`
- Sube la carpeta `dist` a tu hosting preferido

## Dominio personalizado

- Configura el dominio en tu proveedor de hosting y apunta al build

