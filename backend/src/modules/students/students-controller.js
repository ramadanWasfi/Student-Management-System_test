const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    try {
        let students = getAllStudents(req);
        console.log(students);
        res.send(students);
    } catch(error) {
        throw error;
    }

});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    try {
        addNewStudent(req);
        res.send(200);
    }catch(error){
        throw error;
    }
   
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    try {
        let result = updateStudent(req.params.id);
        res.send(result);
    } catch(error) {
        throw error;
    }
    

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    try {
        let result = getStudentDetail(req.params.id);
        res.send(result);
    } catch(error) {
        throw error;
    }

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    try {
        let result = setStudentStatus(req.params);
        res.send(result);
    } catch(error) {
        throw error;
    }

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
