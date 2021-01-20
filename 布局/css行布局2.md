# css行布局2

- 行布局固定宽
- 行布局某部位自适应
- 行布局导航随屏幕滚动

```html1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body{
            margin: 0;padding: 0;
            text-align: center;
            color: #ffb6c1;
            /*text-align: center;*/
        }
        .header{
            width: 100%;
            height: 50px;
            /*line-height: 50px;*/
            background-color: red;
            margin: 0 auto;
            position: fixed;

        }
        .banner{
            width: 500px;
            height: 400px;
            background-color: #73ff0c;
            margin: 0 auto;
        }
        .content{
            width: 500px;
            height: 500px;
            background-color: blue;
            margin: 0 auto;
        }
        .footer{
            width: 500px;
            height: 80px;
            background-color: yellow;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="header"></div>
    <div class="banner"></div>
    <div class="content"></div>
    <div class="footer"></div>
</body>
</html>
```

- 如果网页的宽度是自适应的话，fixed会破坏我们这个自适应，所需要将整个头部设置百分百充满