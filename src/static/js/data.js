//每个时间段的开始时间和折扣
export let startTimes=[
    {
        timeType:"7/17",
        time:"2018-07-17 24:00",
        cell:"4"
    },
    {
        timeType:"7/24",
        time:"2018-07-24 24:00",
        cell:"4.5"
    },
    {
        timeType:"7/31",
        time:"2019-07-31 24:00",
        cell:"5"
    }
]

//1元抢购
export let oneYuanArea=[
  {
    time:"7/9",
    course:{
      id:10,
      img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
      title:"新手咨询师成长系列：快速拿下第一单",
      oldPrice:"99.00",
      price:"1.00"
    }
  },
  {
    time:"7/10",
    course:{
      id:11,
      img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
      title:"2新手咨询师成长系列：快速拿下第一单",
      oldPrice:"99.00",
      price:"1.00"
    }
  },
  {
    time:"7/11",
    course:{
      id:12,
      img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
      title:"3新手咨询师成长系列：快速拿下第一单",
      oldPrice:"99.00",
      price:"1.00"
    }
  },
  {
    time:"7/18",
    course:{
      id:12,
      img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
      title:"3新手咨询师成长系列：快速拿下第一单",
      oldPrice:"99.00",
      price:"1.00"
    }
  },
  {
    time:"7/25",
    course:{
      id:12,
      img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
      title:"3新手咨询师成长系列：快速拿下第一单",
      oldPrice:"99.00",
      price:"1.00"
    }
  }
]

//超值大咖面授课
export let listsAll=[
    {
      title:"超值大咖面授课",
      data:[
          {
            id:100,
            img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
            title:"111新手咨询师成长系列：快速拿下第一单",
            oldPrice:"99.00",
            price:"1.00"
          },
          {
            id:101,
            img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
            title:"222新手咨询师成长系列：快速拿下第一单",
            oldPrice:"99.00",
            price:"1.00"
          }
      ]
    },
    {
        title:"精品督导课预售",
        data:[
            {
                id:100,
                img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
                title:"111新手咨询师成长系列：快速拿下第一单",
                oldPrice:"99.00",
                price:"1.00"
            },
            {
                id:101,
                img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
                title:"222新手咨询师成长系列：快速拿下第一单",
                oldPrice:"99.00",
                price:"1.00"
            }
        ]
    }, {
        title:"咨询师计划",
        data:[
            {
                id:100,
                img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
                title:"111新手咨询师成长系列：快速拿下第一单",
                oldPrice:"99.00",
                price:"1.00"
            },
            {
                id:101,
                img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
                title:"222新手咨询师成长系列：快速拿下第一单",
                oldPrice:"99.00",
                price:"1.00"
            }
        ]
    }, {
        title:"咨询技能提升",
        data:[
            {
                id:100,
                img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
                title:"111新手咨询师成长系列：快速拿下第一单",
                oldPrice:"99.00",
                price:"1.00"
            },
            {
                id:101,
                img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
                title:"222新手咨询师成长系列：快速拿下第一单",
                oldPrice:"99.00",
                price:"1.00"
            }
        ]
    }
]



//限时免费领取
export let freeCourse={
  id:12,
  img:`http://gitlab.yidianling.com/yidianling_static/activity.yidianling.com/raw/react/react-activity/src/static/images/bannerLittle.png`,
  title:"3新手咨询师成长系列：快速拿下第一单",
  oldPrice:"99.00",
  price:"1.00"
}


export function buy(id){
    console.log(id);
}
