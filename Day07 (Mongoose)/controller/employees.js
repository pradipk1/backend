
const { Employee } = require("../Database/Employee");



// Below method is implemented without pagination
// async function getAllEmployees() {
//     const employees = await Employee.find();

//     return employees;
// }


// Below method is implemented with pagination
async function getAllEmployees({ skip = 0, limit = 20}) {
    // count, skip, limit

    const employees = await Employee.find().skip(skip).limit(limit);

    return employees;
}


async function addEmployee(data) {
    const employee = await Employee.create({
        ...data,
    });

    return employee;
}


async function updateEmployeeById(id, data) {
    await Employee.findByIdAndUpdate(id, {
        $set: {
            ...data
        }
    });

    const updatedEmployee = await Employee.findById(id);

    return updatedEmployee;
}

async function deleteEmployeeById(id) {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    
    return deletedEmployee;
}


module.exports = {
    getAllEmployees,
    addEmployee,
    updateEmployeeById,
    deleteEmployeeById,
}