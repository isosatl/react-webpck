# ReactJS Project with Webpack

This project demonstrates how to set up a React application from scratch using Webpack and Babel.

## Prerequisites

- Node.js v18.18.0 or newer (see [.nvmrc](./.nvmrc))
- npm installed

## Getting Started

### 1. Set Node Version

If you use nvm, run:

```
nvm install
nvm use
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm start
```

This will start the app at [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```
npm run build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
react-webpck/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   └── index.js
├── .babelrc
├── .nvmrc
├── package.json
├── webpack.config.js
├── eslint.config.js
└── README.md
```

## Scripts

- `npm start` — Runs the development server with hot reloading.
- `npm run build` — Builds the app for production.

## Configuration Files

- [webpack.config.js](./webpack.config.js)
- [.babelrc](./.babelrc)
- [eslint.config.js](./eslint.config.js)
- [.nvmrc](./.nvmrc)

## Notes

- Edit `src/App.js` to change your main React component.
- Webpack and Babel are configured in `webpack.config.js` and `.babelrc` respectively.
- ESLint is set up with the new flat config in `eslint.config.js` (requires Node.js v18.18.0+).