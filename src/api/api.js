import {get,post} from "../request/request"
import {detail,getUserStateFilter,lastResult} from "./filter/filter"

//获取题目
export let getQuestions=((params,cbSuccess)=>{
  post("/test/detail",params,cbSuccess,null,detail);
})

//当前用户的状态(含评测分析内容)
export let getUserState=((params,cbSuccess)=>{
    post("/test/status",params,cbSuccess,null,getUserStateFilter);
})

//保持用户做题状态
export let saveUserState=((params,cbSuccess)=>{
    post("/test/save-answers",params,cbSuccess);
})

//获取最后的答案
export let getLastReport=((params,cbSuccess)=>{
    post("/test/report",params,cbSuccess,null,lastResult);
})

//登陆
export let loginByWechat=((params,cbSuccess)=>{
    post("/user/login-by-wechat",params,cbSuccess);
})
