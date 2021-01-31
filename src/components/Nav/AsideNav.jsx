import { Menu } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

	renderSubMenu = ({ key, icon, title, subs }) => {
		return (
			<SubMenu
				key={key}
				title={title}
				icon={icon}
				className="ant-menu-submenu-active"
			>
				{subs &&
					subs.map((item) => {
						return item.subs && item.subs.length > 0
							? this.renderSubMenu(item)
							: this.renderMenuItem(item);
					})}
			</SubMenu>
		);
	};
	renderMenuItem = ({ key, icon, title }) => {
		return (
			<Menu.Item key={key} icon={icon}>
				<Link to={key}>
					<span>{title}</span>
				</Link>
			</Menu.Item>
		);
	};
	render() {
		const navCollapsed = this.state.navCollapsed;
		const menus = [
			{
				title: '开始扫描',
				icon: <DesktopOutlined />,
				key: '/scan',
			},

			{
				title: '扫描结果',
				icon: <PieChartOutlined />,
				key: '/result',
				subs: [
					{ key: '/result/detail', title: '证书信息', icon: '' },
					{ key: '/page/2', title: '漏洞信息', icon: '' },
					{ key: '/page/3', title: '安全信息', icon: '' },
					{ key: '/page/4', title: '冲突信息', icon: '' },
				],
			},
			{
				title: '组件库',
				icon: <DesktopOutlined />,
				key: '/repo',
			},
			{
				title: '回收站',
				icon: <ContainerOutlined />,
				key: '/del',
			},
			{
				title: '站内设置',
				icon: <AppstoreOutlined />,
				key: '/setting',
			},
		];

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
					defaultSelectedKeys={['/scan']}
					defaultOpenKeys={['/scan']}
					theme="light"
					inlineCollapsed={this.state.navCollapsed}
					mode="inline"
					className="menu"
				>
					{menus.map((item) => {
						return item.subs && item.subs.length > 0
							? this.renderSubMenu(item)
							: this.renderMenuItem(item);
					})}
				</Menu>
			</div>
		);
	}
}
