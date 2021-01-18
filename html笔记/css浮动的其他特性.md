# 浮动的其他特性

- 设置浮动，是对div元素的其他同等级元素后面的受浮动影响，比如，我要对图片后面的div设置浮动，与图片并排显示，就需要对图片设置浮动，而且两者是同级关系

```css
<style>
    *{
        margin: 0px;
    }
    #div1{
        background-color: #ffffff;
        float: left;
    }
    p{
        text-align: justify;/*两端对齐*/
        /*line-height: 20px;!*行间距*!*/
        line-height: 1em;/*1,5个字符大小*/
    }
</style>
```

## float 属性设置

|      | 属性  | 作用               |
| ---- | ----- | ------------------ |
| 1    | left  | 元素向左浮动       |
| 2    | right | 元素向有浮动       |
| 3    | none  | 默认值。元素不浮动 |

- 简单来说就是通过浮动让他们在同一排显示，但是真正的意思是如下
- 现象成一个层，漂移出来了，使原来的位置又被别的地方占用了
- 给谁添加float那么就将谁脱标（脱离标准的文档流），脱标之后后面的就会顶上去进行显示，如果顶上去后，脱标的那个div没有改变位置就会出现覆盖的情况，如果改变了位置就会出现改在的位置就行了

**自我理解**

- 有三个div容器，没有设置浮动，都是块级元素所以就是一行一行显示的
- 将div1容器，也就是第一个设置浮动，这个时候div1是不动的，这个图层可以想象成它靠着body漂浮起来了，那么原来的div1的位置就空出来了，空出来了，系统就会派后面的div2和div3往前顶，如果过这三个大小一样的话
- div2就会看起来是没有了，其实只不过是被div1漂浮起来的覆盖了
- 将div2设置浮动后，就会从div1原来的位置离开，跟在浮动后的div1后面，这个时候两个就并排显示了
- 将div3设置浮动后，就会从原来div2的位置离开，跟在浮动后的div2后面，这个时候三个就并排显示了

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>float</title>
    <style>
    div{
          width: 200px;
          height: 200px;
    }
    #div1{
          background-color: yellow;
        float: left;
    }
    #div2{
        background-color: red;
        float: left;
    }
    #div3{
        background-color: blue;
        float: left;
    }
    </style>
</head>
<body>
    <div id="div1">1</div>
    <div id="div2">2</div>
    <div id="div3">3</div>
</body>
</html>
```