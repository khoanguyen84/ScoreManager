import React, { useState, useEffect } from "react";
import StudentService from './../../services/StudentService/studentService';
function StudentDetail({ studentId }) {
    const [state, setState] = useState({
        loading: false,
        student: {}
    });

    useEffect(() => {
        setState({ ...state, loading: true })
        async function getData() {
            let studentRes = await StudentService.getStudentById(studentId);
            studentRes.data = {
                ...studentRes.data,
                aveScore: ((studentRes.data.java + studentRes.data.fe + studentRes.data.react) / 3).toFixed(2)
            }
            setState({
                ...state,
                student: studentRes.data,
                loading: false
            });
        }
        getData();
    }, [studentId])

    const { loading, student } = state;
    return (
        loading ? <p className="text-center">Loading...</p> : (
            <div className="d-flex flex-column align-items-center">
                <h3>Detail</h3>
                <div className="d-flex flex-column align-items-center w-100">
                    <div className="w-100 bg-primary text-center text-white py-3"></div>
                    <div className="d-flex justify-content-around w-100 border border-primary py-2">
                        <div className="d-flex flex-column align-items-center w-25">
                            <h6>Java</h6>
                            <div className="bg-success text-white w-100 py-3 text-center">{student.java}</div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-25">
                            <h6>FE</h6>
                            <div className="bg-success text-white w-100 py-3 text-center">{student.fe}</div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-25">
                            <h6>React</h6>
                            <div className="bg-success text-white w-100 py-3 text-center">{student.react}</div>
                        </div>
                    </div>
                    <div className="w-50 bg-primary text-center text-white py-3 my-2">{student.aveScore}</div>
                </div>
            </div>
        )
    )
}

export default StudentDetail