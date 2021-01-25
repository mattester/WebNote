###  JS数字函数

```js
var n=16.457861;
console.log(Math.round(n));/*四舍五入取整*/
console.log(n.toFixed(2));/*保留两位小数*/
console.log(Math.min(2,5,67,89));/*求最大值*/
console.log(Math.max(2,5,67,89));/*求最小值*/
console.log(Math.abs(-2,-8));/*求绝对值*/
```

# 数组

```js
/*----------------------------------------------*/
//声明或创建一个不指定长度的数组，又称实例化创建：
var arrayObj=new Array();
//声明或常见一个数组并指定数组的长度；
var arrayObj=new Array(5);
//声明或创建一个带有默认值的数组；
var arrayObj=new Array(2,4,8);
//常见一个数组并赋值的简写，有称隐式创建数据
var array0bj=[2,4,"a","y",8,5,1];
console.log(array0bj[4]);
for(var i in array0bj){/*输出arrayObj的下标，通过下标将数值遍历出来*/
    console.log(array0bj[i]);
}/*将数值里面的数字遍历出来*/
/*00000000000000000000000000000000000000000000*/
var i=0;
var n=array0bj.length;
for (i;i<n;i++){
    console.log(array0bj[i]);
}
```