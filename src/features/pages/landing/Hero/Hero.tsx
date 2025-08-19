'use client';

import Image from 'next/image';
import './hero.css';

import { ExtraLargeCoinPng, LargeCoinPng, MediumCoinPng, SmallCoinPng } from 'src/assets/images';
import Button from 'src/components/button';

import Header from '../Header';

const Hero = () => {
  return (
    <div className='relative'>
      <Header />
      <p className='mt-[62px] text-center text-[50px] leading-[85%] text-[var(--red-900)] uppercase md:text-[88px] lg:text-[144px]'>
        The coin <br /> you
        <span className='bodoni text-[var(--yellow-900)]'>
          can’t <br /> refuse.
        </span>
      </p>
      <p className='mx-auto mt-[24px] max-w-[470px] text-center text-[16px] text-[rgba(255,252,255,0.7)] lg:mt-[36px] lg:max-w-[670px]'>
        Join the Solana Mob and you're in for life. We're a family, united in our business-first approach. Follow our
        code, and the world is yours; betray us, and you'll regret it.
      </p>
      <div className='mx-auto mt-[24px] flex w-fit items-center gap-[20px] lg:mt-[42px]'>
        <Button
          className='px-[8px] md:px-[16px]'
          variant='yellow'
        >
          Buy Now
        </Button>
        <Button
          className='px-[8px] md:px-[16px]'
          variant='yellowInvert'
        >
          Get Mobbed
        </Button>
      </div>
      <Image
        src={SmallCoinPng}
        alt='Small Coin'
        className='coin-animation absolute top-[150px] left-[-20%] hidden w-[30%] md:block lg:left-[-10%] lg:w-[25%] xl:top-[150px] xl:left-[-5%]'
      />
      <Image
        src={MediumCoinPng}
        alt='Small Coin'
        className='coin-animation absolute top-[150px] lg:top-[200px] right-[-25%] hidden w-[40%] md:block lg:right-[-15%] lg:w-[35%] xl:top-[50px]'
      />
      <Image
        src={LargeCoinPng}
        alt='Small Coin'
        className='coin-animation absolute top-[380px] left-[-20%] hidden w-[55%] md:block lg:top-[460px] lg:left-[-15%] lg:w-[45%] xl:top-[350px] xl:left-[-10%]'
      />
      <Image
        src={ExtraLargeCoinPng}
        alt='Small Coin'
        className='coin-animation mt-[170px] ml-[5%] scale-[200%] rotate-[-40deg] sm:mt-[120px] md:mt-0 sm:scale-200 md:top-[350px] md:absolute md:right-[-40%] md:w-[90%] md:scale-100 lg:top-[400px] lg:right-[-32%] lg:w-[75%] xl:top-[200px] 2xl:right-[-28%]'
      />
    </div>
  );
};

export default Hero;