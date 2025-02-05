"use client"
import { MenuItens } from "@/mockdata";
import { useEffect, useState } from "react";


const Header = () => {
    const [scrolled,setScrolled] = useState(false)

    useEffect(() => {
        if (typeof window === "undefined") return; // Garante que só roda no cliente

        const handleScroll = () => {
            setScrolled(window.scrollY > 500);
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return ( 
        <header className={`w-full h-20 px-20  flex justify-center sticky top-5 z-50 ${scrolled ? "translate-y-10": ""} transition-all duration-300 `}>
            <div className={` container w-1/8  h-full flex justify-around items-center ${scrolled ? "bg-white/10 backdrop-blur-md  border-white/30 shadow-lg w-[600px] rounded-[50px] " : "bg-gr"}  transition-all duration-300 text-white`}>
                <div className={`${scrolled ? "hidden" : "block"}`}>
                    <h1>ELIOTY</h1>
                </div>
                <ul className="flex flex-wrap gap-10">
                    {MenuItens.map((iten) => (
                        <li 
                            key={iten.id}
                            className="cursor-pointer border border-white/0 hover:border-white px-2 rounded-full transition-all duration-300 text-white"
                        >
                            {iten.name}
                        </li>
                    ))}
                </ul>
                <div className={`${scrolled ? "hidden" : "block"}`}>
                    <button type="button">SEND</button>
                </div>
            </div>
        </header>
     );
}
 
export default Header