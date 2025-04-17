import { ReactNode, lazy } from "react";
import Hiring from "layouts/hiring/Hiring";
import Link from "layouts/link/Link";


const Home = lazy(() => import("../layouts/home/Home"));
const AboutUs = lazy(() => import("../layouts/aboutUs/AboutUs"));

export type Route = {
    path: string;
    name: string;
    private: boolean;
    component: ReactNode;
    id?: string;
    hidden?: boolean;
}

type Routes = {
    home: Route;
    aboutUs: Route;
    hiring: Route;
    link: Route;
    login: Route;
    register: Route;
    dashboard: Route;
    notFound: Route;
}

const ROUTES : Routes = {
    home: {
        path: "/",
        name: "Home",   
        private: false,
        component: <Home />,
        id: "home",
        
    },
    aboutUs: {
        path: "/aboutUs",
        name: "AboutUs",  
        private: false,
        component: <AboutUs />,
        id: "aboutUs",
        
    },
    hiring: {
        path: "/hiring",
        name: "Recrutement",  
        private: false,
        component: <Hiring />,
        id: "hiring",
        
    },
    link: {
        path: "/link",
        name: "Nos Liens",  
        private: false,
        component: <Link />,
        id: "hiring",
        
    },
    login: {
        path: "/login",
        name: "Login",   
        private: false,
        component: <Home />,
        id: "login",
        
    },
    register: {
        path: "/register",
        name: "Register",   
        private: false,
        component: <Home />,
        id: "register",
        
    },
    dashboard: {
        path: "/dashboard",
        name: "Dashboard",   
        private: true,
        component: <Home />,
        id: "dashboard",
        
    },
    notFound: {
        path: "/404",
        name: "404",   
        private: false,
        component: <Home />,
        id: "notFound",
        
    }
} 

export default ROUTES;