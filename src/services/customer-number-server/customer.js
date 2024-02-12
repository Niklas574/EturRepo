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

const customers = [{customer1}, {customer2}];
function printCustomers(customers)
{
    return customers;
}
printCustomers(customers);

export {printCustomers};