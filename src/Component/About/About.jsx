import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import about_img from '../../assets/about.jpg';
import './About.css'
const About = () => {
// List of services offered by the company
// This list can be expanded or modified as needed
  const about_list = [
    
    {
      icon: <IoCheckmarkCircle />,
      title: 'Software Development',
    },
    {
      icon: <IoCheckmarkCircle />,
      title: 'Cloud Computing Solution',
    },
    {
      icon: <IoCheckmarkCircle />,
      title: 'Social Media Ads Designing',
    },
    {
      icon: <IoCheckmarkCircle />,
      title: 'Web Development',
    },
    {
      icon: <IoCheckmarkCircle />,
      title: 'Mobile App Development',
    },
  ];

  return (
    <div>
      <div className="about border">
        <div className="left-side">
          <img src={about_img} alt="Tech company" />
        </div>
        <div className="right_side">
          <h2 className="right_header">About Us</h2>
          <p>
            TewoTech is a forward-thinking technology company based in Addis Ababa, committed to driving digital innovation and delivering transformative solutions. 
            Our team specializes in software development, IT consulting, and tech-driven strategies tailored to meet modern business needs. At TewoTech, we are passionate about empowering businesses to reach their full potential in today’s digital world.
          </p>
          
          {about_list.map(({ icon, title }, index) => (
            <div className="list_container" key={index}>
              <div className="list">
                <h2 className="icon">{icon}</h2>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
