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

We will just run this command, nothing more. We will not edit our nuxt.config.js and so we have to import the sass file loacation everytime when we want to use that in a component or page. But I guess that's not a hard work to do. Check the style section of the index.vue page. You will see that I have just imported one scss file. Actually other scss file are imported on that one main file. 


  There is a component in the component section named as 'copyThis.vue' which you can copy everytime when you want to make a page, component or a layout.  You could use 'vbase' command but import code of Sass is also written down in the 'copyThis.vue' component, that helps, right?