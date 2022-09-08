import axios from "axios";
const StudentAPI = "https://63185b0eece2736550c78164.mockapi.io/student";
class StudentService{
    static getStudent(){
        return axios.get(StudentAPI);
    }

    static getStudentById(studentId){
        return axios.get(`${StudentAPI}/${studentId}`);
    }

    static removeStudent(id){
        return axios.delete(`${StudentAPI}/${id}`);
    }

    static updateStudent(student){
        return axios.put(`${StudentAPI}/${student.id}`, student);
    }

    static createStudent(student){
        return axios.post(`${StudentAPI}`, student);
    }
}

export default StudentService;