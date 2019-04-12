# 课程中关于mock部分的错误分析和解决
#### 错误来源
在向后台访问数据时，控制台打印了如下错误：
[!1](posts/error.png)
显示后台返回的数据是一个以'<'开头的一段数据，这段数据是无法被前端解析的，前端在request方法中处理收到的数据时，使用了response.json()方法，实际执行了JSON.parse()方法，将一段JSON转换为js对象，返回给前端使用。这个方法需要一个valid JSON对象，而以'<'开头的并不是一个valid JSON对象。但我们定义的返回值应该是：
[!2](posts/code.png)
跟'<'一点关系都没有，为了弄清楚response究竟返回了什么，我们可以通过postman来进行调试，访问这个url
[!3](posts/postman.png)
居然返回了一个莫名奇妙的html页面=_=#。


仔细阅读这个html的内容，发现它返回的是一个umijs的首页，再随便请求一个url，如localhost:8000/api/anyurl，也会返回同样的东西。这意味着我们的mock API没有写对地方，根本没有被umijs识别到。这时候已经实现了mock的同学就会发现我课上有个地方操作有问题：我在src文件夹下建了一个mock目录，然后写了一个文件。但是实际上mock的目录在上一级，并且框架已经提供了。
[!4](posts/tree.png)
umijs只会编译/mock下的文件，而不会把/src/mock下的文件识别为mock文件。


丢人匿。放个正确显示的截图。
[!5](posts/result.png)
希望大家不要犯跟我一样的低级错误。


同时推荐各位几个debug常用的工具：
 - Redux devTools,这是chrome的插件，安装后可以直接获取到整个redux状态树，也可以检查每一步的变化，非常方便易用。
 - Postman,可以用来向后台发请求，很好用的调试接口工具。

各位遇到问题可以采用console，redux，postman的方式来尝试调试，同时也可以使用断点：直接在代码中插入debugger的方式来设置断点，参考/src/models/typeCount.js第41行，在浏览器中使用检查或F12打开控制台即可触发断点，不使用检查时断点不会被触发。


如果有无法解决的问题欢迎在群里提出，大家一起解决～