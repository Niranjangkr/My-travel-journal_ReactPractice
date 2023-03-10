import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from "./Components/NavBar"
import Card from "./Components/Card"
import data from "./data"

function App() {
  let card = data.map( (e)=>{
    return <Card key = {e.key} {...e} />
  })
  
  return (
    <>
      <NavBar />
      <section className = "card-list">
          { card }
      </section>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 