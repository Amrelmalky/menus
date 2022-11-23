import React from "react";

const Categories = ({ filterData, allCategories }) => {



  return (
    <div className="btn-container">
      {allCategories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="filter-btn"
            onClick={()=> filterData(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
