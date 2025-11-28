import React, { useState } from "react";
import { InputBox } from "./Components";
import UseCurrencyInfo from "./Hooks/UseCurrencyInfo";

export const App = () => {
      const [amount, setAmount] = useState(0);
      const [from, setFrom] = useState("usd");
      const [to, setTo] = useState("inr");
      const [convertedAmount, setConvertedAmount] = useState(0);

      const CurrencyInfo = UseCurrencyInfo(from);

      const opTions = Object.keys(CurrencyInfo);

      const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
      };

      const convert = () => {
        setConvertedAmount(amount * CurrencyInfo[to]);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        convert();
      };

  return (
      <>
          <div
              className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('https://t4.ftcdn.net/jpg/07/64/97/13/360_F_764971346_UWnWBvmGqINw3LyDFDH7RBYOWDN7Qij0.jpg')`,
              }}
            >
              <div className="w-full ">
                  <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white">
                      <form onSubmit={handleSubmit}>
                          <div className="w-full mb-1 ">
                              <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={opTions}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                              />
                          </div>

                        <div className="r elative w-full h-0.5 ">
                            <button
                              type="button"
                              className="ml-28 translate-x-1/2 
                              border-2 border-white rounded-md bg-blue-600 text-white px-5 py-0.5"
                              onClick={swap}
                            >
                              Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={opTions}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" >
                            {/* Convert {from.toUpperCase()} to {to.toUpperCase()} */}
                            Convert {from?.toString().toUpperCase()} to{" "}
                            {to?.toString().toUpperCase()}
                        </button>
                      </form>
                  </div>
              </div>
          </div>
      </>
  );
};
