/**
 * Created by mqd on 2018/6/3.
 */
import React, {Component} from 'react';
import {Toast} from 'antd-mobile';
import {router,NavLink,Link} from "react-router-dom"
// import {getQuestions} from "../../api/api"
import {Banner} from "../../components/Banner/Banner";
import {Footer} from "../../components/Footer/Footer";
import {TimeChange} from "../../components/TimeChange/TimeChange";
import {Item1} from "../../components/Item1/Item1";
import {Item2} from "../../components/Item2/Item2";
import {SmallTitle} from "../../components/SmallTitle/SmallTitle";
import {formatSearch} from "../../utils/common";
import {oneYuanArea,listsAll,freeCourse,startTimes,buy} from "../../static/js/data"


export class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IndexBig:0,  //时间段的索引
            IndexSmall:0, //当前小时段小的索引
            cell:"5", //当前折扣
            nextTimeType:""  //倒计时间
        };
        this.changeOneYuanIndex=this.changeOneYuanIndex.bind(this)
        this.changeIndexSmall=this.changeIndexSmall.bind(this)
    }

    //第一个
     componentDidMount(){
         startTimes.forEach(item=>{
             let day=item.timeType.split("/")[1];
             //判断今天是几号
             let  date = new Date();
             let today = date.getDate();
             if(day<today){
                item.isActive=true;
             }
             else{
                 item.isActive=false;
             }
         })
     }
     firstOneYuanIndex(){
     }
     changeIndexSmall(index){
        this.setState({
            IndexSmall:index
        })
     }
     changeOneYuanIndex(){
     }
    render() {
      let {history}=this.props;
      let {cell,nextTimeType,IndexSmall}=this.state;
        return (
            <div>
              <Banner cell={cell} nextTimeType={nextTimeType}/>
              <div style={{backgroundColor:"#ffc5c5"}}>
                <SmallTitle title={"1元专区"} describe={"每天0 点-24点   一门精选课程特价"}/>
              </div>
              <TimeChange oneYuanArea={oneYuanArea} IndexSmall={IndexSmall}  buy={(id)=>{buy(id)}} changeIndexSmall={(index)=>this.changeIndexSmall(index)}/>
                {
                    listsAll.map(item=>{
                        return  (
                            <div>
                                <div className="blank"></div>
                                <div className={"mt15"}>
                                    <SmallTitle title={"超值大咖面授课"}/>
                                    <Item2 courseList={item.data} buy={(id)=>{buy(id)}}/>
                                </div>
                            </div>
                        )
                    })
                }
              <div className="blank"></div>
              <div className={"mt15"}>
                <SmallTitle title={"限时免费领"}/>
                <Item1 {...freeCourse} start={"true"} buy={(id)=>{buy(id)}}/>
              </div>
              <Footer/>
            </div>
        );
    }
}
