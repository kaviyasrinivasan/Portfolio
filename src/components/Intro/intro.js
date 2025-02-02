import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import Image from '../../assets/kaviya-transparent bg.png';
const intro = () => {
  return (
    <section id='intro'>
        <div class="introContent">
            <span class="hello">Hello,</span>
            <span class="introText">I'm <span class="introName">Kaviya</span><br/>B.Tech Information Technology</span>
            <p class="introPara">An Assertive person and would like to be committed and
 efficient in my work and enhance the growth of the organization by
 improving and applying my competency at work.</p>
            <Link><button class="btn"><img src={btnImg} alt="img" className='btnImg'/>Hire me</button></Link>
           
        </div>
        <img src={Image} alt="profile" className='bg'/>
    </section>
  )
}

export default intro