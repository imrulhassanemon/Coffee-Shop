import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import MainLayout from '../layout/MainLayout';


const Routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>
    }
])

export default Routes;