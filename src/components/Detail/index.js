import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import ReactSwipe from 'react-swipe';
import {connect} from 'react-redux';  //容器组件
import Navbar from '../Common/Navbar';
import { NavLink } from 'react-router-dom'

class Detail extends Component{
	constructor(){
		super();
		this.state={
			naifendetail:null,
			count:1,
			addmessage:null
		}
	}

	componentWillMount(){
		var id=location.href.split('/')[5];
		var sku=location.href.split('/')[6];
		axios.get(`/product/detail.htm?sku=${sku}&tid=${id}&shopmobile=null&oem=IOS&scheme=http&osversion=9.0%20&screenwidth=375&screenheight=667&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou`).then(res=>{
			// console.log(res.data.data,8989)
			this.setState({
				naifendetail:res.data.data
			})
			
		})
		
		
	}

	render(){
		var lunbolist=[];
		if(this.state.naifendetail){
				this.state.naifendetail.imglist.map((item,index)=>{
					lunbolist.push(
						<li className="" key={index}>	
							<a ><img src={item} /></a>
						</li>
					)
				})
			
		}
		var divlist;
		if(this.state.naifendetail){
			divlist=this.state.naifendetail.detail
		}
		return (
			<div id='detail'>
				<Navbar></Navbar>

				<section id="slider">
					<div className="ui-slider">
						<ul className="ui-slider-content" >
							{lunbolist}
						</ul>
					</div>
				</section>
				<section className='detail'>
					{
						this.state.naifendetail?
						<div>
							<p><span className="iem-price1" id="iem-price">¥<span className="iem-price2">{this.state.naifendetail.price}</span></span></p>
							<p className="space_price_div">
								<span>
									<del id="old_price">¥{this.state.naifendetail.oldprice}</del>
								</span>
								<span className="sale-count">已售{this.state.naifendetail.salescountdesc}</span>
							</p>
							<p className="dec-title">{this.state.naifendetail.name}</p>
							<p className="dec-info">{this.state.naifendetail.feature}</p>
							<p className="country clearfix">
								<img id="contry-img" src="http://basedata.qn.seagoor.com/1453272318799.jpg?imageView2/0/w/30" />
								<span className="country-name">{this.state.naifendetail.countryname}</span>
								<span className="warehouse">{this.state.naifendetail.channel}</span>
								<span className="warehouse"></span>
								<span className="fee-icon"></span>
								<span className="fee">税费</span>
							</p>
							<div id="selectSizeColor">
								<h2>
								选择: <span id="size_color">数量{this.state.naifendetail.salespattern}</span>
								<span className="more_size"></span>
								</h2>
							</div>
							<div className="div_desc">
								<span className="more_size"></span>
							</div>
						</div>:null
					}
				</section>

				<div className="div_detail">
					<div className="div_show_detail down"></div>
					<div className="detail-content" >
						{
							this.state.naifendetail?
							<div>
								<div dangerouslySetInnerHTML={{__html:divlist}}></div>
							</div>:null
						}

					</div>
				</div>

				<section className="shopBar">
					
						{
							this.state.naifendetail?<ul>
								<li className="item-shopcar ui-badge-wrap">
								<div className="imgbox">
								<NavLink to='/cart'> 购物车
									<div className="ui-badge" >3</div>
								</NavLink>
								</div>
								</li>
								<li className="item-addshop"><button className="item-addshop-text" onClick={this.shopCarClick.bind(this,this.state.naifendetail.tid)}>加入购物车</button></li>
								<li className="item-buy"><button className="item-buy-text">立即购买</button></li>
								<li className="item-none" >已抢光</li>
							</ul>:null
						}
					
				</section>
			</div>
		)
	}
	shopCarClick(id){
		console.log(11,id);
		//conut + 1
		axios.post(`/cart/supcount.htm`,{
			apptype:"wap",
			appversion:"1.5.0",
			nettype:"unknown",
			oem:"IOS",
			osversion:"9.0 ",
			partner:"xigou",
			provcode:"264",
			regcode:"250",
			scheme:"http",
			screenheight:667,
			screenwidth:375,
			token:"e9a54c2de6c879ea5dcac7180cb9abe0"
		}).then(res=>{
			console.log(res.data.data.count,11111);
			this.setState({
				count:res.data.data.count+1
			})
		})
		//添加成功
		axios.post(`/cart/add.htm`,{
			apptype:"wap",
			appversion:"1.5.0",
			count:"1",
			isOnline:null,
			nettype:"unknown",
			oem:"IOS",
			osversion:"9.0",
			partner:"xigou",
			provcode:"264",
			regcode:"250",
			scheme:"http",
			screenheight:667,
			screenwidth:375,
			sku:"05010100030101",
			tid:id,
			token:"e9a54c2de6c879ea5dcac7180cb9abe0"
		}).then(res=>{
			console.log(res.data.msg,2222);
			this.setState({
				addmessage:res.data.msg
			})
		})
	}

	
}



