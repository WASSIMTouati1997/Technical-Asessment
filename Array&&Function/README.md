# Part III: Functions

*Note: Before getting started on these exercises, please be certain that you've read through the root [README.md](../README.md) file in this repository.*

## Exercises

### Basic Requirements

1. In your console, copy the following function and verify
   that the following invocations match your expectations:

   ```js
   function square(num){
      return num * num;
   }

   square(10) + 2; 102 
   square(100) + square(77); 15925
   square(8 / 2) 16
   square(2 + 17);361
   square(square(15));50635
   ```

2. Write a sentence in plain English describing how `square(square(15))` is
   evaluated.
  we multiplied 15*15 and after we multiplied the result 225*225 we executed the square function on the new result

3. Rename `square`'s `num` parameter in your above code to `monkey`, and
   rename the uses of that parameter in the body to `monkey` as well. Will the
   function `square` still work? Why or why not?
   Yes the still work , we can name the parameter what we want .

4. What is wrong with the following definitions of `square`? Write a sentence or
   two describing the issue(s); then, try copying the erroneous examples into a
   console one-at-a-time and observing the error(s) generated (you may have to
   attempt to invoke the functions to see the error). What errors are produced
   (if any) for each erroneous version? Do the errors make sense?

   ```js
   function square(monkey) {
     return x * x;
   }
  `we must use the same parameter in the function and in the body of the function  x is not defined` 
   function square(5) {
     return 5 * 5;
   }

`we cannot use a number as a parameter`
```
   ```js
   function square("x") {
     return "x" * "x";
   }
   `we cannot use a string  as a parameter`

   ```

5. Fix the invalid syntax in the following functions (you can copy and paste these
   invalid definitions into your console and then edit them there):

   ```js
   func square1(x) {
     return x * x;
   }

   functionsquare2 (x){
     return x * x;
   }

   function (x) square3 {
     return x * x;
   }
   ```

6. The following functions exhibit poor style -- fix these issues using the
   original version of `square` as a reference.

   ```js
   function square(x){
    return x*x;
    }


   function square(x){
    return x*x;
    }
       ```


function square(x){
    return x*x; 
    }
   ```

7. Complete the function `cube` that returns the cube of x:

  ```js
  function cube(x) {
    return x*x*x;
  }

  ```

8. Complete the function `fullName` that should take two parameters, `firstName`
   and `lastName`, and returns the `firstName` and `lastName` concatenated
   together with a space in between.

  ```js
  // don't forget the parameters!
  function fullName(first,last) {
    return first + last ;
  }
  fullName("John", "Doe") // => "John Doe"
  ```

9. Write a function `average` that takes two numbers as input (parameters), and
   returns the average of those numbers.
   function average(a,b){
       return (a+b)/2;
   }
   

10. Write a function `greeter` that takes a name as an argument and *greets*
    that name by returning something along the lines of `"Hello, <name>!"`
```js
    function greeter(a){
    return "HELLO"+ a
}
```
11. Using the document found at <a href="http://www.gbcnv.edu/documents/ASC/docs/00000005.pdf" target="_blank">this link</a>, translate the first page of geometric
    formulas into JavaScript functions.

    As an example, a function to compute the perimeter of a rectangle might look
    like this:

    ```js
    function perimeterRect(l, w) {
      return 2 * (l + w);
    }
    ```

    **NOTE:** JavaScript provides some nifty mathematical functions and
    constants built into the language that you'll need for this exercise. The
    two that we'll be making use of are:
    
   
 ```js
    function Squarearea(a){
      return a*a;
    }
   function Rectanglearea(a,b){
    return a*b;
   }
   function Parallelogramarea(l,h){
    return l*h;
   }
   function Trapezoidarea(h,b1,b2){
    return (1/2)*h*(b1+b2);
   }
   function Trianglearea(b,h){
    return (1/2)*b*h
   }
   function Circlearea(r){
    return Math.PI*r*r;
   }
   function  RectangularSolidarea(l,w,h){
    return l*w*h;
   }
   function Cubearea(a){
    return a*a*a;
   }
   function RightCircularCylinderarea(r,h){
    return Math.PI*(r*r)*h;
   }
   function Spherearea(r){
    return (3/4)*Math.PI*(r*r*r);
   }
   function  RightCircularConearea(r,h){
    return (1/3)*Math.PI*(r*r)*h;
   }
   function SquareorRectangularPyramidarea(l,w,h){
    return (1/3)*l*w*h;
   }
   function FrustumofRightCircularConearea(r,R,h){
    return (Math.PI*((r*r)+(r*R)*(R*R))*h)/3;
   }
   //Perimeter//
  function  SquareP(s){
    return 4*s;
  }
  function RectangleP(l,w){
    return 2*l+2*p; 
  }
  function ParallelogramP(l,w){
    return 2*l+2*p; 
  }
  function TrapezoidP(s1,s2,b1,b2){
    return s1+s2+b2+b2;
  }
  function TriangleP(s1,s2,b){
    return s1+s2+b;
  }
  function  CircleP(r){
    return 2*Math.PI*r;
  }
  OR 
 function  CircleP(){
    return Math.PI*d;
  }
  function RectangularSolidP(l,h,w){
    return (2*l*h) + (2*w*h) + (2*w*l);
  }
function CubeP(s){
  return 6*(s*s);
}
function RightCircularCylinderp(r,h){
  return (2*Math.PI)*(r*h)+(2*Math.PI)*(r*r);
}
function SphereP(r){
  4*Math.PI*(r*r);
}
function RightCircularConeP(r,h){
  return Math.PI*r*Math.sqrt((r*r)+(h*h));
}
function FrustumofFrustumofConeP(s,R,r){
  return Math.PI*s*(R+r);
}


    Math.PI; // => 3.141592653589793
    Math.sqrt(256); // => 16
    ```

    To test your answers, you'll need to:

    1. Code your function in the console in the way that you think it will work
    2. Call the function with arguments in the console to see the result, e.g.
      `perimeterRect(2, 6)`.
    3. Eventually, you may want to verify that the output is correct. Google is a
       great tool for this:


![google geometry answer](google-geometry-answer.gif)

### More Practice

Translate the rest of the geometric formulas found <a href="http://www.gbcnv.edu/documents/ASC/docs/00000005.pdf" target="_blank">here</a> into JavaScript functions.

### Advanced (extra practice)

1. Compound interest can be calculated with the formula:

    ![future value](future-value.png)

    - *F*: future value
    - *P*: present value
    - *i*: nominal interest rate
    - *n*: compounding frequency
    - *t*: time

  //Write a function `futureValue` that can be used to calculate the *future value*
  //of a quantity of money using compound interest.
 function futureValue(p,i,n,t){
    var x = 1 + (i/n);
    return p*Math.pow(x,n*t);
  }

  Use the function to calculate what the future value of $1700 (*P* = 1700)
  deposited in a bank that pays an annual interest rate of 4.7% (*i* = 0.047),
  compounded quarterly (*n* = 4) after 6 years (*t* = 6) (you can use `Math.pow`
  to do exponentiation).

2. Write a `power` function that accepts the parameters `base` and `exponent`
   and returns the result. Replace `square` and `cube` with the `power` function
   you just wrote. Do not use `Math.pow`.


3. Write your own square-root function called `sqrt` that accepts a `number`
   parameter and returns an approximate square root. Square-root approximations
   make use of averages. Be sure to use the `average` function you previously
   wrote. The first version of your square root function should perform no more
   than 3 successive averages.
