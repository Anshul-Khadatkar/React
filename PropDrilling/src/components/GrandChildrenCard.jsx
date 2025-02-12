/* eslint-disable no-unused-vars */
// import React from "react";
// // GrandChildren Card Component
// const GrandChildrenCard = ({ username }) => {
//     return (
//       <div style={styles.grandChildCard}>
//         <h4>GrandChildren Card</h4>
//         <p>Username: {username}</p>
//       </div>
//     );
//   };


import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "../styles/CardStyles.css"; // Import styles

const GrandChildrenCard = ({ username }) => {
  return (
    <div className="grandchildren-card">
      <h4>GrandChildren Card</h4>
      <p>Username: {username}</p>
    </div>
  );
};

// ✅ PropTypes validation
GrandChildrenCard.propTypes = {
  username: PropTypes.string.isRequired, // Ensures username is a required string
};

export default GrandChildrenCard;
