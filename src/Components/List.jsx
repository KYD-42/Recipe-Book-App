import React, { useState } from 'react';
import recipes from "../assets/data/recipes.json";

function List() {
    const [listItems, setListItems] = useState(recipes);

    const handleDelete = (id) => {
        const updatedListItems = listItems.filter((item) => item.id !== id);
        setListItems(updatedListItems);
    };

    return (
        <div className='recipe-page'>
            {listItems.map((data) => {
                return (
                    <div className="card" key={data.id}>
                        <img src={data.image} alt={data.name}/>
                        <div className="card-info">
                            <h2>{data.name}</h2>
                            <p>Calories: {data.calories}</p>
                            <p>Servings: {data.servings}</p>
                        </div>
                        <button onClick={() => handleDelete(data.id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default List;
