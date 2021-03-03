import React, { Component } from 'react';
import { Button, Input, Form, message } from 'antd';
import * as $http from '@/service/http';
import API from '@/service/api';
import '@/style/user.less';
import { UserOutlined } from '@ant-design/icons';
import COOKIE from '@/common/utils/cookie';

export default class user extends Component {
	// // 确认登陆
	// async handleLogin() {
	// 	const { uid, pwd } = this.state;

	// const home = await $http.get('/', {});
	// const { data } = await $http.post(API.user.login, {
	// 	uid: this.state.uid,
	// 	pwd: this.state.pwd,
	// });
	// }
	onFinish = (userInfo) => {
		const { user_name, user_pwd } = userInfo;
		if (1) {
			COOKIE.setCookie(
				'user',
				JSON.stringify({
					user_name,
					user_pwd,
					user_id: Math.floor(Math.random() * 10000000),
				})
			);

			message.success('登陆成功');
			this.props.history.push('/home');
		}
	};

	onFinishFailed = (errorInfo) => {
		message.error('登陆失败，请重试！');
	};

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
						<Form
							name="login"
							initialValues={{ remember: true }}
							onFinish={(userInfo) => this.onFinish(userInfo)}
							onFinishFailed={() => this.onFinishFailed()}
						>
							<p className="user-form-item-label">账 号</p>
							<Form.Item
								name="user_name"
								className="user-form-item"
								rules={[{ required: true, message: '请输入账号！' }]}
							>
								<Input suffix={<UserOutlined />} />
							</Form.Item>

							<p className="user-form-item-label">密 码</p>
							<Form.Item
								name="user_pwd"
								className="user-form-item"
								rules={[{ required: true, message: '请输入密码！' }]}
							>
								<Input.Password />
							</Form.Item>

							<Form.Item className="user-form-item">
								<Button type="primary" htmlType="submit" className="user-btn">
									登陆
								</Button>
							</Form.Item>
						</Form>
					</div>

					<div className="user-form-bottom">
						<div onClick={() => this.props.history.push('/home')}>返回首页</div>
						<span>|</span>
						<div onClick={() => this.props.history.push('/rejister')}>注册</div>
						<span>|</span>
						<div onClick={() => this.props.history.push('/rejister')}>
							忘记密码
						</div>
					</div>
				</div>
			</div>
		);
	}
}
