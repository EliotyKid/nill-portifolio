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
        route: "/"
    },
    {
        id: 1,
        name: "ABOUT",
        route: "/about"
    },
    {
        id: 2,
        name: "SERVICES",
        route: "/services"
    },
    {
        id: 3,
        name: "PROJECT",
        route: "/projects"
    },
    {
        id: 4,
        name: "CONTACT",
        route: "/contact"
    },
]