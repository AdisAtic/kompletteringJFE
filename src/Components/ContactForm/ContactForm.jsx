import './ContactForm.css';
import Buttons from '../Generics/Buttons';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseStatus, setResponseStatus] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful request - handle here
        setResponseStatus(response.status);
        console.log('Request succeeded! with status', response.status);
        console.log(formData);
      } else {
        console.log(response);
        // Server responded with a status other than 200
        console.error('Incorrect response from the server', response);
      }
    } catch (error) {
      // Something went wrong with the request itself
      console.error('Something went wrong:', error);
    }
  };

  return (
    <>
      <div className="contactform-section">
        <div className="container">
          {responseStatus === 200 ? (
            <div>
              <p>Your message has been sent successfully!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Leave us a message for any information.</h2>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              <textarea name="message" value={formData.message} onChange={handleChange} />
              <button className="btn-theme" url="submit" >Send Message <i className="fa-solid fa-square-arrow-up-right"></i></button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactForm;

