import React from 'react'
import './Home.css' 
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TiltleCards from '../../components/TilteCards/TiltleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt=""  className='banner-img'/>
      </div>
      <div className="hero-caption">
        <img src={hero_title} alt="" className='caption-img' 
        />
        <p>Discovering his ties to a secret ancient order, a young man living in modern Instanbul embarks on a quest to save the city from an immortal enemy.</p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
        </div>
        <TiltleCards/>
      </div>
      <div className="more-cards">
        <TiltleCards title={"Blockbuster Movies"}  category={"top_rated" }/>
        <TiltleCards title={"Only on Netflix"} category={"popular"} />
        <TiltleCards title={"Upcoming"} category={"upcoming"}/>
        <TiltleCards title={"Top Picks For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
