import { ServicesItem } from "@/mockData/ServicesAw";

interface ServiceItem {
    item: ServicesItem
}

const ServicesCompItem = ({item}: ServiceItem) => {
    return ( 
        <div id={item.id} className="h-[150px] flex flex-col justify-center items-center gap-6 bg-fg rounded-xl py-4 text-white transition-all duration-300 hover:shadow-[4px_4px_15px_2px_rgba(255,255,255,0.08)] border border-white/5">
            <h1>{item.icon}</h1>
            <h1 className="uppercase">{item.title}</h1>
        </div>
     );
}
 
export default ServicesCompItem;