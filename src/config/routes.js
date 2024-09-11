import Home from "../components/home";
import About from "../components/about";

export const publicRoutes = [
    {
        name:'Главная',
        path:'home',
        component:Home,
    },
    {
        name:'О нас',
        path:'about',
        component:About,
    }
];