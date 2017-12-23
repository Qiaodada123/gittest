import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import ReactSwipe from 'react-swipe';
import {connect} from 'react-redux';  //容器组件
import Footer from '../Common/Footer';
import InfiniteScroll from 'react-infinite-scroller';//引入无限加载的模块
import {NavLink} from 'react-router-dom'

class Home extends Component{
	constructor(){
		super();
		this.state={
			foodlist1:[],
			foodlist2:[],
			scrollstate:true,
			curpage:1,
			gundongstate:[]
		}
	}

	componentWillMount(){
		//轮播
		this.props.lunboBanner();
		this.props.pingtuanPromise();
		this.props.timelimitqiangou();
		var self=this
		this.props.gundonglist(this.state.curpage,this.state.gundongstate,self);
		// console.log(this,self,78788)
		//美食共享
		axios.get('/index/module.htm?&oem=IOS&scheme=http&osversion=9.0%20&screenwidth=375&screenheight=667&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou').then(res=>{
			var result1=[];
			var result2=[];
			for(var i=0;i<res.data.data.labs.length;i++){
	      		if(i%2==0){
	      			result1.push(res.data.data.labs[i])
	      		}else{
	      			result2.push(res.data.data.labs[i])
	      		}
	      	}
			this.setState({
				foodlist1:result1,
				foodlist2:result2
			})
		})

		
		
	}

	render(){
		
		function renderlistjingxuan(ele){
			var pingpailist=[];
			if(ele){
				for(var i=0;i<ele.length;i++){
					pingpailist.push(
						<div className='jingxuan' key={ele[i].linkUrl}>    
						 	<a href={ele[i].linkUrl}>  
						  		<img  src={ele[i].bgImgUrl} />    
						  	</a>
						</div>
					)
				}
				return pingpailist;
			}
		}
		function rendergomeiweilist(ele){
			var listarr=[];
			for(var i=0;i<ele.length;i++){
				for(var j=0;j<ele[i].length;j++){
					listarr.push(
							<div className='gowei' key={ele[i][j].linkUrl}>    
						     	 <a href={ele[i][j].linkUrl}>         
						      		<img  src={ele[i][j].bgImgUrl}/>    
						     	 </a> 
						    </div>
					)
				}
			}
			return listarr
		}
		function renderpingpailist(ele){
			var listarr=[];
			for(var i=0;i<ele.length;i++){
				for(var j=0;j<ele[i].length;j++){
					listarr.push(
							<div className='pinpaipai' key={ele[i][j].linkUrl}>    
						     	 <a href={ele[i][j].linkUrl}>         
						      		<img  src={ele[i][j].bgImgUrl}/>    
						     	 </a> 
						    </div>
					)
				}
			}
			return listarr
		}

		{/*无限滚动加载
		
		

		无限滚动加载*/
		}
		// console.log(this.props.gundong,89214)
		var gundonglist=[];
		if(this.props.gundong){
			[...this.props.gundong,...this.state.gundongstate].map((item)=>{
				gundonglist.push(
					<div>
						<p className="div_img" key={item.tid}>
							<a href="hd.htm?tid=1538" className="hot_link">  
						 		<img className="ui-imglazyload" data-url={item.imgurl} src={item.imgurl} />
						 	</a>
						</p>
						<div className="ui-scroller-a seckill-new-container" >
							<ul className="ui-slider-content"  >
								{
									item.itemlist.map((item1,index)=>
										<li key={index+1} onClick={this.handleClick.bind(this,item1.tid,item1.sku)}>
										  	<a className="error_tuan"  > 
										  		<img src={item1.imgurl} />
										  	</a> 
											<div className="seckill-item-price"> 
												<span className="seckill-new-title ">{item1.name}</span> 
												<span className="seckill-new-price">
												<b className="mS">¥</b>{item1.price}
												<b className="mS" >¥{item1.oldprice}</b>
												</span> 
											</div>
										</li> 
									)
								}
							</ul>
						</div>
					</div>
				)
				
			})
		}
		
		
		return (
			
			<div id='home'>
				<Footer></Footer>
				{
					//头部
				}
				<div className="ui-header" id="ui-header">
					<div className="ui-header-img"></div>
					<div className="indexSearchBtn">
						<NavLink to='/classify' className='SearchBtn'></NavLink>
					</div>
					<span className="index_scan" id="index_scan"></span>
				</div>

				{
			    	//轮播用---ReactSwipe（github上有）
			    }
			   
			    <section id="slider">
			    	<div className="ui-slider">
			    		<ul className="ui-slider-content" >
			    		<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 2000}} key={this.props.bannerList.length}>
			    		{
			    			this.props.bannerList.map(item=>
			    				<li key={item.content.tid} > 
			    					<a >
			    						<img src={item.imageurl} />   
			    					</a>
			    				</li>
				    		)
			    		}
			    		</ReactSwipe>	 
			    		</ul>
			    		
