import { ExperienceItem } from "@/mockData/ExperienceData";
import React from "react";

interface ExperienceItemProps {
    exp: ExperienceItem
}

const ExperienceCompItem = ({exp}:ExperienceItemProps) => {
    return ( 
        <div id={exp.id} className="">
            <p className="text-slate-400 text-sm">{exp.startData} - {exp.finishData}</p>
            <h2 className="text-white">{exp.title}</h2>
            <p className="text-slate-400 text-sm">{exp.function}, {exp.city}, {exp.country}</p>
        </div>
     );
}
 
export default ExperienceCompItem;