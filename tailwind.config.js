//version 2.8


module.exports = {
  mode: 'jit',

darkMode: 'class', // or 'media',

  

/* Never add '.css' file on the purge list. It will be a huge mistake, specially when you have created many classes manually. If you add '.css' file on the purge list, then all the classes that you have manually created will be added on the production css file, that will make the size of the production css file huge! */


// // Purge configuration for a 11ty project
// purge: [

//   './src/*.{html,liquid,njk,js}', 
//   './src/**/*.{html,liquid,njk,js}',
//   './src/**/**/*.{html,liquid,njk,js}',
//   './src/**/**/**/*.{html,liquid,njk,js}',
//   './src/**/**/**/**/*.{html,liquid,njk,js}',
//   './src/**/**/**/**/**/*.{html,liquid,njk,js}'


// ],

  // Purge configuration for a Vue project


  purge: [
      './index.html',
      './src/index.html',
      './src/**/*.{html,js,ts,jsx,tsx,vue}'
    ],


  // Purge configuration for a Nuxt project

  // purge: [
  //     `components/**/*.{vue,js}`,
  //     `layouts/**/*.vue`,
  //     `pages/**/*.vue`,
  //     `plugins/**/*.{js,ts}`,
  //     `nuxt.config.{js,ts}`
  //   ],
  


      // /* **padding,margin,height,width** */






  theme: {


    /*  
    
    --- TABLE OF CONTENTS ---   (Search with following keywords)
   
   
   
     **backgroundColor**
   
     **textColor**
   
     **borderColor**
   
     **breakpoints**
   
     **fontFamily**
   
     *** maxWidth  ***
   
     *** minHeight  ***
   
    
   
   
   
   
    */





    /* **breakpoints** */

    screens: {
      'sm': '688px',

      'md': '688px',

      'lg': '1024px',

      'xl': '1360px',

      '2xl': '1696px',


      //  (320x2)+(16x3) = 688px
      //  (320x3)+(16x4) = 1024px
      //  (320x4)+(16x5) = 1360px
      //  (320x5)+(16x6) = 1696px


      /* According to tailwind CSS documentation, sm and md breakpoints are respectively  640px and 768px. That means the values of sm and md breakpoints are close. I don't want separate values for sm and md breakpoints. So, using same value for both sm and md breakpoint.*/


      /* We have defined style for breakpoints is in the 'theme.screens' section of our tailwind.config.js file. Because we don't want to extend breakpoints style. But we will extend every other style. */



    },





    extend: {

      /* **backgroundColor** */

      backgroundColor: {

        //  surface color

        s: {

          t1a1: 'var(--surface-type-1-alpha-1)',
          t1a2: 'var(--surface-type-1-alpha-2)',
          t1a3: 'var(--surface-type-1-alpha-3)',
          t1a4: 'var(--surface-type-1-alpha-4)',
    


          t2a1: 'var(--surface-type-2-alpha-1)',
          t2a2: 'var(--surface-type-2-alpha-2)',
          t2a3: 'var(--surface-type-2-alpha-3)',
          t2a4: 'var(--surface-type-2-alpha-4)',
     

        },



        //  brand color

        b: {

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',

          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',





          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',

          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',


        },


        //  specific color

        red: {

          l1a1: 'var(--red-layer-1-alpha-1)',
          l1a2: 'var(--red-layer-1-alpha-2)',
          l1a3: 'var(--red-layer-1-alpha-3)',


          l2a1: 'var(--red-layer-2-alpha-1)',
          l2a2: 'var(--red-layer-2-alpha-2)',
          l2a3: 'var(--red-layer-2-alpha-3)',


        },


        green: {

          l1a1: 'var(--green-layer-1-alpha-1)',
          l1a2: 'var(--green-layer-1-alpha-2)',
          l1a3: 'var(--green-layer-1-alpha-3)',


          l2a1: 'var(--green-layer-2-alpha-1)',
          l2a2: 'var(--green-layer-2-alpha-2)',
          l2a3: 'var(--green-layer-2-alpha-3)',


        },


        blue: {

          l1a1: 'var(--blue-layer-1-alpha-1)',
          l1a2: 'var(--blue-layer-1-alpha-2)',
          l1a3: 'var(--blue-layer-1-alpha-3)',


          l2a1: 'var(--blue-layer-2-alpha-1)',
          l2a2: 'var(--blue-layer-2-alpha-2)',
          l2a3: 'var(--blue-layer-2-alpha-3)',

        },


        yellow: {

          l1a1: 'var(--yellow-layer-1-alpha-1)',
          l1a2: 'var(--yellow-layer-1-alpha-2)',
          l1a3: 'var(--yellow-layer-1-alpha-3)',


          l2a1: 'var(--yellow-layer-2-alpha-1)',
          l2a2: 'var(--yellow-layer-2-alpha-2)',
          l2a3: 'var(--yellow-layer-2-alpha-3)',


        },



      },



      /* **textColor** */

      textColor: {

        //  default color

        l1: {

          a1: 'var(--layer-1-alpha-1)',
          a2: 'var(--layer-1-alpha-2)',
          a3: 'var(--layer-1-alpha-3)',

        },


        l2: {

          a1: 'var(--layer-2-alpha-1)',
          a2: 'var(--layer-2-alpha-2)',
          a3: 'var(--layer-2-alpha-3)',

        },


        //  brand color

        b: {

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',

          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',





          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',

          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',


        },








        //  specific color

        red: {

          l1a1: 'var(--red-layer-1-alpha-1)',
          l1a2: 'var(--red-layer-1-alpha-2)',
          l1a3: 'var(--red-layer-1-alpha-3)',


          l2a1: 'var(--red-layer-2-alpha-1)',
          l2a2: 'var(--red-layer-2-alpha-2)',
          l2a3: 'var(--red-layer-2-alpha-3)',


        },


        green: {

          l1a1: 'var(--green-layer-1-alpha-1)',
          l1a2: 'var(--green-layer-1-alpha-2)',
          l1a3: 'var(--green-layer-1-alpha-3)',


          l2a1: 'var(--green-layer-2-alpha-1)',
          l2a2: 'var(--green-layer-2-alpha-2)',
          l2a3: 'var(--green-layer-2-alpha-3)',


        },

        blue: {

          l1a1: 'var(--blue-layer-1-alpha-1)',
          l1a2: 'var(--blue-layer-1-alpha-2)',
          l1a3: 'var(--blue-layer-1-alpha-3)',


          l2a1: 'var(--blue-layer-2-alpha-1)',
          l2a2: 'var(--blue-layer-2-alpha-2)',
          l2a3: 'var(--blue-layer-2-alpha-3)',


        },

        yellow: {

          l1a1: 'var(--yellow-layer-1-alpha-1)',
          l1a2: 'var(--yellow-layer-1-alpha-2)',
          l1a3: 'var(--yellow-layer-1-alpha-3)',


          l2a1: 'var(--yellow-layer-2-alpha-1)',
          l2a2: 'var(--yellow-layer-2-alpha-2)',
          l2a3: 'var(--yellow-layer-2-alpha-3)',


        },


        //  surface color  (Just for SVG)

        s: {

          t1a1: 'var(--surface-type-1-alpha-1)',
          t1a2: 'var(--surface-type-1-alpha-2)',
          t1a3: 'var(--surface-type-1-alpha-3)',
          t1a4: 'var(--surface-type-1-alpha-4)',
       


          t2a1: 'var(--surface-type-2-alpha-1)',
          t2a2: 'var(--surface-type-2-alpha-2)',
          t2a3: 'var(--surface-type-2-alpha-3)',
          t2a4: 'var(--surface-type-2-alpha-4)',
    

        },



      },


      /* **borderColor** */

      borderColor: {


        // surface color

        s: {

          t1a1: 'var(--surface-type-1-alpha-1)',
          t1a2: 'var(--surface-type-1-alpha-2)',
          t1a3: 'var(--surface-type-1-alpha-3)',
          t1a4: 'var(--surface-type-1-alpha-4)',
   


          t2a1: 'var(--surface-type-2-alpha-1)',
          t2a2: 'var(--surface-type-2-alpha-2)',
          t2a3: 'var(--surface-type-2-alpha-3)',
          t2a4: 'var(--surface-type-2-alpha-4)',
     

        },



        //  brand color

        brand: {
          /* can't name it 'b'. Because that  will clash with 'border bottom'. So, we've named it 'brand' instead of 'b' */

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',

          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',





          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',

          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',


        },





        //  specific color

        red: {

          l1a1: 'var(--red-layer-1-alpha-1)',
          l1a2: 'var(--red-layer-1-alpha-2)',
          l1a3: 'var(--red-layer-1-alpha-3)',


          l2a1: 'var(--red-layer-2-alpha-1)',
          l2a2: 'var(--red-layer-2-alpha-2)',
          l2a3: 'var(--red-layer-2-alpha-3)',


        },


        green: {

          l1a1: 'var(--green-layer-1-alpha-1)',
          l1a2: 'var(--green-layer-1-alpha-2)',
          l1a3: 'var(--green-layer-1-alpha-3)',


          l2a1: 'var(--green-layer-2-alpha-1)',
          l2a2: 'var(--green-layer-2-alpha-2)',
          l2a3: 'var(--green-layer-2-alpha-3)',


        },

        blue: {

          l1a1: 'var(--blue-layer-1-alpha-1)',
          l1a2: 'var(--blue-layer-1-alpha-2)',
          l1a3: 'var(--blue-layer-1-alpha-3)',


          l2a1: 'var(--blue-layer-2-alpha-1)',
          l2a2: 'var(--blue-layer-2-alpha-2)',
          l2a3: 'var(--blue-layer-2-alpha-3)',


        },


        yellow: {

          l1a1: 'var(--yellow-layer-1-alpha-1)',
          l1a2: 'var(--yellow-layer-1-alpha-2)',
          l1a3: 'var(--yellow-layer-1-alpha-3)',


          l2a1: 'var(--yellow-layer-2-alpha-1)',
          l2a2: 'var(--yellow-layer-2-alpha-2)',
          l2a3: 'var(--yellow-layer-2-alpha-3)',


        },

      },




       /* **ringColor** */

       ringColor: {

        
        //  brand color

        b: {

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',

          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',





          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',

          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',


        }


      },


      /* **fontFamily** */


      fontFamily: {
        'regular': ['Lato', 'sans-serif'],
        'regular-space': ['Roboto Mono', 'monospace'],
        'cursive-1': ['Lobster Two', 'cursive'],
        'cursive-2': ['Kaushan Script', 'cursive'],
        'cursive-3': ['Yatra One', 'cursive'],
        'cursive-4': ['Train One', 'cursive'],
        'handwriting': ['Indie Flower', 'cursive'],
        'bangla-cursive': ['Atma', 'cursive'],
        // Use 'Lato' to write any language's regular writing.
        // 'lobster-two' in italic format looks better.  
      },




      // Max-width

      maxWidth: {
        '25%': '25%',
        '40%': "40%",
        '50%': '50%',
        '60%': '60%',
        '75%': '75%',
        '90%': '90%',
        '98%': '98%'


      },



      // Min-width

      minWidth: {
        '25%': '25%',
        '40%': "40%",
        '50%': '50%',
        '60%': '60%',
        '75%': '75%',
        '90%': '90%',
        '98%': '98%',


      },

      //  Min-Height
      minHeight: {

        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
        'full': '100%',
      }



    },
  },

  

  plugins: [],
}