# css样式选择器

``` p{background-color:red;font-size:20px;p}```

- HTML任何一个标签到可以当样式选择器
- 选择操作对象，才能进行样式设定
-  选择器，属性，属性值

## css样式文件结构

``` html
<style type="text/css"> #这个style内的数据类型，文本或者样式，可以去掉text
    p{
        background-color:red;
        font-size:20px;
    }
</style>
```

**内部样式表**

- 样式和主体都在同一个html文件里面就是内部样式表

**外部样式表**

- 样式在另一个独立的文件里面，称为外部样式表

# 什么是选择器

**选择器**

- 什么是选择器，有什么作用

**作用**

- 用来选择（找到）需要添加样式的位置

**常用选择器**

- 标签选择器、（归）类选择器

- ```html
  <p class="title"> https://www.imooc.com/</p>
  <p>慕课网</p>
  <p class="title">你学习的好帮手</p>
  ```

**小贴士**

- 还有其他的选择器会在以后学习到的哦

- 层叠样式表，多次多层次的对同一个选择器内容进行格式样式

## 样式属性

- font-family: 字体
- background-color: 背景样式
- font-size:字体大小

# Next ：使用内部样式表，完成背景设置

**背景样式**

|      | 属性                  | 属性值                                    | 作用                 |
| ---- | --------------------- | ----------------------------------------- | -------------------- |
| 1    | background-color      | 颜色值                                    | 颜色作为背景颜色     |
| 2    | background-image      | 图片位置                                  | 图片作为背景图片     |
| 3    | background-repeat     | repeat、repeat-x、<br>repeat-y、no-repeat | 背景图片的重复方向   |
| 4    | background-attachment | scroll、fixed                             | 背景是否随滚动条滚动 |
| 5    | background-position   | 见详细表格                                | 背景图像的其实位置   |
| 6    | background            | 背景样式的值是符合属性值组合              |                      |

```html
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        p{
            background-color: #f1ff1d;
            font-size: 20px;
        }
        .p1{
            font-family: 隶书;
        }
        body{
            /*background-color: #56ffcc;*/
            /*background-image: url("image/richuyinxing.jpg");*/
            /*background-repeat: no-repeat;!*是否重复*!*/
            /*background-attachment: fixed;!*滚动页面背景图片不发生改变*!*/
            /*!*background-attachment: scroll;*!!*随着滚动一起发生改变*!*/
            /*!*background-position: center center;*!*/
            /*background-position: 20px 30px;*/
            background:yellow url("image/richuyinxing.jpg") no-repeat fixed center center;
        /*    简写属性，先背景颜色，背景图片，是否重复，是否固定，图片位置*/
        }
    </style>
</head>
<body>
    <p>
        http://www.imooc.com
    </p>
    <p>
        慕课网
    </p>
    <p class="p1">广州市不动产登记办法（征求意见稿）》（下称《办法》）1月11日起公示。为贯彻执行民法典规定，《办法》对居住权首次登记、
    变更登记及注销登记的情形作了原则性规定；同时创新空间确权登记模式，实现不动产权利在地上、
    地下、地表的登记。《办法》还对标营商环境评价体系，助力不动产登记便利度改革，规定了容缺受理制度，并要求不动产
    登记机构优先核发电子不动产权属证书
    </p>
</body>

```

