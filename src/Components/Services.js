import React,{ Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title';


export default class Services extends Component {
	state={
		services:[
            {
		icons: <FaCocktail />,
		title: "Free Cocktails",
		info:
		"Get the Best Cocktails in the Town at the cheapest price"
	},
	{
		icons: <FaHiking />,
		title: "Free Hiking ",
		info:
		"Get the Best Hiking in the Town at the cheapest price"
	},
	{
		icons: <FaShuttleVan />,
		title: "Free ShuttleVan",
		info:
		"Get the Best ShuttleVan in the Town at the cheapest price"
	},
	{
		icons: <FaBeer />,
		title: "Free Beer",
		info:
		"Get the Best Beer in the Town at the cheapest price"
	}
		]
	}
	render(){
		return(
             <section className="services">
              <Title title ="Services" />
              <div className="services-center">
              {this.state.services.map((items,index) => {
              	return (
              		<article key={index} className="service">
                     <span>{items.icons}</span>
                     <h6>{items.title}</h6>
                     <p>{items.info}</p>
              		</article>
              		);
              })}
              </div> 
             </section>
			);
	}
}