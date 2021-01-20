# 经典的列布局

- 两列布局固定
- 两列布局自适应
- 三列布局固定
- 三列布局自适应

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body{
            margin: 0;padding: 0;text-align: center;
        }
        .left{
            width: 60%;
            height: 800px;
            background-color: #73ff0c;
            float: left;
        }
        .right{
            min-width: 40%;
            height: 800px;
            background-color: yellow;
            float: left;
        }
        .container{
            width: 90%;
            height: 1000px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="left">左边</div>
        <div class="right">右边</div>
    </div>
</body>
</html>
```

- 两列布局，自适应，注意点
- 一整个div给页面套起来，这个div用来居中显示
- 在div里面左边一个容器，右边一个div
- 做自适应的时候，注意，最外层的div的宽度是百分比，外边距自适应，左右外边距的百分比+这个div宽度百分比是百分之百
- 自然，左div和右div的宽度和也应该是百分之百