const LetsWork = () => {
    return ( 
        <div className="w-full bg-gr flex flex-col items-center justify-center text-white p-4 py-10 gap-4 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-[4px_4px_15px_2px_rgba(255,255,255,0.08)] border border-white/5">
            <h1 className="text-2xl">Let's Work Together</h1>
            <button 
                type="button"
                className="uppercase text-sm"
            >LETS TALK</button>
        </div>
     );
}
 
export default LetsWork;