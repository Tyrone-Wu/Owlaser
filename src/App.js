import React, { Fragment } from 'react';
import Result from './pages/Result';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<Switch>
					<Route path="/result" component={Result}></Route>
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
