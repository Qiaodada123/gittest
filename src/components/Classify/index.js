import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import {connect} from 'react-redux';  //容器组件
import {NavLink} from 'react-router-dom'
class Classify extends Component{
	constructor(){
		super();
		this.state={
			data:null
			
		}
	}

	componentWillMount(){
	}

	render(){
		return (
			<div id='classify'>
				<div className="div_search_input">
					<div>
						<div className="div_search_img div_group">宝贝</div>
							<div className="div_search_input_box">
								<form action="">
									<input id="input_search" ref='searchValue' className="input_search" maxLength="70" placeholder="请输入相关产品或店铺搜索" />
								</form>
							<div className="div_clear_input"></div>
						</div>
					</div>
					<a  className="search" onClick={this.searchClick.bind(this)}>
						搜索
					</a>
				</div>
				<div className="div_noHistory" >还木有搜索历史哟~</div>
			</div>
		)
	}

	searchClick(){
		console.log(this.refs.searchValue.value);
		var keyvalue=this.refs.searchValue.value;
		this.props.history.push(`/search?key=${keyvalue}`)
	}
	
}



export default connect(
	null,   
	null
)(Classify)

