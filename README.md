# Boilerplate of Nuxt & SCSS

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## How to add SCSS with a newly installed nuxt project.

After installing nuxt, run 'npm install sass sass-loader@10 fibers --save-dev' so that you can use sass. You can get this command from nuxt official website. Just check before you run this command so that you can change the command if the official document have changed it.

We will just run this command, nothing more. We will not edit our nuxt.config.js and so we have to import the sass file loacation everytime when we want to use that in a component or page.  Although it's little bit more work than **style-resources-module** but that module wasn't working perfectly for me! So, I have choosed this way. But both way works the same. You can inspect and see!

Only  import variables, mixins, functions (et cetera) as they won't exist in the actual build. Importing actual styles will include them in every component. So, it will be wise to  import acatual style only if they are global style.  


## What's inside

In the 'assests' folder, there is a 'scss' folder where all my prefered Sass is stored. 

There is a component in the component section named as 'copyThis.vue' which you can copy everytime when you want to make a page, component or a layout.  You could use 'vbase' command but import code of Sass is also written down in the 'copyThis.vue' component, that helps, right?
