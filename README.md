# Tic-Tac-Vue

**Tic-Tac-Vue** is a simple JavaScript Single Page Application (SPA) written with [Vue](https://vuejs.org/v2/guide/index.html), [Vuex](https://vuex.vuejs.org/) and [Vue Router](https://router.vuejs.org/). Its goal is to be a "case study" for beginners who want to learn Vue and its powerful ecosystem.

Click [here](https://testal.app/tic-tac-vue/) to try the online demo version.

![](tic-tac-vue.gif)

## Table of content

- [Methodologies](#methodologies)
- [Technical skills](#technical-skills)
- [Install](#install)
- [Usage](#usage)

## Methodologies

In this project I adopted two methodologies to have a better factored code and organized source files: BEM and Atomic Design.

### BEM

**BEM** (which means Block Element Modifier) is a methodology that helps you to create reusable components in front-end development. It's all about splitting your CSS classes using **Blocks**, **Elements** and **Modifiers**. The final DOM could be verbose, but you will have a better factored source code and, because of you don't have to nest CSS classes, your CSS bundle will result less heavy.

Click [here](http://getbem.com/naming/) if you want to go deeper into BEM.

### Atomic Design

**[Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)** is a methodology for creating design systems.
Similarly to chemistry, you can organize your components file (in this scenario Vue Single File Components) using **atoms**, **molecules** and **organisms**.

#### Atoms

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

#### Molecules

Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.

#### Organisms

Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

## Technical skills

First of all, I strongly suggest you to have a look at [Vue documentation](https://vuejs.org/guide/introduction.html), especially to:

- [Vue handlers](https://vuejs.org/guide/essentials/event-handling.html#Method-Event-Handlers)
- [Vue props](https://vuejs.org/guide/components/props.html)
- [Vue computed properties](https://vuejs.org/guide/essentials/computed.html#Computed-Properties)
- [Vue Single File Components](https://vuejs.org/guide/scaling-up/sfc.html)
- [Vuex state](https://vuex.vuejs.org/guide/state.html)
- [Vuex getters](https://vuex.vuejs.org/guide/getters.html)
- [Vuex mutations](https://vuex.vuejs.org/guide/mutations.html)
- [Vue Router](https://router.vuejs.org/)

## Install

You can install **Tic-Tac-Vue** cloning the project:

```
git clone https://github.com/Sanfra1407/tic-tac-vue.git
```

then install npm dependencies:

```
npm install
```

## Usage

Since this project has been developed with [Vite.js](https://vitejs.dev/), you can use its own integrated CLI commands to serve, build or to have a preview of the application.

#### Start dev server

```
npm run dev
```

#### Compiles and minifies for production

```
npm run build
```

#### Preview of the built application

```
npm run preview
```

#### Lints and fixes files

```
npm run lint
```

#### Deploy

To deploy your application, you can follow the [official Vite.js guide](https://vitejs.dev/guide/static-deploy.html#deploying-a-static-site).
