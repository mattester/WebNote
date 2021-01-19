# 为什么清除浮动

- 为了父元素不会出现“高度崩塌”

- 如果强制规定外层容器的尺寸，则显的就不那灵活了，高度就不能自动适应了

- 从某个元素开始，不在需要浮动效果了

  ```html
  clear: both;/*清除浮动*/
  ```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>0</title>
    <style>
        #div1{
            background-color: red;
        }
        #div2{
            background-color: yellow;
            float: left;
            width: 200px;
            height: 200px;
            top:10px;/*通过将黄色块向下移动就能能看到黑色方块是不是顶头的*/
            position: relative;/*相对定位*/
        }
        #div3{
            background-color: blue;
            float: left;
            width: 220px;
            height: 220px;
        }
        #div4{
            background-color: black;
            /*float: left;*/
            width: 240px;
            height: 240px;
            /*clear: both;!*清除浮动*!*/
        }
        /*#cleardiv{*/
        /*    clear:both;!*单独创建一个div进行清楚浮动，这个div是需要清楚div的子元素*!*/
        /*}*/
        #cleardiv::after{
            content: "";/*使cheardiv里面有content存在，但是不显示任何内容*/
            visibility: hidden;/*将内容进行隐藏*/
            height: 0px;
            display: block;/*转换成一个块级元素*/
            /*更加推荐这种写法*/
            clear:both;
        }
        #cleardiv{
            zoom:1;/*主要是防止ie浏览器的bug，加上就好*/
        }
    </style>
</head>
<body>
    <div id="div1">
        <div id="div2"></div>
        <div id="div3">
            <div id="cleardiv"></div>
        </div>
        <div id="div4"></div>
        <div div="div5"></div>
    </div>
</body>
</html>
```