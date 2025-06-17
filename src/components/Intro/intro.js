import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import Image from '../../assets/Kaviya.jpg';
import { motion } from 'framer-motion';

const intro = () => {
  return (
    <section id="intro">
      <motion.div
        className="introContent"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Kaviya</span>
          <br />
          B.Tech Information Technology
        </span>
        <p className="introPara">
          An assertive person who is committed and efficient in work, aiming to
          enhance organizational growth by applying and improving my
          competencies.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt="img" className="btnImg" />
            Hire me
          </button>
        </Link>
      </motion.div>

      <motion.span
        className="card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src={Image} alt="profile" className="bg" />
      </motion.span>
    </section>
  );
};

export default intro;
