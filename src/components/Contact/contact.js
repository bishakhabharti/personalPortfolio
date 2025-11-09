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
      const form = useRef;
       const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_46w279l', 'template_glxldii', form.current, {
        publicKey: 'y0ceMt1elWLG2kwyp',
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
        <form className='contactForm' ref={form}  onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='your_Name'/>
            <input type='email' className='email' placeholder='your_Email'/>
            <textarea className='msg' name='message'rows='5'placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
                <img src={FacebookIcon} alt='Facebook'className='link'/>
                <img src={TwitterIcon} alt='Twitter'className='link'/>
                <img src={InstagramIcon} alt='Instagram'className='link'/>
               
            </div>
        </form>

    </div>
   </section>
  )
}

export default Contact