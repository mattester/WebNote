#  伪类样式

## 伪类

<ul><li style="color:red">通常情况，超级链接上设置的样式，称为伪类</li></ul>

**作用** 设置超级链接的4种状态

**示例** ```a:link{font-weight:bold;text-decoration:none;color:red;}``` 

**小贴士** 1、伪类是用在超链接上的效果比较多，但超链接不是伪类。2、伪类是选择器

|      | 属性      | 作用                           |
| ---- | --------- | ------------------------------ |
| 1    | a:link    | 未访问的连接                   |
| 2    | a:visited | 已访问的连接                   |
| 3    | a:hover   | 鼠标移动到链接上（浮动、悬停） |
| 4    | a:active  | 向被激活的元素添加样式         |
| 5    | ：focus   | 选择拥有键盘输入焦点的元素     |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>伪类</title>
    <style rel="stylesheet">
        a:link{
            color: red; /*未被访问就是红色，需要清空cookie*/
        }
        a:visited{
            color: yellow;/*访问后*/
        }
        a:hover{
            color：blue;
            font-family: 隶书;
            font-size: 30px;
        }
        label:hover{
            font-size: 50px;
            color: aqua;
        }
        input:hover{
            background-color: red; /*移动鼠标到这个位置显示红色*/
        }
        input:active{
            background-color: blue; /*激活就会显示蓝色，也就是点击文本框*/
        }
        input:focus{
            background-color: yellow;/*出现鼠标光标就会变成黄色*/
        }
    </style>
</head>
<body>
    <a href="#">aaa</a>
    <label>你好世界</label>
    <input type="text">
</body>
</html>
```

# 伪类的分类

- 伪类包含两种：状态伪类和结构性伪类
  - 超链接的伪类都是状态的伪劣，目标的状态发生改变，选中以后，获得焦点以后，鼠标悬停以后
  - 结构性伪劣主要是选择子元素使用的

## 结构性伪类

|      | 属性               | 作用                                                         |
| ---- | ------------------ | ------------------------------------------------------------ |
| 1    | ：first-child      | 选择元素的第一个子元素                                       |
| 2    | ：last-child       | 选择某一个元素的最后一个子元素                               |
| 3    | ：nth-child（）    | 选择某个元素的一个或多个特定的子元素                         |
| 4    | nth-last-child（） | 选择某个元素的一个或多个特定的子元素，从这个元素的最后一个子元素开始算 |
| 5    | ：first-of-type    | 选择一个上级元素下的第一个同类子元素                         |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>伪类</title>
    <style rel="stylesheet">
	 p:first-child{/*p元素的第一个子元素*/
            background-color: red;
        }
        p:first-of-type{/*上级元素下的第一个同类子元素*/
            background-color: chartreuse;
        }
        p:last-child{/*p元素的最后一个子元素*/
            background-color: aquamarine;
        }
        p:nth-child(4){/*p元素的第4个元素*/
            background-color: red;
        }
        td:nth-child(2){
            background-color: red;
        }
        tr:first-child{
            background-color: red;
        }
    </style>
</head>
<body>
<!--    <a href="#">aaa</a>-->
    <label>你好世界</label>
<!--    <input type="text">-->
        <h1>快乐</h1>
        <p>快乐每一天</p>
        <p>快乐每一天</p>
        <p>快乐每一天</p>
    <table border="2">
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4 </td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4 </td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4 </td>
        </tr>
    </table>
</body>
</html>
```