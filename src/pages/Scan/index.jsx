import React, { Component } from 'react';
import { Layout, Button, Input } from 'antd';
import NormalNav from '@/components/Nav/NormalNav';
import { GithubOutlined } from '@ant-design/icons';
import '@/style/scan.less';

const { Footer, Content } = Layout;
export default class Scan extends Component {
	handleFileScan() {
		this.props.history.push('/result');
	}
	render() {
		return (
			<>
				<Layout>
					<NormalNav />
					<div className="P-scan-container">
						<div className="scan-box">
							<Input type="file"></Input>
							<Button onClick={() => this.handleFileScan()} type="primary">
								立即扫描
							</Button>
						</div>
						<div className="scan-text">开启健康开发之旅</div>
					</div>
					<Footer>
						<GithubOutlined />
					</Footer>
				</Layout>
			</>
		);
	}
}
