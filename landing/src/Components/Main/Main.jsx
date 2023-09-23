import React, {useEffect} from 'react'
import './main.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {TbClipboardCheck} from 'react-icons/tb'
import img1 from '../Assets/image1.png'
import img2 from '../Assets/image2.png'
import img3 from '../Assets/image3.png'
import img4 from '../Assets/image4.png'
import img5 from '../Assets/image5.png'
import img6 from '../Assets/image6.png'
import img7 from '../Assets/image7.png'
import img8 from '../Assets/image8.png'
import img9 from '../Assets/image9.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

// an array of data

const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Tropical Paradise',
    location: 'Beach Island',
    grade: '5-star',
    fees: 2000,
    description: 'Experience luxury on a pristine tropical island.'
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Mountain Retreat',
    location: 'Snowy Mountains',
    grade: '4-star',
    fees: 1500,
    description: 'Escape to cozy cabins in the heart of the mountains.'
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'City Adventure',
    location: 'Metropolis City',
    grade: '3-star',
    fees: 1000,
    description: 'Explore the vibrant life of a bustling city.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Historical Landmarks',
    location: 'Ancient Ruins',
    grade: '4-star',
    fees: 1800,
    description: 'Discover the secrets of ancient civilizations.'
  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Wildlife Safari',
    location: 'Savanna Plains',
    grade: '5-star',
    fees: 2500,
    description: 'Embark on a thrilling journey through the wild.'
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Alpine Adventure',
    location: 'Alps Mountains',
    grade: '4-star',
    fees: 1700,
    description: 'Ski and explore in the stunning Alpine landscape.'
  },
  {
    id:7,
    imgSrc: img7,
    destTitle: 'Cultural Odyssey',
    location: 'Historic Towns',
    grade: '3-star',
    fees: 1200,
    description: 'Immerse yourself in the culture of charming towns.'
  },
  {
    id:8,
    imgSrc: img8,
    destTitle: 'Desert Expedition',
    location: 'Sand Dunes',
    grade: '4-star',
    fees: 1600,
    description: 'Experience the beauty and serenity of the desert.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Island Getaway',
    location: 'Remote Island',
    grade: '5-star',
    fees: 2200,
    description: 'Relax on an isolated island with pristine beaches.'
  }
];

export const Main = () => {

    // add a scroll animation.
    useEffect(() =>{
      Aos.init({duration: 2000})
  }, [])


  return (
    <section className='main container section'>

      <div className='secTitle'>
        <h3 data-aos="fade-right"
         className='title'>
          Most visited destinations 
          </h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,
            description}) =>{
              return(
                <div key={id} 
                data-aos="fade-up"
                className='singleDestination'>
                  <div className='imageDiv'>
                    <img src={imgSrc} alt=
                     {destTitle} />
                  </div>

                  <div className='cardInfo'>
                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className='continent flex'>
                      <HiOutlineLocationMarker className='icon'/>
                      <span className='name'>{location}</span>
                    </span>

                    <div className='fees flex'>
                      <div className='grade'>
                        <span>{grade}<small>+1</small></span>
                      </div>

                      <div className='price'>
                        <h5>{fees}</h5>
                      </div>
                      </div>

                      <div className='desc'>
                        <p>{description}</p>
                      </div>
                    
                    <button className='btn flex'>
                      DETAILS <TbClipboardCheck className='icon'/>
                    </button>
                  </div>
                </div>
              )
            })
        }

      </div>

    </section>
  )
}