import React from 'react'
import watch from '../../assets/watch.png'
import cars from '../../assets/cars.jpg'
import shoes from '../../assets/shoes.jpg'
import crm from '../../assets/crm.jpg'
import './project.css'

const Project = () => {
  const project = [
    {
      Image: watch,
      title: 'Tosa Watch Sales',
      text: 'Tosa Watch Sales is a targeted social media ad campaign crafted by TewoTech\'s graphic design team, showcasing premium watches to captivate and engage style-conscious audiences. The visually compelling ads highlight elegance and quality, driving brand awareness and boosting online sales.',
    },
    {
      Image: cars,
      title: 'Trust Car Sales',
      text: 'Trust Car Sales is a social media ad campaign designed by TewoTech\'s graphics team, crafted to attract car buyers with eye-catching visuals and targeted messaging.',
    },
    {
      Image: crm,
      title: 'Customer Service Management',
      text: 'The CRM developed by TewoTech\'s software development team streamlines customer relationship management, offering efficient tools for tracking interactions, managing leads, and boosting sales performance.',
    },
    {
      Image: shoes,
      title: 'Berbaso Shoes Shop',
      text: 'Berbaso Shoes Shop is a vibrant social media ad campaign designed by TewoTech\'s graphics team, showcasing stylish footwear to attract trend-conscious buyers.',
    },
  ];

  return (
    <div>
      <div className="project border">
        <div className="header">
          <h3>We Build Brands That Stand Out</h3>
          <button>Get In Touch</button>
        </div>

        <div className="project-item">
          {project.map((project, index) => (
            <div className="item" key={index}>
              <img src={project.Image} alt={project.title} />
              <div className="info">
                <h4>{project.title}</h4>
                <p>{project.text}</p>
                <a href="#">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
