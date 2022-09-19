/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

type props = {
  name: String;
  image: String;
  description: String;
  twitter: String;
  linkedin: String;
};

const SpeakerCard: React.FC<props> = ({
  name,
  image,
  description,
  twitter,
  linkedin,
}) => {
  return (
    <div className='w-full md:w-72 flex flex-col md:flex-row justify-center items-center hover:scale-[1.05] hover:-translate-y-5 ease-linear duration-150 cursor-pointer'>
      <div
        className={`bg-gradient-to-b w-full  flex flex-col items-center m-5 p-2     hover:shadow-xl hover:shadow-cyan-500/50  from-[rgba(124,127,255)] border-4 border-[rgba(64,221,255)] rounded-md to-[rgba(64,221,255)] hover:scale-[1.05] hover:-translate-y-5 ease-linear duration-150 cursor-pointer font-JetBrains relative`}
      >
        <div className=" w-full h-full bg-[url('/bganimated.gif')] mix-blend-color-dodge absolute top-0 bg-cover bg-center"></div>
        <div className='h-44 w-44 rounded-full bg-black overflow-hidden border-2 border-cyan-400 z-10'>
          <img
            src={"https://avatarfiles.alphacoders.com/169/169513.png"}
            alt='speaker image'
            className='rounded-full'
          />
        </div>
        <div className='text-xl font-bold text-black/90  z-10'>{`[ ${name} ]`}</div>
        <div className='text-base font-bold text-black/60  z-10'>
          {description}
        </div>

        <div className='w-full flex flex-row mt-8 justify-between p-3  z-10'>
          <Link href={linkedin.toString()}>
            <div className='text-lg text-black font-bold hover:text-black/60'>
              {">>LinkedIn"}
            </div>
          </Link>
          <Link href={twitter.toString()}>
            <div className='text-lg text-black font-bold hover:text-black/60'>
              {">>Twitter"}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;

//bg-[url('/bganimated.gif')]
