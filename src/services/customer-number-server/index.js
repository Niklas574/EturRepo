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

fastify.register(GetCustomer);
fastify.register(GetCustomers);
fastify.register(PostCustomer);
fastify.register(DeleteCustomer);

// Neuer Endpunkt zum Erstellen eines Reports
fastify.post('/reports', (request, reply) => {
    const newReport = createReport();
    reply.send(newReport);
  });
  
  // Neuer Endpunkt zum Aktualisieren eines Reports anhand der ID
  fastify.put('/reports/:id', (request, reply) => {
    const reportId = request.params.id;
    const updatedData = request.body;
    const existingReport = getReportById(reportId);
    const updatedReport = updateReport(existingReport, updatedData);
    reply.send(updatedReport);
  });
  
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
