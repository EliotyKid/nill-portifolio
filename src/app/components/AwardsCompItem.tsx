import { AwardsItem } from "@/mockData/ServicesAw";

interface AwardsCompItemInterface{
    item: AwardsItem;
}

const AwardsCompItem = ({item}:AwardsCompItemInterface) => {
    return ( 
        <div id={item.id} className="bg-fg h-[100px] flex items-center p-4 text-white rounded-xl">
            <div>{item.icon}</div>
            <div>
                <h1  className="uppercase">{item.title}</h1>
                <p className="text-sm">{item.startData} - {item.finishData}</p>
            </div>
        </div>
     );
}
 
export default AwardsCompItem;