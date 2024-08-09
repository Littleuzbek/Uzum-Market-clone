'use client'

import { useEffect, useState } from 'react'
import img1 from './0.jpg'
import img2 from './1.jpg'
import img3 from './2.jpg'
import img4 from './3.jpg'
import img5 from './4.jpg'
import img6 from './5.jpg'
import Image from 'next/image'
import  classes from "./ImgSlider.module.css"

const images = [
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img5},
    {image: img6},
]

export default function ImgSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className={classes.slider}>
        {images.map((image,index)=>(
            <Image 
                key={index}
                src={image.image}
                className={index === currentImageIndex ? classes.active : ''}
                alt={'go'}
                priority
            />
        ))}
    </div>
  )
}
