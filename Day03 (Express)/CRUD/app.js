
const express = require('express');
// const fs = require('fs/promises');
const { getAllEmployees, addEmployee, updateEmployeeById, deleteEmployeeById } = require('./employees');


const app = express();

app.use(express.json());


app.get('/employees', async (req, res) => {
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


app.post('/employees', async (req, res) => {
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


app.patch('/employee/:id', async (req, res) => {
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


app.delete('/employee/:id', async (req, res) => {
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


app.listen(3035, () => {
    console.log('Server listening to http requests on http://localhost:3035');
});