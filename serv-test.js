'use strict'

const titbit=require('titbit')

const app=new titbit({
    //开始调试模式，会输出错误信息
    debug:true,

    //启用全局日志
    globalLog:true
})

//带参数的路由
app.get('/user/:name/:age',async c=>{
    let {name,age}=c.param
    console.log(name,age)
    //原样返回
    c.res.body=c.param
    console.log(c.name,c.group)
},{name:'userinfo',group:'user'})
//返回随机数
app.get('/rand/:start/:end',async c =>{
    //解析后的参数是字符串，数字也是字符串
    let start=parseInt(c.param.start);
    let end=parseInt(c.param.end);

    let nm=start+parseInt(Math.random()*(end-start))
    c.res.body=nm;
},'get-rand')
//url中查询字符串解析到c.query
//上传的额body数据解析到c.body


app.run(1234);