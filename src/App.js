import React, { Fragment } from 'react';
import Home from './pages/Home';
import Scan from './pages/Scan';

import Result from './pages/Result';
import Detail from './pages/Detail';
import Login from './pages/User/login';
import Rejister from './pages/User/rejister';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<Switch>
					<Route path="/result" component={Result}></Route>
					<Route path="/login" component={Login} />
					<Route path="/rejister" component={Rejister}></Route>
					<Route path="/detail" component={Detail} />
					<Route path="/scan" component={Scan} />
					<Route exact path="/" component={Home} />
					<Redirect to={'/'} />
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
