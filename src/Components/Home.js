import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import Services from './Services';
import FeaturedContents from './FeaturedContents';

export default function Home(){
return(
	<>
        <Hero>
         <Banner 
         title="Luxurious Rooms" 
         subtitle="Luxurious rooms starting from Rs.3000/-" >
         <Link to="/Room" className="btn-primary">
           Our Rooms
         </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedContents />
</>
	);
}