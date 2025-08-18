'use client';

import Image from 'next/image';

import { useState } from 'react';
import { CloseSvg, HamburgerSvg, LogotypeSvg } from 'src/assets/icons';
import { LogoPng } from 'src/assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex items-center justify-between'>
      <LogotypeSvg className='translate-x-[-15%] scale-70 md:h-[46px] md:translate-0 md:scale-100' />
      <div className='hidden gap-[32px] text-[20px] lg:flex'>
        <p className='cursor-pointer hover:underline'>Code</p>
        <p className='cursor-pointer hover:underline'>Growth loops</p>
        <p className='cursor-pointer hover:underline'>Get mobbed</p>
        <p className='cursor-pointer hover:underline'>Family</p>
      </div>
      <HamburgerSvg
        className='h-[46px] cursor-pointer lg:hidden'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-full bg-[var(--red-900)] px-[10px] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <p className='my-[14px] text-center text-[20px]'>CA: COMING SOON! </p>
        <div className='relative h-full w-full rounded-[48px] bg-[var(--black-900)] pt-[40px]'>
          <div className='flex items-center justify-between px-[20px]'>
            <LogotypeSvg className='translate-x-[-15%] scale-70 md:h-[46px] md:translate-0 md:scale-100' />
            <CloseSvg
              className='scale-150 cursor-pointer lg:hidden'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <div className='xs:text-[48px] mt-[100px] flex w-full flex-col items-center gap-[32px] text-[32px]'>
            <p className='cursor-pointer hover:underline'>Code</p>
            <p className='cursor-pointer hover:underline'>Growth loops</p>
            <p className='cursor-pointer hover:underline'>Get mobbed</p>
            <p className='cursor-pointer hover:underline'>Family</p>
          </div>
          <div className='absolute bottom-[5%] md:bottom-0 w-[100%]'>
            <Image
              src={LogoPng}
              alt='Logo'
            />
            <p className='absolute top-[60%] w-full text-center text-[12px] sm:hidden'>Copyright &copy; 2025 $MOB<br/> All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
