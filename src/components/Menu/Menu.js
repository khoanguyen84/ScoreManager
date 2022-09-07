import React, { useState } from "react";
import { Link } from 'react-router-dom';

const menus = [ 
    {
        name: "Student Manager",
        uri: '/student'
    },
    {
        name: "Create Student",
        uri: '/create'
    },
    {
        name: "Search Tab",
        uri: '/search'
    }
]
function Menu(){
    const [menu, setMenu] = useState("Student Manager");

    const changeMenu = (e) => {
        setMenu(e.target.text)
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <h3>Menu item</h3>
            {
                menus.map((item) => (
                    <Link key={item.name} 
                            to={item.uri} 
                            className={`w-100 flex-grow-1 btn btn-outline-primary mb-2 ${item.name === menu ? 'active' : ''}`}
                            onClick={changeMenu}
                            >
                    {item.name}</Link>
                ))
            }
        </div>
    )
}

export default Menu;