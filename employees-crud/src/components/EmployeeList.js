import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard';

class EmployeeList extends Component {
    showEmployees = () => {

        const employees = this.props.employees;
        
        if(employees==null || employees.length === 0) return null;
        
        return (
            <React.Fragment>
                {Object.keys(employees).map(employee => (
                    
                    <EmployeeCard 
                        key={employee}
                        info={this.props.employees[employee]}
                        deleteEmployee={this.props.deleteEmployee}
                    />
                ))}
            </React.Fragment>
        )
    }
    
    render() {
        return (
            <div>
                {this.showEmployees()}
            </div>
        )
    }
}

export default EmployeeList;