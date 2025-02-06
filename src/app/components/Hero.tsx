import Image from "next/image";
import { ExperienceData } from "@/mockData/ExperienceData";
import ExperienceCompItem from "./ExperienceCompItem";
import React from "react";

const Hero = () => {
    return ( 
        <article className="bg-gr w-full  rounded-xl p-10 grid lg:grid-cols-2 gap-4 justify-center">
            <div className=" h-[700px] rounded-xl overflow-hidden relative">
                <Image 
                    src="/assets/imgs/me.jpg" // ✅ Caminho correto (sem "public/")
                    width={500} 
                    height={500} 
                    alt="My photo"
                    className="rounded-xl absolute top-0 left-0 w-full h-full object-cover shadow-md transition-transform duration-500 ease-in-out hover:scale-110"
                />
            </div>
            <div className=" flex flex-col px-4 py-6 gap-4 justify-around">
                <h1 className="text-white text-xl">Hi, I'm Elias, I'm a designer and a lover of both web and game development. I hope you're interested in the work and that we can create something together.</h1>
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl text-orange-400">EXPERIENCE</h1>
                    {ExperienceData.map((item) => (
                        <ExperienceCompItem exp={item} />
                    ))}
                </div>
                <div className="flex w-full justify-around gap-2">
                    <button className="border border-orange-400 w-full py-2 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-500 ease-in-out hover:rounded-[50px]">BUTTOM 1</button>
                    <button className="border border-purple-400 w-full py-2 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-500 ease-in-out hover:rounded-[50px]">BUTTOM 2</button>
                </div>
            </div>
        </article>
     );
}
 
export default Hero;