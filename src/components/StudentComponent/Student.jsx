import React, { useState } from "react";
import "../ClassComponent/Classes.css"

import { NavLink } from "react-router-dom"


const Student = () => {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [birth, setBirth] = useState("")
    const [contact, setContact] = useState("")
    const [fee, setFee] = useState("")
    const [allData, setAllData] = useState([])


    const handleSubmit = () => {

        const alldata = { name, gender, birth, contact, fee }

        setAllData([...allData, alldata])
        setName("");
        setGender("");
        setBirth("");
        setContact("");
        setFee("");
    }

    const handleDelete = (index) => {
        const updatedData = [...allData];
        updatedData.splice(index, 1);
        setAllData(updatedData);
    };



    return (
        <div>
              <div className="Header">
            <h1>School Management App</h1>
            <div className="list">
                <ul>

                    <li><NavLink to="/">Classes-Details</NavLink></li>
                    <li><NavLink to="/student">Students-Details</NavLink></li>
                    <li><NavLink to="/teacher">Teachers-Details</NavLink></li>
                </ul>
            </div>



        </div>
            <div className="addUser">
                {/* <Link to={"/"}>Back </Link> */}
                {/* <h4><Link to="/">Back</Link></h4> */}
                <h3>Students Details</h3>

                {/* <h3>Add New Class</h3> */}
                <div className="addUserForm">
                    <div className="inputGrop">
                        <input type="text" placeholder="Enter your Name" name="name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="inputGrop">
                        <input type="text" placeholder="Enter Your Gender" name="gender" value={gender}
                            onChange={(e) => setGender(e.target.value)} />
                    </div>
                    <div className="inputGrop">
                        <input type="text" placeholder="Enter D.O.B" name="birth" value={birth}
                            onChange={(e) => setBirth(e.target.value)} />
                    </div>
                    <div className="inputGrop">
                        <input type="text" placeholder="Enter Your Contact Details" name="contact" value={contact}
                            onChange={(e) => setContact(e.target.value)} />
                    </div>
                    <div className="inputGrop">
                        <input type="text" placeholder="Enter fees paid" name="fee" value={fee}
                            onChange={(e) => setFee(e.target.value)} />
                    </div>
                    <div className="inputGrop">
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>

            <div className="userTable">

                {/* <Link to={"/add"} className="addButton">Add Class</Link> */}

                <table border={1} cellPadding={10} cellSpacing={0}>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Gender</th>
                            <th>D.O.B</th>
                            <th>Contact Details</th>
                            <th>Fees Paid</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {allData.map((data, index) => {
                        const handleEditClick = () => {
                            setName(data.name);
                            setGender(data.gender);
                            setBirth(data.birth);
                            setContact(data.contact);
                            setFee(data.fee);
                        };

                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.birth}</td>
                                    <td>{data.contact}</td>
                                    <td>{data.fee}</td>
                                    <td className="actionButtons">
                                        <button onClick={() => handleDelete(index)}>Delete</button>
                                        <button className="Edit" onClick={handleEditClick}>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}

                </table>


            </div>
        </div>
    )
}
export default Student;