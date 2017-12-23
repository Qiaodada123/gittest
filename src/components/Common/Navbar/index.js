import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import ReactSwipe from 'react-swipe';
import {connect} from 'react-redux';  
import {NavLink} from 'react-router-dom'
class Navbar extends Component{
	constructor(){
		super();
		this.state={
			
			
		}
	}

	componentWillMount(){
		this.props.changetitle()
		
		
	}

	render(){
		return (
			<div id='navbar'>
				<header>
					<h1>{this.props.changetitlename}</h1>
					<NavLink to='/home' className='goBack'></NavLink>
					<div className="top_menu">
					<div className="goShare"></div>
					<div className="kf_btn" ></div></div>
				</header>
				
			</div>
		)
	}

	
}



export default connect(
	(state)=>{
		// console.log(state.title,999);
		return {
			changetitlename:state.title
		}
	},
	{
		changetitle:()=>{
			return (dispatch)=>{
				dispatch({
					type:'changetitle',
					payload:'商品详情'
				})
			}
		}
	}
)(Navbar)

