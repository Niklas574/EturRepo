const customer1 = {
    name: "Sara", 
    age: 22, 
    email: "sara@gmail.com", 
    phoneNumber: "015110284253", 
    customerNumber: "K0001"
}

const customer2 = {
    name: "Niklas", 
    age: 16, 
    email: "niklas@gmail.com", 
    phoneNumber: "015752781728", 
    customerNumber: "K0002"
}

const customers = [customer1, customer2];

function printCustomers()
{
    return customers;
}

function createCustomer(name, age, email, phoneNumber, customerNumber) {
    const newCustomer = {
        name: name,
        age: age,
        email: email,
        phoneNumber: phoneNumber,
        customerNumber: customerNumber
};
    customers.push(newCustomer);
}

function getCustomerWithId(customerNumber)
{
    const filteredResult = customers.find((obj) => obj.customerNumber == customerNumber);
    return filteredResult
}

function deleteCustomer(id)
{
    console.log(id);
    delete customers[id];
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function validCustomerNumber(customerNumber)
{
    const pattern = /ETUR-CN-\w+/;
    const isValid = pattern.test(customerNumber)
    if (isValid)
    {
        if (customers.includes(customerNumber))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}
export {printCustomers, createCustomer, getCustomerWithId, deleteCustomer, getRandomInt, validCustomerNumber};