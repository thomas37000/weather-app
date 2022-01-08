import IRoutes from "./IRoutes";
import Home from "../components/Home";

const routes: IRoutes[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
        exact: true
    },
    // {
    //     path: '/search',
    //     name: 'movies',
    //     component: CardMoviesById,
    //     exact: true
    // }
]

export default routes;