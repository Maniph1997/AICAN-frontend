import React from "react"
import "./Home.css"
import { NavLink } from "react-router-dom"



const Home = () => {
    return (
        <div className="Header">
            <h1>School Management App</h1>
            <div className="list">
                <ul>

                    <li><NavLink to="/class">Classes-Details</NavLink></li>
                    <li><NavLink to="/student">Students-Details</NavLink></li>
                    <li><NavLink to="/teacher">Teachers-Details</NavLink></li>
                </ul>
            </div>



        </div>
    )
}

export default Home;


