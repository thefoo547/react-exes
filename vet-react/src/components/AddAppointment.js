import React, { Component } from 'react';
import uuid from 'uuid';

class AddApointment extends Component {

    // refs

    nombrePac = React.createRef();
    lugarProced = React.createRef();
    dateAp = React.createRef();
    hrAp = React.createRef();
    statPac = React.createRef();

    state = { }

    newAppointment = e => {
        e.preventDefault();

        const name = this.nombrePac.current.value,
            proc = this.lugarProced.current.value,
            date = this.dateAp.current.value,
            hr = this.hrAp.current.value,
            stat = this.statPac.current.value;

        const newAppoint = {
            id : uuid(),
            name,
            proc,
            date,
            hr,
            stat
        }

        this.props.newAppointment(newAppoint);

    }

    render() {
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agregar cita médica</h2>
                    <form onSubmit={this.newAppointment}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Paciente</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" ref={this.nombrePac} className="form-control" placeholder="Nombre Paciente" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Procedencia</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" ref={this.lugarProced} className="form-control"  placeholder="Lugar de procedencia" />
                            </div>
                        </div>
                
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" ref={this.dateAp} className="form-control" />
                            </div>                            
                
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" ref={this.hrAp} className="form-control" />
                            </div>
                        </div>
                
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Estado</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.statPac} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddApointment;