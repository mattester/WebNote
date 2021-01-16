# 课程目标

- js的重要作用，HTML+CSS+JS之间的关系
  - HTML是基本结构的建设，可以说是骨架
  - CSS主要是进行美化的
  - JS实现功能
- JS脚本语言程序控制语法
- JS脚本语言函数、自定义函数
- JS脚本语言事件响应及处理、表单处理
- <font style="color:red">JS脚本语言DOM模型及操作</font>
- 综合练习

#课程安排

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        table{
             border: 1px;
         }
        /*.red1{!*左边单元格背景全红色*!*/
        /*    background-color: red;*/
        /*}*/
        .kc{
            color: red;
            text-align: center;
        }
        .red1{
            background-color: rgb(211, 83, 83);
            text-align: center;
            width: 100px;
            height: 20px;
        }
        ul{
            background-color: RGB(218, 221, 234);
            width: 500px;
            height: 87px;
        }
        td:nth-child(2) {
            text-align: center;

        }
        ul{
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <h1 class="kc " >课程安排</h1>
    <table>
        <tr>
            <td class="red1">序</td>
            <td>
                <ul>
                    <li>为什么学习JS，能做什么？与CSS和html三种技术之间<br>的关系、JS的来源</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td class="red1">JS程序设计</td>
            <td>
                <ul>
                    <li>程序控制语句、（自定义）函数、数组、注释、js调试...</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td class="red1">事件</td>
            <td>
                <ul>
                    <li>JS的事件处理，利用事件对表单等进行功能设计</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td class="red1">DOM</td>
            <td>
                <ul>
                    <li>DOM结构、dom-html、dom-css、dom-事件</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td class="red1">综合作业</td>
            <td>
                <ul>
                    <li>使用JS激素，对页面添加并实现业务功能</li>
                </ul>
            </td>
        </tr>
    </table>
</body>
</html>
```

<img src="..\img\Snipaste_2021-01-15_22-01-32.png">

# JS简介

- 什么是JS-JavaScript的简称，是一种脚本语言
  - 描述性语言，依照一定格式的可视性文件，广泛的应用HTML的页面设计当中，提高网页的浏览速度，并且使页面的展现更加丰富，功能更加的完善
- 什么是动态页面、静态页面
  - 有没有交互，人与计算机，操作之间有没有信息沟通的功能 