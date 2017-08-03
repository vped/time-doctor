import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Layout,Drawer, Header,Navigation, Grid, Cell } from 'react-mdl';
import Avatar from 'material-ui/Avatar';

const textStyle = {
	text:{color:'black'},
	icon:{color:'black',padding:2,fontSize:15},
	homeIcon:{cursor:'pointer',margin:'18px 0px 23px -63px'},
	downArrow: {position: 'absolute', top:2,color:'black'},
	icons:{marginLeft: '35%'},
	mainIcon: {fontSize:20,color:'black',marginLeft:20}
};

var Navbar = () => (
	<div style={{height: '70px', position: 'relative'}}>
	    <Layout fixedHeader >
	        <Header hideSpacer={true} style = {{backgroundColor:'white'}} title={<Link style={{position: 'relative'}} to='/'><span style={textStyle.text}><i style ={textStyle.homeIcon} className="material-icons">home</i>&nbsp;&nbsp;&nbsp;<strong>Dashboard</strong></span><i style ={textStyle.downArrow} className="material-icons">keyboard_arrow_down</i></Link>}>
	            <Navigation>
	                <Link style={textStyle.text} to='/edit'>Edit Time</Link>
	                <Link style={textStyle.text} to="/screen">Screenshots</Link>
	                <Link style={textStyle.text} to='/report'>Reports</Link>
	                <Link style = {textStyle.text} to="/payment">Payments</Link>
	                
	            </Navigation>
	            <div style={textStyle.icons}>
	                <i style={textStyle.mainIcon} className="material-icons">settings</i>
	                <i style={textStyle.icon} className="material-icons">keyboard_arrow_down</i>
	                <i style={textStyle.mainIcon} className="material-icons">announcement</i>
	                <i style={textStyle.mainIcon} className="material-icons">search</i>
	           		<Avatar style={textStyle.mainIcon} src={require('../../img/useravatar1.png')}/>
	           	</div>
	        </Header>		        
	    </Layout>
    </div>
);

export default withRouter(Navbar);