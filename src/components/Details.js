// // Details.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { categories } from '../Data/catrgoriesData'; 

// function Details() {
//   const { pid } = useParams();

//   // Find the selected product using pid
//   const selectedProduct = categories.find((category) => category.pid === pid);

//   if (!selectedProduct) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="product-details">
//       <img src={selectedProduct.image} alt={selectedProduct.name} />
//       <p>Name: {selectedProduct.name}</p>
//       <p>Description: {selectedProduct.description}</p>
//       <p>Price: {selectedProduct.price}</p>
//       <p>Type: {selectedProduct.type}</p>
//       <p>PID: {selectedProduct.pid}</p>
      
//     </div>
//   );
// }

// export default Details;

import React from 'react'

function Details() {
  return (
    <div>
      <h1>Details page</h1>
    </div>
  )
}

export default Details

