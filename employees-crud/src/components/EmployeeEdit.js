import React, { Component } from 'react'


class EmployeeEdit extends Component {
    state = {
        error:false,
    }
    
    

    //refs
    nameRef = React.createRef();
    lastnameRef = React.createRef();
    mailRef = React.createRef();
    dniRef = React.createRef();
    inssRef = React.createRef();

    editEmployee = e =>{
        e.preventDefault();
        const {id} = this.props.emp;
        this.setState(
            {
                error: false
            }
        )
        const emp={
            id: id,
            name : this.nameRef.current.value,
            lastname : this.lastnameRef.current.value,
            mail : this.mailRef.current.value,
            dni: this.dniRef.current.value,
            inss: this.inssRef.current.value
        }

        //001-150699-1015E

        console.log(emp.dni);
        console.log(emp.dni.length);
        // cedula con guiones o sin guiones
        if(emp.dni.length !== 16){
            console.log("on invalid")
            this.setState({
                error: true
            })
            return false;
        }
        // expresion regular para cédula
        let cedRegexp = /([0-9][0-9][0-9]-\d{6}-\d{4}[A-Z])/g;

        //Validación
        if(emp.dni.match(cedRegexp) == null){
            console.log("on invalid 2")
            this.setState({
                error: true
            })
            return false;
        }

        //cumpeleaños extracción
        let bdayreg= /\d{6}/g;
        let bday_string=emp.dni.match(bdayreg)[0];

        let inssrx= /\d{7}-[0-9]/g;

        console.log(emp.inss);

        if(emp.inss.match(inssrx) == null){
            console.log("on invalid 3")
            this.setState({
                error: true
            })
            return false;
        }

        let day = parseInt((bday_string.substring(0,2)));
        let month = parseInt((bday_string.substring(2,4)));
        let year = parseInt((bday_string.substring(4,6)));

        if(year<=20){
            year += 2000;
        }
        else{
            year +=1900;
        }

        emp.birth = new Date(year,month-1, day).toDateString();

        this.props.editEmployee(emp);

        e.currentTarget.reset();
        this.setState(
            {
                error: false
            }
        )
    }
    

    loadForm = () =>{
        if(!this.props.emp) return null;

        const {name, lastname, dni, mail, inss} = this.props.emp;
        const isErr = this.state.error;
        return(<div className='w-100'>
                <h5>Editar</h5>
            <form className='col-8' onSubmit={this.editEmployee}>
            <div className='form-group'>
                <label>Nombres</label>
                <input required type='text' ref={this.nameRef} className='form-control' defaultValue={name} placeholder='Nombre' name='name'></input>
            </div>
            <div className='form-group'>
                <label>Apellidos</label>
                <input required type='text' ref={this.lastnameRef} className='form-control' defaultValue={lastname} placeholder='Apellido' name='lastname'></input>
            </div>
            <div className='form-group'>
                <label>N° Cédula</label>
                <input required type='text' ref={this.dniRef} className='form-control' defaultValue={dni} placeholder='001-XXXXXX-XXXXL' name='dni'></input>
            </div>
            <div className='form-group'>
                <label>Correo</label>
                <input required type='email' ref={this.mailRef} className='form-control' defaultValue={mail} placeholder='example@mail.com' name='mail'></input>
            </div>
            <div className='form-group'>
                <label>INSS</label>
                <input required type='text' ref={this.inssRef} className='form-control' defaultValue={inss} placeholder='XXXXXXX-X' name='inss'></input>
            </div>
            <button className='btn btn-block btn-primary' type='submit'>Editar</button>
            </form>
            { isErr ? <div className="alert alert-danger text-center mt-2 mx-2"> Ingrese los campos correctamente </div> : ''}
            </div>);
    }


    render() {
        
        
        return (
            <React.Fragment>
                {this.loadForm()}
            </React.Fragment>
        );
    }
}

export default EmployeeEdit;