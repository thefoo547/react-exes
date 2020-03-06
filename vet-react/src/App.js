import React, {Component} from 'react';
import Header from "./components/Header";
import AddAppointment from "./components/AddAppointment";

class App extends Component {

    newAppointment = () =>   {

    }

    render() {
        return ( 
            <div className = "container" >
                <Header
                   titulo={'Administrador de pacientes'} 
                />
                <section className="row">
                <article className="col-md-6 col-12">
                    <AddAppointment
                        
                    />
                </article>
            </section>
            </div>
            
        );
    }
}

export default App;