# 混合布局

- 混合布局固定
- 混合布局自适应

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body{
            margin: 0;padding: 0;
        }
        .div1{
            width: 900px;
            height: 1000px;
            background-color: aqua;
            margin: 0 auto;
        }
        .header{
            width: 900px;
            height: 50px;
            background-color: red;
            float: left;
            position: fixed;
        }
        .left{
            width: 350px;
            height: 900px;
            background-color: #73ff0c;
            float: left;
        }
        .right{
            width: 550px;
            height: 900px;
            background-color: #FFB6C1;
            float: right;
        }
        .footer{
            width: 900px;
            height: 50px;
            background-color: black;
            float: left;
        }
    </style>
</head>
<body>
    <div class="div1">
        <div class="header"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="footer"></div>
    </div>
</body>
</html>
```