import React, { Component } from 'react';
import '../App.css';
import '../Style/css/library.css'
import '../Style/css/book.css'
import Button from 'antd/lib/button';
import { Row, Col } from 'antd';
import { Layout, Menu, Icon, Input} from 'antd';
const { Header, Content, Footer} = Layout;
const Search = Input.Search;
import $ from 'jquery';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'jquery-ui'
import 'fullpage.js'
import { Pagination } from 'antd';
import { Rate } from 'antd';
import { Card } from 'antd';


function showTotal(total) {
  return `Total ${total} items`;
}

class Book extends React.Component{
  render() {
    return(
      <figure className='book'>
    		<ul className='hardcover_front'>
    			<li><img src="./img/cover/cover.jpg" alt=""  style={{width:'100%', height:'100%'}}/></li>
    			<li></li>
    		</ul>

    		<ul className='page'>
    			<li></li>
    			<li>
    				<a className="btn" href="./机器学习系统设计.pdf">Download</a>
    			</li>
    			<li></li>
    			<li></li>
    			<li></li>
    		</ul>
    	</figure>
    );
  }
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
	render() {
		return(
			<Header style={{ position: 'fixed', width: '100%', height: '10%', backgroundColor: '#ffffff'}}>
			  <img style={{height:'90%', width: 'auto', float: 'left'}} src="./img/png/logo.png"/>
	          <Menu onClick={this.handleClick} theme="linght" mode="horizontal" defaultSelectedKeys={['2']} style={{float: 'right'}}>
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

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.books = this.getBooks();
    // console.log(this.getBooks());
  }

  getBooks () {
    let books = [];
    for (let i = 0; i < 4; i++) {
      books.push(<Col span={6}>
        <Row>
          <Col span={12}>
            <a><Book/></a>
          </Col>
          <Col span={12} style={{textAlign: 'left'}}>
            <h5>书名: 代码大全</h5>
            <h5>作者: 马cc</h5>
            <h5>出版商: 清华大学出版社</h5>
            <h5>评分:</h5>
            <Rate allowHalf defaultValue={2.5}/>
          </Col>
        </Row>
      </Col>)
    }
    return books;
  }

	render() {
    // let Books = this.getBooks();

		return(
      <Content style={{position: 'fixed', top:'10%', bottom:'10%',width: '100%', height: '80%', textAlign: 'center'}}>
        <div style={{textAlign: 'center'}}>
        <Row justify="space-around">
          <Col span={6}>
          <Card style={{ width: "50%"}} bodyStyle={{ padding: 0 }}>
          <div className="custom-image">
            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>代码大全</h3>
                <p>马承成</p>
              </div>
          </Card>
          </Col>
          <Col span={6}>
          <Card  style={{ width: "50%"}} bodyStyle={{ padding: 0 }}>
          <div  className="custom-image">
            <img alt="example" width="100%" src="img/cover/cover.jpg" />
              </div>
              <div className="custom-card">
                <h3>代码大全</h3>
                <p>马承成</p>
              </div>
          </Card>
          </Col>
          <Col span={6}>
          <Card style={{ width: "100%"}} bodyStyle={{ padding: 0 }}>
          <div className="custom-image">
            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>代码大全</h3>
                <p>马承成</p>
              </div>
          </Card>
          </Col>
          <Col span={6}>
          <Card style={{ width: "100%"}} bodyStyle={{ padding: 0 }}>
          <div className="custom-image">
            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>代码大全</h3>
                <p>马承成</p>
              </div>
          </Card>
          </Col>
        </Row>
        </div>
      </Content>
		);
	}
}


// 底部
class PageFooter extends React.Component {
	render() {
		return(
		<Footer style={{ position: 'fixed', bottom: '0',  width: '100%', height: '10%', textAlign: 'center'}}>
				<Pagination simple defaultCurrent={2} total={50} />
    </Footer>
		);
	}
}

class Library extends React.Component {
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

export default Library;
