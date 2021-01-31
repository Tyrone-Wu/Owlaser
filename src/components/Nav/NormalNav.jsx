import { Menu, Button, Avatar, Image } from 'antd';
import { Component } from 'react';
import NavAvatar from './NavAvatar';
import '@/common/style/nav.less';

export default class NormalNav extends Component {
	state = {
		current: 'mail',
	};
	navToPage(e) {
		console.log(`e`, e);
	}

	render() {
		return (
			<div className="C-normal-nav-container">
				<div className="nav-left">
					<div className="nav-brand">
						<Image
							width={150}
							preview={false}
							src="https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/logo-c.png"
						/>
					</div>
					{/* <div
						className="nav-item"
						key="scan"
						onClick={() => this.props.history.push('/scan')}
					>
						扫描
					</div>
					<div
						className="nav-item"
						key="result"
						onClick={() => this.props.history.push('/result')}
					>
						扫描结果
					</div>
					<div
						className="nav-item"
						key="repo"
						onClick={() => this.props.history.push('/repo')}
					>
						组件库
					</div>
					<div
						className="nav-item"
						key="backRepo"
						onClick={() => this.props.history.push('/backRepo')}
					>
						回收站
					</div> */}
				</div>
				<div className="nav-right">
					<NavAvatar />
				</div>
			</div>
		);
	}
}
