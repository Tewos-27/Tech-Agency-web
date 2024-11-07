import React from 'react'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { FaLaptopCode } from 'react-icons/fa'
import { MdOutlineGrade } from 'react-icons/md'
import './Hero.css'
const Hero = () => {
  return (
    <div>
        <div className="hero">
           <h1 className="hero-header">
            Empowering Your Workforce, <br />
            <span>Transforming Your Buisness!</span>
           </h1>
           <p>TewoTech is a forward-thinking technology company focused on creating innovative solutions that drive efficiency and connectivity across industries.
             Specializing in software development, IoT, and AI-driven technologies, TewoTech aims to empower businesses with tools that transform their operations and enhance their digital capabilities. 
             With a team of skilled developers, engineers, and data scientists, the company delivers robust, user-friendly applications tailored to meet the evolving needs of clients in a dynamic market.</p>
             
             <button className='cta-btn'>Get Started</button>

             <section className="how-we-work">
                <h2>How We Work</h2>
                <div className="steps">
                    <div className="step">
                        <MdOutlineGrade className='hero_icons' />
                        <h3>Consulation</h3>
                        <p>TewoTech’s Consultation services provide tailored strategies to drive your digital transformation and enhance operational efficiency. 
                            Our expert team collaborates closely with you to identify innovative solutions that align with your business objectives.</p>
                    
                    </div>
                    <div className="step">
                        <FaLaptopCode className='hero_icons' />
                        <h3>Design and Development</h3>
                        <p>
                        TewoTech specializes in Design and Development, creating user-centric digital solutions that merge functionality with aesthetic appeal. 
                        Our skilled team crafts robust applications and platforms, ensuring seamless performance and an engaging user experience.</p>

                    </div>
                    <div className="step">
                        <AiOutlineDeploymentUnit className='hero_icons' />
                        <h3>Testing and Deployment</h3>
                        
                        <p>TewoTech’s Testing and Deployment services ensure your product is rigorously evaluated for performance, security, and usability before launch. 
                            We facilitate a smooth rollout process, guaranteeing seamless integration and optimal functionality from day one.</p>

                    </div>
                </div>
             </section>
        </div>
    </div>
  )
}

export default Hero