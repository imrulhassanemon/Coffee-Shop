import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { BeatLoader } from "react-spinners";

const Coffes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const handelsortbutton = (sortby)=>{
    if(sortby === 'popularity'){
        const sorted = [...data].sort((a, b)=> b.popularity - a.popularity)
        setData(sorted)
    }
    else if(sortby === 'ratings'){
        const sorted = [...data].sort((a, b) => b.rating - a.rating)
        setData(sorted)
    }
  }

  useEffect(() => {
    fetch("./coffees.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, [setData, setLoading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BeatLoader />
      </div>
    );
  }
  console.log(data);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-3xl">Sort Coffee&apos;s by Popularity & Rating-&gt;</div>
        <div className="space-x-4">
          <button onClick={()=>handelsortbutton('ratings')} className="btn btn-warning text-black hover:scale-105">Short By Ratings</button>
          <button onClick={()=>handelsortbutton('popularity')} className="btn btn-warning text-black hover:scale-105">Short By Popularity</button>
        </div>
      </div>
      <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffes;
