import React, { Component } from 'react';
import { Button, Input } from 'antd';
import '@/style/user.less';

export default class user extends Component {
	state = {
		show: false,
	};
	go2Login() {
		this.props.history.push('/login');
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
						<div style={{ fontSize: '34px', margin: '20px 0' }}>注册</div>
					</div>
					<div className="user-form">
						<div className="user-form-item">
							<p className="user-form-item-label">个人昵称</p>
							<Input placeholder="请输入昵称" />
						</div>
						<div className="user-form-item">
							<p className="user-form-item-label">电话号码</p>
							<Input placeholder="请输入电话号码" />
						</div>
						<div className="user-form-item">
							<p className="user-form-item-label">邮箱设置</p>
							<Input placeholder="请输入邮箱" />
						</div>
						<div className="user-form-item">
							<p className="user-form-item-label">设置密码</p>
							<Input placeholder="请输入你的密码" />
						</div>
						<div className="user-form-item">
							<p className="user-form-item-label">确认密码</p>
							<Input placeholder="请再次输入你的密码" />
						</div>
						<div className="user-form-item">
							<Button
								type="primary"
								className="user-btn"
								onClick={() => this.go2Login()}
							>
								注册
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
