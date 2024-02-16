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
            <section>
            {/* Add the AddRecipe component */}
            <AddRecipe addNewRecipe={addNewRecipe} />
            </section>
            <section className="list-container">
            {listItems.map((data) => {

                const calorieStyles = {
                    backgroundColor: data.calories >= 750 ? '#F35200' :
                    (data.calories >= 400 && data.calories < 750 ? '#F2AB2D' :
                    (data.calories >= 150 && data.calories < 400 ? '#F1DBAE' :
                    (data.calories >= 130 && data.calories < 150 ? '#F1DBAE' : '#F1DBAE')))
                };

                return (
                    <div className="card" key={data.id} style={calorieStyles}>
                        <div className="card__img"><img src={data.image}/></div>
                        <div className="card__title"><h2>{data.name}</h2></div>
                        <div className="card__subtitle"><p>Calories: {data.calories}</p><p>Servings: {data.servings}</p></div>
                        <div className="card__wrapper">
                        <Link to={`/recipes/${data.id}`}><button className="card__btn">Details</button></Link>
                        <button className="card__btn card__btn-solid" onClick={() => handleDelete(data.id)}>Delete</button>
                        </div>
                     </div>
                );
            })}
            </section>
        </div>
    );
}

export default List;
