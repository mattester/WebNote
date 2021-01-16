// alert("123456")
var x;
x =123; /*数字类型*/
x = "123"/*这个时候就是字符类型*/

// alert(x+1)/*x是字符类型，+相当于字符连接，是1231，不会是124*/
console.log(x)
function add (n1,n2) { /*创建函数，function是关键字，后面接函数名*/
    // alert("999");
    // alert(n1+n2)
    var n3;
    n3 = n1 + n2;
    return n3
}
// add() /*调用函数*/
// add(2,3)
var num = add(3,4) /*函数调用如果没有返回值的话就是空的*/
// alert(num)
console.log(num)

/*方法2*/
var num1 = function (n1,n2) {
    var n3 = n1 +n2;
    return n3
}
alert(num1(14,14))
alert(num1(11,11));
/*---------------------------------------------*/
alert(num2(2,3))/*先使用后定义函数*/
function num2(n1,n2) {
    var n3 = n1 +n2;
    return n3
}
alert(num2(1,2))

