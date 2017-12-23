//轮播
var lunbolist=(state=[],info)=>{
	let {type,payload} = info;
    switch(type){
        case 'lunbolist':
            return [...payload]
        default :
            return state
    }

}
//拼团
var pingtuanlist=(state=[],info)=>{
    let {type,payload} = info;
    switch(type){
        case 'pingtuanlist':
            return [...payload]
        default :
            return state
    }

}

//限时抢购
var timelimitqiangoulist=(state=[],info)=>{
    let {type,payload} = info;
    // console.log(info.payload,11111111);
    switch(type){
        case 'timelimitqiangoulist':
            return [...payload]
        default :
            return state
    }
}



//滚动list--gundonglist
var gundonglist=(state=[],info)=>{
    let {type,payload} = info;
    switch(type){
        case 'gundonglist':
            return [...payload]
        default :
            return state
    }
}
//改变title
var changetitle=(state='西狗全球购',info)=>{
    let {type,payload} = info;
    switch(type){
        case 'changetitle':
            return payload
        default :
            return state
    }
}





export {lunbolist,pingtuanlist,timelimitqiangoulist,gundonglist,changetitle};

