import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import StudentService from './../../services/StudentService/studentService';

function CreateStudent() {
    const [student, setStudent] = useState({
        studentName: '',
        fe: 0,
        java: 0,
        react: 0,
        id: 0
    })

    const navigate = useNavigate();

    const handleInput = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            let result = await StudentService.createStudent(student);
            if (result) {
                navigate("/student", {replace: true});
            }

        } catch (error) {

        }
    }
    return (
        <form onSubmit={handleSave}>
            <div className="mb-3 row">
                <label htmlFor="studentName" className="col-3 col-form-label">Student Name</label>
                <div className="col-9">
                    <input type="text" className="form-control" name="studentName" id="studentName" onChange={handleInput} />
                </div>
            </div>
            <div class="mb-3 row">
                <label htmlFor="java" className="col-3 col-form-label">Java</label>
                <div className="col-9">
                    <input type="number" className="form-control" name="java" id="java" onChange={handleInput} />
                </div>
            </div>
            <div class="mb-3 row">
                <label htmlFor="fe" className="col-3 col-form-label">Fontend</label>
                <div className="col-9">
                    <input type="number" className="form-control" name="fe" id="fe" onChange={handleInput} />
                </div>
            </div>
            <div class="mb-3 row">
                <label htmlFor="react" className="col-3 col-form-label">React</label>
                <div className="col-9">
                    <input type="number" className="form-control" name="react" id="react" onChange={handleInput} />
                </div>
            </div>
            <div class="mb-3 row">
                <label className="col-3 col-form-label"></label>
                <div className="col-9">
                    <input type="submit" className="btn btn-success" value="Create" />
                </div>
            </div>
        </form>
    )
}

export default CreateStudent;