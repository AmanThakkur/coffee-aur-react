import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)


  // let counter = 15
  const addValue = () => {
    setCounter(counter => {
      if (counter < 22) {
        return counter + 1
      } else {
        return counter
      }
    })
  }

  const removeValue = () => {
    
    setCounter(counter => {
      if (counter > 0) {
        return counter - 1;
      } else {
        return 0;
      }
    });

  }

  return (
    <>
     <h1>Chai aur cig </h1>
     <h2>counter value: {counter} </h2>

     <button onClick={addValue}
      >Add value {counter}</button>
     <br />
      <button onClick={removeValue}
      >Remove Value {counter}</button>
      <footer>Nhi btayenge {counter}</footer>
    </>
  )
}

export default App
