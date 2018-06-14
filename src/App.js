import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import raf from 'raf';
import Nav from "./components/Nav";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Location from "./pages/Location"

let currentScrollY = 0;

class App extends Component {
    constructor (props) {
    super(props);
    this.state = {
      navbarEvent: false,
      hidden: true
       }
       this.handlingScrollUpdate = false;
}
    

  getScrollY = () => {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset
    } else if (window.scrollTop !== undefined) {
      return window.scrollTop
    } else {
      return (document.documentElement || document.body.parentNode || document.body).scrollTop
    }
  }

  handleScroll = () => {
     if (!this.handlingScrollUpdate) {
      this.handlingScrollUpdate = true;
      raf(this.update);
    }
  }

  update = () => {
    currentScrollY = this.getScrollY();
    if(currentScrollY > 600){
      this.setState({ navbarEvent: true})
    }else{
     this.setState({ navbarEvent: false}) 
    }
    console.log(currentScrollY);
    console.log(this.props.scrollInHeight);

    this.setState({
      hidden: currentScrollY < this.props.scrollInHeight
    });

    this.handlingScrollUpdate = false;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    const ele = document.getElementById("loader");
    if(ele){
      setTimeout(() => {
        ele.classList.add("available")
        setTimeout(() => {
          ele.outerHTML = "";
        }, 1000)
      }, 1000)
    }
  }

navbarEvent = ()=> {
    this.setState({ navbarEvent: !this.state.navbarEvent})
  }
  render() {
    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          {this.state.navbarEvent ? <Nav/> :null }
        </ReactCSSTransitionGroup>
        <div>
          <Home />
          <Menu />
          <Location />
        </div>
      </div>
    );
  }
}

export default App;
