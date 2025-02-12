/* eslint-disable no-unused-vars */
//If want to break and use in different components

/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import ParentCard from "./components/ParentCard";

// const App = () => {
//   return (
//     <div>
//       <ParentCard />
//     </div>
//   );
// };

// export default App;




import React from "react";

// Parent Card Component
const ParentCard = () => {
  const username = "AnshulK"; // ✅ Define username correctly

  return (
    <div className="card">
      <h2>Parent Card</h2>
      <ChildrenCard username={username} />
    </div>
  );
};

// Children Card Component
const ChildrenCard = (props) => {
  return (
    <div className="child-card">
      <h3>Children Card</h3>
      <GrandChildrenCard username={props.username} />
    </div>
  );
};

// GrandChildren Card Component
const GrandChildrenCard = (props) => {
  return (
    <div className="grandchild-card">
      <h4>GrandChildren Card</h4>
      <p>Username: {props.username}</p>
    </div>
  );
};

// CSS Styles (Inline)
const styles = `
  .card {
    border: 2px solid black;
    padding: 15px;
    margin: 20px;
    text-align: center;
    width: 300px;
  }
  .child-card {
    border: 2px solid blue;
    padding: 10px;
    margin: 10px;
  }
  .grandchild-card {
    border: 2px solid red;
    padding: 10px;
    margin: 10px;
  }
`;

// Adding styles to document (For a single-file approach)
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default ParentCard;
