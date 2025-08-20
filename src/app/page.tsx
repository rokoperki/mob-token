import Banner from 'src/features/pages/landing/Banner';
import Codex from 'src/features/pages/landing/Codex';
import Family from 'src/features/pages/landing/Family';
import Hero from 'src/features/pages/landing/Hero';
import ImageGenerator from 'src/features/pages/landing/ImageGenerator';

export default function Home() {
  return (
    <div className='overflow-hidden' >
      <p className='my-[14px] text-center text-[20px]'>CA: COMING SOON! </p>
      <div className='px-[10px] md:px-[32px]'>
        <div className='w-full rounded-[48px] bg-[var(--black-900)] px-[20px] pt-[40px] md:px-[46px]'>
          <Hero />
          <Codex />
        </div>
      </div>
      <Banner />
      <ImageGenerator />
      <Family/>
    </div>
  );
}
