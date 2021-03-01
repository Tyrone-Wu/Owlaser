import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import '@/style/result.less';
import AsideNav from '@/components/Nav/AsideNav';
import NormalNav from '@/components/Nav/NormalNav';
import DashBoard from '@/components/Result/DashBoard';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class Result extends Component {
	handleFileScan() {
		this.props.history.push('/scan');
	}
	// componentDidMount() {
	// 	this.unlisten = history.listen((location) =>
	// 		this.setState({
	// 			page: this.getPage(location),
	// 		})
	// 	);
	// }
	render() {
		return (
			<>
				<NormalNav />
				<div className="P-result-container">
					{/* 顶部数据图表 */}
					<AsideNav></AsideNav>
					<DashBoard></DashBoard>
				</div>
			</>
		);
	}
}
