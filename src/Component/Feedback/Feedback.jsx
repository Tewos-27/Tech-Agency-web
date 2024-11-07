import React from 'react'; 
import { RiDoubleQuotesL } from 'react-icons/ri';
import eske from '../../assets/eske.jpg';
import seli from '../../assets/seli.jpg';
import './Feddback.css'

const Feedback = () => {
  const feedback = [
    {
      image: seli, // Changed Image to image for consistency
      icon: <RiDoubleQuotesL />,
      name: 'Selamawit Shimels',
      company: 'Company Name',
      comment: 'Working with TewoTech has been a fantastic experience. Their team is skilled, attentive, and consistently delivers high-quality solutions tailored to our needs. Highly recommended!',
    },
    {
      image: eske, // Changed Image to image for consistency
      icon: <RiDoubleQuotesL />,
      name: 'Eskinder',
      company: 'Company Name',
      comment: 'TewoTech provided exceptional service, delivering solutions that truly elevated our project. Their expertise and dedication made a real difference. Highly recommended!',
    },
  ];

  return (
    <div>
      <div className="feedback border">
        <h2>Hear from Our Clients</h2>
        <div className="customer">
          {
            // The key issue here: You need to return JSX inside the map
            feedback.map(({ image, icon, name, company, comment }, index) => {
              return (
                <div className="feedback-item" key={index}>
                  <div className="user">
                    <img src={image} alt={name} />
                  </div>

                  <div className="feedback_info">
                    <h5>{name}</h5>
                    <p>{company}</p>
                  </div>

                  <div className="comment">
                    <span className="icon">{icon}</span> {/* Use span instead of h2 */}
                    <p>{comment}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Feedback;
