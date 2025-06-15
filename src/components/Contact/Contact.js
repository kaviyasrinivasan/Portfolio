import React,{useRef} from 'react';
import './Contact.css';
import Leetcode from '../../assets/leetcode-icon.webp';
import LinkedIn from '../../assets/linkedin-icon.png';
import Github from '../../assets/github-icon.png';
import Instagram from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_awbm12a', 'template_78aji2d', form.current, {
        publicKey: 'v5nc2Wgp1LmMaNh7R',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section id="contactPage">
        
        <div id="contact">
            <h1 class="contactPageTitle">Contact Me</h1>
            <span class="contactDesc">Please fill out the form</span>
            <form action="" class="contactForm" ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder='Your Name' name='your_name'/>
              <input type="email" className="email" placeholder='Your Email' name='your_email'/>
              <textarea  className="msg" rows="5" placeholder='Your Message' name='message'></textarea>
              <button type='submit' value='send' className="submitBtn">Submit</button>
            <div class="links">
              <a href="https://www.linkedin.com/in/kaviya-srinivasan-2b638b259/" target="_blank"><img src={LinkedIn} alt="img" className="link"/></a>
              <a href="https://github.com/kaviyasrinivasan/" target="_blank"><img src={Github} alt="img" className="link"/></a>
              <a href="https://leetcode.com/u/kaviyasrinivasan/" target="_blank"><img src={Leetcode} alt="img" className="link"/></a>
              <a href="https://www.instagram.com/kaviya_tunezz/" target="_blank"><img src={Instagram} alt="img" className="link"/></a>
            </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;