import React, { Component } from 'react';
import { Layout, Carousel, Button } from 'antd';
import HomeNav from '@/components/Nav/HomeNav';
import '@/style/home.less';
import COOKIE from '@/common/utils/cookie';

const { Footer, Content } = Layout;
const contentStyle = {
	height: '400px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};
class Home extends Component {
	startScan() {
		const userInfo = COOKIE.getCookie('user');
		if (userInfo) {
			this.props.history.push('/login');
		} else {
			this.props.history.push('/login');
		}
	}
	render() {
		return (
			<>
				<HomeNav />
				<Content className="P-home-container">
					<div className="home-brand">
						<div className="home-brand-slogan">
							<div>
								<p style={{ fontSize: 50 }}>漏洞安全、证书冲突</p>
								<p style={{ fontSize: 30 }}>
									帮助您对项目所引用的开源组件包进行全方位的健康扫描，保障项目的稳定性！
								</p>
								<Button type="primary" onClick={() => this.startScan()}>
									立即开始
								</Button>
							</div>
						</div>
						<div className="home-brand-pic">
							<img src="https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/14.png" />
						</div>
					</div>
					<div className="home-info">
						<div className="home-info-pic">
							<img src="https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/small9.png" />
						</div>
						<div className="home-info-text">
							<div>
								<p style={{ fontSize: 50 }}>漏洞安全、证书冲突</p>
							</div>
						</div>
					</div>
				</Content>

				{/* <Footer>Footer</Footer> */}
			</>
		);
	}
}

export default Home;
