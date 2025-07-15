import React from "react";
import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
  console.log(coffee);

  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};

  return (
      <Link
      className="transition hover:scale-105 flex justify-center"
      >
        <div className="card bg-base-100 my-0 w-80 shadow-sm">
          <figure>
            <img src={image} alt="Coffees" />
          </figure>
          <div className="card-body py-2 gap-0">
            <h2 className="card-title">Name: {name}</h2>
            <div className="text-[16px]">
              <p>Category: {category}</p>
              <p>Type: {type}</p>
              <p>Origin: {origin}</p>
              <p>Rating: {rating}</p>
              <p>Popular: {popularity}</p>
            </div>
          </div>
        </div>
      </Link>
  );
};

export default Card;
