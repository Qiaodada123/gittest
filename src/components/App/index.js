import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import {NavLink} from 'react-router-dom';




class App extends Component{
	constructor(){
		super();
		this.state={
			
		}
	}
	render(){
		return (
			<div>
			   
			
		
			  
			
			  
			  

			   {
			   	  //this.props.children----路由容器
			   	  
			   }
			   
			   {
			   	 this.props.children
			   }
			</div>
		)
	}
}



export default App