import React, {Component} from 'react';
import style from './EmployeeCard.module.css'

class EmployeeCard extends Component{
    render(){
        return(
            <div className={style["empleado-card"]}>
                <h5><b>Nombres: </b></h5>
                <h5><b>Apellidos: </b> </h5>
                <p><b>Correo: </b></p>
                <p><b>Cedula: </b></p>
                <p><b>Número INSS: </b></p>
                <p><b>F. Nacimiento: </b></p>
                <div>
                    <button className="btn btn-warning"><i className="fa fa-pencil" /> Editar</button>
                    <button className="btn btn-danger"><i className="fa fa-trash-o" /> Borrar</button>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;