# Boilerplate of Nuxt, SCSS & Bootstrap 5

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


## How Bootstrap 5 is added in this nuxt project


#### Installation 

In the bootstrap’s official documentation, you will get a **Webpack** page where the way of getting started with bootstrap by using Webpack is documented. From that page, you will know that at first, you need to install bootstrap

```
npm install bootstrap@next
```

> Note: The command will change, currently bootstrap 5 is in the beta version.


After installing the bootstrap, from the 'webpack' page, you will know that you need to install some loaders to compile Bootstrap.

```
npm install --save-dev sass sass-loader fibers postcss postcss-loader autoprefixer 

```

> Note: Installation of fibers is not mentioned in bootstrap documentation but synchronous compilation with sass (2x speed increase) is enabled automatically when fibers is installed.



#### Adding the CSS Part of Bootstrap and the Customized Bootstrap


At first, create a folder in your nuxt project’s **assests** folder and also create a scss file inside the created folder. Suppose, the folder’s name is bootstrap and the file name is ‘mystyle.scss’. Now, on this mystyle.scss file, you can override any built-in custom Bootstrap variables.
But you need to import bootstrap styles in this mystyle.scss too. From the Webpack page of bootstrap documentation, you will know that you need the following line to import Boostrap styles

```
@import "~bootstrap/scss/bootstrap";

````

> Note: Make sure that you import this in the last line of your .scss file.  


After importing bootstrap style, you need to edit the nuxt.config.js 

```
export default {

 css: [ { src: '~/assets/bootstrap/mystyle.scss', lang: 'sass'} 
  ],
  
 }

```
This will not only compile the overridden bootstrap styles but also add the bootstrap style in the whole nuxt project.


#### Adding the Javascript Part of Bootstrap  

From the webpack page of the documentation, you will also know that you need to import Javascript and the way of doing it. But you need to import Javascript a little bit differently in nuxt.
First, download Bootstrap. You will get a ‘css’ and a ‘js’ folder on that downloaded folder. There are many files under those two folders. If you want to know which file contains what, you can read that in the documentation. Currently, there is a page named ‘content’ under the ‘Getting Started’ section in the documentation where you read about file structure and which files contain what.
Anyway, we just need one file from the js folder. The name of that file is **bootstrap.bundle.min.js** It has not only all the js files but ‘popper’ is included. From the webpack page of the documentation, you will know that “Bootstrap depends on Popper, which is specified in the peer dependencies property. This means that you will have to make sure to add it to your package.json using npm install @popperjs/core.” But as we are using ‘bootstrap.bundle.min.js’, we will not need to install popper.
Anyway, copy that ‘bootstrap.bundle.min.js’ and paste that file on your nuxt project’s **static** folder. Then you need to edit your nuxt.config.js to use it.
```
export default {
      
    script: [
      {
        src: '/bootstrap.bundle.min.js',
      }
    ]
  }

```

That's it! Enjoy Bootstrap 5 with your nuxt project!





