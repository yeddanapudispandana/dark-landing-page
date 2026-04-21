
import EcosystemIcon from '../assets/icons/ecosystem.svg';


const features =[
    {
        id: 1,
        title: "Customizable Lists",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. "

    },
    {
        id: 2,
        title: "Team Work Tools",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. "

    },
    {
        id: 3,
        title: "Smart Tracking",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. "

    }
]

export const Features = () => {
    return(
        <div className="bg-black text-white py-[72px] sm:py-24">
            <div className="container">
                <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everything you need</h2>
                <div className='max-w-xl mx-auto'>
                    <p className='mt-5 text-center text-xl text-white/70'>
                        Enjoy customizable lists, team work tools, and smart tracking all in one place. 
                        Set tasks, get reminders, and see your progress simply and quickly.
                    </p>
                </div>
               
            </div>
        </div>
    );
}