import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './home.less';

const { Header, Footer, Content } = Layout;

class Home extends Component {
	render() {
		return (
			<div>dd</div>
			// <>
			// 	<Layout>
			// 		<Header>
			// 			<div className="logo" />
			// 			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
			// 				<Menu.Item key="1">nav 1</Menu.Item>
			// 				<Menu.Item key="2">nav 2</Menu.Item>
			// 				<Menu.Item key="3">nav 3</Menu.Item>
			// 			</Menu>
			// 		</Header>
			// 		<Content className="P-home-contain">
			// 			<div className="aaa"></div>
			// 		</Content>
			// 		<Footer>Footer</Footer>
			// 	</Layout>
			// </>
		);
	}
}

export default Home;
