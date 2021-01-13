import React, { Component } from 'react';
import { Skeleton, Switch, Table, Card, Avatar } from 'antd';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

export default class DashBoard extends Component {
	state = {
		loading: 0,
	};

	onChange = (checked) => {
		this.setState({ loading: !checked });
	};

	handleFileScan() {
		this.props.history.push('/scan');
	}
	render() {
		const { loading } = this.state;

		const dataSource = [
			{
				key: '1',
				name: '胡彦斌',
				age: 32,
				address: '西湖区湖底公园1号',
			},
			{
				key: '2',
				name: '胡彦祖',
				age: 42,
				address: '西湖区湖底公园1号',
			},
			{
				key: '1',
				name: '胡彦斌',
				age: 32,
				address: '西湖区湖底公园1号',
			},
			{
				key: '2',
				name: '胡彦祖',
				age: 42,
				address: '西湖区湖底公园1号',
			},
			{
				key: '1',
				name: '胡彦斌',
				age: 32,
				address: '西湖区湖底公园1号',
			},
			{
				key: '2',
				name: '胡彦祖',
				age: 42,
				address: '西湖区湖底公园1号',
			},
			{
				key: '1',
				name: '胡彦斌',
				age: 32,
				address: '西湖区湖底公园1号',
			},
			{
				key: '2',
				name: '胡彦祖',
				age: 42,
				address: '西湖区湖底公园1号',
			},
			{
				key: '1',
				name: '胡彦斌',
				age: 32,
				address: '西湖区湖底公园1号',
			},
			{
				key: '2',
				name: '胡彦祖',
				age: 42,
				address: '西湖区湖底公园1号',
			},
		];

		const columns = [
			{
				title: '姓名',
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: '年龄',
				dataIndex: 'age',
				key: 'age',
			},
			{
				title: '住址',
				dataIndex: 'address',
				key: 'address',
			},
		];

		return (
			<div className="dashboard-container">
				{/* <Switch checked={!loading} onChange={this.onChange} /> */}
				<div className="scan-summery">
					<Card className="dashboard-card" loading={loading}>
						<Meta
							avatar={
								<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
							}
							title="漏洞扫描信息"
							description="This is the description"
						/>
					</Card>

					<Card className="dashboard-card">
						<Skeleton loading={loading} avatar active>
							<Meta
								avatar={
									<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
								}
								title="证书扫描信息"
								description="This is the description"
							/>
						</Skeleton>
					</Card>
					<Card className="dashboard-card">
						<Skeleton loading={loading} avatar active>
							<Meta
								avatar={
									<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
								}
								title="证书扫描信息"
								description="This is the description"
							/>
						</Skeleton>
					</Card>
					<Card className="dashboard-card">
						<Skeleton loading={loading} avatar active>
							<Meta
								avatar={
									<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
								}
								title="证书扫描信息"
								description="This is the description"
							/>
						</Skeleton>
					</Card>
				</div>
				<div className="scan-table">
					<Table dataSource={dataSource} columns={columns} />;
				</div>
			</div>
		);
	}
}
