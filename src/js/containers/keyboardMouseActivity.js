import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import LinearProgress from 'material-ui/LinearProgress';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import { Cell } from 'react-mdl';


const style = {
	avatar: {width: 35, height: 35},
	header: {height: 42, fontSize: 14, padding: '10px 0px 10px 10px', display:'flex'},
	inline: {display: 'flex', fontSize: 12},
	linerprogress: {height: 7, width: '50%', margin: '0px 20px 0px 30%'},
	listitem: {height: 45},
	popoverOpen: {marginLeft: '54%', display: 'flex', cursor: 'pointer'},
	moreUser:{height: 50, marginLeft: 16},
	moreAvatar: {marginTop:10,width: 30, height: 30},
	moreUserText:{color: 'grey', marginLeft: 10}
};

export default class Dashboard extends Component {

	constructor(){
		super();
		this.state = {
			userList: [
				{name: 'A', status: 98},
				{name: 'B', status: 88},
				{name: 'C', status: 81},
				{name: 'D', status: 78},
				{name: 'E', status: 71},
				{name: 'F', status: 50},
				{name: 'G', status: 45},
				{name: 'H', status: 40},
				{name: 'I', status: 35},
				{name: 'J', status: 30},
				{name: 'K', status: 25},
				{name: 'L', status: 20},
				{name: 'M', status: 15},
				{name: 'N', status: 10},
				{name: 'O', status: 5}
			],
			period: 'Monthly',
			openPeriod: false,
			openExtra: false
		}
		this._openOption = this._openOption.bind(this);
		this._openExtra = this._openExtra.bind(this);
		this._handleRequestClose = this._handleRequestClose.bind(this);
	}

	_openOption(e){
		e.preventDefault();

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
			openExtra: !this.state.openExtra,
			anchorExtra: e.target
		});
	}

	_extraChange(){
		this.setState({openExtra: false});
	}
	
	render() {
	    return (
	      	<Cell col={6}>
	      		<Paper zDepth={1}>
	      			<div style={style.header}>
	      				Keyboard and Mouse
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
				        	onRequestClose={this._handleRequestClose}
				        	animation={PopoverAnimationVertical}
				        >
				        	<Menu  onChange={this._extraChange.bind(this)}>
					            <MenuItem value='edit' primaryText="Edit widegt" />
					            <MenuItem value='delete' primaryText="Delete widget" />
				        	</Menu>
				        </Popover>
	      			</div>
	      			<Divider/>
	      			<List>
	      				{
	      					this.state.userList.slice(0,5).map((el,i) => {
	      						return (
	      							<ListItem
	      								key={i}
								      	disabled={true}
								      	style={style.listitem}
								      	leftAvatar={
								        	<Avatar style={style.avatar} src={require(`../../img/useravatar${i+1}.png`)} />
								      	}
								    >
								      	<div style={style.inline}>
								      		{el.name}
								      		<LinearProgress color='#64DD17' style={style.linerprogress} mode="determinate" value={el.status} />
								      		<strong>{el.status}%</strong>
								      	</div>
								    </ListItem>
	      						)
	      					})
	      				}
	      			</List>
	      			<Divider/>
	      			<div style={style.moreUser}>
		      			<Avatar style={style.moreAvatar} src={require(`../../img/useravatar${1}.png`)}  />
		      			<Avatar style={style.moreAvatar} src={require(`../../img/useravatar${1}.png`)} />
		      			<Avatar style={style.moreAvatar} src={require(`../../img/useravatar${1}.png`)} />
		      			<span style={style.moreUserText}>+10 more</span>
		      		</div>
	      		</Paper>
	      	</Cell>
	    );
  	}
}
