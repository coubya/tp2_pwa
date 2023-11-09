import { useState } from 'react'
import charactersData from './assets/characters.json';
import './App.css'
import Login from "./Login"
import Card from "./Card"

function App() {
  const [isAuth, setAuth] = useState(false);

  const authenticate = () => {
      setAuth((isAuth) => !isAuth)
  };

  return (
    <>
      <div>
        {isAuth ? (
          <div>
            <div className="relative bg-black">
              <div className="text-white text-[32px] font-normal font-['Helvetica Neue']" onClick={authenticate}>Se déconnecter</div>
              <Card name={charactersData[0].name} description={charactersData[0].description} imageUrl={charactersData[0].imageUrl}/>
            </div>
          </div>
        ) : (
          <Login onClick={authenticate}></Login>
        )}
      </div>
    </>
  )
}

export default App
