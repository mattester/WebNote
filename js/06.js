var i =0;
var sum = 0;
// while(i<=100){
//     sum = sum+i;
//     i++;
// }
// console.log(sum);

/*do while循环*/
do{
    sum=sum+1;
    i++;
}while(i<=100);
console.log(sum);

var str="5201314199904513521"
console.log(str.substr(0,3));/*0代表初始位置，可以说是下标；3代表偏移量*/
console.log(str.substring(0,3));/*0代表初始值，3代表结束位置；左闭右开*/
console.log(str.substring(7,11));
console.log(str.charAt(6));

/*--------------------------------------------*/
console.log(str.length);
console.log(str.indexOf(1,4));/*第一个1出现的位置*/
/*从编号4开始第一次出现的位置*/
/*------------------------------------------*/
var str="aa,ttt,121,gg,kk,aa,bb";
var arr=str.split(",");
console.log(arr);/*通过，分隔，输出为数组*/
console.log(str.concat("555","777","00"));/*和最后一个连接一起*/
console.log(str.concat(",55","777",",000"));/*分开，在数组里面*/
console.log(str.replace("aa","imooc"));/*将aa替换为imooc，只会替换第一个aa，并不会替换所有*/
/*-------------------------------------------------------*/
var d1=new Date();
var d2=new Date("2021-1-1 19:20:58");
var d3=new Date("2021-1-1");
console.log(d2.getDate());/*获取d2的号*/
console.log(d1.getDate());/*获取当前几号*/
console.log(d2.getMonth()+1);/*获取d2的月份*//*因为是从0开始，到11；也就是在系统中0代表1月份的*/
console.log(d2.getFullYear());/*获取当前的年份*/
console.log(d2.getHours());/*获取当前小时*/
console.log(d2.getMinutes());/*获取当前分钟*/
console.log(d2.getSeconds());/*获取当前秒*/
var n=d1.getTime()-d3.getTime();
console.log(parseInt(n/(24*3600*1000)));/*现在距离2021年元旦还有多少太天*/
/*-------------------------------------------------------------*/
function FmtDate() {
    var d1=new Date();
    var yyyy,mm,dd,hh,mi,ss;
    var time;
    yyyy=d1.getFullYear();
    mm=d1.getMonth()+1;
    dd=d1.getDay();
    hh=d1.getHours();
    mi=d1.getMinutes();
    ss=d1.getSeconds();
    time=yyyy+"-"+mm+"-"+dd+" "+hh+":"+mi+":"+ss;
    return time;
}
console.log(FmtDate());