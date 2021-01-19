# 课程目标

- 学习css中的定位模型
- 使用定位模型来达到布局目的
- positon定位，最为重要的

## positon

- 提供与元素定位和侧层叠相关功能 它是核心模块
- 1. 盒子模型的类型和尺寸
  1. 布局模型
  1. 元素之间的关系
  1. 视口大小、图像大小等
  1. 其他相关方面

## 课程介绍-小知识点

- docunment tree 结构树
- 自然顺序 normal-flow
- containing-block

## 定位模型

- static 自然模型
- relative 相对定位模型
- absolute 绝对定位模型
- fixed 固定定位模型
- sticky 磁贴定位模型

### position之static

- 静态定位，常规定位，自然定位

**作用**

- 使元素定位于常规、自然流中（块，行垂直排列下去，行内水平从左到右）

特点

- （1）忽略top，bottom，left，right或者z-index生命
- 2. 两个相邻的元素如果都设置了外边距，那么最终外边距=两者外边距中最大的
  2. 如果两个相邻的元素外边距一样的话，就会发生重叠
  2. 具有固定width和height值的元素，如果把左右外边距设置为auto，则左右外边距会自动扩大占满剩余宽度。造成的效果就是这个块水平居中

# POSITION之fixed

**固定定位**

| 作用 | 我跟绝对定位是一个妈生的                                     |
| ---- | ------------------------------------------------------------ |
| 特点 | （1）跟absolute有啥区别？相对于谁做绝对定位<br>（2）固定定位元素不会随着视口滚动而滚动<br>（3）继承absolute特点 |

- 固定定位就是无论怎么拖动滚动条都是不会移动的，始终在页面上

# position之sticky

- 磁铁定位/粘性定位/吸附定位

| 作用 | relavtive+fixed的完美结合，制造出吸附效果                    |
| ---- | ------------------------------------------------------------ |
| 特点 | （1）如果产生偏移，原位置还是会在常规流中，会留着<br>(2) 如果它的最近祖先元素有滚动 那么它的偏移标尺就是最近祖先元素<br>(3) 如果最近祖先元素没有滚动 那么它的偏移标尺是视口<br>(4) 上下左右的偏移规则 |

- 比如导航栏，如果设置了吸附定位，在往下滚动的情况中，会出现导航栏吸附在页面上的现象
- 必须要设置导航栏的top，top就是一个定位，到top为0，的时候，也就是页面顶端距离导航栏的距离为零的时候，就会触发吸附定位，从而实现固定的效果。

```html
.nav{
    background-color: red;
    top: 0px;
    position: sticky;
}
```

# position之relative

- 相对定位

| 作用 | 使元素成为containing-block-官话是可定位的祖先元素 |
| ---- | ------------------------------------------------- |
|      |                                                   |

- 特点
  - 1. 可以使用top/right/bottom/left/z-index进行相对定位
    1. 相对定位的元素不会离开常规流
    1. 任何元素都可以设置为relative，它的绝对定位的后代都可以相对于它进行绝对定位
    1. 可以使浮动元素发生偏移，并控制他们的堆叠顺序

# position之absolute

**绝对定位**

- 作用
  - 使文档脱离常规流
- 特点
  - 1. 脱离常规流
    1. 设置尺寸要注意：百分比比的是谁？——最近定位祖先元素
    1. lrtb如果设置为0 它将对其到最近定位祖先元素的各位——衍生出一个居中妙计
    1. lrtb如果设置为auto 它将被打回原形
    1. 如果没有最近定位祖先元素 会认body为爹爹
    1. z-index可以控制堆叠顺序99999讲过把？

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .block{
            width: 80px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            border: 2px solid;
        }
        .block:nth-child(2){
            position: absolute;
            top: 20px;
            left: 20px;
            border-color: red;;
            z-index: 1;
        }
        .block:nth-child(1){
            position: absolute;
            top: 20px;
            left: 20px;
            border-color: blue;;
            z-index: 99999;
        }
    </style>
</head>
<body>
    <div class="block">a</div>
    <div class="block">b</div>
    <div class="block">c</div>
</body>
</html>
```