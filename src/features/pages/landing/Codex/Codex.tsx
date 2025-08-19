'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';
import { SilhouettePng } from 'src/assets/images';

import './codex.css';

const Codex = () => {
  const codex = [
    'Family comes first.',
    'Once you’re in there’s no going out.',
    'Give respect, and respect will be given back.',
    'What we do, it’s strictly business, never personal.',
    'No unnecessary noise.',
    'Hear nothing, see nothing, say nothing.',
    'Always tell the truth, even when you lie.',
    'You make one mistake, you lose two teeth.',
    'Turn the back on the family, swim with the fishes.',
    'Buy $MOB, because God ain’t making any more of it.',
  ];

  const [currentCodexIndex, setCurrentCodexIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCodexIndex((prevIndex) => (prevIndex + 1) % codex.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [codex.length]);

  return (
    <div className='w-full'>
      <div className='relative mx-auto mt-[200px] md:mt-[400px]'>
        <div className='absolute top-0 w-full text-center'>
          <p className='text-[var(--red-900)] text-[48px] lg:text-[96px]'>CODE.</p>
          <p className={`text-[16px] lg:text-[22px] transition-all duration-500 ${isAnimating ? 'fade-out-up' : 'fade-in-bottom'}`}>
            {codex[currentCodexIndex]}
          </p>
        </div>
        <Image
          src={SilhouettePng}
          alt='Silhouette '
          className='w-[90%] max-w-[450px] mx-auto'
        />
        <div className='absolute bottom-0 left-0 h-[50%] w-full bg-linear-190 from-transparent to-[rgba(2,2,2,1)]'></div>
      </div>
      <p className='text-center text-[40px] leading-[85%] text-[var(--red-900)] uppercase md:text-[88px] lg:text-[96px]'>
        The Family <br />
        <span className='bodoni text-[var(--yellow-900)]'>
          Self-sustaining <br />
        </span>
        growth loop.
      </p>
    </div>
  );
};

export default Codex;
