import React, { Component } from 'react';
import {router,NavLink,Link} from "react-router-dom"
import "./TimeChange.css"
import request from "../../request/request";
import {Item1} from "../../components/Item1/Item1";
import classnames from "classname"

export class TimeChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
    }
    render() {
        let {buy,IndexSmall,oneYuanArea,changeIndexSmall}=this.props;
        let currentItem1="";
        if(oneYuanArea.length>0){
            currentItem1=oneYuanArea[IndexSmall].course;
            // console.log(currentItem1);
        }
        return (
             <div>
               <ul className={"df"} style={{backgroundColor:"#555555",color:"#d6d6d6"}}>
                 {
                   oneYuanArea.map((item,index)=>{
                     return   <li className={classnames({fx1:true,tac:true,rel:true,activeBj:item.isActive})} style={{padding:"0.08rem"}} key={index} onClick={()=>{changeIndexSmall(index)}}>
                         {
                           item.time
                         }

                         {
                           item.isActive && <img src="https://kc.yidianling.com/images/xrth/sj.svg" alt="" style={{width:"0.15rem",bottom:"-0.08rem",margin:"auto"}} className={"abs l0 r0"}/>
                         }
                     </li>
                   })
                 }
               </ul>

                 <div className={"mt10"}>
                     <Item1 {...currentItem1} buy={(id)=>{buy(id)}}/>
                 </div>
             </div>
        );
    }
}
