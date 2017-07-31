import React, { Component } from 'react';
import './App.css';
import Button from 'antd/lib/button';
import { Row, Col } from 'antd';
import { Layout, Menu, Icon, Input} from 'antd';
const { Header, Content, Footer} = Layout;
const Search = Input.Search;
import $ from 'jquery';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


function search(data){
	$.get("/#/", {data: data});
	console.log(data);
}



// 头部
class PageHeader extends React.Component {
	handleClick = (e) => {
    console.log('click ', e.key);
		switch (e.key) {
			case '1':
				window.location.href = "/"
				break;
			case '2':
				window.location.href = "/library"
				break;
			default:
				break;
		}
  }

  // 构造机器
 	constructor(props) {
		super(props);
		console.log("constructor");
	}

	componentDidMount() {
		console.log("componentDidMount");
	}

	componentWillMount() {
		console.log("componentWillMount");
	}

	render() {
		return(
			<Header style={{ position: 'fixed', width: '100%', height: '10%', backgroundColor: '#ffffff'}}>
			  <img style={{height:'90%', width: 'auto', float: 'left'}} src="./img/png/logo.png"/>
	          <Menu onClick={this.handleClick} theme="linght" mode="horizontal" defaultSelectedKeys={['1']} style={{float: 'right'}}>
	            <Menu.Item key="1">
							  <Icon type="search" />
	              <span className="nav-text">搜书！</span>
	            </Menu.Item>
							<Menu.Item key="2">
								<Icon type="book" />
	              <span className="nav-text">书库</span>
	            </Menu.Item>
	            <Menu.Item key="3">
		      			<Icon type="upload" />
	              <span className="nav-text">上传书籍</span>
	            </Menu.Item>
	          </Menu>
	        </Header>
        );
	}


}


// 内容
class PageContent extends React.Component {
	render() {
		return(
        <Content style={{ position: 'fixed', top:'10%',  width: '100%', height: '80%', textAlign: 'center'}}>
  				<Row>
  					<Link to="/library"><img style={{height:'300px', width: 'auto'}} src="./img/gif/boy-walk.gif"/></Link>
  				</Row>
  				<Row>
  					<Search size="large" placeholder="小蜗：开始搜索你想要的图书吧～" style={{ width: '50%' }} onSearch={value => search(value)}/>
  				</Row>
  			</Content>
		)
	}
}


// 底部信息
const footerInfo = "ShareBOOK  ©2016 Created by CC";

// 底部
class PageFooter extends React.Component {

	// constructor(props){
	// 	super(props);
	// 	this.state = {date: new Date()};
	// }
	//
	// componentWillMount(){
	// 	clearInterval(this.timerID);
	// }
	//
	// componentDidMount(){
	// 	this.timeID = setInterval(
	// 		() => this.tick(),
	// 		1000
	// 	)
	// }
	//
	// tick() {
	//  this.setState({
	// 	 date: new Date()
	//  });
  // }

	render() {
		return(
		<Footer style={{ position: 'fixed', bottom: '0',  width: '100%', height: '10%', textAlign: 'center'}}>
            {footerInfo}
        </Footer>
		);
	}
	// setInterval(render, 1000);
}

class App extends React.Component {
  getInitialState

	render() {
		return(
			<Layout>
				<PageHeader/>
				<PageContent/>
				<PageFooter/>
			</Layout>
		)
	}
}

export default App;
