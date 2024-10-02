import Login from './component/login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Facebook Login</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
