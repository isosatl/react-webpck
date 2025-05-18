# ReactJS Project with Webpack

This project demonstrates how to set up a React application from scratch using Webpack and Babel.

## Prerequisites

- Node.js and npm installed

## Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run the development server

```
npm start
```

This will start the app at [http://localhost:3000](http://localhost:3000).

### 3. Build for production

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
├── package.json
├── webpack.config.js
└── README.md
```

## Scripts

- `npm start` — Runs the development server with hot reloading.
- `npm run build` — Builds the app for production.

## Notes

- Edit `src/App.js` to change your main React component.
- Webpack and Babel are configured in `webpack.config.js` and `.babelrc` respectively.