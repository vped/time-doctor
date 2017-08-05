import React, { Component } from 'react';
import { Grid } from 'react-mdl';

import Chart from './chart';
import KeyboardMouseActivity from './keyboardMouseActivity';

var Dashboard = (props) => (
  	<div className="container">      	
	    <h4>Company Dashboard</h4>
	    <Grid>
		    <KeyboardMouseActivity/>
			<Chart/>
		</Grid>
  	</div>
);

export default Dashboard;
