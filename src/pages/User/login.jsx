import React, { Component } from 'react';
import { Button, Input } from 'antd';
import * as $http from '@/service/http';
import API from '@/service/api';
import '@/style/user.less';
import { UserOutlined } from '@ant-design/icons';

export default class user extends Component {
	state = {
		uid: '',
		pwd: '',
	};
	changeUId(e) {
		this.setState({ uid: e.target.value });
	}
	changePwd(e) {
		this.setState({ pwd: e.target.value });
	}
	// 确认登陆
	async handleLogin() {
		this.validate();
		const home = await $http.get('/', {});
		const { data } = await $http.post(API.user.login, {
			uid: this.state.uid,
			pwd: this.state.pwd,
		});
		if (data.code) {
			this.props.history.push('/home');
		}
	}
	// 跳转注册
	go2Rejister() {
		this.props.history.push('/rejister');
	}
	// 表单校验
	validate() {}

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
						<div style={{ fontSize: '34px', margin: '20px 0' }}>登陆</div>
					</div>
					<div className="user-form">
						<div className="user-form-item">
							<p className="user-form-item-label">账 号</p>
							<Input
								value={this.state.uid}
								onChange={(e) => this.changeUId(e)}
								suffix={<UserOutlined />}
								placeholder="请输入你的账号"
							/>
						</div>
						<div className="user-form-item">
							<p className="user-form-item-label">密 码</p>
							<Input.Password
								value={this.state.pwd}
								onChange={(e) => this.changePwd(e)}
								placeholder="请输入你的密码"
							/>
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
						<div onClick={() => this.go2Rejister()}>注册</div>
						<span>|</span>
						<div onClick={() => this.go2Rejister()}>忘记密码</div>
					</div>
				</div>
			</div>
		);
	}
}
