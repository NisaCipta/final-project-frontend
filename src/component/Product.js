import React from "react";

const Products = ({ id, title, price, link_product }) => {
  return (
    <>
      <div key={id} className="flex flex-wrap w-1/5 gap-4">
        <div className="bg-white p-4 shadow">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <img src={link_product} className="w-full"></img>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
