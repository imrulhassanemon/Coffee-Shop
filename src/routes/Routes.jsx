import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Coffes from '../pages/Coffes';
import Dashboard from '../pages/Dashboard';
import CoffeeCart from '../components/CoffeeCart';


const Routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('../categories.json'),
                children: [
                    {
                        path:'/',
                        element: <CoffeeCart></CoffeeCart>,
                        loader: ()=> fetch('../coffees.json')
                    },
                    {
                        path:'/category/:category',
                        element: <CoffeeCart></CoffeeCart>,
                        loader: ()=> fetch('../coffees.json')
                    },
                ]
            },
            {
                path:'/coffees',
                element:<Coffes></Coffes>,
                loader: ()=> fetch('../coffees.json')
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            }
        ]
    }
])

export default Routes;