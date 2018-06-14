import React, { Component } from 'react';

class Menu extends Component {
	render() {
		return(
			<div className='menu' id="Menu">
				<h1>MENU</h1>
				<div className='row'>

					<div className='col-lg-1 col-md-1 col'></div>

						<div className='col-lg-10 col-md-10 col-12'>
							<div className='menuBorder'>
								<div className='container'>
									<div className='row'>
										<div className='col-lg-6'>
											<h2 className='foodTitle'>-Burgers-</h2>
											<p className='foodDescription'>Our 100% angus beef contains no hormones or antibiotics. Our beef is freshly ground and all burgers are cooked medium unless otherwise requested. Burgers are served with lettuce, tomatoes (pickles and onions are available upon request)</p>
											<div className="row">
												<div className="col-lg-6 col-12">
													<div className='row'>
														<div className='col-md-9 col-9'>
															<h3 className='foodName'>1/4 lb Burger</h3>
														</div>
														<div className='col-md-3 col-3'>
															<h3 className='foodPrice'>6.25</h3>
														</div>

														<div className='col-md-12 col-12'>
															<p className='foodDescription'>lettuce,tomatoe,and house mayo</p>
														</div>

														<div className='col-md-9 col-9'>
															<h3 className='foodName'>1/2 lb Burger</h3>
														</div>
														<div className='col-md-3 col-3'>
															<h3 className='foodPrice'>8.75</h3>
														</div>

														<div className='col-md-9 col-9'>
															<h3 className='foodName'>1/4 lb Shack Burger</h3>
														</div>
														<div className='col-md-3 col-3'>
															<h3 className='foodPrice'>6.25</h3>
														</div>

														<div className='col-md-9 col-9'>
															<h3 className='foodName'>1/2 lb Shack Burger</h3>
														</div>
														<div className='col-md-3 col-3'>
															<h3 className='foodPrice'>8.75</h3>
														</div>

													</div>
												</div>
												<div className="col-lg-6 col-12">
													<div className='row'>
														<div className='col-md-9 col-9'>
															<h3 className='foodName'>Veggie Burger</h3>
														</div>
														<div className='col-md-3 col-3'>
															<h3 className='foodPrice'>7.25</h3>
														</div>

														<div className='col-md-9 col-9'>
															<h3 className='foodName'>Turkey Burger</h3>
														</div>
														<div className='col-md-3 col-3'>
															<h3 className='foodPrice'>7.25</h3>
														</div>
													</div>
												</div>
											</div>
											<h2 className='foodTitle'>-Fries-</h2>
												<div className="row">
													<div className="col-lg-6 col-12">
														<div className='row'>
															<div className='col-lg-8 col-md-9 col-9'>
																<h3 className='foodName'>French Fries</h3>
															</div>
															<div className='col-lg-4 col-md-3 col-3'>
																<h3 className='foodPrice'>6.25</h3>
															</div>
														
															<div className='col-lg-8 col-md-9 col-9'>
																<h3 className='foodName'>Garlic Fries</h3>
															</div>
															<div className='col-lg-4 col-md-3 col-3'>
																<h3 className='foodPrice'>6.25</h3>
															</div>
														</div>
													</div>
													<div className="col-lg-6 col-12">
														<div className='row'>
															<div className='col-lg-8 col-md-9 col-9'>
																<h3 className='foodName'>Curly Fries</h3>
															</div>
															<div className='col-lg-4 col-md-3 col-3'>
																<h3 className='foodPrice'>6.25</h3>
															</div>
														
															<div className='col-lg-8 col-md-9 col-9'>
																<h3 className='foodName'>Onion Rings</h3>
															</div>
															<div className='col-lg-4 col-md-3 col-3'>
																<h3 className='foodPrice'>6.25</h3>
															</div>
														</div>
													</div>
												</div>
											<h2 className='foodTitle'>-Sandwiches-</h2>
														<div className='row'>
															<div className='col-lg-10 col-9'>
																<h3 className='foodName'>Fried Chicken Sandwiches</h3>
															</div>
															<div className='col-lg-2 col-3'>
																<h3 className='foodPrice'>7.75</h3>
															</div>
															<div className='col-lg-10 col-9'>
																<h3 className='foodName'>Fish Sandwiches</h3>
															</div>
															<div className='col-lg-2 col-3'>
																<h3 className='foodPrice'>7.75</h3>
															</div>
														</div>
										</div>
										<div className='col-lg-6 col-12'>
											<h2 className='foodTitle'>-Extra-</h2>
												<div className='row'>
													<div className='col-lg-4 col-4'>
														<h3 className='foodName'>Jalapeno Poppers</h3>
													</div>
													<div className='col-lg-4 col-4'>
														<h3 className='foodName'>Corn Dog</h3>
													</div>
													<div className='col-lg-4 col-4'>
														<h3 className='foodName'>Mini Corn Dogs</h3>
													</div>
												</div>
											<h2 className='foodTitle'>-Basket-</h2>
												<div className='row'>
														<div className='col-lg-10 col-9'>
															<h3 className='foodName'>Fried Chicken Sandwiches</h3>
														</div>
														<div className='col-lg-2 col-3'>
															<h3 className='foodPrice'>7.75</h3>
														</div>
												</div>
											<h2 className='foodTitle'>-DRINKS & DESSERTS-</h2>
												<div className='row'>
													<div className='col-lg-10 col-9'>
														<h3 className='foodName'>Fountain Sodas</h3>
													</div>
													<div className='col-lg-2 col-3'>
														<h3 className='foodPrice'>2.25</h3>
													</div>
													<div className='col-lg-10 col-9'>
														<h3 className='foodName'>MilkShakes</h3>
													</div>
													<div className='col-lg-2 col-3'>
														<h3 className='foodPrice'>2.25</h3>
													</div>
													<div className='col-lg-10 col-9'>
														<h3 className='foodName'>Root beer Float</h3>
													</div>
													<div className='col-lg-2 col-3'>
														<h3 className='foodPrice'>2.25</h3>
													</div>
													<div className='col-lg-10 col-9'>
														<h3 className='foodName'>Ice Cream Cone</h3>
													</div>
													<div className='col-lg-2 col-3'>
														<h3 className='foodPrice'>2.25</h3>
													</div>
												</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					<div className='col-lg-1 col-md-1 col'></div>

				</div> 
			</div> 
		);
	}
};

export default Menu;