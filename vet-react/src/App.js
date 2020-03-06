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

    delAppoint = id => {
        // read state
        const actappoints = [...this.state.appoints];
        //del element from state copy
        const appoints = actappoints.filter(appoint => appoint.id !== id);
        //upd state
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
                            delAppoint={this.delAppoint}
                        />
                    </article>
                </section>
            </div>
            
        );
    }
}

export default App;