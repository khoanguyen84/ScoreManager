import React, { useState, useEffect } from "react";
import studentData from '../../db/student.json';
import ViewStudent from "../ViewStudent/ViewStudent";
function SearchTab() {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({});
    const [keyword, setKeyword]  = useState();

    useEffect(() => setStudents(studentData), []);

    const viewStudent = (stdId) => {
        let student = students.find((std) => std.id === stdId);
        setStudent({
            ...student,
            aveScore: ((student.java + student.fe + student.react) / 3).toFixed(2)
        });
    }

    const handleSearch = () => {
        setStudent({});
        if(keyword){
            if(!validator(keyword)){
                document.querySelector("#errorMessage").classList.remove('d-none');
                return;
            }
            let result = students.filter((std) => std.studentName.toLowerCase().includes(keyword.toLowerCase()));
            setStudents(result);
        }
        else{
            setStudents(studentData);
        }
        document.querySelector("#errorMessage").classList.add('d-none');
    }

    const validator = (text) => {
        var regex = /^[a-zA-Z ]*$/;
        return text.match(regex);
    }

    return (
        <React.Fragment>
            <div className="d-flex flex-column align-items-center">
                <h3>Search Form</h3>
                <div className="search-form d-flex w-50 align-items-center">
                    <input type="text" className="form-control" onInput={(e) => setKeyword(e.target.value)}/>
                    <button className="btn btn-primary btn-sm" onClick={handleSearch}>Search</button>
                </div>
                <p id="errorMessage" className="text-danger d-none">Student Name you entered is not valid, please try again!</p>
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
                                <tr key={std.id} className={`${std.java >= 5 && std.fe >= 5 && std.react >= 5 ? "row-active" : "bg-secondary"}`}>
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
            {
                Object.keys(student).length > 0 && (
                    // <ViewStudent 
                    //     studentName = {student.studentName}
                    //     fe = {student.fe}
                    //     react = {student.react}
                    //     java = {student.java}
                    //     aveScore = {student.aveScore}
                    // />
                    <ViewStudent data = {student} />
                )
            }
        </React.Fragment>

    )
}

export default SearchTab;