import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Route path="/" component={Main} />
				</Router>
			</Provider>
		);
	}
}

export default App;
