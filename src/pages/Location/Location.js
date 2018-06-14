import React, { Component } from 'react';

class Location extends Component {

   mapsSelector = (e) => {
   	e.preventDefault();
      if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") !== -1) || 
     (navigator.platform.indexOf("iPad") !== -1) || 
     (navigator.platform.indexOf("iPod") !== -1))
    window.open("maps://maps.google.com/maps?daddr=Burger Shack, 1911, 2237 Powell St, San Francisco, CA 94133");
		else /* else use Google */
    window.open("https://www.google.com/maps/place/Burger+Shack/@37.806552,-122.4118016,18z/data=!4m5!3m4!1s0x808580fb28ee016d:0x4bc1151d3b734095!8m2!3d37.8055009!4d-122.4120484");
	}
	render() {
		return (
			<div>
			<span className="topAnchor" id="Location"></span>
			<div className='location'>
			<h1>LOCATION</h1>
			<div className='row'>
				<div className='col-md-12 col-12'>
					<h1 className='d-flex justify-content-center title'>Location</h1>

					<div className='container'>
					<div className='row'>

							<div className='col-md-6 col-12'>
								<h3 className='subTitle'>Address</h3>
									<p className='address'>
									2237 Powell Street, San Francisco, 
										<br/>
									CA, 94133
									<br />
										<button  className='btn btn-primary direction' onClick={this.mapsSelector}><a target='_blank'>Direction</a></button>
									</p>

							</div>

							<div className='col-md-6 col-12'>
								<h3 className='subTitle'>Business Hours</h3>
								<p className='hours'>
									Mon. 11:00 AM – 9:00 PM
									<br/>
									Tue. 11:00 AM – 9:00 PM
									<br/>
									Wed. 11:00 AM – 9:00 PM
									<br/>
									Thu. 11:00 AM – 9:00 PM
									<br/>
									Fri. 11:00 AM – 10:00 PM
									<br/>
									Sat. 11:00 AM – 10:00 PM
									<br/>
									Sun. 11:00 AM – 9:00 PM
								</p>
							</div>

					</div>

					<div className='row'>
						<div className='col-12'>
							<h1 className='subTitle'>Contact</h1>
								<p className='number'><a  className='telePhone' href='tel:+1-415-523-6818'>(415)523-6818</a></p>
						</div>
					</div>

					</div>
				</div>	
			</div>
			</div>
			</div>
		);
	}
}
export default Location;