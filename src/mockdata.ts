interface MenuItem {
    id: number;
    name: string;
    route: string;
}

interface MenuInterface {
    MenuItens: MenuItem[]
}


export const MenuItens: MenuItem[] = [
    {
        id: 0,
        name: "HOME",
        route: ""
    },
    {
        id: 1,
        name: "ABOUT",
        route: ""
    },
    {
        id: 2,
        name: "SERVICES",
        route: ""
    },
    {
        id: 3,
        name: "PROJECT",
        route: ""
    },
    {
        id: 4,
        name: "CONTACT",
        route: ""
    },
]