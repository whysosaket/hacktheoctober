import {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from 'next/link';
import styles from "./Hero.module.css";

interface HeroSectionProps {}

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  const heroTextRef: MutableRefObject<SVGTextElement> = useRef();
  useEffect(() => {
    if (heroTextRef.current) {
      setInterval(() => {
        setTimeout(() => {
          heroTextRef.current.innerHTML = "Hack";
        }, 0);
        setTimeout(() => {
          heroTextRef.current.innerHTML = "The";
        }, 1000);
        setTimeout(() => {
          heroTextRef.current.innerHTML = "October";
        }, 2000);
      }, 3000);
    }
  }, []);
  // <p className=" leading-10 text-center font-JetBrains mt-20 text-2xl font-bold md:text-4xl"><a className=" text-5xl bg-gradient-to-r  m-5 from-purple-400  to-pink-300  shadow-custom p-1 rounded-md ">HACK CLUB ITER</a> <br/>in collaboration with <br/><a className=" text-4xl p-1 bg-gradient-to-r m-5 from-teal-400  to-teal-300 rounded-md shadow-custom2">GDSC ITER</a> presents</p>
  return (
    <>
      <div
        className={
          "w-full min-h-screen flex flex-col gap-16 font-JetBrains " + styles.hero
        }
      >
        <div className="mx-auto mt-6">
          <Link href={'https://iter.hackclub.com/'}>
            <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r  my-3 from-purple-400  to-pink-300  shadow-custom p-1 rounded-md font-JetBrains px-4 cursor-pointer">
                Hack Club ITER
            </div>
          </Link>
          <div className="text-base md:text-xl mx-auto text-center text-[#E5E1E6]/90 font-JetBrains">
          in collaboration with
          </div>
          <Link href={'https://gdsc.community.dev/institute-of-technical-education-research-bhubaneswar/'}>
            <div className="w-60 mx-auto text-center text-2xl md:text-4xl font-bold p-1 bg-gradient-to-r my-3 from-teal-400  to-teal-300 rounded-md shadow-custom2 font-JetBrains px-4 cursor-pointer">
                GDSC ITER
            </div>
          </Link>
          <div className="text-base md:text-xl mx-auto text-center text-[#E5E1E6]/90 font-JetBrains uppercase">
          presents
          </div>
        </div>

        <div
          className={
            "flex w-full flex-col justify-center items-center text-7xl md:text-9xl " +
            styles.text
          }
        >
          <text ref={heroTextRef} className={styles.heroText}>
            Hack
          </text>
        </div>

        <div className="mx-auto">
          <Link href={'https://iter.hackclub.com/register'}>
            <div className='text-base md:text-xl px-4 py-1 md:px-8 md:py-2  text-black ease-linear duration-150  cursor-pointer bg-gradient-to-r from-yellow-300  via-teal-300 to-violet-600 font-bold shadow-2xl hover:rotate-2' style={{"clipPath":"polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)"}}>
              Registration now open
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          
          <div className="flex flex-row items-center text-center font-JetBrains">
            <div>
              Event is Live 
            </div>
            <div className="h-3 w-3 bg-red-500 rounded-full ml-2 animate-pulse"></div>
          </div>
          
          </div>
      </div>
    </>
  );
};

export default HeroSection;
