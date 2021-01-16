# 数据类型及类型转换效果样式

- python好像不需要先定义数据类型
- js定义不区分类型，使用的时候区分类型，做类型转换

# <font style="red">数据类型</font>

## number、string、boolean、underfine、null

|      | 类型      | 作用                                           |
| ---- | --------- | ---------------------------------------------- |
| 1    | number    | 数字类型，整型浮点型都包括                     |
| 2    | string    | 字符串类型，必须放在单引号或者双引号中         |
| 3    | boolean   | 布尔类型，只有trun和false两种值                |
| 4    | underfine | 未定义，一般指的是已经声明，但是么有赋值的变量 |
| 5    | null      | 空对象类型，var a=null，和var a=“”有区别；     |

### 特殊类型 

- object
- Nan

|      | 类型   | 作用                                                         |
| ---- | ------ | ------------------------------------------------------------ |
| 1    | object | 对象类型，在js常见的有window，document，array等              |
| 2    | NaN    | 是Number的一分钟特殊类型，isNaN（），如果是数字返回false，不是数字返回tune |

### 类型转换

- parselnt()  	parseFloat()	Number()	Boolean()

**作用** 强制类型转、隐式类型转换

**示例** 

```javascript
function test1() {
    console.log("start...")
    var x="a123";
    var flag=isNaN("123");
    var n=parseInt(x);
    console.log("n==="+n);
    console.log("flag==="+flag)
}
```

<h3><font style="color:red">类型转换效果样式</h3></font> 

- parseInt()类型转换

```js
var str="123";
console.log(str*1+1)
console.log(parseInt(str)+1);/*将字符类型的str转换成数字类型*/
/*-------------------------------------*/
```

```js
var str1="123"
if (isNaN(str1)==false){/*判断str是不是数字类型，如果不是，就转换成数字类型并在控制台输出*/
    console.log(parseInt(str1));
}else {/*否则就输出is error*/
    console.log("is error");
    str1=0;
}
console.log(str1);
```

- parseFloat()类型转换

```js
var str3="0123.654";
console.log(parseInt(str3));
console.log(parseFloat(str3));
console.log(Number(str3));
```

- Number()类型转换

```js
var str3="123.654";
console.log(parseInt(str3));
console.log(parseFloat(str3));
console.log(Number(str3));
```

- Boolean类型转换

```js
var str4="abc";/*abc代表trun，空则是false*/
var str6="123"
var str5="0"; /*在boolean里面0代表false，其他代表trun*/
console.log(Boolean(str4));
console.log(Boolean(str5));
console.log(Boolean(str6));
```