			    	</div>
			    </section>
				
				{
					//环球美食
				}
				<div className='div_top_lab'>
					<div className='div_top_icon'>
						{
							this.state.foodlist1.map(item=>
								<div key={item.content.tid}>
									<a className="error">
										<img src={item.imageurl} />
										{item.title}
									</a>
								</div>

							)
						}
						

					</div>
					<div className='div_top_icon'>
						{
							this.state.foodlist2.map(item=>
								<div key={item.content.tid}>
									<a className="error" href={item.imageurl}>
										<img src={item.imageurl} />
										{item.title}
									</a>
								</div>

							)
						}
					</div>
				</div>

				{
					//拼团
				}
				

				<section className='groupconfigure'>
					<div className="groupconfigure_head">
						<div className="tuan_show_more">更多</div>
					</div>
					<div className='tuanlist'>
						<div className='ui-scroller-a seckill-new-container'>
							<ul className='ui-slider-content' >
								{
									this.props.pingtuanlist.map(item=>
										<li key={item.gbid} onClick={this.handleClick.bind(this,item.gbid)}>
											<a className="error_tuan" id={item.gbid}>
												<img src={item.imgurl}/>
											</a> 
											<div className="seckill-item-price"> 
												<span className="group-new-price">
													<b className="groupnub"><b className="lP">{item.pa}</b>人团</b>
													<b className="lS">¥</b>
													<b className="lG">{item.groupprice}</b>
												</span>
											</div>
										</li>
									)
									
								}
							</ul>
						</div>
					</div>

					
					
				</section>

				{
					//限时抢购
				}
				
				<div className='activity_configure'>
					{
						// <div >    
						// 		<a>  
						// 			<img  alt="" src="https://basedata.qn.seagoor.com/1511925725524.jpg" />    
						// 		</a>
						// </div>
					}
					
					<div className='qiangwrap'>
						{
							this.props.qianglist?this.props.qianglist.map((item,index)=>
									<div className='qiang' key={index}>     
										<a href={item.linkUrl}>         
											<img  src={item.bgImgUrl} />  
										</a> 
									</div>
							):null
						}
					</div>

					{renderlistjingxuan(this.props.jingxuanlist)}
					

					
					<div className='gouwrap' >
						{rendergomeiweilist(this.props.golist)}
					</div>
					
					{renderlistjingxuan(this.props.pingpai)}
					

					<div className='pingpaituanwrap'>
						{renderpingpailist(this.props.pinpaituanlist)}
					</div>
   
					{renderlistjingxuan(this.props.jingcai)}

					
					
					{/*滚动加载*/}
					<section id='indexlists' className='idlists'>
					<InfiniteScroll
					    pageStart={0}
					    loadMore={this.loadMore.bind(this)}
					    hasMore={this.state.scrollstate}
					    threshold={0}
					    loader={<div className="loader">Loading ...</div>}
					>
					 {gundonglist}
					 </InfiniteScroll>	
					</section>
					{/*滚动加载*/}
				</div>






