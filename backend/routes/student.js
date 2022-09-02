const router = require('express').Router();
const student = require('../models/student');

/* Add Student */
router.post('/add', async(req,res) => {
    const Student = {
        name: req.body.name,
        age: Number(req.body.age),
        gender: req.body.gender
    }

    try {
        const newStudent = new student(Student);
        await newStudent.save();
        res.status(200).send({status:"Student Added!"});
    } catch (error) {
        res.status(400).send(err);
    }
})

/* View all student details */
router.get('/', async(req,res) => {
    try {
        const Details = await student.find();
        res.status(200).send({status: Details});
    } catch (error) {
        
    }
})

/* View by ID */
router.get('/:id', async(req,res) => {
    const userID = req.params.id;

    try {
        const studentDetails = await student.findById(userID);
        res.status(200).send({user: studentDetails});
    } catch (error) {
        res.status(400).send(error);
    }
})

/* Update by ID */
router.put('/update/:id', async (req,res) => {
    const userID = req.params.id;

    const Student = {
        name: req.body.name,
        age: Number(req.body.age),
        gender: req.body.gender
    }

    await student.findByIdAndUpdate(userID,Student).then(()=> {
        res.status(200).send({status:"Student Updated!"});
    }).catch((error)=> {
        res.status(400).send(error);
    })
})

/* Delete by ID */
router.delete('/delete/:id', async (req,res) => {
    const userID = req.params.id;

    try {
        await student.findByIdAndDelete(userID)
        res.status(200).send({status:"Student Deleted!"});
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;
