import React, { Fragment } from 'react';
import Home from './pages/Home';
import Scan from './pages/Scan';
import Result from './pages/Result';
import Detail from './pages/Detail';
import Login from './pages/User/login';
import Rejister from './pages/User/rejister';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
function App() {
	return (
		<Fragment>
			<HashRouter>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/rejister" component={Rejister} />
					<Route path="/scan" component={Scan} />
					<Route path="/result" component={Result} />
					<Route path="/detail" component={Detail} />
					<Route exact path="/" component={Home} />
					<Redirect to={'/home'} />
				</Switch>
			</HashRouter>
		</Fragment>
	);
}

export default App;
