import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        {
            categories.map(category => <NavLink to={`/category/${category.category}`} key={category.category}
          type="radio"
          name="my_tabs_3"
          className={({isActive})=> `tab w-1/3 text-[14px] lg:text-2xl ${isActive?'tab-active': ''}`}
          aria-label={category.category}> {category.category}
            
        </NavLink>)
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
