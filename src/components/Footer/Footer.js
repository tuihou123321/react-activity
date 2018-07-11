import React, { Component } from 'react';
import {router,NavLink,Link} from "react-router-dom"


export class Footer extends Component {
    state = {
    }
    render() {
        let {history}=this.props;
        return (
          <div className={"p20 pt40"} style={{backgroundColor:"#ffc5c5"}}>
            <div  style={{marginBottom: '0.3rem'}}>
              <div className="line_01">
            <span>
              活动说明
            </span>
              </div>
              <ul>
                <li className="df mb5">
                  <div style={{width: '0.2rem'}}>
                    <span className="bot" style={{background: '#f64c9d'}}>1</span>
                  </div>
                  <div>
                    课程购买后，不支持退费
                  </div>
                </li>
                <li className="df mb5">
                  <div style={{width: '0.2rem'}}>
                    <span className="bot" style={{background: '#f64c9d'}}>2</span>
                  </div>
                  <div>
                    任何疑问，请联系客服协助处理
                  </div>
                </li>
              </ul>
              <div className="tac" style={{width: '1.8rem', margin: '0.3rem auto 0 auto'}}>
                {/*<div className="test1">*/}
                  {/*客服电话:400-114-1010*/}
                {/*</div>*/}
                <div className="test1">
                  服务热线(早8:00-凌晨1:00)
                </div>
              </div>
            </div>
          </div>
        );
    }
}
