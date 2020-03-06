import React, {Component} from 'react';
import Header from "./components/Header";
import AddAppointment from "./components/AddAppointment"
import ApponintList from "./components/AppointList";

class App extends Component {

    state = {
        appoints: []
    }

    newAppointment = (newAppoint) =>   {
        const appoints = [...this.state.appoints, newAppoint]
        this.setState({
            appoints
        });
    }

    render() {
        return ( 
            <div className = "container" >
                <Header
                   titulo={'Administrador de pacientes'} 
                />
                <section className="row">
                    <article className="col-lg-6 col-12">
                        <AddAppointment
                            newAppointment={this.newAppointment}
                        />
                    </article>
                    <article className="col-lg-6 col-12">
                        <ApponintList
                            appoints={this.state.appoints}
                        />
                    </article>
                </section>
            </div>
            
        );
    }
}

export default App;