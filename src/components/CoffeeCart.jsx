import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCart = () => {


    const {category} = useParams()

    const data = useLoaderData()
    
    const [coffee, setCoffee] = useState([])

    useEffect(()=>{
        const filteredByCategory = [...data].filter(coffee => coffee.category === category)
        setCoffee(filteredByCategory)
    }, [category, data])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                coffee.map((coffee) => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
    );
};

export default CoffeeCart;