
const express = require('express');
const { getAllEmployees, addEmployee, updateEmployeeById, deleteEmployeeById } = require('../controller/employees');

const router = express.Router();



// Below method is used without pagination
// router.get('/employees', async (req, res) => {
//     try {
//         const employees = await getAllEmployees();

//         return res.send({
//             data: employees
//         });
        
//     } catch (err) {
//         console.error(err.message);

//         return res.status(500).send('Unexpcted error');
//     }
// });


// Below method is used with pagination
router.get('/employees', async (req, res) => {

    // Below method is basic pagination method
    // const { skip = 0, limit = 20} = req.query;


    // Below method is advance pagination method
    const { page = 1, pageSize = 20 } = req.query;
    let limit = Number(pageSize);
    let skip = Number(pageSize) * (Number(page) - 1);
    
    try {
        const employees = await getAllEmployees({ skip, limit });

        return res.send({
            data: employees
        });
        
    } catch (err) {
        console.error(err.message);

        return res.status(500).send('Unexpcted error');
    }
});


router.post('/employees', async (req, res) => {
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


router.patch('/employee/:id', async (req, res) => {
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


router.delete('/employee/:id', async (req, res) => {
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