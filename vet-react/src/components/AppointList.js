import React, { Component } from 'react'
import Appoint from './Appoint'


class AppointList extends Component {


    render() {
        const appoints = this.props.appoints;

        const msj = Object.keys(appoints).length === 0 ? "No hay citas" : 'Citas';
        
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{msj}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.appoints).map(cita => (
                            <Appoint
                                key={cita}
                                info={this.props.appoints[cita]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default AppointList;