			{
				//home--------	
			}
			</div>
				
		)
	}

	handleClick(id,sku){
		console.log(id,sku);
		this.props.history.push(`/detail/${id}/${sku}`)  //设置动态路由匹配  id
	}
	
	loadMore(){
		var self=this;
		axios.get(`/index/gettodaynew.htm?curpage=${self.state.curpage}&oem=IOS&scheme=http&osversion=9.0%20&screenwidth=375&screenheight=667&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou`).then(res=>{
			if(self.state.curpage>=7){
				return
			}
			if(res.data.data.list.length>0){
				this.setState({
					gundongstate:[...this.state.gundongstate,...res.data.data.list],
					curpage:self.state.curpage+1,
					scrollstate:!this.state.scrollstate
				})
			 }
		})

	}
		
	

	
}




export default connect(
	(state)=>{
		// console.log(state,888)
		var list=state.timelimitqiangoulist;
		var qianglist,jingxuanlist;
		var golist=[];
		var pingpai;
		var pinpaituanlist=[];
		var jingcai;
		var gdlist=state.gundonglist;
		var gundong;
		if(list.length>0){
			// qianglist=list[3].items;
			// jingxuanlist=list[4].items;
			// golist.push(list[5].items);
			// golist.push(list[6].items);
			// golist.push(list[7].items);
			// pingpai=list[8].items;
			// pinpaituanlist.push(list[9].items);
			// pinpaituanlist.push(list[10].items);
			// jingcai=list[11].items;
			qianglist=list[2].items;
			jingxuanlist=list[3].items;
			golist.push(list[4].items);
			golist.push(list[5].items);
			golist.push(list[6].items);
			pingpai=list[7].items;
			pinpaituanlist.push(list[8].items);
			pinpaituanlist.push(list[9].items);
			jingcai=list[10].items;
		}
		if(gdlist.length>0){
			gundong=gdlist;
		}

		//限时抢购
		return {
			bannerList:state.lunbolist,
			pingtuanlist:state.pingtuanlist,
			qianglist:qianglist,
			jingxuanlist:jingxuanlist,
			golist:golist,
			pingpai:pingpai,
			pinpaituanlist:pinpaituanlist,
			jingcai:jingcai,
			gundong:gundong
		}
	},   //在这个回调函数里获取全局组件的------状态state

	{   //在这个回调函数里发送----dispatch消息---在由reducer操作store状态对象
		lunboBanner:()=>{
			return (dispatch)=>{
			axios.get('/index/module.htm?&oem=IOS&scheme=http&osversion=9.0%20&screenwidth=375&screenheight=667&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou').then(res=>{
					dispatch({
						type:'lunbolist',
						payload:res.data.data.banners
					})

				})
			}
		},
		//西狗拼团
		pingtuanPromise:()=>{
			return (dispatch)=>{
			axios.get('/groupbuy/listforindex.htm?oem=IOS&scheme=http&osversion=9.0%20&screenwidth=375&screenheight=667&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou').then(res=>{
					dispatch({
						type:'pingtuanlist',
						payload:res.data.data.list
					})

				})
			}
		},
		//限时抢购
		timelimitqiangou:()=>{
			return (dispatch)=>{
			axios.get('/dc.htm?oem=IOS&scheme=http&osversion=9.0%20&screenwidth=375&screenheight=667&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou').then(res=>{
					dispatch({
						type:'timelimitqiangoulist',
						payload:res.data.data.floors
					})

				})
			}
		},
		//滚动加载
		gundonglist:(curpage,gundongstate,self)=>{
			return (dispatch)=>{
			axios.get(`/index/gettodaynew.htm?curpage=${curpage}&oem=IOS&scheme=http&osversion=9.0%20&screenwidth=375&screenheight=667&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou`).then(res=>{
					if(res.data.data.list.length>0){
						// console.log(this,1212);
						// this.setState({
						// 	scrollstate:!this.state.scrollstate
						// })
						
					}
					// console.log(res.data.data.list,9999);
					dispatch({
						type:'gundonglist',
						payload:res.data.data.list

					})

				})
			}
		}
	
	}	
	)(Home)