import React, { useState, useEffect } from "react";
import studentData from '../../db/student.json';
function SearchTab() {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({
        id : 0,
        studentName : "",
        java : 0,
        fe : 0,
        react : 0
    });

    useEffect(() => setStudents(studentData), []);

    const viewStudent = (stdId) => {
        let student = students.find((std) => std.id === stdId);
        setStudent(student);
    }
    return (
        <React.Fragment>
            <div className="d-flex flex-column align-items-center">
                <h3>Search Form</h3>
                <div className="search-form d-flex w-50 align-items-center">
                    <input type="text" className="form-control" />
                    <button className="btn btn-primary btn-sm">Search</button>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <h3>Students Info</h3>
                <table className="w-75 table">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th>Student Name</th>
                            <th className="text-center">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((std) => (
                                <tr className={`${ std.java >= 5 && std.fe >= 5 && std.react >= 5 ? "row-active" : "bg-secondary"}`}>
                                    <td>{std.id}</td>
                                    <td>{std.studentName}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm" onClick={() => viewStudent(std.id)}>View</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="d-flex flex-column align-items-center">
                <h3>Detail</h3>
                <div className="d-flex flex-column align-items-center w-100">
                    <div className="w-100 bg-primary text-center text-white py-3">Tuan Doan</div>
                    <div className="d-flex justify-content-around w-100 border border-primary py-2">
                        <div className="d-flex flex-column align-items-center w-25">
                            <h6>Java</h6>
                            <div className="bg-success text-white w-100 py-3 text-center">2</div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-25">
                            <h6>FE</h6>
                            <div className="bg-success text-white w-100 py-3 text-center">2</div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-25">
                            <h6>React</h6>
                            <div className="bg-success text-white w-100 py-3 text-center">2</div>
                        </div>
                    </div>
                    <div className="w-50 bg-primary text-center text-white py-3 my-2">3.4</div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default SearchTab;