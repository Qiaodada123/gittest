import React from 'react';
//配置router
import {
	     HashRouter as Router,   //as 重命名    BrowerRouter(没有#号)
	     Route,
	     Redirect,
	     Switch            
} from 'react-router-dom';

//导入最外层顶级组件，根据单项数据流的特性，让所有的子组件获取到store对象里的状态值
import {Provider} from 'react-redux';
//导入store对象，将这个store对象设置成顶级组件的一个属性，
//让其他子组件通过this.props.store属性访问到state状态值
import store from '../Redux/Store';
import App from '../components/App';   //引入App组件
import Home from '../components/Home'; 
import Detail from '../components/Detail'; 
import Classify from '../components/Classify';
import Personal from '../components/Personal'; 
import Cart from '../components/Cart'; 
import Search from '../components/Search'; 

const router=(
<Provider store={store}  >
	<Router> 
	    <App>
	       <Switch>
			    {
			    	 //引入Router组件
			    	 //需要一个根组件,不同路径得到的组件在根组建中显示 
			    	 //Switch 匹配到唯一路由后就不会继续往下执行其他路由
			    	 //Redirect----重定向
			    	 //path="/detail/:qiaoid"----动态路由匹配
			    	 // <Route path='/home' component={Home}/>
			    }

			    <Route path='/home' component={Home}/>
			    <Route path='/classify' component={Classify}/>
			    <Route path='/personal' component={Personal}/>
			    <Route path='/cart' component={Cart}/>
			    <Route path='/detail/:qiaoid' component={Detail}/>
			    <Route path='/search' component={Search}/>
			  	<Redirect path='*' to='/home'/>
		   	    
		   	</Switch>
	   	</App>
	</Router>  
</Provider>
)


export default router 