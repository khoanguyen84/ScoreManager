import React, { useState, useEffect } from "react";
import studentData from '../../db/student.json';

function StudentManager() {
    const [students, setStudents] = useState([]);

    useEffect(() => setStudents(studentData), []);

    return (
        <div className="d-flex flex-column align-items-center">
            <h3>Students Info Table</h3>
            <table className="w-75 table">
                <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th>Student Name</th>
                        <th className="text-center">Java</th>
                        <th className="text-center">FE</th>
                        <th className="text-center">React</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((std) => (
                            <tr key={std.id}>
                                <td className="text-center">{std.id}</td>
                                <td>{std.studentName}</td>
                                <td className="text-center">{std.java}</td>
                                <td className="text-center">{std.fe}</td>
                                <td className="text-center">{std.react}</td>
                                <td className="text-center">
                                    <i className="fa fa-edit me-2"></i>
                                    <i className="fa fa-times text-danger fw-bolder"></i>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StudentManager;