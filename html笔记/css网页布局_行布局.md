# css网页布局

- 行布局
- 多列布局
- 圣杯布局
- 双飞翼布局

  **经典网页**

- 百度首页
- 慕课网首页 综合布局

## 经典的行布局

- 基础 的行布局

- 行布局自适应

  - maring：0 auto；上下为零，左右自适应

- 行布局自适应显示最大宽

  - max-width：最大宽
  - min-width：最小宽

- 行布局垂直水平居中

- ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <style>
          body{
              margin: 0;padding: 0;color: #fff;text-align: center;
          }
          .div1{
              /*min-width: 800px;*/
              /*height: 1000px;*/
              /*background-color: blue;*/
              /*background: #73ff0c;*/
              /*margin: 0 auto;!*行布局左右边距自适应/*/
              width: 300px;
              height: 200px;
              background-color: #FFB6C1;
              position: absolute;
              top: 50%;
              left: 50%;
              margin-top: -100px;
              margin-left: -150px;
          }
      </style>
  </head>
  <body>
      <div class="div1"></div>
  </body>
  </html>
  ```