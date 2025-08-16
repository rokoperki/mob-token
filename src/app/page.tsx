import { LogotypeSvg } from "src/assets/icons";

export default function Home() {
  return (
    <div className="px-[32px]">
      <p className="text-[20px] text-center my-[14px]">CA: COMING SOON! </p>
      <div className="w-full  bg-[var(--black-900)] rounded-[48px] px-[46px] pt-[40px]">
        <div className="flex items-center justify-between">
          <LogotypeSvg className="h-[46px]" />
          <div className="flex gap-[32px] text-[20px]">
            <p>Code</p>
            <p>Growth loops</p>
            <p>Get mobbed</p>
            <p>Family</p>
          </div>
        </div>
        <p className="text-[144px] text-center uppercase leading-[85%] mt-[62px] text-[var(--red-900)]">
          The coin <br /> you
          <span className="bodoni text-[var(--yellow-900)]">
            can’t <br /> refuse.
          </span>
        </p>
        <p className="text-[16px] text-[rgba(255,252,255,0.7)] text-center max-w-[670px] mx-auto mt-[36px]">
          Join the Solana Mob and you're in for life. We're a family, united in
          our business-first approach. Follow our code, and the world is yours;
          betray us, and you'll regret it.
        </p>
      </div>
    </div>
  );
}
