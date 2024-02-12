import React, { useState } from 'react';
import CreateItemForm from '../Components/CreateItemForm'; // Import the CreateItemForm component
import List from "../Components/List";

function Dashboard() {
    const [listItems, setListItems] = useState([]);

    const handleAddItem = (newItem) => {
        setListItems([...listItems, newItem]);
    };

    return (
        <div className='dashboard'>
            <CreateItemForm onAddItem={handleAddItem} /> {/* Include the CreateItemForm component */}
            <List listItems={listItems} /> {/* Pass the listItems state to the List component */}
        </div>
    );
}

export default Dashboard;
