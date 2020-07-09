import React, { useState, useCallback, memo } from 'react'

import './App.css';

const getRandomColor = () => `#${Math.random().toString(16).slice(2, 8)}`;

const Header = () =>{
  return(
    <React.Fragment>
      <h1>Ejemplo de memo y callback</h1>
    </React.Fragment>
  )
}

const Button = memo(({callback, children})=>{
  const styles = {
    padding: '1em',
    fontSize: '20px',
    backgroundColor: getRandomColor()
  }
  return(
    <button style={styles} onClick={callback}>{children}</button>
  )
})


const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const incrementA = useCallback(()=>{
    setA(a=>a+1)
  }, [])


  const incrementB = useCallback(()=>{
    setB(b=>b+a)
  }, [a])

  return(
    <div>
      <Header/>
      <Button callback={incrementA}>Increment A</Button>
      <Button callback={incrementB}>Increment B</Button>
      <h1>
        a: {a}
      </h1>
      <h1>
        b: {b}
      </h1>
    </div>
  )
}

export default App;
