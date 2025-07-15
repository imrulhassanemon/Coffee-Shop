import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCart = () => {


    const {category} = useParams()
    const navigate = useNavigate()
    const data = useLoaderData()
    
    const [coffee, setCoffee] = useState([])

    useEffect(()=>{
        if(category){
            const filteredByCategory = [...data].filter(coffee => coffee.category === category)
        setCoffee(filteredByCategory)
        }else{
            setCoffee(data.slice(0, 6))
        }
    }, [category, data])

    return (
        <>
        <div className='grid grid-cols-1 gap-6 justify-center my-12 md:grid-cols-2 lg:grid-cols-3'>
            {
                coffee.map((coffee) => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
        <button className='btn btn-warning' onClick={()=> navigate('/coffees')}>View All</button>
        </>
    );
};

export default CoffeeCart;