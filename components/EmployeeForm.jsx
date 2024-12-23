import React, { useState } from 'react';
import './EmployeeForm.css'; // Link the CSS file

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        jobTitle: '',
        department: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log the form data
        setFormData({ name: '', email: '', jobTitle: '', department: '' }); // Reset the form
    };

    return (
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
    );
};

export default EmployeeForm;
