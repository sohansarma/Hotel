import React,{ Component } from 'react';
import { RoomContext } from './Context';
import Loading from './Loading';
import Rooms from './RoomCard';
import Title from './Title';

export default class FeaturedContents extends Component {
	static contextType = RoomContext
render(){
	let {loading,featuredRooms : rooms} = this.context;
	rooms = rooms.map(room => {
		return <Rooms key={room.id} room={room} />
	})
	return(
         <section className ="featured-rooms">
             <Title title="Featured Rooms" />
             <div className ="featured-rooms-center">
                {loading ? <Loading /> : rooms}
             </div>
         </section> 
		);
}
}