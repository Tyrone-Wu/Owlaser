import React, { Component } from 'react';
import { Skeleton, Switch, Table, Card, Avatar, Progress } from 'antd';
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
				artifact_id: 'spring-boot-starter-jdbc',
				version: '2.2.0.RELEASE',
				group_id: 'org.springframework.boot',
				versionList: null,
				usageList: null,
				popular_version: '2.0.6.RELEASE',
				stable_version: '2.2.2.RELEASE',
				license: 'Apache 2.0  ',
				licenseList: null,
			},
			{
				artifact_id: 'spring-boot-starter-thymeleaf',
				version: '2.2.0.RELEASE',
				group_id: 'org.springframework.boot',
				versionList: null,
				usageList: null,
				popular_version: '1.5.9.RELEASE',
				stable_version: '2.2.2.RELEASE',
				license: 'Apache 2.0  ',
				licenseList: null,
			},
			{
				artifact_id: 'spring-boot-starter-web',
				version: '2.2.0.RELEASE',
				group_id: 'org.springframework.boot',
				versionList: null,
				usageList: null,
				popular_version: '2.1.3.RELEASE',
				stable_version: '2.2.2.RELEASE',
				license: 'Apache 2.0  ',
				licenseList: null,
			},
			{
				artifact_id: 'mybatis-spring-boot-starter',
				version: '2.0.1',
				group_id: 'org.mybatis.spring.boot',
				versionList: null,
				usageList: null,
				popular_version: '1.3.2',
				stable_version: '2.1.1',
				license: 'Apache 2.0',
				licenseList: null,
			},
			{
				artifact_id: 'mysql-connector-java',
				version: '8.0.18',
				group_id: 'mysql',
				versionList: null,
				usageList: null,
				popular_version: '5.1.38',
				stable_version: '8.0.18',
				license: 'GPL 2.0',
				licenseList: null,
			},
			{
				artifact_id: 'spring-boot-starter-test',
				version: '2.2.0.RELEASE',
				group_id: 'org.springframework.boot',
				versionList: null,
				usageList: null,
				popular_version: '2.1.1.RELEASE',
				stable_version: '2.2.2.RELEASE',
				license: 'Apache 2.0  ',
				licenseList: null,
			},
			{
				artifact_id: 'nekohtml',
				version: '1.9.21',
				group_id: 'net.sourceforge.nekohtml',
				versionList: null,
				usageList: null,
				popular_version: '1.9.12',
				stable_version: '1.9.22',
				license: 'Apache 2.0  ',
				licenseList: null,
			},
		];

		const columns =
			dataSource.length &&
			Object.keys(dataSource[0]).map((key) => ({
				title: key.toLocaleUpperCase(),
				dataIndex: key,
			}));

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
						<Progress
							type="circle"
							strokeColor={{
								'0%': '#0ac0b9',
								'50%': '#890b7c',
								'100%': '#cf4045',
							}}
							percent={70}
						/>
						<div className="card-desc">漏洞扫描信息</div>
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
								title="dsdasdsa"
								description="This is the description"
							/>
						</Skeleton>
					</Card>
				</div>
				<div className="scan-table">
					<Card loading={loading}>
						<Table dataSource={dataSource} columns={columns} />
					</Card>
				</div>
			</div>
		);
	}
}
