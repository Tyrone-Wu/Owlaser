import React, { Component } from 'react';
import { Button, Input, Form, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '@/style/user.less';

export default class user extends Component {
	state = {
		show: false,
	};
	handleLogin() {
		this.props.history.push('/home');
	}
	handleRegister() {
		this.props.history.push('/rejister');
	}

	render() {
		return (
			<div className="P-user-container">
				<div className="user-introduce">
					<img
						src="https://cdn.jsdelivr.net/gh/tyrone-wu/PicRepo/logo-c.png"
						alt=""
						sizes=""
						srcset=""
					/>
				</div>
				<div className="user-form-container">
					<div className="user-form-info">
						<div style={{ fontSize: '24px' }}>
							欢迎使用Owlaser开源组件健康扫描系统
						</div>
						<div style={{ fontSize: '34px', margin: '20px 0' }}>密码重置</div>
					</div>
					<div className="user-form">
						<div className="user-form-item">
							<p className="user-form-item-label">昵称</p>
							<Input placeholder="请输入你的昵称" />
						</div>
						<div className="user-form-item">
							<p className="user-form-item-label">邮箱</p>
							<Input placeholder="请输入你的邮箱" />
						</div>
						<div className="user-form-item">
							<Button
								type="primary"
								className="user-btn"
								onClick={() => this.handleLogin()}
							>
								登陆
							</Button>
						</div>
					</div>
					<div className="user-form-bottom">
						<div onClick={() => this.props.history.push('/login')}>
							返回登陆
						</div>
					</div>
				</div>
			</div>
		);
	}
}
