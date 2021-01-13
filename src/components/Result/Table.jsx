import React, { Component } from 'react';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

export default class DashBoard extends Component {
	state = {
		loading: true,
	};

	onChange = (checked) => {
		this.setState({ loading: !checked });
	};

	handleFileScan() {
		this.props.history.push('/scan');
	}
	render() {
		const { loading } = this.state;
		return (
			<div className="dashboard-container">
				<Switch checked={!loading} onChange={this.onChange} />

				<Card style={{ width: 400, marginTop: 16 }} loading={loading}>
					<Meta
						avatar={
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						}
						title="Card title"
						description="This is the description"
					/>
				</Card>
				<Card style={{ width: 400, marginTop: 16 }} loading={loading}>
					<Meta
						avatar={
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						}
						title="Card title"
						description="This is the description"
					/>
				</Card>

				<Card style={{ width: 400, marginTop: 16 }}>
					<Skeleton loading={loading} avatar active>
						<Meta
							avatar={
								<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
							}
							title="Card title"
							description="This is the description"
						/>
					</Skeleton>
				</Card>
				<Card style={{ width: 400, marginTop: 16 }}>
					<Skeleton loading={loading} avatar active>
						<Meta
							avatar={
								<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
							}
							title="Card title"
							description="This is the description"
						/>
					</Skeleton>
				</Card>
			</div>
		);
	}
}
