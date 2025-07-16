import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

const CofeeDetails = () => {
  const { id } = useParams();
  console.log(id)

  const coffees = useLoaderData();

  
  const [coffee, setcoffee] = useState({});
  
  useEffect(() => {
      const singleData = coffees.find((coffee) => coffee.id == id);
      setcoffee(singleData);
    }, [id, coffees]);
    const { name, image, category, origin, type, rating, popularity, nutrition_info } = coffee 

  console.log(nutrition_info);
  return (
    <>
    <div className="card lg:card-side w-3/4 mx-auto bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Album" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{}</h2>
        <div>
            <p></p>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div>
            <ul>
                {/* {nutrition_info.map(n => {
                    <li>
                        {n.calories}
                    </li>
                })} */}
            </ul>
        </div>
        </div>

      </div>
    </div>
        <div className="card-actions w-3/4 mx-auto flex flex-col z-10 items-end border border-red-600 justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
        </>
  );
};

export default CofeeDetails;
