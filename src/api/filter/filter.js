//获取最后的答案
export let detail=((result)=>{
    let {questions}=result;
      questions=questions.map(item=>{
        let {content,image,audio,id,testAnswerDtos}=item;
        let select=testAnswerDtos.map(item2=>{
            let {id,content,image}=item2;
            return {
                answerId:id,
                content:content,
                contentImage:image
            }
        })

        return {
            title:content,
            detailImage:image,
            detailVoice:audio,
            questionId:id,
            select:select
        }
    })
    result.questionLists=questions;

    return result;
})

export let getUserStateFilter=(result)=>{
    let {rooms,currentRoom,testTime,selfReport}=result;
    let {location_image,location_image_trans}=currentRoom;

    let homeState=[];
    if(rooms){
        homeState=rooms.map(item=>{
            return {
                homeId: item.id,
                homeName:item.room_name,
                isChecked: item.isTested
            }
        })
    }

    let testResultTest1="";
    let testResultTest2="";
    if(selfReport){
        testResultTest1=selfReport[0];
        testResultTest2=selfReport[1];
    }

    result={
        homeState:homeState,
        positionImages:{
            mapImage:location_image,
            userImage:location_image_trans,
        },
        testTime:testTime,
        testResultTest1,
        testResultTest2,
        testResultImage:""
    }

    return result;
}


//获取最后的答案
export let lastResult=((result)=>{
    let {character,moods,totalScore,testTime,health}=result;
    let {animal,image,explain}=character;
    let {tree,healthLevel,soulRecipe}=health;

    result={
        testAnalysis:explain,
        likeAnimalName:animal,
        likeAnimalImage:image,
        emotionChange:moods,
        emotionDescript:"",
        testTime,
        testScore:totalScore,
        mentalHealthTree:{
            "mentalTreeImage":tree,
            "mentalText":healthLevel
        },
        suggestions:soulRecipe
    }
    return result;
})
