
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus")
number = document.querySelector(".number");

let a = 1;

plus.addEventListener("click", () =>{ 
    a++;
a = (10>a) ? "0" + a : a; 
number.innerText = a;
    console.log(a);
} );

minus.addEventListener("click", () =>{ 
    if( a > 1) { 
        a--; 
        a = (10>a) ? "0" + a : a; 
number.innerText = a;
    }
    console.log(a);
    })
    