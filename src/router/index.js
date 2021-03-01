import React, { Fragment } from 'react';
import Home from './pages/Home';
import Scan from './pages/Scan';
import Result from './pages/Result';
import Login from './pages/User/login';
import Rejister from './pages/User/rejister';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AsideNav from '@/components/Nav/AsideNav';
import NormalNav from '@/components/Nav/NormalNav';
function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<NormalNav></NormalNav>
				<AsideNav></AsideNav>
				<Switch>
					<Route path="/scan" component={Scan} />
					<Route path="/result" component={Result}>
						{/* <Route path="/detail" component={Detail} /> */}
					</Route>
					<Route exact path="/" component={Home} />
					<Redirect to={'/home'} />
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
