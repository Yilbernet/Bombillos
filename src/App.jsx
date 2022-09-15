import { useState } from 'react'
import Bombillo from './Components/Bombillo'

function App() {

  const [bom, setBom] = useState(false);
  const turn = () => setBom(!bom);
  let run = [];

  if ( bom )
  {
    run = ['yellow', 'gray'];
  }
  else
  {
    run = ['gray', 'yellow'];
  }

  return (
    <div className="App">
      <button onClick={turn}>Interruptor Padre</button>
      <h1 className='title'>Bombillos</h1>
      <section className='container'>
        <Bombillo id='one' run={run} />
        <Bombillo id='two' run={run} />
        <Bombillo id='three' run={run} />
      </section>
    </div>
  )
}

export default App
