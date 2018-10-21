import express from 'express';
const app = express();
export class Course{
    constructor(public id:number,public courseName:string,public images:string,
    public task:number,public person:number)
    {

    }
}
const courses=[
    new Course(1,'2016级混合应用开发',
    'http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130',
    2,91),
    new Course(2,'2017-12-软件测试',
    'http://www.edu2act.cn/static/img/course.png',
    1,104),
    new Course(3,'2017web开发二',
    'http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130',
    10,90),
    new Course(4,'2016级测试方向-Web',
    'http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130',
    10,90),
    new Course(5,'2016级HTML5与CSS3',
    'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130',
    10,90),
    new Course(6,'2017级34班软件测试',
    'http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130',
    10,90),
    new Course(7,'2018级信息素养',
    'http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130',
    10,90),
    new Course(8,'2018级计算机导论',
    'http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130',
    10,90),
    new Course(9,'2018-2019第一学期C++',
    'http://www.edu2act.cn/static/img/course.png',
    10,90),
    new Course(10,'2017级数据结构',
    'http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130',
    4,401),
    new Course(11,'软件学院18级训练营',
    'http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130',
    0,78),
    new Course(12,'2017级暑期训练营',
    'http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130',
    10,90),
];
const courses1=[
    new Course(1,'github开源之旅视频课程第一步',
    'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190',
    14,3738),
    new Course(2,'CSS基础','http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190',
    12,2317),
    new Course(3,'HTML5基础','http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190',
    12,1312),
    new Course(4,'Selenium IDE WEB自动化测试入门视频课程（中）',
    'http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190',
    13,3794),
    new Course(5,'扩展的ICONIX软件过程实践','http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190',
    12,2269),
    new Course(6,'Selenium IDE WEB自动化测试入门视频课程 上','http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190',
    12,1312),
    new Course(7,'网页制作与开发','http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190',
    12,1572),
    new Course(8,'产品设计与交互那些事','http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190',
    12,1312),
    new Course(9,'VR AR产品设计的思考视频课程','http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190',
    12,1312),
    new Course(10,'ProcessOn界面原型绘制','http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190',
    12,1312),
    new Course(11,'ProcessOn绘制流程图','http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190',
    12,1312),
    new Course(12,'项目管理平台Redmine','http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190',
    12,1312),
];

export class Shequ{
    constructor(public id:number,public images:string,public courseName:string,
    public contentone:string,public contenttwo:string)
    {

    }
}
const shequ=[
    new Shequ(1,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',
        'WEB开发（二）———函数',
        '(一)函数三要素函数的三要素为函数名、参数（形参，实参），返回值。',
        '（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写'),
        new Shequ(2,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg',
        '类定义关键字详解',
        'JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就',
        ''),
        new Shequ(3,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg',
        '一个Java文件可包含多个main方法',
        '一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方',
        ''),
        new Shequ(4,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg',
        '数据结构-线性表的经典应用',
        '1. 一元多项式的表示和相加 在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。因此，',
        ''),
        new Shequ(5,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg',
        '栈和队列之间的相互转化','队列实现栈需要两个队列data，help，因为队列是先进先出，','想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元'
        ),
        new Shequ(6,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',
        'web开发（二）-字符串类型','在C语言中的数据类型中没有字符串类型，字符串是字符数组，那么字符串可以遍历。','在前端JavaScript中数组和字符串是两种数据类型，也就是字符串类型是存'
        ),
        new Shequ(7,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',
        'JavaScript','在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信','息。包括导致事件的元素、事件的类型以及其他与特定事件相'
        ),
        new Shequ(8,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg',
        '数据结构-快速排序','快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，','通常称其为分治法(Divide-and-ConquerMethod)。 分治法的基本思想'
        ),
        new Shequ(9,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg',
        ' 数据结构——栈和队列的逻辑特性','线性表是最常用且最简单的一种线性结构。 线性结构的特点： (1) 存在唯一的一个被','称作“第一个”的数据元素。 (2) 存在唯一的一个被称作“最后一个&rd'
        ),
        new Shequ(10,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg',
        '栈和队列之间的相互转化','队列实现栈需要两个队列data，help，因为队列是先进先出，','想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元'
        ),
        new Shequ(11,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg',
        '初探JVM','今天晚上翻了翻别人的博客了解了jvm的一些基础，因为每个人的侧重点不同，我也联系自己的看法整理一','份。 首先要了解jvm基本架构，总的分为三个主要的子'
        ),
        new Shequ(12,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/4cQyhZvxEuX2RFjQUx3waR.jpg',
        'JavaScript中事件绑定','一、 事件 事件是您在编程时系统内的发生的动作或者发生','的事情，系统通过它来告诉您在您愿意的情况下您可以以某种方式对它做出回应。在Web中,事件在浏览'
        ),
];


app.get('/api',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    //console.log(req.params);
    res.json(courses.filter((ele)=>
        ele.id==req.params.id
    ));
});
app.get('/api/courses1',(req,res)=>{
    res.json(courses1);
})

app.get('/api/shequ',(req,res)=>{
    res.json(shequ);
})
app.listen(8000);