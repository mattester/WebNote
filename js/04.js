// var n=9;/*全局变量*/
// function fun1() {
//     n1=5;/*局部变量*/
//     n=12;
// }
// function fun2() {
//     n=n-1
// }
// function fun3() {
//     console.log(n);
//     console.log(n1);
// }
// fun1();
// fun2();
// fun3();
var x=2; /*x比10小所以是false*/
var x=11;/*x比10大所以是true*/
var flag=x>10;
console.log(flag)

var x=2;
var y=3;
console.log(x<10&&x<5)

var x=10;
var y=15;
console.log(x<11||y<10);
console.log(!(x<11||y<10));/*取反false*/

var x1=11;
var str=x1>10?"dayu":"xioayu";
console.log(str);

