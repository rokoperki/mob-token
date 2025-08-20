import Image from 'next/image';

import { XSvg } from 'src/assets/icons';
import { LogoPng, LogotypePng } from 'src/assets/images';

const Footer = () => {
  return (
    <div className='mt-[100px]'>
      <div className='flex flex-col items-center gap-[10px]'>
        <p className='text-[20px] uppercase'>follow us</p>
        <div className='cursor-pointer rounded-full bg-[var(--yellow-900)] p-[5px]'>
          <XSvg className='scale-80' />
        </div>
      </div>
      <p className='mt-[150px] text-center font-normal '>All rights reserved ® 2025</p>
      <Image
        src={LogotypePng}
        alt='Logotype'
        className='mx-auto mt-[20px] w-[95%] hidden lg:block '
      />
      <Image src={LogoPng} alt='Logo' className='mx-auto lg:hidden mt-[20px]' />
    </div>
  );
};

export default Footer;
