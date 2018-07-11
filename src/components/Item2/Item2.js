import React, { Component } from 'react';
import {router,NavLink,Link} from "react-router-dom"

export class Item2 extends Component {
    state = {
    }
    render() {
      let {courseList,buy}=this.props;
      if(!courseList){
        courseList=[];
      }
      let one=(item,index)=>{
        let img=item.img;
        return <div className="bd1 bdrs10 mb5">
            <div onClick={()=>buy(item.id)}>
                <img src={img} alt="" style={{height:"0.9rem", width:"100%",borderRadius: "0.1rem 0.1rem 0 0"}}/>
            </div>
            <div className="p5">
              <a href="javascript:" style={{width: "100%"}} onClick={()=>{buy(item.id)}}>
                <div className="rel">
                  <div className="line2 fz16 b mb5" style={{height:"0.45rem"}}>{item.title}</div>
                  <div>
                    <span className="fz18 b mr5 ">¥ {item.price}</span>
                    <del className="fz12 c9">¥ {item.oldPrice}</del>
                  </div>
                </div>
                <button className="btn r0 b0 w100p mt5 bdrs5 activeB white">
                  立即抢购
                </button>
              </a>
            </div>
          </div>
      }
      return (
          <div className={"p15"}>
              <div className="df flexw">
                {
                  courseList.map((item,index)=>{
                    return  <div className="fx-4 p5  pt0" key={index}>{one(item)}</div>
                  })
                }
              </div>
          </div>
        );
    }
}
