import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';


const Home = () => {

    const category = useLoaderData()

    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading */} 
            <Heading title={"Browse Coffees by Category"} subtitle={"Chose your desired coffee categroy to browse through specific coffees that fit your test"}></Heading>
            {/* Category Tab section */}
            <Categories categories={category}></Categories>
            {/* Dynamic nested Component */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;