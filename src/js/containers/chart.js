import React, { Component } from 'react';

import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardText, CardTitle,TextField,Paper} from 'material-ui';
import {RadialBarChart, RadialBar, Legend, Tooltip} from 'recharts';
import { Cell } from 'react-mdl';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const data = [
    {name: 'Mark 22h 01m', weekly: 31.47, weekly_hr: 3000, fill: '#64DD17'},
    {name: 'Aplle 4h 31m', weekly: 26.69, weekly_hr: 600, fill: '#303F9F'},
    {name: 'Calrx 7h 11m', weekly: 15.69, weekly_hr: 1200, fill: '#8dd1e1'},
    {name: 'Fero 2h 44m', weekly: 8.22, weekly_hr: 1800, fill: '#E64A19'},
    {name: 'Zucker 3h 23m', weekly: 8.63, weekly_hr: 2400, fill: '#FFC400'}
];
    
const style = { 
	chartStyle :{ top: 40, left: 20, lineHeight: '24px'},
	paper: { width: '40%'},
	header: {height: 42, fontSize: 14, padding: '10px 0px 10px 10px', display:'flex'},
	popoverOpen: {marginLeft: '54%', display: 'flex', cursor: 'pointer'},
	svg1: {fill:'#64DD17', strokeWidth: 1, stroke:'white'},
	svg2: {fill:'#00C853', strokeWidth: 1, stroke:'white'},
	more: {height: 50, marginLeft: 16, paddingTop: 15}
};

export default class Chart extends Component {

	constructor(){
		super();
		this.state = {			
			period: 'Monthly',
			openPeriod: false,
			openExtra: false
		};
		this._openOption = this._openOption.bind(this);
		this._openExtra = this._openExtra.bind(this);
		this._handleRequestClose = this._handleRequestClose.bind(this);
	}

	_openOption(e){
		this.setState({
			openPeriod: true,
			anchorPeriod: e.target
		});
	}

	_periodChange(e, value){
		this.setState({
			period: value, 
			openPeriod: false
		});
	}

	_handleRequestClose(){
		this.setState({openPeriod: false});
	}

	_openExtra(e){
		this.setState({
			openExtra: true,
			anchorExtra: e.target
		});
	}

	_extraChange(){
		this.setState({openExtra: false});
	}

	render(){
		return(
			<Cell col={6} >
		    	<Paper zDepth={1}>
	      			<div style={style.header}>
	      				Highest Mobile User
	      				<div style={style.popoverOpen} onClick={this._openOption}>
	      					{this.state.period}
	      					<i className="material-icons">keyboard_arrow_down</i>
	      				</div>
					    <Popover
				        	open={this.state.openPeriod}
				        	anchorEl={this.state.anchorPeriod}
				        	anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
				        	targetOrigin={{horizontal: 'left', vertical: 'top'}}
				        	onRequestClose={this.handleRequestClose}
				        	animation={PopoverAnimationVertical}
				        >
				        	<Menu value={this.state.period} onChange={this._periodChange.bind(this)}>
					            <MenuItem value='Monthly' primaryText="Monthly" />
					            <MenuItem value='  Daily' primaryText="Daily" />
				        	</Menu>
				        </Popover>
				        <i onClick={this._openExtra} className="material-icons">more_vert</i>
				        <Popover
				        	open={this.state.openExtra}
				        	anchorEl={this.state.anchorExtra}
				        	anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
				        	targetOrigin={{horizontal: 'left', vertical: 'top'}}
				        	onRequestClose={this.handleRequestClose}
				        	animation={PopoverAnimationVertical}
				        >
				        	<Menu  onChange={this._extraChange.bind(this)}>
					            <MenuItem value='edit' primaryText="Edit widegt" />
					            <MenuItem value='delete' primaryText="Delete widget" />
				        	</Menu>
				        </Popover>
	      			</div>
	      			<Divider/>
	      			<RadialBarChart width={500} height={241} cx={400} cy={120} innerRadius={30} outerRadius={110} barSize={10} data={data}>
			        	<Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style.chartStyle}/>
			        	<RadialBar legendType='circle' minAngle={15} startAngle={0} background clockWise={true} dataKey='weekly_hr' left={100} />
			        	<Tooltip/>
			        </RadialBarChart>
			        <Divider/>
			        <div style={style.more}>
				        <svg width="20" height="20">
						 	<rect width="14" height="14" style={style.svg1} />
						</svg>
						Actual Hours
						&nbsp;
						<svg width="20" height="20">
						 	<rect width="14" height="14" style={style.svg2} />
						</svg>
						Hour worked more
					</div>
	      		</Paper>
			</Cell>
		)
	}
}
