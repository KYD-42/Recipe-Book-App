import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import recipes from "../assets/data/recipes.json";
import AddRecipe from './AddRecipe'; // Import AddRecipe component

function List() {
    const [listItems, setListItems] = useState(recipes);

    const handleDelete = (id) => {
        const updatedListItems = listItems.filter((item) => item.id !== id);
        setListItems(updatedListItems);
    };

    const addNewRecipe = (newRecipe) => {
        const updatedListItems = [...listItems, newRecipe];
        setListItems(updatedListItems);
    };

    return (
        <div>
            <section className='form'>
            {/* Add the AddRecipe component */}
            <AddRecipe addNewRecipe={addNewRecipe} />
            </section>
            <section className="list-container">
            {listItems.map((data) => {

                const calorieStyles = {
                    backgroundColor: data.calories >= 750 ? 'red' :
                    (data.calories >= 400 && data.calories < 750 ? 'orange' :
                    (data.calories >= 150 && data.calories < 400 ? 'yellow' :
                    (data.calories >= 130 && data.calories < 150 ? 'green' : 'green')))
                };

                return (
                    <div className="card" key={data.id} style={calorieStyles}>
                        <img src={data.image} alt={data.name}/>
                        <div className="card-info">
                            <h2>{data.name}</h2>
                            <p>Calories: {data.calories}</p>
                            <p>Servings: {data.servings}</p>
                        </div>
                        <Link to={`/recipes/${data.id}`}><button>View Details</button></Link>
                        <button onClick={() => handleDelete(data.id)}>Delete</button>
                    </div>
                );
            })}
            </section>
        </div>
    );
}

export default List;
