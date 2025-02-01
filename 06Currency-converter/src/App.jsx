// // import { useState } from "react";
// // import useCurrencyInfo from "./hooks/usecurrencyinfo";
// // import { InputBox } from "./components";

// // function App() {
// //   //useStates (hook)

// //   const [amount, setAmount] = useState(0);
// //   const [from, setfrom] = useState("usd");
// //   const [to, setTo] = useState("inr");
// //   const [convertedAmt, setConvertedAmt] = useState(0);

// //   //Hooks
// //   const useCurrencyInfo = useCurrencyInfo(from);
// //   const options = Object.keys(useCurrencyInfo);

// //   const swap = () => {
// //     setfrom(to);
// //     setTo(from);
// //     setConvertedAmt(amount);
// //     setAmount(setConvertedAmt);
// //   };
// //   //below state is a state jo hume final result display karegi

// //   const convert = () => {
// //     setConvertedAmt(amount * useCurrencyInfo[to]);
// //   };

// //   return (
// //     <div
// //       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
// //       style={{
// //         backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/010/067/576/small/monopoly-money-background-free-vector.jpg')`,
// //       }}
// //     >
// //       <div className="w-full">
// //         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
// //           <form
// //             onSubmit={(e) => {
// //               e.preventDefault();
// //               convert();
// //             }}
// //           >
// //             <div className="w-full mb-1">
// //               <InputBox
// //                 label="From"
// //                 amount={amount}
// //                 currencyOptions={options}
// //                 onCurrencyChange={(currency) => {
// //                   setAmount(amount);
// //                 }}
// //                 selectCurrency={from}
// //               />
// //             </div>
// //             <div className="relative w-full h-0.5">
// //               <button
// //                 type="button"
// //                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
// //                 onClick={swap}
// //               >
// //                 swap
// //               </button>
// //             </div>
// //             <div className="w-full mt-1 mb-4">
// //               <InputBox
// //                 label="To"
// //                 amount={convertedAmt}
// //                 currencyOptions={options}
// //                 onCurrencyChange={(currency) => {
// //                   setTo(currency);
// //                   amountDisable; // koi bhi value aise hi pass kar rahe hai iska matlab true pass kar rahe hai
// //                 }}
// //                 selectCurrency={from}
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
// //             >
// //               Convert {from.toUpperCase()} to{to.toUpperCase()}
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;



// import { useState } from 'react'
// import {InputBox} from './components'
// import useCurrencyInfo from './hooks/usecurrencyinfo'


// function App() {

//   const [amount, setAmount] = useState(0)
//   const [from, setFrom] = useState("usd")
//   const [to, setTo] = useState("inr")
//   const [convertedAmount, setConvertedAmount] = useState(0)

//   const currencyInfo = useCurrencyInfo(from)

//   const options = Object.keys(currencyInfo)

//   const swap = () => {
//     setFrom(to)
//     setTo(from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)
//   }
  
//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to])
//   }

//   return (
//     <div
//         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//         style={{
//             backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/010/067/576/small/monopoly-money-background-free-vector.jpg')`,
//         }}
//     >
//         <div className="w-full">
//             <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                 <form
//                     onSubmit={(e) => {
//                         e.preventDefault();
//                         convert()
                       
//                     }}
//                 >
//                     <div className="w-full mb-1">
//                         <InputBox
//                             label="From"
//                             amount={amount}
//                             currencyOptions={options}
//                             onCurrencyChange={(currency) => setAmount(amount)}
//                             selectCurrency={from}
//                             onAmountChange={(amount) => setAmount(amount)}
//                         />
//                     </div>
//                     <div className="relative w-full h-0.5">
//                         <button
//                             type="button"
//                             className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                             onClick={swap}
//                         >
//                             swap
//                         </button>
//                     </div>
//                     <div className="w-full mt-1 mb-4">
//                         <InputBox
//                             label="To"
//                             amount={convertedAmount}
//                             currencyOptions={options}
//                             onCurrencyChange={(currency) => setTo(currency)}
//                             selectCurrency={from}
//                             amountDisable
//                         />
//                     </div>
//                     <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                         Convert {from.toUpperCase()} to {to.toUpperCase()}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </div>
// );
// }

// export default App
import { useState, useCallback } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/usecurrencyinfo';

function App() {
  const [amount, setAmount] = useState(0); // Default amount is 0
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = useCallback(() => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }, [from, to, amount, convertedAmount]);

  // Convert the currency only when the convert button is pressed
  const convert = () => {
    if (amount > 0) {
      setConvertedAmount(amount * currencyInfo[to]);
    } else {
      setConvertedAmount(0);
    }
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/010/067/576/non_2x/monopoly-money-background-free-vector.jpg')`,
      }}
    >
      <div className="w-full max-w-lg mx-auto p-6 bg-white/70 rounded-lg shadow-lg backdrop-blur-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert(); // Trigger conversion on button click
          }}
        >
          <div className="w-full mb-6">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)} // Update the selected "From" currency
              onAmountChange={(newAmount) => {
                setAmount(parseFloat(newAmount)); // Update the amount state as a number
                setConvertedAmount(0); // Reset converted amount when user changes the amount
              }}
              selectCurrency={from}
            />
          </div>
          <div className="relative w-full mb-6">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-2"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="w-full mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)} // Update the selected "To" currency
              selectCurrency={to}
              amountDisable={true}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;




