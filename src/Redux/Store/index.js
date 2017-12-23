//combineReducers合并多个reducer为一个大的reducers
import {createStore,combineReducers} from 'redux'; 
// import reducer from '../Reducer';// reducer要操作store对象，必须和store建立联系
import thunk from 'redux-thunk';
import reduxpromise from 'redux-promise';
import {applyMiddleware} from 'redux';
import {lunbolist,pingtuanlist,timelimitqiangoulist,gundonglist,changetitle} from  '../Reducer'
import logger from 'redux-logger';//做devtools调试的模块


/*const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
   applyMiddleware(thunk),
     // applyMiddleware(thunk,reduxpromise),
    
); */

//applyMiddleware(thunk),


const store=createStore(combineReducers({
	lunbolist:lunbolist,
  pingtuanlist:pingtuanlist,
  timelimitqiangoulist:timelimitqiangoulist,
	gundonglist:gundonglist,
  title:changetitle
 
}),applyMiddleware(thunk,reduxpromise,logger));







export default store;


