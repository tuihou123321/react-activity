import React, { Component } from 'react';

export class SmallTitle extends Component {
    render() {
        let {title,describe}=this.props;
        return (
          <div className={"df jcc p10 tac aic"}>
            <div>
                 <span>
                   <img src="https://kc.yidianling.com/images/xrth/line.png" alt="" style={{width:"0.19rem",height:"0.1rem"}}/>
                 </span>
            </div>
            <div className={"pl10 pr10"}>
              <h2 className={"mb5 active"}>{title}</h2>
              <div>
                {describe}
              </div>
            </div>
            <div>
                   <span>
                   <img src="https://kc.yidianling.com/images/xrth/line.png" alt="" style={{width:"0.19rem",height:"0.1rem"}}/>
                 </span>
            </div>
          </div>
        );
    }
}
