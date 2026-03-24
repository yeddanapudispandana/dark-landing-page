"use client";
import { div } from "framer-motion/client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogoo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import {motion} from 'framer-motion';

const logos = [acmeLogo, quantumLogo, echoLogoo, celestialLogo, pulseLogo, apexLogo];

export const LogoTicker = () => {
    return(
        <div className="bg-black text-white py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-white/70 text-xl text-center">Trusted by the worlds most innovative teams</h2>
                <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]  after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]   ">
                    <motion.div 
                        transition = {{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity
                        }}
                        initial = {{translateX: 0}}
                        animate = {{translateX: "-50%" }}
                        className="flex gap-16 flex-none pr-16">
                        {logos.map((logo,index)=> {
                            return(
                                <Image src={logo} alt="Company Logo"  key={index} className="flex-none h-8 w-auto"/>
                            );
                        })}
                        {logos.map((logo,index)=> {
                            return(
                                <Image src={logo} alt="Company Logo"  key={index} className="flex-none h-8 w-auto"/>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}