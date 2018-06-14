import React, { Component } from 'react';
import Carousel from './../../components/Carousel';

class Home extends Component {
	render(){
		return(
			<div>
			<span id="Home"></span>
			<div className="home">
				<div className='row'>
						<div className='col-md-12 col-12'>
							<Carousel />
						</div>
				</div>
			</div>
			</div>
		)
	}
}
export default Home;