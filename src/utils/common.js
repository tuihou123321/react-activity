import {isDev} from "../config/config";

export function removeBlank(str){
    str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
    str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str=str.replace(/ /ig,'');//去掉
    str=str.replace(/^[\s　]+|[\s　]+$/g, "");//去掉全角半角空格
    str=str.replace(/[\r\n]/g,"");//去掉回车换行
    str=str.replace(/\$\$/gi,"");
    return str;
}

export function checkPhone(str){
    //去掉空格
    str=removeBlank(str);
    let re = /^1[3|4|5|7|8][0-9]{9}$/;
    if(re.test(str)){
        //手机号通过
        return true;
    }
    else if(str==""){
        //手机号不能为空
        return false;
    }
    else{
        //手机号错误
        return false;
    }
}

export function getCompanyPY(){
  if( window.location.host.split(".").length>1){
    let companyPY=window.location.host.split(".")[0];
    return companyPY;
  }
  else {
    if(isDev=="mock" || isDev=="dev"){
      return "geely";
    }
  }
}

export function delHtmlTag(str)
{
  return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
}

//阻止浏览器的默认行为
export function stopDefault( e ) {
  //阻止默认浏览器动作(W3C)
  if ( e && e.preventDefault )
    e.preventDefault();
  //IE中阻止函数器默认动作的方式
  else
    window.event.returnValue = false;
  return false;
}


export function isPC(){
    let isPC2=false;
    let browser={
        versions:function(){
            let u = navigator.userAgent, app = navigator.appVersion;
            return {//移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信
                qq: u.match(/\sQQ/i) == " qq" //是否QQ
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
    }
    if(browser.versions.mobile || browser.versions.ios || browser.versions.android ||
        browser.versions.iPhone || browser.versions.iPad){
    }
    else{
        isPC2=true;
    }
    return isPC2;
}

//把url中?参数导成对象格式
export function formatSearch(){
    let url=window.location.search;
    let search = url.replace(/^\s+/,'').replace(/\s+$/,'').match(/([^?#]*)(#.*)?$/);//提取location.search中'?'后面的部分
    if(!search){
        return {};
    }
    let searchStr  = search[1];
    let searchHash = searchStr.split('&');

    let ret = {};
    for(let i = 0, len = searchHash.length; i < len; i++){ //这里可以调用each方法
        let pair = searchHash[i];
        if((pair = pair.split('='))[0]){
            let key   = decodeURIComponent(pair.shift());
            let value = pair.length > 1 ? pair.join('=') : pair[0];

            if(value != undefined){
                value = decodeURIComponent(value);
            }
            if(key in ret){
                if(ret[key].constructor != Array){
                    ret[key] = [ret[key]];
                }
                ret[key].push(value);
            }else{
                ret[key] = value;
            }
        }
    }
    return ret;
}

export  function ShowCountDown(jztime,divname) {
  let now = new Date();
  let endDate = new Date(Date.parse(jztime.replace(/-/g, "/")));
  let leftTime=endDate.getTime()-now.getTime();
  let leftsecond = parseInt(leftTime/1000);
  let day=Math.floor(leftsecond/(60*60*24));
  let hour=Math.floor((leftsecond-day*24*60*60)/3600);
  let minute=Math.floor((leftsecond-day*24*60*60-hour*3600)/60);
  let second=Math.floor(leftsecond-day*24*60*60-hour*3600-minute*60);
  if(day<0){
    day=0
  }
  if(day < 10){day = "0"+day;}
  if(hour < 10){hour = "0"+hour;}
  if(minute < 10){minute = "0"+minute;}
  if(second < 10){second = "0"+second;}
  return {
    day,
    hour,
    minute,
    second
  }
  // console.log(day,hour,minute,second);
}

