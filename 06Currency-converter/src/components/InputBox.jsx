// import Reactf, { useId} from 'react'

// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectCurrency="usd",
//     amountDisable=false, //optimisation that the user can change value its not diabled
//     currencyDisable=false,
//     className = "",
// }) {
   
//     const amountInputId = useId(); //gives us a unique value


//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//             <div className="w-1/2">
//                 <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">  //bind amountInputId
//                     {label}
//                 </label>
//                 <input
//                     id={amountInputId}
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled={amountDisable} //this property checks if amout disabled is true or false if its true then it wont accept any response
//                     value={amount}
//                     onChange={(e) => { // we can fire an event and then call a method using the event
//                         // here we can direclty use onAmountChange but if the user kept it empty then it would cause an issue hence we will add an edge case
//                         onAmountChange &&
//                             onAmountChange(Number(e.target.value)) // Everhtime js events ke values ko js string format me leti hai
                        
//                     }}

//                 />
//             </div>
//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                     value={selectCurrency} //Selectfield ki current value kya hai by default usd dala hua hai
//                     //ab jab yeh selectCurrency change hoga toh uski value change honi chahie
//                     onChange={(e) => onCurrencyChange &&
//                         onCurrencyChange(e.target.value)} //iss baar number me change nahi kia since hum string me baat kar rahe hai usd waghera
//                     disabled={currencyDisable} //to check whether this field is on or not

//                 >
//                     // Looping all the options
//                     //remember that if we are looping in jsx react ko nahi pata hota ki jo value repeat ho rahi hai woh wo DOM ke andar hazar baar toh nahi bana raha  hence use key
//                     // remember to use key while looping in react
//                     {currencyOptions.map((currency) => (
//                         // key ke liye use unique valuse such as id's or here currency
//                         <option key={currency} value={currency}>
//                             {currency}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         </div>
//     );
// }

// export default InputBox;



    // import React, {useId} from 'react'

    // function InputBox({
    //     label,
    //     amount,
    //     onAmountChange,
    //     onCurrencyChange,
    //     currencyOptions = [],
    //     selectCurrency = "usd",
    //     amountDisable = false,
    //     currencyDisable = false,
    //     className = "",
    // }) {
    // const amountInputId = useId()

    //     return (
    //         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
    //             <div className="w-1/2">
    //                 <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
    //                     {label}
    //                 </label>
    //                 <input
    //                     id={amountInputId}
    //                     className="outline-none w-full bg-transparent py-1.5"
    //                     type="number"
    //                     placeholder="Amount"
    //                     disabled={amountDisable}
    //                     value={amount}
    //                     onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
    //                 />
    //             </div>
    //             <div className="w-1/2 flex flex-wrap justify-end text-right">
    //                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
    //                 <select
    //                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
    //                     value={selectCurrency}
    //                     onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
    //                     disabled={currencyDisable}
    //                 >
                        
    //                         {currencyOptions.map((currency) => (
    //                             <option key={currency} value={currency}>
    //                             {currency}
    //                             </option>
    //                         ))}
                    
    //                 </select>
    //             </div>
    //         </div>
    //     );
    // }

// export default InputBox;
    




import React from 'react';

const InputBox = ({
  label,
  amount,
  currencyOptions,
  onCurrencyChange,
  onAmountChange,
  selectCurrency,
  amountDisable = false,
}) => {
  return (
    <div>
      <label className="block">{label}</label>
      <div className="flex">
        <input
          type="number"
          value={amount} // Bind the amount directly to the input value
          onChange={(e) => onAmountChange(e.target.value)} // Call the passed function to update the amount
          disabled={amountDisable}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)} // Change currency
          className="ml-2 p-2 border border-gray-300 rounded-md"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
