import { div } from "framer-motion/client";
import logoImage from "../assets/images/logosaas.png";
import Image from "next/image";
import MenuIcon from "../assets/icons/menu.svg"



export const Navbar = () => {
    const navItems = ["About", "Features", "Updates", "Help", "Customers"];
    return(
        <div className=" bg-black">
            <div className="px-4">
            <div className="py-4 flex items-center justify-between">
                <div className="relative w-12 h-12">
                    <div className="absolute w-full top-2 bottom-0  bg-[linear-gradient(to_right,#F87BFF,#3FB92C,#FFDD9B,#C2F0B1,#2FD9FE)] blur-md">

                    </div>
                    <Image src={logoImage} alt="Logo" className="h-12 w-12 relative" />
                </div>
                
                <div className="border border-white  border-opacity-35 h-10 w-10 inline-flex items-center justify-center rounded-lg cursor-pointer sm:hidden ">
                    <MenuIcon className=" text-white" />
                </div>
                <nav className="hidden gap-6 items-center sm:flex">
                    {navItems.map((item) => {
                        return (
                                    <a
                                        key={item} 
                                        href={`#${item.toLowerCase()}`}
                                        className="text-opacity-60 text-white hover:text-opacity-100 transition">
                                        {item}
                                    </a>
                                );
                        })}
                    <button className="bg-white py-2 px-4 rounded-lg">Get for free</button>
                </nav>
            </div>
        </div>
        </div>
    );
}
        
    