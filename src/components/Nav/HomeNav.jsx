import { Menu, Button, Avatar, Image } from 'antd';
import { Component } from 'react';
import NavAvatar from './NavAvatar';

export default class HomeNav extends Component {
	state = {
		current: 'mail',
	};

	render() {
		const { current } = this.state;
		const isLogin = true;
		return (
			<div className="C-home-nav-container">
				<div className="nav-brand">
					<Image
						width={200}
						preview={false}
						src="https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/logo-w.png"
					/>
				</div>
				<div className="nav-right">
					{/* <div className="nav-item">首页</div>
					<div className="nav-item">项目介绍</div>
					<div className="nav-item">功能特点</div>
					<div className="nav-item">联系我们</div> */}
					<NavAvatar />
				</div>
			</div>
		);
	}
}
