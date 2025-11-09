import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
      const form = useRef();
       const sendEmail = (e) => {

    e.preventDefault();
    

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
   <section id='contactPage'>
    <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>I want the opportunity to work with a diverse group og companies.
            Some of the notable companies I want to work in includes 
        </p>
        <div className='clientImgs'>
            <img src={Walmart} alt='Walmart' className='clientImg'/>
            <img src={Adobe} alt='Adobe' className='clientImg'/>
            <img src={Microsoft} alt='Microsoft' className='clientImg'/>
            <img src={Facebook} alt='Facebook' className='clientImg'/>
        </div>

    </div>
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportuninties.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' className='name' placeholder='Your Name' required />
          <input type='email' name='user_email' className='email' placeholder='Your Email' required />
          <textarea name='message' className='msg' rows='5' placeholder='Your Message' required></textarea>
          <button type='submit' className='submitBtn'>Submit</button>
        </form>

            <div className='links'>
                <img src={FacebookIcon} alt='Facebook'className='link'/>
                <img src={TwitterIcon} alt='Twitter'className='link'/>
                <img src={InstagramIcon} alt='Instagram'className='link'/>
               
            </div>

    </div>
   </section>
  )
}

export default Contact