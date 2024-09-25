import React from 'react';
import './Home.css';
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
    const data = [
        {
            img: "https://treact.owaiskhan.me/static/media/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg",
            title: "Secure",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dignissimos"
        },
        {
            img: "https://treact.owaiskhan.me/static/media/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg",
            title: "24/7 Support",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dignissimos"
        },
        {
            img: "https://treact.owaiskhan.me/static/media/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg",
            title: "Customizable",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, dignissimos"
        }
    ];

    return (
        <div className='home'>
            {data.map((item, index) => (
                <div key={index} className='pp'>
                    <img src={item.img} alt={item.title} />
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <div className="btn1">
                        Learn More
                        <FaArrowRight />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
