# Vue TailwindCSS Boilerplate (Build Tool: Vue CLI)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run prod
```


### Lints and fixes files
```
npm run lint
```



###  Compatibility of packages version

This boilerplate was made on 12 Oct, 2021. Till that day, we needed to install compatible version of tailwindcss, postcss and autoprefixer with Vue CLI. We couldn't install all the latest packages.

```bash
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

The above command was mentioned on tailwindCSS website and worked but there wasn't any mention of `postcss-import` plugin's compatible version.

```bash
npm install -D postcss-import@latest 
```
I tried but the latest version didn't work but the the following version worked:

```bash
npm install -D postcss-import@^12
```