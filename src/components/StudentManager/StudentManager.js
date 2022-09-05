import React, { useState, useEffect } from "react";
import studentData from '../../db/student.json';

function StudentManager() {
    const [students, setStudents] = useState([]);

    useEffect(() => setStudents(studentData), []);

    const handleRemove = (stdId) => {
        let confirm = window.confirm('Are you sure to remove this student?');
        if(confirm){
            setStudents(students.filter((std) => std.id !== stdId));
        }
    }

    const handleEditStudent = (stdId) => {
        let student = students.find((std) => std.id === stdId);
        document.querySelector(`#tr_${stdId}>td:nth-child(2)`).innerHTML = `<input class='form-control' value='${student.studentName}' />`;
        document.querySelector(`#tr_${stdId}>td:nth-child(3)`).innerHTML = `<input class='form-control w-50' value='${student.java}' />`;
        document.querySelector(`#tr_${stdId}>td:nth-child(4)`).innerHTML = `<input class='form-control w-50' value='${student.fe}' />`;
        document.querySelector(`#tr_${stdId}>td:nth-child(5)`).innerHTML = `<input class='form-control w-50' value='${student.react}' />`;
        document.querySelector(`#tr_${stdId} .fa-edit`).classList.toggle('d-none');
        document.querySelector(`#tr_${stdId} .fa-check`).classList.toggle('d-none');
    }

    const handleSaveStudent = (stdId) => {
        let student = students.find((std) => std.id === stdId);
        student.studentName = document.querySelector(`#tr_${stdId}>td:nth-child(2)>input`).value;
        student.java = Number(document.querySelector(`#tr_${stdId}>td:nth-child(3)>input`).value);
        student.fe = Number(document.querySelector(`#tr_${stdId}>td:nth-child(4)>input`).value);
        student.react = Number(document.querySelector(`#tr_${stdId}>td:nth-child(5)>input`).value);

        document.querySelector(`#tr_${stdId} .fa-edit`).classList.toggle('d-none');
        document.querySelector(`#tr_${stdId} .fa-check`).classList.toggle('d-none');

        document.querySelector(`#tr_${stdId}>td:nth-child(2)`).innerHTML = student.studentName;
        document.querySelector(`#tr_${stdId}>td:nth-child(3)`).innerHTML = student.java;
        document.querySelector(`#tr_${stdId}>td:nth-child(4)`).innerHTML = student.fe;
        document.querySelector(`#tr_${stdId}>td:nth-child(5)`).innerHTML = student.react;
    }
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
                            <tr id={`tr_${std.id}`} key={std.id}>
                                <td className="text-center">{std.id}</td>
                                <td>{std.studentName}</td>
                                <td className="text-center">{std.java}</td>
                                <td className="text-center">{std.fe}</td>
                                <td className="text-center">{std.react}</td>
                                <td className="text-center">
                                    <i className="fa fa-edit me-2"
                                        onClick={() => handleEditStudent(std.id)}
                                    ></i>
                                    <i className="fa fa-check me-2 text-success fw-bolder d-none"
                                        onClick={() => handleSaveStudent(std.id)}
                                    ></i>
                                    <i className="fa fa-times text-danger fw-bolder"
                                        onClick={() => handleRemove(std.id)}
                                        ></i>
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