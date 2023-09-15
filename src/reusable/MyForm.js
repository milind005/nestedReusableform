import React, { useState } from 'react';

function InputField({ label, name, value, onChange }) {
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <input type="text" id={name} name={name} value={value} onChange={onChange} />
        </div>
    );
}

function MyForm() {
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(initialFormData).map((fieldName) => (
                <InputField
                    key={fieldName}
                    label={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                    name={fieldName}
                    value={formData[fieldName]}
                    onChange={handleInputChange}
                />
            ))}
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default MyForm;
