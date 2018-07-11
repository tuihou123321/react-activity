import React, { Component } from 'react';
import {router,NavLink,Link} from "react-router-dom"

export class Item1 extends Component {
    render() {
        let {id,img,title,price,oldPrice,start,buy}=this.props;
        return (
          <div className={"df p5 pb15"} onClick={()=>{buy(id)}}>
            <div className="fx1 p5">
              <div style={{width:"1.6rem"}}>
                <img src={img} alt="" className={"w100p"}/>
              </div>
            </div>
            <div className="fx1 p5">
              <div className={"fz16 line1 b"} style={{width:"1.4rem"}}>
                {title}
              </div>
              <div className={"mb5"}>
                 <div className={"fz20 c5 b dib"}>
                  {
                    price==0?"免费":<span>￥{price}</span>
                  }
                  </div>
                <del className={"fz13 c9"}>￥{oldPrice}</del>
              </div>
              <div>
                {
                  start?<button className={"btn btn-default w100p white activeB"} style={{backgroundColor:"#b0b0b0"}}>立即抢购</button>:<button className={"btn btn-default w100p white"} style={{backgroundColor:"#b0b0b0"}}>即将开始</button>
                }
              </div>
            </div>
          </div>
        );
    }
}
