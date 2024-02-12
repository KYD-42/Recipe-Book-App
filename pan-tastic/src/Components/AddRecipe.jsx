/* eslint-disable react/prop-types */
import { useState } from 'react';

function AddRecipe(props) {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newRecipe = { name, calories, servings, image };
        props.addNewRecipe(newRecipe);
        
        setName('');
        setCalories('');
        setServings('');
        setImage('');
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Calories:</label>
                <input
                    type="number"
                    name="calories"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                />
                <label>Servings:</label>
                <input
                    type="number"
                    name="servings"
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
                />
                <label>Image:</label>
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit">Add Recipe</button>
            </form>
        </section>
    );
}

export default AddRecipe;
