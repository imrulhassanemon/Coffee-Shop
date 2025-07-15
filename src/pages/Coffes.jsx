import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { BeatLoader } from 'react-spinners';

const Coffes = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('./coffees.json')
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)
            console.log(data)
        })
    },[setData, setLoading])

    if(loading){
        return(
            
            <div className='flex justify-center items-center  h-screen'>
                 <BeatLoader />
            </div>
        )
    }
    console.log(data)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                data.map((coffee)=> <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
    );
};

export default Coffes;