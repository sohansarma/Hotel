import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';

const RoomPage = () => {
	return(
         <Hero hero = "roomsHero">
	         <Banner title="Our rooms">
		         <Link to="/" className="btn-primary">
		            Back to Home Page
		         </Link>
	         </Banner>
         </Hero>
		);
}

export default RoomPage;