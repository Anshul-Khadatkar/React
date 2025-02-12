/* eslint-disable no-unused-vars */
// // Children Card Component
// import React from "react";

// const ChildrenCard = ({ username }) => {
//     return (
//       <div style={styles.childCard}>
//         <h3>Children Card</h3>
//         <GrandChildrenCard username={username} />
//       </div>
//     );
//   };


import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import GrandChildrenCard from "./GrandChildrenCard";

import "../styles/CardStyles.css"; // ✅ Correct path


const ChildrenCard = ({ username }) => {
  return (
    <div className="children-card">
      <h3>Children Card</h3>
      <GrandChildrenCard username={username} />
    </div>
  );
};
// ✅ PropTypes validation
ChildrenCard.propTypes = {
  username: PropTypes.string.isRequired, // Ensures username is a required string
};


export default ChildrenCard;
