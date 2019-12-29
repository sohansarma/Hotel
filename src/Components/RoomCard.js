import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';


export default function Rooms ({room}) {
	const { name,slug,images,price } = room;

	return(
         <article className="room">
            <div className = "img-container">
               <img src = {images[0] || defaultImg} alt="Images" />
               <div className ="price-top">
               <h6>Rs.{price}</h6>
               <p>per night</p>
               </div>
               <Link to ={`/Room/${slug}`} className ="btn-primary room-link">
                   Features
               </Link>
            </div> 
            <p className ="room-info">{name}</p>
         </article>
		);
}

Rooms.propTypes = {
	room: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.string.isRequired,
		number: PropTypes.number.isRequired,
	})
}

