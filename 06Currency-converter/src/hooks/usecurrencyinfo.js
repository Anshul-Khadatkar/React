// import { useState, useEffect } from "react";

// function useCurrencyInfo(currency) {
//     const [data,setData]=useState({}) //kept an empty object  so that agar fetch me kuch value na aaye toh atleast loop lagaye toh crash nahi karega like an contingency plan
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1
//         // /currencies/${currency}.json`).then((result) => result.json())
//         .then((result)=>SetData(result[currency])) //used box since we are acessing json refer js tutorial
//         console.log(data)
//     }, [currency])
//     return data
// }
// export default useCurrencyInfo;




// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({});
    
//     useEffect(() => {
//         // Fetch data from the updated API URL
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//             .then((res) => res.json())
//             .then((res) => {
//                 // Update the state with the correct data structure
//                 setData(res[currency]);  // Access data based on the currency
//             })
//             .catch((error) => {
//                 console.error("Error fetching currency data:", error);
//             });
//     }, [currency]);

//     console.log(data);  // You can remove this in production or when not debugging

//     return data;
// }

// export default useCurrencyInfo;




import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);  // Update state with correct data structure
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  return data;  // Return data directly
}

export default useCurrencyInfo;
