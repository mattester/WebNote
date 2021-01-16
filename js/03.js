var str1="123"
if (isNaN(str1)==false){/*判断str是不是数字类型，如果不是，就转换成数字类型并在控制台输出*/
    console.log(parseInt(str1));
}else {/*否则就输出is error*/
    console.log("is error");
    str1=0;
}
console.log(str1);