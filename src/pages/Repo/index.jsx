import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import '@/style/result.less';
import AsideNav from '@/components/Nav/AsideNav';
import NormalNav from '@/components/Nav/NormalNav';
import DashBoard from '@/components/Result/DashBoard';

export default class Result extends Component {
	handleFileScan() {
		this.props.history.push('/scan');
	}
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
