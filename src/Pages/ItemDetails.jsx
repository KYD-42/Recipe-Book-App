import { useParams } from "react-router-dom";
import recipes from "../assets/data/recipes.json";

function ItemDetails() {
    const { id } = useParams();

    // Find the recipe with the matching id
    const recipe = recipes.find(recipe => recipe.id === id);

    // If recipe is not found, handle it accordingly (e.g., display a message)
    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div className="item-details">
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} width="300" height="200" />
            <p>Calories: {recipe.calories}</p>
            <p>Servings: {recipe.servings}</p>
        </div>
    );
}

export default ItemDetails;