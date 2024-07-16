# flex

## flex-direction
* row 主轴方向向右
* row-reverse 主轴方向向左
* column 主轴方向向下
* column-reverse 主轴方向向上
<img src="https://img-blog.csdnimg.cn/20200611150640627.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70">

## flex-wrap
* nowrap 不换行
* wrap 换行
* wrap-reverse 翻转换行，第一行在下面

## flex-flow
* 这个属性是上面两个属性的缩写
* flex-flow < flex-direction > || < flex-wrap >

## justify-content
* flex-start 从主轴的起点开始
* flex-end 从主轴的终点开始
* center 居中
* space-between 两端对齐
* space-around 空间平均分布在每个盒子的两边
<img src="https://img-blog.csdnimg.cn/20200608101711950.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70">

## align-items
* flex-start 从侧轴的起点开始盒子布局，这是开启flex后的(盒子有高度时)默认布局方式
* flex-end 从侧轴的终点开始盒子布局
* center 使盒子在侧轴上进行居中
* baseline 使用文字让盒子进行对齐，文字基线对齐
* stretch 如何盒子没有设置高度，则在侧轴方向上面进行拉伸充满父元素(没有高度时默认值）
<img src="https://img-blog.csdnimg.cn/20200528222246166.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70">

## align-content
* flex-start 从侧轴开始的地方进行布局
* flex-end
* center
* space-between
* space-around
<img src="https://img-blog.csdnimg.cn/20200611172049246.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70">

## order
* order后边可以跟一个整数(正负都可以)，order的数值越大越往后面排

## flex-grow
* 如果父元素还有剩余的空间，拥有此属性的元素会自动增长并填满剩余的空间
* 他后面跟一个整数，如果兄弟元素也有此属性的话，会将剩余空间平均分配，他们会随flex-grow分配到每个元素

## flex-shrink
* 与flex-grow相反，当父元素空间不够的时候他会进行缩小，而flex-shrink就是控制缩小的的属性
* 他后面也是跟一个整数，不过他的算法比较麻烦，我们只要知道后面跟的数值越大，则缩小的越多
* flex-shrink：0表示不收缩

## flex-basis
* 盒子初始的时候，所占的空间大小
* 默认值auto,初始大小就是我们设置的宽度，也可以自定义宽度

## flex
* flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto
* 可以直接设置为auto表示flex:1 1 auto
* 可以直接设置成none表示flex:0 0 auto

## align-self
* 单个盒子在侧轴上有不同的对齐方式
### 属性值
1. auto 继承align-items的属性
2. flex-start 盒子从侧轴开始的地方布局
3. flex-end 盒子从侧轴结束的地方布局
4. center 盒子在侧轴居中位置
5. baseline 文字基线对其
6. stretch默认值，没有高度自动充满父元素

```
.inner:nth-child(1){
	align-self: center;
}
.inner:nth-child(2){
	align-self: flex-end;
}
.inner:nth-child(3){
	align-self: stretch;
}
```
<img src="https://img-blog.csdnimg.cn/20200611185903172.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lvdWhlYnVrZTIyNQ==,size_16,color_FFFFFF,t_70">

## 其他说明
* 开启flex的盒子不会脱离文档流

# Event Loop

* Event Loop即事件循环，是指浏览器或Node的一种解决javaScript单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理
