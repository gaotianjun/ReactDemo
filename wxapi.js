'use strict'

const titbit=require('titbit');
const gohttp=require('gohttp');
const act=require('./access_token');

const app=new titbit({
    //开始调试模式，会输出错误信息
    debug:true,

    //启用全局日志
    globalLog:true
})
app.post('/img-check',async c=>{
    //默认第两个参数为0，表示获取索引值为0的文件
    let f=c.getFile('media')
    if(f===null){
        c.status(400);
        c.res.body='bad request:not found media'
        return
    }    
    let filename=`${c.helper.makeName()}${c.helper.extName(f.filename)}`
    let  r=await c.moveFile(f,filename);
    //c.res.body=filename;
    let tk=await act.getToken();
    if(tk.access_token===undefined){
        c.status(500)
        r.res.body='filed to get access_token'
        return
    }
    let imgcheck_api='https://api.weixin.qq.com/wxa/img_sec_check'
                    +`?access_token=${tk.access_token}`
    let imgcheck=await gohttp.post(imgcheck_api,{
            //直接把原始的body数据传递过去
            //c.rawBody中存储了HTTP协议格式的上传数据
            rawBody:c.rawBody,
            //把客户端请求的header传递给微信服务端
            headers:c.headers
        })
    //把请求结果转化为文本格式返回
    c.res.body=imgcheck.text();

},'检查图片');

app.run(1234);