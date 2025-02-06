export interface ExperienceItem {
    id: string;
    startData: string;
    finishData: string;
    title: string;
    function: string;
    city: string;
    country: string;
}

interface ExperienceDataInterface {
    ExperienceData: ExperienceItem[]
}


export const ExperienceData: ExperienceItem[] = [
    {
        id: "0",
        startData: "2020",
        finishData: "2024",
        title: "FULL TIME FREELANCING",
        function: "Graphic Designer",
        city: "Carmo do Cajuru",
        country: "Brazil"
    },
    {
        id: "1",
        startData: "2022",
        finishData: "present",
        title: "GOVERNMENT SUPPORT",
        function: "Game Developer",
        city: "Carmo do Cajuru",
        country: "Brazil"
    },
    {
        id: "2",
        startData: "2023",
        finishData: "present",
        title: "FULL TIME FREELANCING",
        function: "Web Developer",
        city: "Carmo do Cajuru",
        country: "Brazil"
    },
]