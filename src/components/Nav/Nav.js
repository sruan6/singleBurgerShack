import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Scroll from 'react-scroll-to-element';


class Nav extends Component {
	constructor(props){
		super(props);
		this.state = {
			myopen : '<i className="fas fa-bars"></i>',
		}
		this.handleOpen = this.handleOpen.bind(this);
		this.handleclose = this.handleclose.bind(this)
	}
	handleOpen() {
	this.setState({ myopen: !this.state.myopen });
	}
	handleclose() {
		document.getElementById('primaryButton').click()
	}
	render() {
		return (
				<div>
					<nav className="navbar navbar-expand-lg navbar-light">
					  <a className="navbar-brand logo" href="#"><img src="/image/Burger_Shack_Logo.jpg" alt="logo" /></a>
					  <button className="navbar-toggler" id="primaryButton" onClick={this.handleOpen} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					  <ReactCSSTransitionGroup
				          transitionName="example"
				          transitionEnterTimeout={100}
				          transitionLeaveTimeout={100}>
					     {this.state.myopen ? 
					     	<i className="fas fa-bars"></i>:<i className="fas fa-times"></i>}
					   </ReactCSSTransitionGroup>
					   	</button>

					  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					    <div className="navbar-nav">
					      	<a onClick={this.handleclose} className="nav-item nav-link">
					      		<Scroll type="id" element="Home">Home</Scroll>
					      	</a>
					      	<a onClick={this.handleclose} className="nav-item nav-link">
					      		<Scroll type="id" element="Menu">Menu</Scroll>
					      		</a>
					      	<a onClick={this.handleclose} className="nav-item nav-link">
					      	      <Scroll type="id" element="Location">Location</Scroll>
					      	</a>
					    </div>
					  </div>
					</nav>
			    </div>
			)
		}
}
export default Nav;