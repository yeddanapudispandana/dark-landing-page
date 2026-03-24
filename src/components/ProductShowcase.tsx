import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase =() =>{
    return(
        <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
                    Intuitive Interface
                </h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-center text-xl text-white/70 mt-5">
                        Our product features a clean and intuitive interface that makes it easy to use and provides a great user experience. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quas corrupti sed.
                    </p>
                </div>
                <Image src={appScreen} alt="Product Image" className="mt-14 lg:mx-auto"/>
            </div>
        </div>
    );
}
