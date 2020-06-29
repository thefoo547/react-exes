import React, { Component } from 'react'
import EmployeeList from './EmployeeList';

class Employees extends Component {

    render() {
        
        return (
            <div className='w-100'>
                <h2 className='mt-2'>Empleados</h2>
                <EmployeeList
                    employees={this.props.employees}
                    deleteEmployee={this.props.deleteEmployee}
                />
            </div>
        )
    }
}

export default Employees;