export default Detail


{
	// <section className='detail'>
	// 	<p><span className="iem-price1" id="iem-price">¥<span className="iem-price2">379</span>.00</span></p>
	// 	<p className="space_price_div">
	// 		<span>
	// 			<del id="old_price">¥598.00</del>
	// 		</span>
	// 		<span className="sale-count">已售1599</span>
	// 	</p>
	// 	<p className="dec-title">2件装|德国Aptamil 爱他美 婴儿奶粉 2段 800g/罐 2罐装</p>
	// 	<p className="dec-info">取自天然无污染的瑞士奶源，天堂纯净牧场。经过德国工厂严谨制造，欧标高。40年专业母乳研究，接近母乳的奶粉配方，特别添加益生元，有助于建立有益菌群，帮助宝宝消化。全球妈妈追捧，欧洲儿科医师推荐。</p>
	// 	<p className="country clearfix">
	// 		<img id="contry-img" src="http://basedata.qn.seagoor.com/1453272318799.jpg?imageView2/0/w/30" />
	// 		<span className="country-name">德国</span>
	// 		<span className="warehouse">海外直邮</span>
	// 		<span className="warehouse"></span>
	// 		<span className="fee-icon"></span>
	// 		<span className="fee">税费</span>
	// 	</p>
	// 	<div id="selectSizeColor">
	// 		<h2>
	// 		选择: <span id="size_color">数量1</span>
	// 		<span className="more_size"></span>
	// 		</h2>
	// 	</div>
	// 	<div className="div_desc">
	// 		<span className="more_size"></span>
	// 	</div>
	// </section>

	// <div className="div_detail">
	// 	<div className="div_show_detail down"></div>
	// 	<div className="detail-content" >
	// 		<div>
	// 			<img alt="" width="100%" src="http://7xpcxl.com2.z0.glb.qiniucdn.com/c2664c2a0a2a4880b02bdb4a44f73bfe.jpg?imageView2/2/w/750" /> 
	// 		</div>
	// 		<img title="4个标语.png"  alt="4个标语.png" src="http://7xpcxl.com2.z0.glb.qiniucdn.com/3ce8532cc6914dc7860f6ed94a30ee28.jpg?imageView2/2/w/750" width="100%" /> 
	// 		<div></div>
	// 		<div></div>
	// 		<div ></div>
	// 	</div>
	// </div>

	// <section className="shopBar">
	// 	<ul>
	// 		<li className="item-shopcar ui-badge-wrap">
	// 		<div className="imgbox">
	// 		<NavLink to='/cart'> 购物车
	// 			<div className="ui-badge" >3</div>
	// 		</NavLink>
	// 		</div>
	// 		</li>
	// 		<li className="item-addshop"><button className="item-addshop-text">加入购物车</button></li>
	// 		<li className="item-buy"><button className="item-buy-text">立即购买</button></li>
	// 		<li className="item-none" >已抢光</li>
	// 	</ul>
	// </section>
}





