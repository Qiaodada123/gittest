//入口文件-----webconfig里配置的
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import router from './router';  //导入路由

ReactDom.render(router,document.getElementById('box'));

// ReactDom.render(<div>hekfdfgdfg</div>,document.getElementById('box'));
