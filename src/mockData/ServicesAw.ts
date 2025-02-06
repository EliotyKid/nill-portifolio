export interface ServicesItem {
    id: string;
    title: string;
    icon: string;
    route: string;
}


export const ServicesData: ServicesItem[] = [
    {
        id: "0",
        title: "Design",
        icon: "0",
        route: ""
    },
    {
        id: "1",
        title: "Game Design",
        icon: "0",
        route: ""
    },
    {
        id: "2",
        title: "Game Development",
        icon: "0",
        route: ""
    },
    {
        id: "3",
        title: "Video Ediction",
        icon: "0",
        route: ""
    },
    {
        id: "4",
        title: "Web",
        icon: "0",
        route: ""
    },
]


export interface AwardsItem{
    id: string,
    title: string;
    icon: string;
    route: string;
    startData: string;
    finishData: string;
}

export const AwardsData: AwardsItem[] = [
    {
        id: "0",
        title: "Photoshop",
        icon: "",
        route: "",
        startData: "2020",
        finishData: "present"
    },
    {
        id: "1",
        title: "Game Maker",
        icon: "",
        route: "",
        startData: "2022",
        finishData: "present"
    },
    {
        id: "2",
        title: "HTML, css, js, ts, node",
        icon: "",
        route: "",
        startData: "2023",
        finishData: "present"
    },
    {
        id: "3",
        title: "Premiere",
        icon: "",
        route: "",
        startData: "2021",
        finishData: "present"
    },
]