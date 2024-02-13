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

function deleteCustomer(customerNumber)
{
    const customer = getCustomerWithId(customerNumber)
    customers.pop(customer);
}
export {printCustomers, createCustomer, getCustomerWithId, deleteCustomer};