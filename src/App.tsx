import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './Pages/Home/Home';
import './assets/css/bootstrap.css';
import './assets/css/responsive.css';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="*" component={Home}></Route>
			</Switch>
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;
