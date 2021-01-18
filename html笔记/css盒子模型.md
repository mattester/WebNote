# css盒子模型

**课程目标**

- 学习边框、轮廓灯块级元素设置，盒子模型
- 标准流、文档流、脱标流等技术术语
- 浮动的设置、浮动的特点
- 使用浮动技术进行特效制作

**课程安排**

- div
  - 块级和行级元素区别、div的作用、调整div大小、背景、换行、滚动条设置
- 盒子模型
  - 盒子模型概念、用途、设置盒子的间距、、
- 浮动
  - 浮动的重要作用、包裹和崩塌、特效制作、清除浮动...
- 块、行转换
  - 块级元素和行级元素的相互转换

# div介绍

- 什么是div

  - div是层叠样式表中的定位技术，全称divsion
  - 有时候把div称为图层，更多的称为块

- div样式设置

  - div大小、背景设置
  - div溢出效果样式、换行、滚动条显示
  - div边框、轮廓设置
  - 盒子模型

- div设置大小、位置、背景

  ```html
  div{
  			background-color: yellow;
  			width: 100px;
  			height: 100px;
  			position: absolute;/*定位的*/
  			top: 200px;/*y坐标*/
  			left: 200px;/*x坐标*/
  		}
  ```

## div 溢出处理效果

- 超出div宽度高度的文字或图片进行隐藏处理
- 超出div宽度按高度的文字或图片添加滚动条

## overflow属性设置

|      | 属性    | 作用                             |
| ---- | ------- | -------------------------------- |
| 1    | visible | 默认值。内容不会被修剪           |
| 2    | hidden  | 超出的部分被隐藏                 |
| 3    | scroll  | 不论是否需要，都显示滚定条       |
| 4    | auto    | 按需显示滚动条一遍查看其余的内容 |

## css轮廓

**作用**

- 绘制与元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用

示例 outline：dashed；虚线轮廓

**小贴士** 

- 还有：dotted（点状轮廓）solid（实线）double（双线）等

## css边框

- border-left
- border-right
- border-top
- border-bottom

**作用**

- 设置div边框的边线宽度、颜色、虚线、实线等样式css属性

**示例** border-bottom：solid；设置下边框为实线

**小贴士** 还有：none（无边框）、double（双线边框）等



## 制作只有下边框的文本框

```html
input{
   border: none;
   border-bottom: solid;
   outline: none;
}
```

# 盒子模型

**盒子模型**

​	width、height、border、margin、padding

**作用** 

- 在进行页面布局时，盒子模型非常重要

**示例** 

- margin：10px 10px 10px 10px 上右下左
- padding：10px 10px 10px 10px

- marign外边距就是对象和对象之间的距离

- padding边框到内容之间的距离

## 盒子模型

<img src="../img/盒子模型.png">

- content 可以是一段话，列表，图片 ；两个属性width，height
- padding 内边距
- botrder 边框的粗细
- 对象和对象的距离
- 盒子的总高度就是由
  - 上下外边距maring-top+maring-bottom
  - 上下外边框border-top+border-bottom
  - 上下内边距padding-top+padding-bottom
  - content内容高度
- 盒子的总宽度是由
  - 左右外边距maring-left+maring+right
  - 左右外边框border-left+border-right
  - 左右内边距padding-left+padding-right
  - content宽度width

## box-sizing padding的距离由哪里产生

**属性1**	content-box：在宽度和高度之外绘制元素的内边距和边框

**属性值2** border-box：已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度