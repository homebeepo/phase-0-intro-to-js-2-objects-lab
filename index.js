// Write your solution in this file!
const employee = {
    name:'casey',
    address:'hell'
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const a = {...employee}
    a[key] = value
    return a
}   

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee,key){
    const a = {...employee}
    delete a[key]
    return a
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}