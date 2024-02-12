import React, { useState } from 'react';

function CreateItemForm({ onAddItem }) {
    const [formData, setFormData] = useState({
        name: '',
        calories: '',
        servings: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data (you can add validation logic here)
        // Assuming id is generated dynamically or from backend
        const newItem = { ...formData, id: Math.random().toString() };
        onAddItem(newItem);
        // Reset form after submission
        setFormData({
            name: '',
            calories: '',
            servings: '',
            image: null,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Calories:
                <input type="number" name="calories" value={formData.calories} onChange={handleChange} />
            </label>
            <label>
                Servings:
                <input type="number" name="servings" value={formData.servings} onChange={handleChange} />
            </label>
            <label>
                Image:
                <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
            </label>
            <button type="submit">Add Item</button>
        </form>
    );
}

export default CreateItemForm;
