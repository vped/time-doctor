import React from 'react';
import ReactDOM from 'react-dom'

import {HashRouter as Router, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dashboard from './containers/dashboard';
import {indigoA200} from 'material-ui/styles/colors';

import Edit from './containers/edit';
import Screen from './containers/screen';
import Report from './containers/report';
import Payment from './containers/payment';
import Navbar from './containers/navbar';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: indigoA200,
    	primary2Color: indigoA200
	}
});

ReactDOM.render((
	<MuiThemeProvider muiTheme={muiTheme}>
		<Router>
			<div>
				<Navbar/>
				<Route exact path="/edit" component={Edit}/>
		    	<Route exact path="/screen" component={Screen}/>
		    	<Route exact path="/report" component={Report}/>
		    	<Route exact path="/payment" component={Payment}/>
				<Route exact path="/" component= {Dashboard} />
			</div>
		</Router>
	</MuiThemeProvider>),
	document.getElementById('container')
);


