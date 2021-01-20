# 经典的三列布局

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
            width: 90%;
            height: 800px;
            margin: 0 auto;
            background-color: #73ff0c;
        }
        .left{
            width: 50%;
            height: 800px;
            background-color: #FFB6C1;
            float: left;
        }
        .content{
            width: 30%;
            height: 800px;
            background-color: yellow;
            float: left;
        }
        .right{
            width: 20%;
            height: 800px;
            background-color: blue;
            float: left;
        }
    </style>
</head>
<body>
    <div class="div1">
        <div class="left"></div>
        <div class="content"></div>
        <div class="right"></div>
    </div>
</body>
</html>
```