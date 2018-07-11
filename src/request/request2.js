import {Toast} from "antd-mobile"
import axios from "axios"
import {isDev} from "../config/config";
// import {wxLogin} from "../utils/wxLogin";
import $ from "jquery"

// console.log($);

// $.post("http://testbgapi.yidianling.com/v1/test/detail",{accessToken:"41f1cb57e063bf6b902d38ba41ddf115",id :"1",uid:"13082537"},(result)=>{
//   console.log(result);
// })

axios.post("http://testbgapi.yidianling.com/v1/test/detail",{accessToken:"41f1cb57e063bf6b902d38ba41ddf115",id :"1",uid:"13082537"}).then((result)=>{
  console.log(result);
})


//获取数据
let mock="https://easy-mock.com/mock/5b2ca8dd61311b76221c0eb9/xinfang-mobile";
let dev="http://testbgapi.yidianling.com/v1";
let pro="";
let baseUrl="";

switch(isDev){
  case "mock": baseUrl=mock;break;
  case "dev": baseUrl=dev;break;
  case "pro": baseUrl=pro;break;
}

export let get=((url,callback,cbFail)=>{
    // 为给定 ID 的 user 创建请求
    axios.get(url)
        .then((res)=>{
            let result=res.data;
            callback(result);
        })
        .catch((err)=>{
            err=err.toString();
            Toast.fail(err);
            console.log(err);
        });
})

export let post=((url,params,callback,cbFail,filterFun)=>{
  if(!params){
    params={}
  }
  let userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    let {accessToken,uid} = JSON.parse(userInfo);
     accessToken="41f1cb57e063bf6b902d38ba41ddf115";
     uid="13082537"
    params.accessToken=accessToken;
    params.uid=uid;
  }
  url=baseUrl+url;

  axios.defaults.headers.post['Content-Type']='application/json;charse=UTF-8'
  axios({
    method: 'post',
    params: params,
    transformRequest:[function () {
      return JSON.stringify(params)
    }],
    url: url
  }).then((res) => {
    let result=res.data;
    if(result.code==200){
      if(callback){
        let {data}=result;
        if(filterFun){
            data=filterFun(data);
        }
        callback(data);
      }
    }
    else if(result.code==401){
      //重新登陆
      Toast.info("登陆超时，请重新登陆");
      localStorage.clear();
      wxLogin();  //重新登陆，获取新的access_token
    }
    else{
      //报错
      Toast.fail(result.msg);
      console.log(result.msg);
      if(cbFail){
        cbFail(result);
      }
    }
  }).catch((err) => {
    err=err.toString();
    Toast.fail(err);
    console.log(err);
  })

})

export default {
  get,
  post
}
