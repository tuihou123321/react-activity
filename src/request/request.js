import {Toast} from "antd-mobile"
// import axios from "axios"
import {isDev} from "../config/config";
import {wxLogin} from "../utils/wxLogin";
import $ from "jquery"


//获取数据
let mock="https://easy-mock.com/mock/5b2ca8dd61311b76221c0eb9/xinfang-mobile";
let dev="http://testbgapi.yidianling.com/v1";
let pro="http://bgapi.yidianling.com/v1";
let baseUrl="";

switch(isDev){
  case "mock": baseUrl=mock;break;
  case "dev": baseUrl=dev;break;
  case "pro": baseUrl=pro;break;
}

export let get=((url,callback)=>{
    alert(url);
    $.ajax({
        url: url,
        success: function (data) {
            alert(JSON.stringify(data));
            // if(callback){
                callback(data);
            // }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            /*错误信息处理*/
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
})

export let post=((url,params,callback,cbFail,filterFun)=>{
  if(!params){
    params={}
  }
  let userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    let {accessToken,uid} = JSON.parse(userInfo);
    params.accessToken=accessToken;
    params.uid=uid;
  }

  //dev环境专用
  //   params.accessToken="6cd638b4ab2659042807efa7456978a8";
  //   params.uid="13082537";

  url=baseUrl+url;
  $.post(url,params,(res)=>{
      let result=res;
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
  })
})

export default {
  get,
  post
}
