import React, { Component } from 'react'

class Appoint extends Component {
    
    delAppoint = () => {
        this.props.delAppoint(this.props.info.id);
    }

    
    render() {
        const{date, hr, name, proc, stat} = this.props.info
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{name}</h3>
                    <p className="card-text"><span>Lugar de procedencia: </span>{proc}</p>
                    <p className="card-text"><span>Fecha: </span>{date}</p>
                    <p className="card-text"><span>Hora: </span>{hr}</p>
                    <p className="card-text"><span>Estado: </span>{stat}</p>
                    <p className="card-text"></p>
                    <button className="btn btn-block btn-danger" onClick={this.delAppoint}>
                    Borrar &times;
                    </button>
                </div>
            </div>
        );
    }
}

export default Appoint;