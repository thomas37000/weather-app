import IRoutes from "./IRoutes";
import Home from "../components/Home";
import Search from "../components/Search";

const routes: IRoutes[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
        exact: true
    },
    {
        path: '/temps',
        name: 'temps',
        component: Search,
        exact: true
    }
]

export default routes;