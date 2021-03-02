import { Menu, Table, Input } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';

const { Search } = Input;
const { SubMenu } = Menu;

export default class AsideNav extends Component {
	render() {
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

		const columns = [
			{
				title: '·',
				dataIndex: 'key',
				key: 'name',
				width: 30,
			},
			{
				title: 'ARTIFACT_ID',
				dataIndex: 'artifact_id',
				key: 'artifact_id',
			},
		];
		const bottomOptions = [{ label: 'none', value: 'none' }];
		const onSearch = (value) => console.log(value);
		return (
			<div className="C-aside-nav-container">
				<div className="search-box">
					<Search
						placeholder="input search text"
						allowClear
						onSearch={onSearch}
						style={{ width: 200 }}
					/>
				</div>
				<div className="component-list">
					<Table
						dataSource={dataSource}
						columns={columns}
						pagination={false}
						scroll={{ y: 500 }}
						size="small"
					/>
				</div>
				<div className="aside-footer">{/* <GithubOutlined /> owlaser */}</div>
			</div>
		);
	}
}
