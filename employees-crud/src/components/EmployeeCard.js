import React, {Component} from 'react';
import style from './EmployeeCard.module.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class EmployeeCard extends Component{

    confirmDelete = () => { 
        const {id} = this.props.info;
        Swal.fire({
            title: '¿Seguro?',
            text: "Esto no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
          }).then((result) => {
            if (result.value) {
                this.props.deleteEmployee(id);
              Swal.fire(
                'Borrado',
                'El registro ha sido borrado',
                'success'
              )
            }
          })
    }

    render(){
        console.log(this.props.info);
        const {id,name, lastname, mail, dni, inss, birth} = this.props.info;
        console.log(name);
        return(
            <div className={style["empleado-card"]}>
                <h5><b>Nombres: {name}</b></h5>
                <h5><b>Apellidos: {lastname}</b> </h5>
                <p><b>Correo: {mail} </b></p>
                <p><b>Cedula: {dni} </b></p>
                <p><b>Número INSS: {inss} </b></p>
                <p><b>F. Nacimiento: {birth} </b></p>
                <div>
                    <Link to={`/editar/${id}`} className="btn btn-warning"><i className="fa fa-pencil" /> Editar</Link>
                    <button className="btn btn-danger"  onClick={this.confirmDelete}><i className="fa fa-trash-o"/> Borrar</button>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;