// import Cookies from 'js-cookie';

const saveItem = (item, value) => {
    const json = JSON.stringify(value)
    localStorage.setItem(item, json)
}

const getItem = (item) => {
    const json = localStorage.getItem(item)
    return json && JSON.parse(json)
}

const deleteItem = (item) => {
    localStorage.removeItem(item)
}



const saveEmployeeLocally = (employee) => saveItem("employee", employee)
const getLocalEmployee = () => { return getItem("employee") }
const deleteLocalEmployee = () => deleteItem("employee")

const saveCompanyLocally = (company) => saveItem("company", company)
const getLocalCompany = () => { return getItem("company") }
const deleteLocalCompany = () => deleteItem("company")

const saveUser = (user) => saveItem("user", user)
const getLocalUser = () => { return getItem("user") }
const deleteLocalUser = () => deleteItem("user")

export {
    saveItem, getItem, deleteItem,
    saveEmployeeLocally, getLocalEmployee, deleteLocalEmployee,
    saveCompanyLocally, getLocalCompany, deleteLocalCompany,
    saveUser, getLocalUser, deleteLocalUser,
}