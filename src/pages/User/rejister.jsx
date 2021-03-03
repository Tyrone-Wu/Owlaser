import React, { Component } from 'react';
import { Button, Input, Form, message } from 'antd';
import '@/style/user.less';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

export default class user extends Component {
	state = {
		show: false,
	};
	onFinish = (userInfo) => {
		const { user_name, user_pwd } = userInfo;
		message.success('注册成功');
		this.props.history.push('/login');
	};

	onFinishFailed = (errorInfo) => {
		message.error('注册失败，请重试！');
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
						<div style={{ fontSize: '34px', margin: '20px 0' }}>注册</div>
					</div>
					<div className="user-form">
						<Form
							name="login"
							initialValues={{ remember: true }}
							onFinish={(userInfo) => this.onFinish(userInfo)}
							onFinishFailed={() => this.onFinishFailed()}
						>
							<p className="user-form-item-label">个人昵称</p>
							<Form.Item
								name="user_name"
								className="user-form-item"
								rules={[{ required: true, message: '请输入昵称！' }]}
							>
								<Input placeholder="请输入昵称" suffix={<UserOutlined />} />
							</Form.Item>
							<p className="user-form-item-label">电话号码</p>
							<Form.Item
								name="user_phone"
								className="user-form-item"
								rules={[{ required: true, message: '请输入电话号码！' }]}
							>
								<Input
									placeholder="请输入电话号码"
									suffix={<PhoneOutlined />}
								/>
							</Form.Item>
							<p className="user-form-item-label">邮箱设置</p>
							<Form.Item
								name="user_email"
								className="user-form-item"
								rules={[{ required: true, message: '请输入邮箱！' }]}
							>
								<Input placeholder="请输入邮箱" suffix={<MailOutlined />} />
							</Form.Item>
							<p className="user-form-item-label">设置密码</p>
							<Form.Item
								name="user_pwd"
								className="user-form-item"
								rules={[{ required: true, message: '请输入密码！' }]}
							>
								<Input.Password placeholder="请输入密码" />
							</Form.Item>
							<p className="user-form-item-label">确认密码</p>
							<Form.Item
								name="user_pwd2"
								className="user-form-item"
								rules={[{ required: true, message: '请再次输入密码！' }]}
							>
								<Input.Password placeholder="请再次输入密码" />
							</Form.Item>

							<Form.Item className="user-form-item">
								<Button type="primary" htmlType="submit" className="user-btn">
									登陆
								</Button>
							</Form.Item>
						</Form>
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
