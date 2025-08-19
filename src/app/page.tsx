import Codex from 'src/features/pages/landing/Codex';
import Hero from 'src/features/pages/landing/Hero';

export default function Home() {
  return (
    <div className='overflow-hidden px-[10px] md:px-[32px]'>
      <p className='my-[14px] text-center text-[20px]'>CA: COMING SOON! </p>
      <div className='w-full rounded-[48px] bg-[var(--black-900)] px-[20px] pt-[40px] md:px-[46px]'>
        <Hero />
        <Codex />
      </div>
    </div>
  );
}
