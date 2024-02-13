const customer1 = {
    name: "Sara", 
    age: 22, 
    email: "sara@gmail.com", 
    phoneNumber: "015110284253", 
    customerNumber: "ETUR-CN-1"
}

const customer2 = {
    name: "Niklas", 
    age: 16, 
    email: "niklas@gmail.com", 
    phoneNumber: "015752781728", 
    customerNumber: "ETUR-CN-2"
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

function deleteCustomer(index)
{
    console.log(index);
    delete customers[index];
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

export async function routes (fastify, options) {
    fastify.get('/customers', async (request, reply) => {
      return customers;
    });
  };

  export async function routes (fastify, options) {
    fastify.get('/customers/:id', async (request, reply) => {
        const id = request.params.id;
        return customers[id];
    });
  }

  export async function routes (fastify, options) {
    fastify.post('/customers', async (request, reply) => {
        const newCustomer = request.body;
        await createCustomer(newCustomer);
        return newCustomer;
    });
  }

  export async function routes (fastify, options) {
    fastify.delete('/customers/:id', async (request, reply) => {
        const id = request.params.id;
        await deleteCustomer(id);
        return "Customer deleted!";
    });
  }

  

export {printCustomers, createCustomer, getCustomerWithId, deleteCustomer, getRandomInt, validCustomerNumber};