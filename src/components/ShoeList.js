// import React from "react";
// import ShoeCard from "./ShoeCard";

import ShoeCart from "./ShoeCard";

function ShoeList({ shoes, addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {shoes.map((shoe) => (
        <ShoeCart key={shoe.id} shoe={shoe} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ShoeList;
