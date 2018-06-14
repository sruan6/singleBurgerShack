import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Nav extends Component {
	constructor(props){
		super(props);
		this.state = {
			myopen : '<i className="fas fa-bars"></i>',
			closethis: "collapse navbar-collapse"
		}
		this.handleOpen = this.handleOpen.bind(this);
		this.doSomething = this.doSomething.bind(this)
	}
	handleOpen() {
		this.setState({ myopen: !this.state.myopen });
		this.setState({ closethis: "navbar-collapse collapse show" });
	}
	doSomething() {
		this.setState({ myopen: !this.state.myopen });
		this.setState({ closethis: "navbar-collapse collapse" });
	}
	render() {
		return (
				<div>
					<nav className="navbar navbar-expand-lg navbar-light">
					  <a className="navbar-brand logo" href="#"><img src="/image/Burger_Shack_Logo.jpg" alt="logo" /></a>
					  <button className="navbar-toggles" onClick={this.handleOpen} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					  <ReactCSSTransitionGroup
				          transitionName="example"
				          transitionEnterTimeout={100}
				          transitionLeaveTimeout={100}>
					     {this.state.myopen ? 
					     	<i className="fas fa-bars"></i>:<i className="fas fa-times"></i>}
					   </ReactCSSTransitionGroup>
					   	</button>

					  <div className={this.state.closethis} id="navbarNavAltMarkup">
					    <div className="navbar-nav">
					      <a onClick={this.doSomething} className="nav-item nav-link" href="#Home">Home</a>
					      <a onClick={this.doSomething} className="nav-item nav-link" href="#Menu">Menu</a>
					      <a onClick={this.doSomething} className="nav-item nav-link" href="#Location">Location</a>
					    </div>
					  </div>
					</nav>
			    </div>
			)
		}
}
export default Nav;