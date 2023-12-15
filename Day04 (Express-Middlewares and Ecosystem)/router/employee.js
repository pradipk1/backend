
const express = require('express');
const { getAllEmployees, addEmployee, updateEmployeeById, deleteEmployeeById } = require('../employees');

const router = express.Router();

function auth(req, res, next) {
    // only call next() if use is logged in

    let userLoggedIn = true;

    if(userLoggedIn) {
        next();

    } else {
        res.status(402).send({
            message: 'Not logged in'
        })
    }
}

function isUserOwner(req, res, next) {
    // only call next() if user is owner

    let isLoggedInUserOwner = true;

    if(isLoggedInUserOwner) {
        next();

    } else {
        return res.status(402).send({
            message: 'Not authorized for this action'
        })
    }
}

// router.use(auth) // This will apply auth middleware across all of routes

router.get('/employees', async (req, res) => {
    try {
        const employees = await getAllEmployees();

        return res.send({
            data: employees
        });
        
    } catch (err) {
        console.error(err.message);

        return res.status(500).send('Unexpcted error');
    }
});


router.post('/employees', auth, isUserOwner, async (req, res) => {
    try {
        const employee = await addEmployee(req.body);

        return res.send({
            data: employee
        });
        
    } catch (err) {
        console.error(err.message);

        return res.status(500).send('Unexpcted error');
    }
});


router.patch('/employee/:id', auth, async (req, res) => {
    try {
        const employee = await updateEmployeeById(req.params.id, req.body);

        return res.send({
            data: employee
        });
        
    } catch (err) {
        console.error(err.message);

        return res.status(500).send('Unexpcted error');
    }
});


router.delete('/employee/:id', auth, isUserOwner, async (req, res) => {
    try {
        const employee = await deleteEmployeeById(req.params.id);

        return res.send({
            data: employee
        });
        
    } catch (err) {
        console.error(err.message);

        if(err.message==='Employee does not exist') {
            return res.status(404).send({
                message: 'Employee does not exist'
            });
        }
        
        return res.status(500).send("Unexpected error");
    }
});


module.exports = router;