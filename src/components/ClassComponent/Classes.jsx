import React, { useState } from "react";
import "./Classes.css";
import "../Home/Home.css"

import { NavLink } from "react-router-dom";

const Classes = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [teacher, setTeacher] = useState("");
  const [student, setStudent] = useState("");
  const [student_list, setStudent_list] = useState("");
  const [allData, setAllData] = useState([]);

  const handleSubmit = () => {
    const alldata = { name, year, teacher, student, student_list };

    setAllData([...allData, alldata]);
    setName("");
    setYear("");
    setTeacher("");
    setStudent("");
    setStudent_list("");
  };

  const handleDelete = (index) => {
    const updatedData = [...allData];
    updatedData.splice(index, 1);
    setAllData(updatedData);
  };

  // const handleEdit = (index, newData) => {
  //     const updatedData = [...allData];
  //     updatedData[index] = newData;
  //     setAllData(updatedData);
  //     // Clear input fields after editing

  // };

  return (
    <div>
      <div className="Header">
        <h1>School Management App</h1>
        <div className="list">
          <ul>
            <li>
              <NavLink to="/">Classes-Details</NavLink>
            </li>
            <li>
              <NavLink to="/student">Students-Details</NavLink>
            </li>
            <li>
              <NavLink to="/teacher">Teachers-Details</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="addUser">
        {/* <Link to={"/"}>Back </Link> */}
        {/* <h4>
          <Link to="/">Back</Link>
        </h4> */}
        <h3>Classes Details</h3>

        <h3>Add New Class</h3>
        <div className="addUserForm">
          <div className="inputGrop">
            <input
              type="text"
              placeholder="Enter your class Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputGrop">
            <input
              type="text"
              placeholder="Enter Year"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="inputGrop">
            <input
              type="text"
              placeholder="Teacher Name"
              name="teacher"
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
            />
          </div>
          <div className="inputGrop">
            <input
              type="text"
              placeholder="Student Fees"
              name="student"
              value={student}
              onChange={(e) => setStudent(e.target.value)}
            />
          </div>
          <div className="inputGrop">
            <input
              type="text"
              placeholder="Students List"
              name="student_list"
              value={student_list}
              onChange={(e) => setStudent_list(e.target.value)}
            />
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
              <th>Class_Name</th>
              <th>Year</th>
              <th>Teacher</th>
              <th>Student_fees</th>
              <th>Student_List</th>
              <th>Action</th>
            </tr>
          </thead>
          {allData.map((data, index) => {
            const handleEditClick = () => {
              setName(data.name);
              setYear(data.year);
              setTeacher(data.teacher);
              setStudent(data.student);
              setStudent_list(data.student_list);
            };

            return (
              <tbody key={index}>
                <tr>
                  <td>{data.name}</td>
                  <td>{data.year}</td>
                  <td>{data.teacher}</td>
                  <td>{data.student}</td>
                  <td>{data.student_list}</td>
                  <td className="actionButtons">
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button className="Edit" onClick={handleEditClick}>
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default Classes;
