# 8_create系列常见节点的方法

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="domReady.js"></script>
    <script>
        myReady(function(){
            var ul = document.getElementById("myList");
            var li = document.createElement("li");
            ul.appendChild(li);
        });
    </script>
<body>
    <ul id="myList"></ul>
</body>
</html>
```

- 也就是说，使用js里面的dom可以去在html里面的ul里面去增加一个li

- 可以通过dom去增删改查，不用在页面上进行操作了

- ```html
  <!DOCTYPE html>
  <html lang="zh-CN">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script src="domReady.js"></script>
      <script>
          myReady(function(){
              var ul = document.getElementById("myList");
              var li = document.createElement("li");
              ul.appendChild(li); var txt = document.createTextNode("Item");
              ul.appendChild(li);
              li.appendChild(txt);/*将txt变量上加入到li里面*/
          });
      </script>
  <body>
      <ul id="myList"></ul>
  </body>
  </html>
  ```

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="domReady.js"></script>
    <script>
       myReady(function () {
            var comment = document.createComment("A comment");/*创建一个注释*/
            var fragment = document.createDocumentFragment();
            var ul = document.getElementById("myList");/*通过id去查找对应ul*/
            var li = null;/*一个li节点为空*/
            for (var i=0;i<3;i++){/*重复三次*/
                li = document.createElement("li");/*创建一个li的节点*/
                li.appendChild(document.createTextNode("Item"+(i+1)));/*在li节点增加内容*/
                fragment.appendChild(li);/*将li节点和内容一起添加到fragment*/
                                					                          document.body.insertBefore(comment,document.body.firstChild);/*将注释插入到里面*/

            }
            ul.appendChild(fragment);/*然后将fragment添加到ul里面*/
       })
    </script>
<body>
    <ul id="myList"></ul>
</body>
</html>
```



