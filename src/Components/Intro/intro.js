import React from 'react'
import './intro.css';
import bg from '../../assets/hire-fullstack-image.png'
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
       
       <section id='intro'>
            <div className='introContent'>
                <span className='hello,'>Hello,</span>
                <span className='introText'> I'm<span className='introName'> Sahil</span> <br />Full Stack Developer</span>
                <p className='introPara'>"Welcome to my personal portfolio,where my passion for coding and design come to life as a full stack developer."</p>
                <Link><button className='Btn'><img src={btnImg} alt='Hire' className='btnImg' />Hire Me</button></Link>
                
            </div> 
            <img src={bg} alt='Profile' className='bg'/>
             
       </section>
  )
}

export default Intro