"use client";
import PlusIcon from "../assets/icons/plus.svg"
import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';


const questions = [
    {
        index: 1,
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our product, you can request a full refund within 30 days of purchase."
    },
    {
        index: 2,
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our product, you can request a full refund within 30 days of purchase."
    },
    {
        index: 3,
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our product, you can request a full refund within 30 days of purchase."
    },
    {
        index: 4,
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our product, you can request a full refund within 30 days of purchase."
    }
];

const AccordianItem = ({question,answer,key}:{question: string; answer: string; key: number}) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div key={key} className=" py-7 border-b border-white/30 cursor-pointer"
            onClick={()=>setIsOpen(!isOpen)} 
        >
            <div className="flex items-center">
                <span className="flex-1 text-lg font-bold">{question}</span>
                <PlusIcon className={clsx("w-5 h-5 transition-transform", { "rotate-45": isOpen })} />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        // className={clsx("mt-4",{hidden: !isOpen, "": isOpen === true})}
                        initial={{
                            opacity: 0,
                            height: 0,
                            marginTop: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            marginTop: "16px",
                        }}

                        exit={{
                            opacity: 0,
                            height: 0,
                            marginTop: 0,
                        }}
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
            
        </div>
    );
}

export const FAQ = () => {
    return(
        <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold text-center tracking-tighter">Frequently Asked Questions</h2>
                <div className="mt-12 max-w-[648px] mx-auto text-white/80">
                    {questions.map(({question,answer,index})=>(
                        <AccordianItem question={question} answer={answer} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
}