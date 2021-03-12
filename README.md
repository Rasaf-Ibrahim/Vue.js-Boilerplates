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



## How scss is added in this nuxt project

Check Nuxt, Scss boilerplate's **Readme.md** to know that! 


## Way to add Bulma with a newly installed nuxt project

### Installation

```
npm install bulma

npm install bulma-start

```
bulma-start is a tiny npm package that includes the npm dependencies you need to build your own website with Bulma.

Check bulma's official website to know more.


#### Adding Bulma and the Customized Bulma


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



