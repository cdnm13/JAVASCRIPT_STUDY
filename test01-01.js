'use strict'
let a;
a = "abc";

{
    let a;
    a=5;
    document.write(a+"<br>");
}

document.write(a);