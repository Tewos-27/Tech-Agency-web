import React from 'react'
import { FaExpandAlt, FaLaptopCode } from 'react-icons/fa'
import './Services.css'
const Services = () => {

    const services  = [
        {
            title: 'Graphics Design',
            description: 'TewoTech offers stunning graphic design services that enhance brand identity and create visually compelling content, ensuring your message resonates with your target audience.',
            icon: <FaLaptopCode />,
        },
        {
            title: 'Software Development',
            description: 'TewoTech delivers customized software development solutions that are scalable, secure, and tailored to meet the unique needs of your business, driving innovation and efficiency.',
            icon: <FaLaptopCode />,
        },
        {
            title: 'UI/UX Design',
            description: 'TewoTech’s UI/UX Design services focus on creating intuitive and engaging user experiences that enhance usability and foster customer satisfaction across all digital platforms.',
            icon: <FaLaptopCode />,
        },
        {
            title: 'Software Testing',
            description: 'TewoTech provides comprehensive software testing services that ensure your applications are reliable, secure, and perform optimally under real-world conditions.',
            icon: <FaLaptopCode />,
        }
    ]
  
    return (
      <div>
          <div className="services-container border">
              {services.map((service, index) => (
                  <div className="service-card" key={index}>
                      <div className="service-icon">{service.icon}</div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                      <button className="expand-bt"><FaExpandAlt /></button>
                  </div>
              ))}
          </div>
      </div>
    )
}

export default Services
