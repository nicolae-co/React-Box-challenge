import data from './assets/boxes.JS'
import { useState } from 'react'
import './App.css'
import Box from './components/Box'

function App(props) {
  const [boxes, setBoxes] =useState(data)
    
    function toggle(id){
      setBoxes(prevState => {
        return prevState.map((square)=>{
            return square.id === id ? {...square, on: !square.on} : square
        })
      })
    }

    const boxesMap = boxes.map(item => (
      <Box key={item.id} id={item.id} on={item.on} toggle={()=>toggle(item.id)}/>
    ))

  return (
    <main>
        <h1>Boxes will go here </h1>
        {boxesMap}
    </main>
  )
}

export default App
