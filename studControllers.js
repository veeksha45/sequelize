
const Student = require('../models/student');

// Add a new student
exports.addStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newStudent = await Student.create({ name, email, age });
        console.log("Inserted:", newStudent.toJSON());
        res.status(201).json(newStudent);
    } catch (error) {
        console.error("Insert Error:", error);
        res.status(500).json({ error: "Failed to add student." });
    }
};

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        console.error("Fetch Error:", error);
        res.status(500).json({ error: "Failed to fetch students." });
    }
};

// Get student by ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        console.error("Find Error:", error);
        res.status(500).json({ error: "Failed to get student." });
    }
};

// Update student
exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const { name, email, age } = req.body;
        await student.update({ name, email, age });
        console.log("Updated:", student.toJSON());
        res.json(student);
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ error: "Failed to update student." });
    }
};

// Delete student
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        await student.destroy();
        console.log("Deleted:", student.toJSON());
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        console.error("Delete Error:", error);
        res.status(500).json({ error: "Failed to delete student." });
    }
};
