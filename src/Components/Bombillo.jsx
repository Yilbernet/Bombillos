import React, { useState } from 'react'

const Bombillo = ({id, run}) => {

   const [bom, setBom] = useState(true);

   const ColorYellow = {
      backgroundColor: run[0],
   }

   const ColorGray = {
      backgroundColor: run[1],
   }

   const turn = () => setBom(!bom);

  return (
    <div>
      <h1>{id}</h1>
      {
      bom ?
      <div className='Bombillo' style={ColorYellow}></div>
      :
      <div className='Bombillo' style={ColorGray}></div>
      }
      <button onClick={turn}>Power</button>
    </div>
  )
}

export default Bombillo