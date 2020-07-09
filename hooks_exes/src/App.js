import React from 'react';
import './App.css';

const Header = () =>{
  const styles={
    backgroundColor: '#2a2a2a',
    minHeight: '100px',
    margin: '1em 5%',
    padding: '1em'
  }
  return(
    <div style={styles}>
      <h1>Uso de Hooks <span role='img' aria-label='ancla'>⚓️</span></h1>
    </div>
  )
}


const App = () => {
  /*const [clicks, setClicks] = React.useState(0);
  const [isActive, setActive] = React.useState(false);
  const [state, setState] = React.useState({
    clicks: 0,
    title: '',
  })

  const toggleActive= ()=>{
    setActive(!isActive);
  }

  const addClick = () =>{
    setState({
      ...state,
      clicks: state.clicks+1
    })
  }

  const handleInput = evt =>{
    const txt = evt.target.value;
    setState({
      ...state,
      title: txt,
    })
  }*/

  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  
  
  return (
    <div>
      
    </div>
  )
}

export default App;

/*<div>
  <Header/>
  <input onChange={handleInput}
  ></input>
  <br/>
  <button onClick={ ()=>{
    setClicks(clicks+1)
  }}>Clicks ({clicks})</button>
  <br/>
  <button onClick={toggleActive}>{isActive? 'Activo' : 'No Activo'}</button>
  <br/>
  <button onClick={addClick}>Clicks ({state.clicks})</button>
  <p>{state.title}</p>
</div>*/