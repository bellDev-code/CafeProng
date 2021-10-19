import BoardCombination from '../Router/RouterBoardCombination/RouterBoardCombination';
import { RoutesString } from "../constants/routesString";
import RouterCombination from "./RouterCombination/RouterCombination";
var routes = [
    {
        exact: true,
        path: RoutesString.Home,
        component: RouterCombination,
        menuName: "Main"

    },
    {
        path: RoutesString.OurStory,
        component: RouterCombination,
        menuName: "OurStory"
    },
    {
        path: RoutesString.Consulting,
        component: RouterCombination,
        menuName: "Consulting"
    },
    {
        path: RoutesString.Curriculum,
        component: RouterCombination,
        menuName: "Curriculum"
    },
    {
        path: RoutesString.Magazine,
        component: RouterCombination,
        menuName: "Magazine"
    },
    {
        path: RoutesString.Ingredients,
        component: RouterCombination,
        menuName: "Ingredients"

    },
    {
        path: RoutesString.Equipment,
        component: RouterCombination,
        menuName: "Equipment"
    },
    {
        path: RoutesString.Board,
        component: BoardCombination,
        menuName: "Board",
    },
    {
        path: RoutesString.Board2,
        component: BoardCombination,
        menuName: "Board2",
    },
    {
        path: RoutesString.Board3,
        component: BoardCombination,
        menuName: "Board3",
    },



];

var pages = (role) => {
    return routes.filter((r) => {
        return !r.role || r.role === role;
    })
}

export default pages;