# Boilerplate of Nuxt, SCSS & Bulma

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


## Way to add SCSS with a newly installed nuxt project.

After installing nuxt, run

```
npm install sass sass-loader@10 fibers --save-dev
```

so that you can use sass. You can get this command from nuxt official website. Just check before you run this command so that you can change the command if the official document have changed it.

We will just run this command, nothing more. We will not edit our nuxt.config.js and so we have to import the sass file loacation everytime when we want to use that in a component or page.  Although it's little bit more work than **style-resources-module** but that module wasn't working perfectly for me! So, I have choosed this way. But both way works the same. You can inspect and see!

Only  import variables, mixins, functions (et cetera) as they won't exist in the actual build. Importing actual styles will include them in every component. So, it will be wise to  import acatual style only if they are global style.  


## Way to add Bulma with a newly installed nuxt project

### 1. Installation

```
npm install bulma

npm install bulma-start

```
bulma-start is a tiny npm package that includes the npm dependencies you need to build your own website with Bulma.

Check bulma's official website to know more.


#### Adding Bulma and the Customized Bootstrap


At first, create a folder in your nuxt project’s **assests** folder and also create a scss file inside the created folder. Suppose, the folder’s name is bulma and the file name is ‘mystyle.scss’. Now, on this mystyle.scss file, you can override any built-in custom Bulma variables.
But you need to import bulma styles in this mystyle.scss file too. From the Webpack page of bulma documentation, you will know that you need the following line to import Boostrap styles

```
@import "~bulma/bulma";

````

> Note: Make sure that you import this in the last line of your .scss file.  


After importing bootstrap style, you need to edit the nuxt.config.js 

```
export default {

 css: [ { src: '~/assets/bulma/mystyle.scss', lang: 'sass'} 
  ],
  
 }

```
This will not only compile the overridden bulma styles but also add the bootstrap style in the whole nuxt project.

```


## Can I use scss with bulma?

Yes, it's possible. In the 'components' folder, there is a 'bulmaExample.vue' file where I have used scss with bulma. And in the bottom section of that file, I have written some rules of how I will write scss with bulma.



## What's inside

1. In the 'components' folder, there is a 'bulmaExample.vue' file where I have used Bulma. There I have maintained my prefer style of writing html and css framework's class which I have found to be easier to look at and understand.  And in the bottom section of that file, I have written some rules of how I will write html and css framework's class.

2. Check Nuxt, Scss Boilerplate's branch to know more about what's inside.

3. In the 'assests' folder, there is a 'scss' folder where all my prefered Sass is stored. There is a component in the component section named as 'copyThis.vue' which you can copy everytime when you want to make a page, component or a layout.  You could use 'vbase' command but import code of Sass is also written down in the 'copyThis.vue' component, that helps, right?

