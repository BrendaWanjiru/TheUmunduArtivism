'use client';
import React from 'react';
import log from '../../public/images/logo.png';
import { useState,useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";


const MotionDiv = motion.div;

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] bg-black inline-block absolute left-0 -bottom-0 
                         group-hover:w-full transition-[width] ease duration-300 ${
                           router.asPath === href ? "w-full " : "w-0"
                         }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "" , toggle}) => {
    const router = useRouter();
    const handleClick =()=>{
        router.push(href)
    }
    
    return (
      <button href={href} className={`${className} relative group text-light my-3`} onClick={handleClick}>
        {title}
        <span
          className={`h-[2px] bg-black inline-block absolute left-0 -bottom-0 
                           group-hover:w-full transition-[width] ease duration-300 ${
                             router.asPath === href ? "w-full " : "w-0"
                           }`}
        >
          &nbsp;
        </span>
      </button>
    );
  };




export default function NavBar() {
  const [isopen, setIsopen] = useState(false);

  let menuRef = useRef();

  const handleClick = () => {
    setIsopen(!isopen);
  };

  const handleLinkClick = () => {
    setIsopen(false);
  };

  useEffect(()=>{
    let handler = (e)=>{
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsopen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler)

     return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);
 

  return (
    <header className=" w-full bg-white px-32 text-black py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8 ">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
        isOpen={isopen}
        onStateChange={handleLinkClick}
      >
        <span
          className={` bg-black block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isopen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={` bg-black block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
            isopen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={` bg-black block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isopen ? "-rotate-45 -translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className=" w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mx-4" />
          <CustomLink href="/blog" title="Blog" className="mx-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
        </nav>

       

      </div>


    {
        isopen? 
        <MotionDiv 
        ref={menuRef}
        initial={{scale:0, opacity:0, x: "-50%", y:"-50%"}}
        animate={{scale:1 , opacity:1}}
        className=" min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-md py-32">
        <nav className=" flex flex-col justify-center gap-3 my-3" >
          <CustomMobileLink href="/"  title="Home" className="" toggle={handleClick}/>
          <CustomMobileLink href="/blog"  title="Blog" className="" toggle={handleClick} />
          <CustomMobileLink href="/about"  title="Programs" className="" toggle={handleClick} />
        </nav>

      
      </MotionDiv>
        
        : null
    }
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Image priority alt="Umundu" src={log}/>
      </div>
      
    </header>
  )
}