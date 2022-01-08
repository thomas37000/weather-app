export default interface IRoutes {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}