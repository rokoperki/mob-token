import Button from "src/components/button";

const Banner = () => {
  return (
    <div className='flex flex-col items-center text-center my-[200px] md:my-[400px] px-[20px]'>
      <p className='text-[44px] md:text-[56px] lg:text-[96px] uppercase'>Ready to JOIN THE mob?</p>
      <p className="font-normal max-w-[750px] ">
        The time has come to leave your mark. Gather your mob, craft your legend, and claim your place in the new order
        of digital power and elegance.
      </p>
      <Button variant='yellowInvert' className="py-[12px] mt-[40px]">
       GET MOBBED
       </Button>
    </div>
  );
};

export default Banner;
