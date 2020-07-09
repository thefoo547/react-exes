import React, {useState, useEffect} from 'react';

const useSizes = () =>{
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () =>{
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }


  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return()=>{
      window.removeEventListener('resize');
    }
  }, [])

  return{
    width,
    height
  }
}


const App = ()=>{

  const {height, width} = useSizes();

  return(
    <div>
      <h1>Hooks personalizados</h1>
    <p>Width: {width}px</p>
    <p>Height: {height}px</p>
    </div>
  )
}

export default App;
