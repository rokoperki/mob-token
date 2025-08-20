'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Family1Png,
  Family2Png,
  Family3Png,
  Family4Png,
  Family5Png,
  Family6Png,
  Family7Png,
  Family8Png,
  Family9Png,
  Family10Png,
  Family11Png,
  Family12Png,
} from 'src/assets/images';
import { cn } from 'src/utils/misc/cn';

const images = [
  Family1Png,
  Family2Png,
  Family3Png,
  Family4Png,
  Family5Png,
  Family6Png,
  Family7Png,
  Family8Png,
  Family9Png,
  Family10Png,
  Family11Png,
  Family12Png,
];

const Family = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !pRef.current) return;

      const section = sectionRef.current.getBoundingClientRect();
      const pElement = pRef.current;

      if (section.top <= 0 && section.bottom > pElement.offsetHeight) {
        setIsFixed(true);
        setIsAtBottom(false);
      } else if (section.bottom <= pElement.offsetHeight) {
        setIsFixed(false);
        setIsAtBottom(true);
      } else {
        setIsFixed(false);
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className=' mx-[10px] md:mx-[32px]  bg-[var(--black-900)] pt-[200px]'>
      <div
        className='relative w-full rounded-[48px]  bg-[var(--black-900)] pb-[150px]'
        ref={sectionRef}
      >
        <div
          ref={pRef}
          className={cn('z-[10] w-full py-[10px] text-center', {
            'fixed top-[20px] left-0': isFixed,
            'absolute bottom-0 left-0': isAtBottom,
            'absolute top-[20px] left-0': !isFixed && !isAtBottom,
          })}
        >
          <p className='text-center text-[48px] leading-[90%] text-[var(--red-900)] uppercase md:text-[88px] lg:text-[96px]'>
            We are
            <span className='bodoni text-[var(--yellow-900)]'> family.</span>
          </p>
        </div>
        <div className='grid w-full grid-cols-2 gap-[10px] sm:gap-[30px] px-[20px] sm:px-[50px] lg:px-[150px] pt-[200px]'>
          <div className='flex flex-col gap-[10px] sm:gap-[30px]'>
            {images.slice(0, 6).map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Family member ${index + 1}`}
                className='w-full rounded-[10%] z-[20]'
              />
            ))}
          </div>
          <div className='flex flex-col gap-[10px] sm:gap-[30px]'>
            {images.slice(6, 12).map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Family member ${index + 1}`}
                className='w-full rounded-[10%] z-[20]'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
