import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import recipes from "../assets/data/recipes.json";

function List() {
    const [listItems, setListItems] = useState(recipes);

    const handleDelete = (id) => {
        const updatedListItems = listItems.filter((item) => item.id !== id);
        setListItems(updatedListItems);
    };

    return (
        <div className='list-container'>
            {listItems.map((data) => {
                // Define styles based on calorie value
                const calorieStyles = {
                    backgroundColor: data.calories > 500 ? 'red' : (data.calories >= 150 && data.calories <= 400 ? 'yellow' : 'green')
                };

                return (
                    <div className="card" key={data.id} style={calorieStyles}> {/* Apply styles here */}
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
        </div>
    );
}

export default List;
