const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    const payload = req.body;
    const result = await getAllStudents(payload);
    res.json(result);
});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    const payload = req.body;
    const result = await addNewStudent(payload);
    res.json(result);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    const {id} = req.params;
    const result = await updateStudent(id);
    res.json(result);

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    const {id} = req.params;
    const result = await getStudentDetail(id);
    res.json(result);

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    const { id: reviewerId } = req.user;
    const { id: userId } = req.params;
    const { status } = req.body;
    const result = await setStudentStatus({ userId, reviewerId, status });
    res.json(result);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
