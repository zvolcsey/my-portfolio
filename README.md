# My personal portfolio

## Overview

> ### My TypeScript + React portfolio website

[The website available here](https://zoltanvolcsey.onrender.com)

## Content

1. [Routing Guideline](#routing-guideline)
2. [Application struncture](#application-structure)
3. [Dependencies](#dependencies)
4. [Available Scripts](#available-scripts)
5. [Run locally](#run-locally)
6. [Port](#port)
7. [License](#license)

## Routing Guideline

- Home page (URL: /home)
  - This page contains **a hero section**.
- Projects page (URL: /projects)
  - This page contains **my projects** and **links to my other projects**.
- About page (URL: /about)
  - This page contains **a short introduction**.

## Application structure

`index.tsx` - The entry point of the client.

`App.tsx` - The main component of the component tree. This contains the main layout route and other routes.

`index.css` - This file contains the global css rules.

`app/` - This folder contains the types of the client side,

`assets/` This folder contains images.

`components/` This folder contains

- compnents and
- css files.

`pages/` - This folder contains

- the page related components and
- css files.

## Dependencies

- Basic react packages
  - `react`, `@types/react`
  - `react-dom`, `@types/react-dom`
  - `react-scripts`
  - `@types/node`
  - `web-vitals`
- `typescript` - The app use TypeScript.
- `react-router-dom` - For the routing using React Router package version 6.
- Font Awesome
  - `fortawesome/fontawesome-svg-core` - For using SVG icons.
  - `fortawesome/free-solid-svg-icons` - For using free solid icons from Font Awesome package.
  - `fortawesome/free-regular-svg-icons` - For using free regular icons from Font Awesome package.
  - `fortawesome/free-brands-svg-icons` - For using free brands icons from Font Awesome package.
  - `fortawesome/react-fontawesome` - For using FontAwesomeIcon component.
- Testing
  - `jest`
  - `@types/jest`
  - `testing-library/jest-dom`
  - `testing-library/react`
  - `testing-library/user-event`
- Prettier
  - `prettier`
- ESLint
  - `@typescript-eslint/eslint-plugin`
  - `@typescript-eslint/parser`
  - `eslint`
- Prettier and ESLint
  - `eslint-config-prettier`
  - `@types/eslint-config-prettier`

## Available Scripts

- `npm start` - starts the app in development mode
- `npm build` - builds the app for production to the `/build` folder
- `npm test` - launches the test-runner in the interactive watch mode
- `npm eject` - removes the single build dependency from the project, **As contributor you do NOT have to ever use this scripts!**

## Run locally

You need have Node v16.14.0 or higher.

```
  npm ci
  npm start
```

## Port

The project use 3000.

## License

MIT
