var str="123";
var str1="abc";
console.log(str*1+1)''
console.log(parseInt(str)+1);/*将字符类型的str转换成数字类型*/
/*-------------------------------------*/
console.log(parseFloat(str));
console.log(parseFloat(str1));
/*----------------------------------------*/
var str3="123.654";
console.log(parseInt(str3));
console.log(parseFloat(str3));
console.log(Number(str3));
/*----------------------------------------*/
var str4="abc";/*abc代表trun，空则是false*/
var str6="123"
var str5="0"; /*在boolean里面0代表false，其他代表trun*/
console.log(Boolean(str4));
console.log(Boolean(str5));
console.log(Boolean(str6));
