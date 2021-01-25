# javascipth错误处理

​             

- 基础的html知识
- 基础的jis知识
- chrome知识的使用

## 课程目标

- js中的语法错误/运行时错误/以及解决方案

- js中的逻辑错误及debugger的使用
- js中try catch finally语句的使用

### 常见的语法错误

- 符号漏打，多打，少打，错打-----
- 使用了不和语法的变量名
- 语句写错，没写完等

## 运行时错误

- 运行时错误（runtime error），指代码没有语法错误，而在运行的时候才发生错误。运行时错误是一个统称。

- 常见的运行时错误有如下几种：
  - referenceError，变量引用触发异常
  - TypeError，类型使用错误时触发
  - RangeError，不太常见，一般会在递归爆栈，即递归深度太深

## 运行时错误

- TypeError发生的两种情况：
  - 1. 获取未初始化的变量的属性或方法
    1. 调用类型错误

**演示**

```js
<script>
    var foo=10;
    console.log(foo);
    var f = 11;
    f()
</script>
```

> Uncaught TypeError: f is not a function
>
> 无法调用函数，f不是一个函数

- 递归搞不懂了

## 如何区分语法错误与运行时错误

- 对于新手来说，语法错误跟运行时错误在仅看代码的情况下不太容易区分
- 一个简单的区分方法时：
  - 语法错误无论如何都不可能运行成功
  - 运行时错误时有可能运行成功的
  - 如果是语法错误，用的编译器跟正常的编译器语法高亮会不一样

## 逻辑错误

逻辑错误一般指的是计算结果不符合预期

- 调试方法
- 单步跟踪调试debugger

```
<script>
    /*计算1到10的和*/
    var i ;
    var sum = 0;

    debugger;
    for(i=1;i<=10;i++){
        sum = sum+i
    }
    console.log(sum)
</script>
```

- 在Sources里面
  - watch可以添加需要显示的变量
  - breakpointes直接跳到断点位置

- 点击下箭头可以直接跳转到幻术里面

**三种处理逻辑错误**

- 变量写在witch里面

- 给代码打断点
- 直接在conslon里面写变量名，会出来变量值

## 直接触发一个错误

- 如果写自己写代码也可以主动触发一个错误
- 当发生一些不可避免的错误时，可以使用下面的语句来抛出这个错误throw语句

## 发生不可避免的错误时怎么办？

- 某些运行时错误不可避免
- 使用try catch 语句

**示例**

```html
<script>
   function getUserInput(msg) {
        var input=prompt(msg);
        var parsed = parseInt(input);
        if (parsed != parsed){
            return input;
        }else {
            return parsed
        }
   }
   function multiple(a,b) {/*typeof a 变量的类型*/
        if((typeof a !='number')||(typeof b != 'number')){
            throw  new Error('arguments should all be number!')
        }
        return a*b;
   }
   var c;
   var a = getUserInput("请输入一个数");
    var b = getUserInput('请在输入一个数');
    try{
        c = multiple(a,b);
        alert('他们的乘积是'+c )
<script>
```

**try catch的小示例**

```html
<script>
}catch (e) {
        alert('请输入两个数字！');
    }
    try{/*如果内部的代码抛出错误，则代码直接跳入catch块运行，且把
            错误对象赋值给catch括号里面的变量*/
        var x = null;
        console.log(x.foo);
    }catch (e) {
        console.log(e)
    }finally {
            /*做一些请理性的工作*/
            /*finally块是一定会执行的*/
    }
</script>
```

- 可以自己抛出一个错误，一般是浏览器帮忙抛出错误
- 浏览器是先读取代码，理解代码，然后在去执行代码，如果代码读取第一步不完整就会直接抛出错误

# 课程总结

- 语法错误
- 运行时错误
  - 语法错误不能运行成功
  - 运行时错误有可能运行成功
- try catch finally 语句 
- 
- 
- 
- 
- 
  - findlly语句不管怎样都会运行
  - 无法包裹语法错误代码块
  - 错误的冒泡
- 逻辑错误
  - 发生逻辑错误，一般情况下使我们写代码出现了错误
- 代码的调试：debugger，断点与单步跟踪