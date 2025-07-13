import React from "react";
import { Link, Links, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        {
            categories.map(category => <Link to={`/category/${category.category}`} key={category.category}
          type="radio"
          name="my_tabs_3"
          className="tab w-1/3 text-2xl"
          aria-label={category.category}> {category.category}
            
        </Link>)
        }
        
      </div>

{/* 
        <div role="tablist" className="tab tabs-lifted">
            {
                categories.map(category => (<Link key={category.category} role="tab" className="tab" to={'/c'}>h</Link>))
            }
        </div> */}

    </div>
  );
};

export default Categories;
