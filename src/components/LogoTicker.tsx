import { div } from "framer-motion/client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogoo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

const logos = [acmeLogo, quantumLogo, echoLogoo, celestialLogo, pulseLogo, apexLogo];

export const LogoTicker = () => {
    return(
        <div className="bg-black text-white py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-white/70 text-xl text-center">Trusted by the worlds most innovative teams</h2>
                <div className="overflow-hidden mt-9">
                    <div className="flex gap-16">
                    {logos.map((logo,index)=> {
                        return(
                            <Image src={logo} alt="Company Logo"  key={index} className="flex-none h-8 w-auto"/>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
}