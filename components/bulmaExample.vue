<template>

<div class=
"has-text-black  
has-text-centered">

<!-- Title Text -->

<div class=
"is-size-2 has-background-primary
py-6
scss-example-1">
This is a boilerplate of nuxt, scss & bulma
</div>

<!-- Text -->

<div class=
"is-size-4 has-background-success 
py-4
scss-example-2">
Let's see some example of Bulma:
</div>

<!-- Text -->
<div class="columns">

<div class=
"is-size-4 has-text-weight-medium has-background-warning
column is-4 my-4">
Button
</div>

</div>

<!-- Button -->

<button class="button is-white">
White
</button>

<button class="button is-light">
Light
</button>

<button class="button is-dark">
Dark
</button>

<button class="button is-black">
Black
</button>

<button class="button is-text">
Text
</button>

<button class="button is-ghost">
Ghost
</button>



</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

@import '~/assets/scss/style.scss';

.scss-example-1{
    border: 2px solid black;
}

.scss-example-2{
    color: $white;
}

</style>


/*
(According to me!) Method of writing html and css framework's class which will be easy to look at and understand 

1. Use 'div' everywhere as bulma reset all html elements.

2. Add comment like the above example's <template> section

3. When you will just need to use one css class, then you can use it like above example's button section.

4. But if there is multiple css class to be used then above example div where multiple css class is used. 

5. You may find pattern of writing multiple css classes in the above example Like all the classes which provide good look for the content is in a line, all the classes which position the content in the right place is in another line and all the classes which are for styling with scss is in another line. 

*/