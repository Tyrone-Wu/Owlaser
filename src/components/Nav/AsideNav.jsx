import { Menu, Button } from 'antd';
import React, { Component } from 'react';

import {
	AppstoreOutlined,
	PieChartOutlined,
	DesktopOutlined,
	ContainerOutlined,
	MailOutlined,
	DoubleLeftOutlined,
	DoubleRightOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class AsideNav extends Component {
	state = {
		navCollapsed: false,
	};

	togglenavCollapsed = () => {
		this.setState({
			navCollapsed: !this.state.navCollapsed,
		});
	};

	render() {
		const navCollapsed = this.state.navCollapsed;
		return (
			<div className="C-aside-nav-container">
				<div
					className={`${
						navCollapsed ? 'aside-nav-collapsed' : 'aside-nav-display'
					}`}
					onClick={this.togglenavCollapsed}
				>
					{navCollapsed ? (
						<DoubleRightOutlined />
					) : (
						<>
							<DoubleLeftOutlined />
							&nbsp; 收起导航
						</>
					)}
				</div>
				<Menu
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					theme="light"
					inlineCollapsed={this.state.navCollapsed}
				>
					<Menu.Item key="1" icon={<PieChartOutlined />}>
						扫描结果
					</Menu.Item>
					<Menu.Item key="2" icon={<DesktopOutlined />}>
						组件库
					</Menu.Item>
					<Menu.Item key="3" icon={<ContainerOutlined />}>
						回收站
					</Menu.Item>
					<SubMenu key="sub1" icon={<MailOutlined />} title="信息">
						<Menu.Item key="5">Option 5</Menu.Item>
						<Menu.Item key="6">Option 6</Menu.Item>
						<Menu.Item key="7">Option 7</Menu.Item>
						<Menu.Item key="8">Option 8</Menu.Item>
					</SubMenu>
					<SubMenu
						className="ant-menu-submenu-active"
						key="sub2"
						icon={<AppstoreOutlined />}
						title="站内设置"
					>
						<Menu.Item key="9">Option 9</Menu.Item>
						<Menu.Item key="10">Option 10</Menu.Item>
						<SubMenu key="sub3" title="Submenu">
							<Menu.Item key="11">Option 11</Menu.Item>
							<Menu.Item key="12">Option 12</Menu.Item>
						</SubMenu>
					</SubMenu>
				</Menu>
			</div>
		);
	}
}
