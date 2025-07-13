import React from 'react';
import { useParams } from 'react-router-dom';

const CoffeeCart = () => {


    const {category} = useParams()
    console.log(category)

    return (
        <div>
            CoffeeCart.... {category}
        </div>
    );
};

export default CoffeeCart;