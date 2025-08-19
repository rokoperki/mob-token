'use client';

import Image from 'next/image';

import { useEffect, useRef, useState } from 'react';
import { ImageSvg, UploadSvg } from 'src/assets/icons';
import { PlaceholderPng } from 'src/assets/images';
import Button from 'src/components/button';
import { cn } from 'src/utils/misc/cn';

const ImageGenerator = () => {
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
    <div
      ref={sectionRef}
      className='relative w-full rounded-[48px] bg-[var(--black-900)] pt-[130px] pb-[100px]'
    >
      <div
        ref={pRef}
        className={cn('z-[50] w-full py-[10px] text-center', {
          'fixed top-[20px] left-0': isFixed,
          'absolute bottom-0 left-0': isAtBottom,
          'absolute top-[20px] left-0': !isFixed && !isAtBottom,
        })}
      >
        <p className='mx-auto flex max-w-[1375px] translate-y-[70px] rotate-[5deg] items-center gap-[20px] overflow-hidden bg-[var(--yellow-900)] py-[5px] text-[40px] whitespace-nowrap text-black'>
          COMING <span className='bodoni'>SOON</span>
          COMING <span className='bodoni'>SOON</span>
          COMING <span className='bodoni'>SOON</span>
          COMING <span className='bodoni'>SOON</span>
          COMING <span className='bodoni'>SOON</span>
        </p>
        <p className='mx-auto flex max-w-[1375px] rotate-[-5deg] items-center gap-[20px] overflow-hidden bg-[var(--yellow-900)] py-[5px] text-[40px] whitespace-nowrap text-black'>
          COMING <span className='bodoni'>SOON</span>
          COMING <span className='bodoni'>SOON</span>
          COMING <span className='bodoni'>SOON</span>
          COMING <span className='bodoni'>SOON</span>
          COMING <span className='bodoni'>SOON</span>
        </p>
      </div>
      <div className='mx-[20px] blur-[10px] md:mx-[46px]'>
        <p className='text-center text-[48px] leading-[90%] text-[var(--red-900)] uppercase md:text-[88px] lg:text-[96px]'>
          GET MOBBED. <br />
          <span className='bodoni text-[var(--yellow-900)]'>RIGHT NOW</span>
        </p>
        <div className='relative mt-[250px]'>
          <p className='bodoni absolute top-[20%] z-[10] w-full text-center text-[500px] leading-0 text-[rgba(26,25,25,1)] lg:top-0'>
            1
          </p>
          <p className='relative z-[20] my-[20px] text-center text-[28px] uppercase md:text-[40px]'>Upload an image.</p>
          <div className='relative z-[20] mx-auto flex h-[250px] w-[250px] flex-col items-center justify-center gap-[10px] rounded-full bg-[rgba(26,25,25,1)] sm:h-[300px] sm:w-[300px] lg:h-[450px] lg:w-[450px]'>
            <UploadSvg />
            <p className='text-[12px] font-normal md:text-[16px]'>
              <span className='text-[var(--yellow-900)]'>Upload an image</span> you wanna mob.
            </p>
          </div>
        </div>
        <div className='relative mx-auto my-[200px] w-fit'>
          <p className='relative z-[20] my-[20px] text-center text-[28px] uppercase md:text-[40px]'>
            Choose mobster style.
          </p>
          <p className='bodoni absolute top-[50%] z-[10] w-full text-center text-[500px] leading-0 text-[rgba(26,25,25,1)]'>
            2
          </p>
          <div className='z-[20] flex w-full items-center justify-center gap-[20px]'>
            <div className='z-[20]'>
              <Image
                src={PlaceholderPng}
                alt='Placeholder'
                className='h-[100px] w-[100px] rounded-full object-cover'
              />
              <p className='mt-[20px] text-center'>DON</p>
            </div>
            <div className='z-[20]'>
              <Image
                src={PlaceholderPng}
                alt='Placeholder'
                className='h-[100px] w-[100px] rounded-full object-cover'
              />
              <p className='mt-[20px] text-center'>CAPO</p>
            </div>
          </div>
        </div>
        <div className='relative mx-auto my-[300px] w-fit'>
          <p className='relative z-[20] my-[20px] text-center text-[28px] uppercase md:text-[40px]'>
            DO YOU WANNA KEEP THE SAME SCENARIO AS THE ORIGINAL PHOTO?
          </p>
          <p className='bodoni absolute top-[50%] z-[10] w-full text-center text-[500px] leading-0 text-[rgba(26,25,25,1)]'>
            3
          </p>
          <div className='flex w-full items-center justify-center gap-[20px]'>
            <Button
              className='z-[20] py-[12px]'
              variant='yellow'
            >
              YES
            </Button>
            <Button
              className='z-[20] bg-[var(--black-700)] py-[12px]'
              variant='yellowInvert'
            >
              NO
            </Button>
          </div>
        </div>
        <p className='relative z-[20] my-[20px] text-center text-[28px] uppercase md:text-[40px]'>YOU’RE WELCOME.</p>
        <div className='relative mx-auto flex h-[270px] w-[270px] flex-col items-center justify-center gap-[10px] rounded-full bg-[rgba(26,25,25,1)] lg:h-[450px] lg:w-[450px]'>
          <ImageSvg />
        </div>
        <div className='mt-[40px] flex w-full items-center justify-center gap-[20px]'>
          <Button
            className='z-[20] py-[12px] text-[12px] sm:text-[16px]'
            variant='yellow'
          >
            LEAVE A FEEDBACK
          </Button>
          <Button
            className='z-[20] py-[12px] text-[12px] sm:text-[16px]'
            variant='yellowInvert'
          >
            NO
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
