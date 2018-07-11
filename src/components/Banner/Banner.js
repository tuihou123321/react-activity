import React, { Component } from 'react';
import {router,NavLink,Link} from "react-router-dom"
import "./Banner.css"
import {ShowCountDown} from "../../utils/common"


export class Banner extends Component {
    state = {
      day:"",
      hour:"",
      minute:"",
      second:""
    }
    // 判断现在是哪个阶段，多少折扣
    // 只要找到索引就可以了

    componentWillMount(){
      let {nextTimeType}=this.props;
      nextTimeType="2018/"+nextTimeType;
      window.setInterval(()=>{
        let timeJson=ShowCountDown(nextTimeType)
        let {day,hour,minute,second}=timeJson;
        this.setState({
            day,
            hour,
            minute,
            second
        })
      }, 1000);
    }
    render() {
     let {cell}=this.props;
     let banner="https://kc.yidianling.com/images/xrth/banner1.jpg";
     let circleBj="https://kc.yidianling.com/images/xrth/circleBj.png";
     let bannerBox={
        background: `url(${banner}) no-repeat`,
        backgroundSize: "100% 3.61rem",
        width: "100%",
        height: "3.61rem"
      }
    let discount={
        background: `url(${circleBj}) no-repeat`,
        backgroundSize: "0.32rem 0.32rem",
        backgroundPosition:"0.08rem 0.15rem",
        width: "0.5rem",
        display: "inline-block"
      }
      let {day,hour,minute,second}=this.state;
        return (
           <div>
               <div className={"fz14 rel"} style={bannerBox}>
                 <div className={"box white"}>
                   <div className={"fz20 b tac df aic jcc "} style={{marginBottom:"0.12rem",color:"#fff6c2",letterSpacing:"0.025rem"}}>
                     <span>- 咨询师必修课程低至 </span>
                     <span className={"discount fz40"}>{cell}</span>
                     <span>折 -</span>
                   </div>
                   <div style={{paddingLeft: "1.46rem"}}>
                     <span className={"day fl"} style={{paddingRight:"0.31rem"}}>{day}</span>
                     <span className={"hour fl"} style={{paddingRight:"0.29rem"}}>{hour}</span>
                     <span className={"minute fl"} style={{paddingRight:"0.28rem"}}>{minute}</span>
                     <span className={"second"}>{second}</span>
                   </div>
                 </div>
               </div>
           </div>
        );
    }
}
