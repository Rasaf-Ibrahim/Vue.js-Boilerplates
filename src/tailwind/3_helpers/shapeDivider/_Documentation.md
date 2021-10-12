
&nbsp;
### Shape divider classes & where to use which one

&nbsp;



```html
<!-- Section --> 
<section class="relative pb-40">

    <!-- Shape Divider -->
    <div class="shape-divider-bottom-180_r">
        <svg class="shape-rotate_r h-36" viewBox="0 0 1200 120">
          <path class="fill-current text-gray-500" d="..." opacity=".25" ></path>
          <path class="fill-current text-gray-400" d="..." opacity=".5" ></path>
          <path class="fill-current text-gray-500" d="..." ></path>
        </svg>
     </div>

 </section> <!-- End:Section --> 
```


- The section where you want to have the shape divider must have a `relative` class. (In the above example, you can see a `relative` class on the `<section>`)

  

- You need to define the height of the shape divider on the `<svg>` element. In the above example, we have used `h-36` class on `<svg>` element to give a 9rem height to the shape divider.

  

- As the height of the shape divider is 9rem (`h-36`) on the above example, the  `<section>` must have a larger size of padding bottom so that it can hold the shape divider. That is why, the above example's `<section>` have a `pb-10` class which is equivalent to 10rem padding bottom.



  **Note:** Choose 8rem, 9rem, or 10rem as the height of the shape divider.

  

- If you want to place the shape divider on the top of the `<section>`,  use `-shape-divider-top`  or `-shape-divider-top-180`  class on the shape divider's `<div>`.

  

- Alternatively, if you want to place the shape divider on the bottom of the `<section>`,  use `-shape-divider-bottom`  or `-shape-divider-bottom-180`  class on the shape divider's `<div>`. (In the above example, you can see a `-divider-bottom-180` class on the `<div>`)

  

- There is another optional class. You can use `-shape-rotate` class on the `<svg>` element. 

  

- If there is one `<path>` element in the  `<svg>` element, you need to use `fill-current` and a text color class there. 

  

- Alternatively, if there are multiple `<path>` elements on the  `<svg>` element,  you need to use `fill-current` class and separate text color class on each of the `<path>`. 

  





