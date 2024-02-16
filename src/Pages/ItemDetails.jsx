import { useParams } from "react-router-dom";
import recipes from "../assets/data/recipes.json";
import { useState } from "react";

function ItemDetails() {
    const { id } = useParams();

    // Find the recipe with the matching id
    const recipe = recipes.find(recipe => recipe.id === id);

    const [name, setName] = useState(recipe.name);
    const [calories, setCalories] = useState(recipe.calories);
    const [servings, setServings] = useState(recipe.servings);
    const [image, setImage] = useState(recipe.image);

    // If recipe is not found, handle it accordingly (e.g., display a message)
    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div className="item-details">
            <h1>{name}</h1>
            <img src={image} width="300" height="200" />
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <form className='form'>
                <label className='form_label'>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label className='form_label'>Calories</label>
                <input
                    type="number"
                    name="calories"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                />
                <label className='form_label'>Servings</label>
                <input
                    type="number"
                    name="servings"
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
                />
                <label className='form_label'>Image</label>
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                {/* <button className='form_btn' type="submit">Add Recipe</button> */}
            </form>
        </div>
    );
}

export default ItemDetails;