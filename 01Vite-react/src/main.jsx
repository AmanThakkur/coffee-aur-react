import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App 2 </h1>
//     </div>
//   )
// }
// const domElement = document.createElement(reactElement.type)
// domElement.innerHTML = reactElement.Children
// domElement.setAttribute('href', reactElement.props.href)
// domElement.setAttribute('target', reactElement.props.target)


// const domElement = document.createElement(reactElement.type)
// domElement.innerHTML = reactElement.Children
// for (const prop in reactElement.props) {
//   if (prop === 'children') continue;
//   domElement.setAttribute(prop, reactElement.props[prop])
// }


// const anotherElement = (
//   <a href="https://google.com" target='_blank'> Visit Google</a>
// )
// const anotherUser = "chai aur reactwa"

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com', target:'_blank' } ,
//   'click me to visit google',
//    anotherUser
// )

createRoot(document.getElementById('root')).render(
  
  <App />
)
