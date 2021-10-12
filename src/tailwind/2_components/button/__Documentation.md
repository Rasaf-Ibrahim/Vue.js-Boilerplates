## Button


> Table of Contents
> 
>[🔖 Abbreviation](#abbreviation) 
>
>[🔖 HTML Element](#html-element) 
>
>[🔖 Mandatory Classes](#mandatory-classes) 
>
>[🔖 Color Classes (Mandatory)](#color-classes-mandatory) 
>
>[🔖 Optional Classes](#optional-classes) 
>
>[🔖 Bug](#bug)





&nbsp;
### Abbreviation
&nbsp;

- **btn** = button

- **t1** = type 1 brand color

- **t2** = type 2 brand color

- **l1** = layer 1

- **l2** = layer 2

  

  

### HTML Element

- Use `<button>`, it's a inline element.  But if you want the button to be a block element,  use `block` and `w-full` class in   `<button>` element.  
- Alternatively, as `<button>` is a inline element. you can also use  `<span>` or you can  use ` <div> ` where you would add `inline-block` class to make the button a inline element. On the other hand,  if you want your button to be a block element, you can use `<div>`.
- It's recommended to stick with `<button>` element as it will have better for accessibility and readability.



### Mandatory Classes



- You have to use `-btn` class to every button.
- Class `-btn-sm`, `-btn-md`  and `-btn-lg` represent the size of the button. Choose one of them.


&nbsp;
### Color Classes (Mandatory)
&nbsp;


**Need to know:**

1. There are two types of button - a) colorful background  b) transparent background, colorful border 
2. There will be two types of color to choose from: a) type-1 brand color b) type-2 brand color. In most of the sites, you will usually use just one brand color. So, there you may just use the type-1 brand  color.




**Colorful Background**



There are 4 classes here but actually 2 classes to choose from because we can either use layer-1 or layer-2 depending on which layer we are in. You can know more about layer concept in the Theme's Documentation.

| Class Name      | Explanation                 |
| --------------- | --------------------------- |
| -btn-color-t1l1 | Brand color Type-1, Layer-1 |
| -btn-color-t1l2 | Brand color Type-1, Layer-1 |



| Class Name      | Explanation                 |
| --------------- | --------------------------- |
| -btn-color-t2l1 | Brand color Type-2, Layer-1 |
| -btn-color-t2l2 | Brand color Type-2, Layer-1 |



**Transparent background, colorful border** 

There are 4 classes here but actually 2 classes to choose from because we can either use layer-1 or layer-2 depending on which layer we are in. You can know more about layer concept in the Theme's Documentation.


| Class Name             | Explanation                 |
| ---------------------- | --------------------------- |
| -btn-border-color-t1l1 | Brand color Type-1, Layer-1 |
| -btn-border-color-t1l2 | Brand color Type-1, Layer-1 |



| Class Name             | Explanation                 |
| ---------------------- | --------------------------- |
| -btn-border-color-t2l1 | Brand color Type-2, Layer-1 |
| -btn-border-color-t2l2 | Brand color Type-2, Layer-1 |






&nbsp;
### Optional Classes
&nbsp;


- If you want the button's name to be uppercase, use `uppercase` class or write the button's name is in uppercase.

- If you want the button's font to be little bit bold, you can use `font-semibold` class. 

- At active state, if  you want your button to scale up, use `-btn-scale-up` or use `-btn-scale-down`  if you want your button to scale down, 

- Instead of scaling down and up, you can use ring focus on the active state. There are 4 classes of ring focus at active state based on layer and  brand color types. These 4 classes are: 

  

| Class Name     | Explanation                 |
| -------------- | --------------------------- |
| -btn-ring-t1l1 | Brand color Type-1, Layer-1 |
| -btn-ring-t1l2 | Brand color Type-1, Layer-1 |



| Class Name     | Explanation                 |
| -------------- | --------------------------- |
| -btn-ring-t2l1 | Brand color Type-2, Layer-1 |
| -btn-ring-t2l2 | Brand color Type-2, Layer-1 |




### Bug


If you want to center the button both horizontally and vertically (position: fixed) , don't use scaling classes (`btn-scale-up` , `btn-scale-down`). Otherwise the button will not be centered perfectly. 

