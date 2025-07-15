import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Coffes from '../pages/Coffes';
import Dashboard from '../pages/Dashboard';
import CoffeeCart from '../components/CoffeeCart';
import CofeeDetails from '../pages/CofeeDetails';


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
            },
            {
                path: '/coffee/:id',
                element: <CofeeDetails></CofeeDetails>
            }
        ]
    }
])

export default Routes;