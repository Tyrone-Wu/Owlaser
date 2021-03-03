/* eslint-disable no-useless-constructor */
import { Menu, Button, Dropdown } from 'antd';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
	UserOutlined,
	UnlockOutlined,
	LogoutOutlined,
	MessageOutlined,
} from '@ant-design/icons';
import COOKIE from '@/common/utils/cookie';

class NavAvatar extends Component {
	constructor(props) {
		super(props);
	}

	handleItemClick = (e) => {
		this.props.history.push(`/${e.key}`);

		if (e.key === 'logout') {
			COOKIE.delCookie('user');
			this.props.history.push('/login');
		}
	};
	handleLogClick() {
		this.props.history.push('/login');
	}

	render() {
		const userInfo = JSON.parse(COOKIE.getCookie('user'));

		const menu = (
			<Menu onClick={this.handleItemClick} className="nav-avatar-dropdown">
				<div className="menu-item-user">
					{/* <div className="user-avatar"></div> */}
					<img
						alt=""
						className="user-avatar"
						src="https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/mty.png"
					/>
					<div className="user-info">
						<div className="user-name">账户名：{userInfo.user_name}</div>
						<div className="user-id">账号：{userInfo.user_id}</div>
					</div>
				</div>
				<Menu.Item key="info">
					<UserOutlined />
					个人信息
				</Menu.Item>
				<Menu.Item key="set">
					<UnlockOutlined />
					密码修改
				</Menu.Item>
				<Menu.Item key="logout">
					<LogoutOutlined />
					退出登录
				</Menu.Item>
			</Menu>
		);

		const userMsg = (
			<>
				<div className="user-msg-container">
					<div className="msg-box-title">User Msg</div>
					<ul className="msg-list">
						<li>
							<p className="msg-title">Title</p>
							<p className="msg-info">
								ant-dropdown ant-drop down-show -arrow ant-dropd
								own-placement-botto mRight{' '}
							</p>
						</li>
						<li>
							<p className="msg-title">Title</p>
							<p className="msg-info">
								ant-dropdown ant-drop down-show -arrow ant-dropd
								own-placement-botto mRight{' '}
							</p>
						</li>
						<li>
							<p className="msg-title">Title</p>
							<p className="msg-info">
								ant-dropdown ant-drop down-show -arrow ant-dropd
								own-placement-botto mRight{' '}
							</p>
						</li>
						<li>
							<p className="msg-title">Title</p>
							<p className="msg-info">
								ant-dropdown ant-drop down-show -arrow ant-dropd
								own-placement-botto mRight{' '}
							</p>
						</li>
						<li>
							<p className="msg-title">Title</p>
							<p className="msg-info">
								ant-dropdown ant-drop down-show -arrow ant-dropd
								own-placement-botto mRight{' '}
							</p>
						</li>
					</ul>
				</div>
			</>
		);

		return (
			<>
				{COOKIE.getCookie('user') ? (
					<>
						<div className="nav-user-msg">
							<Dropdown overlay={userMsg} trigger="click" arrow="true">
								<MessageOutlined />
							</Dropdown>
						</div>
						<Dropdown overlay={menu} trigger="hover" arrow="true">
							<img
								alt=""
								className="nav-avatar"
								src="https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/mty.png"
							/>
						</Dropdown>
						<div className="nav-user-name">{userInfo.user_name}</div>
					</>
				) : (
					<Button type="primary" onClick={this.handleLogClick.bind(this)}>
						登陆
					</Button>
				)}
			</>
		);
	}
}
export default withRouter(NavAvatar);
