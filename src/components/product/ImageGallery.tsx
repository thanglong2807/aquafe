"use client";

import Image from 'next/image';
import { useState } from 'react';

const ImageGallery = ({ images, alt }: { images: string[]; alt: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  return (
    <div>
      <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-sm mb-4 border border-gray-100">
        <Image
          src={images[activeIndex]}
          alt={alt}
          fill
          unoptimized
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((imgUrl, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-full h-24 rounded-xl overflow-hidden cursor-pointer border-2 transition-colors ${
              index === activeIndex ? 'border-emerald-500' : 'border-transparent hover:border-emerald-300'
            }`}
          >
            <Image
              src={imgUrl}
              alt={`${alt} ${index + 1}`}
              fill
              unoptimized
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
