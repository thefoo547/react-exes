import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Employees from './Employees'; 
import CreateForm from './CreateForm';
import Swal from 'sweetalert2';
import EmployeeEdit from './EmployeeEdit'

class Router extends Component {
    //Inicio de lista de empleados
    state = {
        id: 0,
        employees: []
    }

    createEmployee = employee => {
        employee.id = this.state.id;
        this.setState(prevState => ({
            employees: [...prevState.employees, employee],
            id: prevState.id+1
        }))
        Swal.fire(
            'Confirmado',
            'Se ha guardado el registro',
            'success'
          )
    }

    editEmployee = newEmployee =>{
        const actemp = [...this.state.employees];
        //del element from state copy
        const emp = actemp.filter(e => e.id !== newEmployee.id);

        emp.push(newEmployee)

        this.setState({
            employees: emp,
        })
        Swal.fire(
            'Confirmado',
            'Se ha editado el registro',
            'success'
          )
    }

    deleteEmployee = id =>{
        // read state
        const actemp = [...this.state.employees];
        //del element from state copy
        const emp = actemp.filter(e => e.id !== id);

        this.setState({
            employees: emp,
        })
    }
    

    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <Header/>
                        <Switch>
                            <Route exact path="/" render={ () => {
                                return(
                                    <Employees
                                    employees={this.state.employees} 
                                    deleteEmployee={this.deleteEmployee}
                                    />
                                )
                            }}
                            />
                            <Route exact path='/nuevo' render={ () => {
                                return(
                                    <CreateForm createEmployee={this.createEmployee} />
                                )
                            }}></Route>

                            <Route exact path='/editar/:empId' render={
                                props =>{
                                    let empId= props.location.pathname.replace('/editar/', '');
                                    const emps = this.state.employees;
                                    let filter = emps.filter(e => (
                                        e.id === Number(empId)
                                    ))
                                    return(
                                        <EmployeeEdit
                                            emp={filter[0]}
                                            editEmployee={this.editEmployee}
                                        />
                                    )
                                }
                            }></Route>
                        </Switch>
                        
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;