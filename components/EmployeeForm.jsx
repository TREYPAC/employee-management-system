import React, { useState } from 'react';
import './EmployeeForm.css'; // Link the CSS file

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        jobTitle: '',
        department: '',
    });

    const [employees, setEmployees] = useState([]);

    // Function to save data to local storage
    const saveData = (data) => {
        localStorage.setItem('employees', JSON.stringify(data));
    };

    // Function to add a new employee
    const addEmployee = (employee) => {
        const updatedEmployees = [...employees, employee];
        setEmployees(updatedEmployees);
        saveData(updatedEmployees);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(formData);
        setFormData({ name: '', email: '', jobTitle: '', department: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form className="employee-form" onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title"
                />
                <input
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Department"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
