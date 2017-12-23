import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import {connect} from 'react-redux';  //容器组件
import Footer from '../Common/Footer';

class Cart extends Component{
	constructor(){
		super();
		this.state={
			cartlist:null
			
		}
	}

	componentWillMount(){
		axios.post(`/cart/load.htm`,{
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
		 	this.setState({
		 		cartlist:res.data.data
		 	})
		 	console.log(this.state.cartlist,11111);
		}) 
		
		
	}

	render(){
		return (
			<div id='cart'>
				
				<header className="cart-body">
					<h1>购物车</h1>
				</header>
				{
					this.state.cartlist?
					<div className="content"> 
							<div className="product-item">
								<ul className="ui-list-link ui-border-tb cart-list" id="cart-effective-list">
								{
								this.state.cartlist.mergeitems?
								this.state.cartlist.mergeitems.map((item,index)=>
									<li className="clearfix div_channel" channelcode="3" warehouseid="56" key={item.products[0].tid}> 	
										<div className="div_item_channel" channelcode="3">{item.channel}</div> 	
										<ul className="ui-list"> 
											<li className="li-item-info" tid={item.products[0].tid} sku={item.products[0].sku}> 	
														<div className="div_check_box"> 		
															<div className="ui-checkbox"> 			
																<label className="ui-checkbox-s"><input type="checkbox" checked="checked" onClick={this.productSelectChange} /></label> 		
															</div> 	
														</div> 	
														<div className="ui-list-item-info"> 	
															<div className="ui-list-img"> 			
																<a >
																	<img src={item.products[0].imgurl} />
																</a> 		
																<div className="ui-list-img-gray2">限购:{item.products[0].limitcount}</div> 		
															</div> 	
															<div className="ui-list-info"> 			
																<div className="delete">
																	<img src="http://m.seagoor.com/img/delete.png" sku={item.products[0].sku} tid={item.products[0].tid}  onClick={this.delClick} />
																</div> 			
																<span className="delete_span"></span> 			
																<div className="cart_product_name"> 				
																	<a>{item.products[0].name}</a> 			
																</div> 			
																<div className="cart_product_spe"></div> 			
																<div> 				
																	<div className="cart_shop_opt" maxnum="3" price={item.products[0].price} oldprice={item.products[0].oldprice} sku={item.products[0].sku} tid={item.products[0].tid}> 
																		<a href="javascript:void(0);" className="quantity_decrease disabled">-</a> 					
																			<intput className="car_item quantity_txt" maxLength="1" readyonly="readyonly" >{item.products[0].count}</intput> 
																		<a href="javascript:void(0);" className="quantity_increase">+</a> 					
																	</div> 					
																	<div className="line_price">
																		<span className="product-price">¥<span className="product-price1">{item.price}</span></span> 				
																	</div> 		
																</div> 		
															</div> 
														</div> 
													</li> 
										</ul> 	
										<div className="div_sel_channel_info"> 		
											<div className="sel-count">已选{item.products[0].count}件</div> 		
												<div className="sel_info"> 		
													<div className="sel_info_tax">税费<span>¥{this.state.cartlist.disprice}</span></div> 		
														<div className="sel_info_price">总计<span>¥{this.state.cartlist.totalprice}</span></div> 	
														<div> 	
														<div> 
													</div>
												</div>
											</div>
										</div>
									</li>
								):null
							}
								</ul>
							</div>
							<section className='actionBar'>
								<div className="cartbar">
									<a className="ui-btn" id="shopcart-settle">
										去结算
									</a>
									<div className="total" id="seaGroupMoney">
										<label className="ui-checkbox-s">
											<input type="checkbox" name="checkbox"  />
											<span className='allchoose'>全选</span>
										</label>
										<div className='allcount'>
											<p  className="totalMoney">总计：¥{this.state.cartlist.totalprice}</p>
											<p className="totalFreeMoney">已优惠：¥{this.state.cartlist.disprice}</p>
										</div>
									</div>
								</div>
								<Footer></Footer>
							</section>
					</div>:null
				}
				
			</div>
		)
	}

	
}



// export default Detail
export default Cart

