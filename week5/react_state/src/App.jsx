import { useState } from 'react'
import './App.css'
import Hudini from './components/Hudini';
import Landing from './components/Landing.jsx'
import Home from './components/Home.jsx'

function App() {
  const [data, setData] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  })

  function changeCurrentPage(page){
    setData({...data, currentPage: page})
  }
  return (
  <>
    <button onClick={() => changeCurrentPage("Landing")}>Landing</button>
    <button onClick={() => changeCurrentPage("Home")}>Home</button>
    {data.currentPage === "Landing" ? 
    <Landing user={data.user} store = {data.store} />
    : <Home store={data.store} shouldDiscount = {data.shouldDiscount}/>}
  </>
  )
}

export default App
