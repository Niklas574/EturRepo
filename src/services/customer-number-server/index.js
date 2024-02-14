import Fastify from "fastify";
import cors from '@fastify/cors';  // Importiere das CORS-Plugin

const fastify = Fastify({
    logger: true
});

// Registriere das CORS-Plugin
fastify.register(cors, {
    origin: '*'
});

import { GetCustomer, GetCustomers, PostCustomer, DeleteCustomer } from './customer.js';
import { GetReport, GetReports, PostReport } from './open-report-functions.js';

fastify.register(GetCustomer);
fastify.register(GetCustomers);
fastify.register(PostCustomer);
fastify.register(DeleteCustomer);

fastify.register(GetReport);
fastify.register(GetReports);
fastify.register(PostReport);

  
try {
    await fastify.listen(4040);
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}

// import { printCustomers, createCustomer, getCustomerWithId, deleteCustomer, getRandomInt } from './customer.js';

// createCustomer("Justin", 22, "justin@gmail.com", "01234567", "ETUR-CN-3");
// createCustomer("David", 18, "david@gmail.com", "1234567", "ETUR-CN-4");
// console.log(printCustomers());
// console.log("---------");
// deleteCustomer(getRandomInt(0, 4));
// console.log(printCustomers());
