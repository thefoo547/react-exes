import React from 'react';
import Header from "./components/Header";

function App() {
    return ( 
        <div className = "container" >
            <Header
               titulo={'Administrador de pacientes'} 
            />
        </div>
    );
}

export default App;