# My personal portfolio

## Overview

It is the repository of my personal website.

## Content

1. [Routing Guideline](#routing-guideline)
2. [Application struncture](#application-structure)
3. [Dependencies](#dependencies)
4. [Run locally](#run-locally)
5. [Port](#port)
6. [License](#license)
7. [Getting Started with Create React App](#getting-started-with-create-react-app)
8. [Available Scripts](#available-scripts)
9. [Learn more about CRA and React](#learn-more)

## Routing Guideline

- Home page (URL: /home)
  - This page contains **a hero section**.
- Projects page (URL: /projects)
  - This page contains **my projects**, what you can try it and **links to my other projects**.
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
  - `@types/jest`
  - `testing-library/jest-dom`
  - `testing-library/react`
  - `testing-library/user-event`

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

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
