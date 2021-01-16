# 自定义函数

- 自定义函数时完成某一功能的代码段，可重复执行，方便管理和维护。

- 创建方法

  - 这种是函数声明 可以先使用后定义

    ​	```function fun1(){代码片段 return***}```

- 创建方法2

  - 这种叫做函数表达式 必须先定义后使用

    ``` var fun 1 = function(x){return x+1};```

## 形参和实参

- 定义的时候讲参数称之为形参
- 调用的时候将参数称之为实参

### 创建方法1

```javascript
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
```

### 创建方法2

- Underined 一般是变量已经声明了但是没有赋值

```js
alert(num2(2,3))/*先使用后定义函数*/
function num2(n1,n2) {
    var n3 = n1 +n2;
    return n3
}
alert(num2(1,2))
```

- 先使用后定义的函数类似于python，function等于def，然后就是函数名称
- 而第二种，就是先定义后使用，var fun1 = function（x）{}这种函数刚开始没有函数名，赋给一个变量后就可以使用了。