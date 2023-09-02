import React, { useRef } from 'react';
import './contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
   const form = useRef();
   
   const sendEmail = (e) => {
   e.preventDefault();

   emailjs.sendForm('service_jmc1fc9', 'template_1drcu3b', form.current, 'Oluj•••••••••••••••••')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
      });
   };
  return (
     <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
               <input type='text' className='name' placeholder='Your Name' name='your_name'/>
               <input type='email' className='email' placeholder='Your Email'name='your_email'/>
               <textarea classname='msg' name='message' rows='5' placeholder='Your Message'></textarea>   
               <button type='submit' value='Send' className='submitBtn'>Submit</button>
               <div className='links'>
                 <img src={facebookIcon} alt='Facebook' className='link'/>
                 <img src={TwitterIcon} alt='twitter' className='link'/>
                 <img src={YouTubeIcon} alt='youtube' className='link'/>
                 <img src={InstagramIcon} alt='Instagram' className='link'/>
               </div>
                
            </form>
        </div>
     </section>
  );
}

export default Contact;