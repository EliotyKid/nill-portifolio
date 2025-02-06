"use client"
import { MenuItens } from "@/mockData/MenuData";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const Header = () => {
    const [scrolled,setScrolled] = useState(false)
    const router = useRouter()

    const handleNavigation = (route: string) => {
        router.push(route)
    }

    useEffect(() => {
        if (typeof window === "undefined") return; // Garante que só roda no cliente

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return ( 
        <header className={`w-full h-20 px-20  flex justify-center sticky top-5 z-50 ${scrolled ? "translate-y-10": ""} transition-all duration-300 `}>
            <div className={` container  h-full flex justify-around items-center ${scrolled ? "bg-white/10 backdrop-blur-md  border-white/30 shadow-lg w-[600px] rounded-[50px] " : "bg-gr rounded-xl"}  transition-all duration-300 text-white`}>
                <div className={`${scrolled ? "hidden" : "hidden md:block"}`}>
                    <h1>ELIOTY</h1>
                </div>
                <ul className="flex flex-wrap gap-10">
                    {MenuItens.map((iten) => (
                        <li 
                            key={iten.id}
                            className="cursor-pointer border border-white/0 hover:border-white px-2 rounded-full transition-all duration-300 text-white"
                            onClick={() => handleNavigation(iten.route)}
                        >
                            {iten.name}
                        </li>
                    ))}
                </ul>
                <div className={`${scrolled ? "hidden" : "hidden md:block"}`}>
                    <button type="button">SEND</button>
                </div>
            </div>
        </header>
     );
}
 
export default Header