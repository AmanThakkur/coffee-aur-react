// import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import './App.css'
import { useState } from 'react'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedamonut, setConvertedamount] = useState(0)

  const [currencyinfo, setCurrencyinfo] = useCurrencyInfo('usd')

  const options = Object.keys(currencyinfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedamount(amount)
    setAmount(convertedamonut)
  }

  const convert = () => {
    setConvertedamount(amount * currencyinfo[to])
  }
  const [count, setCount] = useState(0)

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/05/34/10/18/360_F_534101844_xIyxkPs1EBHj7kFULi1burnV7qlgx5Y4.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                slectcurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedamonut}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                slectcurrency={to}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App
