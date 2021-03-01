import { Menu, Button, Avatar, Image } from 'antd';
import { Component } from 'react';
import NavAvatar from './NavAvatar';
import '@/common/style/nav.less';
import { Link } from 'react-router-dom';

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
					<Link className="nav-brand" to="/home">
						<Image
							width={150}
							preview={false}
							src="https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/logo-c.png"
						/>
					</Link>
					<Link className="nav-item" to="/home">
						首页
					</Link>
					<Link className="nav-item" to="/scan">
						扫描
					</Link>
					<Link className="nav-item" to="/result">
						扫描结果
					</Link>
					<Link className="nav-item" to="/help">
						帮助
					</Link>
				</div>
				<div className="nav-right">
					<NavAvatar />
				</div>
			</div>
		);
	}
}
