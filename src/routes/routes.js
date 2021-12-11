import Home from "../pages/Home";
import Page404 from "../pages/Page404";;

const routes = [
    { path: '/', Component: Home, props: { exact: true } },
    { path: '', Component: Page404, props: {} },
];

export default routes