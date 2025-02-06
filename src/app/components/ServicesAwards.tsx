import { AwardsData, ServicesData } from "@/mockData/ServicesAw";
import ServicesCompItem from "./ServicesCompItem";
import AwardsCompItem from "./AwardsCompItem";

const ServicesAwards = () => {
    return ( 
        <div className="w-full  grid lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-gr p-4 flex flex-col gap-4 rounded-xl">
                <h1 className="text-xl text-white uppercase">SERVICES</h1>
                <div className="w-full h-full   grid lg:grid-cols-2 gap-4 ">
                    {ServicesData.map((item) => (
                        <ServicesCompItem item={item}/>
                    ))}
                </div>
            </div>
            <div className="bg-gr p-4 flex flex-col gap-4 rounded-xl">
                <h1 className="text-xl text-white uppercase">Awards</h1>
                <div className="w-full h-full  gap-6 grid">
                    {AwardsData.map((item) => (
                        <AwardsCompItem item={item}/>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default ServicesAwards;