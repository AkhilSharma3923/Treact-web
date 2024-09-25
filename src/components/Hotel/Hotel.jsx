import React from 'react';
import './hotel.css';
import { FaStar } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";

const Hotel = () => {
    const hotels = [
        {
            img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
            name: "Wyatt Resider",
            rating: 4.8,
            location: "London, UK",
            price: "USD 33/Day",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, dignissimos incidunt? Consectetur rerum voluptas perspiciatis quae optio debitis perferendis amet voluptatem aspernatur deserunt unde reiciendis eveniet eos, architecto culpa iusto."
        },
        {
            img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
            name: "Sunset Lodge",
            rating: 4.5,
            location: "Paris, France",
            price: "USD 45/Day",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, dignissimos incidunt? Consectetur rerum voluptas perspiciatis quae optio debitis perferendis amet voluptatem aspernatur deserunt unde reiciendis eveniet eos, architecto culpa iusto."
        },
        {
            img: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
            rating: 4.9,
            location: "Zurich, Switzerland",
            price: "USD 50/Day",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, dignissimos incidunt? Consectetur rerum voluptas perspiciatis quae optio debitis perferendis amet voluptatem aspernatur deserunt unde reiciendis eveniet eos, architecto culpa iusto."
        },
        // {
        //     img: "https://images.unsplash.com/photo-1553514029-1318cec27a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        //     name: "City Lights Inn",
        //     rating: 4.6,
        //     location: "New York, USA",
        //     price: "USD 60/Day",
        //     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, dignissimos incidunt? Consectetur rerum voluptas perspiciatis quae optio debitis perferendis amet voluptatem aspernatur deserunt unde reiciendis eveniet eos, architecto culpa iusto."
        // }
    ];

    return (
        <div className='hotel'>
            <h1>Popular Hotels</h1>
            <div className='cont'>
                {hotels.map((hotel, index) => (
                    <div key={index} className="tt">
                        <div className="img" style={{ backgroundImage: `url(${hotel.img})` }}></div>
                        <div className="name">
                            <h2>{hotel.name}</h2>
                            <div className="rating">
                                <FaStar className='react-icons' />
                                <p>{hotel.rating}</p>
                            </div>
                        </div>
                        <div className="location">
                            <div className="left1">
                                <MdLocationPin className='loco' />
                                <p>{hotel.location}</p>
                            </div>
                            <div className="right1">
                                <AiFillDollarCircle className='dolo' />
                                <p>{hotel.price}</p>
                            </div>
                        </div>
                        <p className='aaa'>{hotel.description}</p>
                        <div className="button">
                            Book Now
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hotel;
