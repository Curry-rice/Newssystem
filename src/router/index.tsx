import React from 'react'
import Login from '../views/login';
import NotFound from '../views/not-found';
import SandBox from '../views/sand-box';
import News from '../views/news';
import { Navigate } from 'react-router-dom';
//懒加载
interface Router {
    name?: string;
    path: string;
    children?: Array<Router>;
    element: any;
}
const routers: Array<Router> = [
    {
        path: '/',
        element: <SandBox/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: 'news',
        element: <News/>
    },
    // {
    //     path: 'sandbox',
    //     element: <SandBox/>
    // },
    {
        path: '*',
        element: <NotFound/>
    }
]
export default routers;
