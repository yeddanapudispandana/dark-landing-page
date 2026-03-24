"use client";
import ArrowIcon from '../assets/icons/arrow-w.svg';
import cursorImg from '../assets/images/cursor.png';
import msgImg from '../assets/images/message.png';
import Image from 'next/image';
import {motion} from 'framer-motion';


export const Hero = () => {
    return(
        <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_80%)] py-[72px] sm:py-24 relative overflow-clip">
            <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[900px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div>
            <div className="container relative">
                <div className="flex items-center justify-center">
                    <a href="#" className="border border-white/30 rounded-lg py-1 px-2">
                        <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2)] text-transparent bg-clip-text [-webkit-background-clip:text] ">Version 2.0 is here - </span>
                        <span className="inline-flex items-center gap-1">
                            <span>Read More</span>
                            <ArrowIcon />
                        </span>
                    </a>
                </div>
                <div className='flex justify-center mt-8'>
                    <div className='inline-flex items-center relative'>
                    <h1 className="text-7xl sm:text-9xl text-center tracking-tighter inline-flex">One task <br/> at a Time</h1>
                    <motion.div className='absolute right-[476px] top-[108px] hidden sm:inline'
                        drag
                        dragSnapToOrigin
                    >
                        <Image src={cursorImg} alt="cursor" height="200" width="200" className='max-w-none' draggable="false" />
                    </motion.div>
                    <motion.div className='absolute left-[498px] top-[56px] hidden sm:inline'
                        drag
                        dragSnapToOrigin
                    >
                        <Image src={msgImg} alt="msg" height="200" width="200" className='max-w-none' draggable="false"/>
                    </motion.div>
                    
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="text-center text-xl mt-8 max-w-md">Celebrate the joy of accomplishment with an app designed to track your progress, motivateand celebrate your achievements.</p>
                </div>
                <div className='flex justify-center mt-8 '>
                 <button className='bg-white py-3 text-black px-5 rounded-lg font-medium '>Get for Free</button>
                </div>
            </div>
        </div>
    );
}