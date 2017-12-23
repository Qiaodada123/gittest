import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import {NavLink} from 'react-router-dom';

import {connect} from 'react-redux';  //容器组件

class Footer extends Component{
	constructor(){
		super();
		this.state={
			data:null
		}
	}

	componentWillMount(){
		
		{
			//数据请求回来调用connect第二个回调函数，这时候dispatch到reducer中，
			//由reducer去操作store状态树（store对象）
		}
		  
		
		
	}

	render(){
		return (
			<div id='footer'>
			  	
				  	<ul>
				  	  
					  	<li className="xg-active">
					  	 	<NavLink className="bar-home" to='/home'>首页</NavLink>
					  	</li>
					  	<li>
					  		<NavLink className="bar-classify" to='/classify'>分类</NavLink>
					  	</li>
					  	<li>
					  		<NavLink className="bar-cart" to='/cart'>购物车</NavLink>
					  	</li>
					  	<li>
					  		<NavLink className="bar-personal" to='/personal'>个人中心</NavLink>
					  	</li>
				  	</ul>
			  
				
			</div>
		)
	}

	
}



export default Footer

