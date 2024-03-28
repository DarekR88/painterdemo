"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import zoom1Img from "../../public/images/zoom1.jpg"
import zoom2Img from "../../public/images/zoom2.jpg"
import zoom3Img from "../../public/images/zoom3.jpg"

const images = [zoom1Img, zoom2Img, zoom3Img]; // Replace with your image URLs


const ImageCycle: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <div className="absolute inset-0 bg-black opacity-50 z-40"></div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: index === currentImageIndex ? 20 : 0 }}
        >
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}

      <div className='absolute z-50 max-w-[1060px] px-4'>
        <h1 className='text-5xl text-white'>We build your dreams</h1>
        <p className='text-white text-2xl'>With Kurazawa Construction the project you&#39;ve been waiting for is right around the corner</p>
      </div>
    </div>
  );
};

export default ImageCycle;