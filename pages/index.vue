<template>
  <div>
    <p class=para-1>This is the nuxt-scss boilerplate.</p>
    <p class="para-2">After installing nuxt, run 'npm install sass sass-loader@10 fibers --save-dev' so that you can use sass. You can get this command from nuxt official website. Just check before you run this command so that you can change the command if the official document have changed it.</p>
    <p class="para-3"> We will just run this command, nothing more. We will not edit our nuxt.config.js and so we have to import the sass file loacation everytime when we want to use that in a component or page. But I guess that's not a hard work to do. Check the style section of the index.vue page. You will see that I have just imported one scss file. Actually other scss file are imported on that one main file. 
    </p>

   
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

@import '~/assets/scss/style.scss';

.para-1{
  background:$red;
  font-size: 2rem;
}

.para-2{
  background:$teal;
  font-size: 1.5rem;
}

.para-3{
  background:lighten($color: $teal, $amount: 10);
  font-size: 1.5rem;
}
</style>