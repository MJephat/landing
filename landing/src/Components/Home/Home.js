import React from 'react'
import './home.scss'
import video from '../Assets/video.mp4'


export const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent">
        <div className="textDiv">

          <span className="smallText">Our Package</span>

          <h1 className="homeTitle">Search your Holiday</h1> 

        </div>
      </div>

    </section>
  )
}