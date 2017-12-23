import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import {connect} from 'react-redux';  //容器组件
import {NavLink} from 'react-router-dom'
import Footer from '../Common/Footer';

class Search extends Component{
	constructor(){
		super();
		this.state={
			curpage:1,
			searchlist:null
		}
	}

	componentWillMount(){
		// console.log(window.location.href.split('?')[1],8989)
		var keyvalue=window.location.href.split('key=')[1];
		console.log(keyvalue,111);
		var curpage=this.state.curpage;
		axios.get(`/search.htm?curpage=${curpage}&key=${keyvalue}&salespattern=null&oem=IOS&scheme=http&osversion=9.0%20&screenwidth=375&screenheight=667&apptype=wap&appversion=1.5.0&nettype=unknown&regcode=250&provcode=264&partner=xigou`).then(res=>{
		 	this.setState({
		 		searchlist:res.data.data.list
		 	})
			console.log(this.state.searchlist,89898)
		 })
		 	
	}	
		
	

	render(){
		return (
			<div id='search'>
			<Footer></Footer>
				<div className="div_search_head">
					<NavLink to='/home' className='back'>
						<div className="goBack"></div>
					</NavLink>
					<div id="id_input_search_box">
						<div className="div_search_img"></div>
						<div className="div_search_input_box">
							<input id="input_search"  type="text" maxLength="70" placeholder="护肤" />
							<div className="div_clear_input" ></div>
						</div>
					</div>
					<div id="id_name"></div>
				</div>

				<div className="div_search_sort" >
					<div className="div_search_sort_item current_sort" id="sortByDefoule">
						默认
					</div>
					<div className="div_search_sort_item" id="sortBySales">销量</div>
					<div className="div_search_sort_item" id="sortByPrice">
						价格 
						<u className="down"></u>
					</div>
					<div className="div_search_sort_item" id="sortByNew">新品</div>
					<div className="line"></div>
					<div className="sortByChoose" id="sortByChoose">筛选<i className="icon_choose"></i></div>
				</div>

				<div className='div_search_list'>
					<ul className='ul_search_list'>
						{
							this.state.searchlist?
							this.state.searchlist.map((item,index)=>
								<li className="li_search_item" key={index} onClick={this.handleClick.bind(this,item.tid,item.sku)}>  
								   <div className="div_img">        
									    <a>           
									      <img src={item.imgurl} />        
									    </a>     
								    </div>    
								    <div className="div_item_name">{item.name}</div>     
								    <div className="div_item_price">
									    <span className="price">¥<span>{item.price}</span></span>
										<span className="old_price">¥{item.oldprice}</span>
									</div> 
								</li>
							):null
						}
						
						

					</ul>
				</div>
			</div>
		)
	}

	handleClick(id,sku){
		console.log(id,sku);
		this.props.history.push(`/detail/${id}/${sku}`)  //设置动态路由匹配  id
	}

	
}



export default Search

