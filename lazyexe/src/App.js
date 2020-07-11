import React, {useState, Suspense} from 'react';
import { MoonLoader } from 'react-spinners';
import './App.css';

const Image = React.lazy(()=>import('./components/Image'));


const App = () => {
  const [show, setShow] = useState(false);

  const toggle = ()=> setShow(!show);

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }

  return (
    <div style={styles}>
      <button onClick={toggle}>{show? 'Ocultar' : 'Mostrar'}</button>
      {show &&(
        <Suspense fallback={<MoonLoader color='orangered'/>}>
          <Image/>
        </Suspense>
      )}
    </div>
  );
}

export default App;
