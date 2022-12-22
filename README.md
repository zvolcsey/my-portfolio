# My personal portfolio

## Overview

> ### My TypeScript + React portfolio website

[The website available here](https://zoltanvolcsey.onrender.com)

## Content

1. [Routing](#routing)
2. [Application struncture](#application-structure)
3. [Run locally](#run-locally)
4. [Port](#port)
5. [License](#license)

## Routing

- Home page (URL: /home)
  - This page contains **a hero section**.
- Projects page (URL: /projects)
  - This page contains **my projects** and **links to my other projects**.
- About page (URL: /about)
  - This page contains **a short introduction**.

## Application structure

`main.tsx` - The entry point of the client.

`root.tsx` - The main component of the component tree. This contains the main layout route and other routes.

`index.css` - This file contains the global css rules.

`app/` - This folder contains the types of the client side,

`assets/` This folder contains images.

`components/` This folder contains

- compnents and
- css files.

`routes/` - This folder contains

- the page related components and
- css files.

`errors/` - This folder contains

- the error pages related components and
- css files.

## Run locally

You need have Node v18.12.1 or higher.

```
  npm ci
  npm run dev
```

## Port

The project use 5173.

## License

MIT
