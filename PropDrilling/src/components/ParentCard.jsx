/* eslint-disable no-unused-vars */
// import React from "react";
// // Parent Card Component
// const ParentCard = () => {
//     const username = "AnshulK"; // 3rd generation data
  
//     return (
//       <div style={styles.card}>
//         <h2>Parent Card</h2>
//         <ChildrenCard username={username} />
//       </div>
//     );
//   };
  

import React from "react";
import ChildrenCard from "./ChildrenCard";
import "../styles/CardStyles.css"; 


const ParentCard = () => {
  const username = "AnshulK";

  return (
    <div className="parent-card">
      <h2>Parent Card</h2>
      <ChildrenCard username={username} />
    </div>
  );
};

export default ParentCard;
