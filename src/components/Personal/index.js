import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import {connect} from 'react-redux';  //容器组件

class Personal extends Component{
	constructor(){
		super();
		this.state={
			
			
		}
	}

	componentWillMount(){
	}

	render(){
		return (
			<div id='personal'>
				Personal
			</div>
		)
	}

	
}



export default connect(
	null,   
	null
)(Personal)

