//const message = "Hello World!";
//console.log(message);
import Fastify from "fastify";

const fastify = Fastify({
    logger: true
})

// const getOptions = {
//     schema: {
//         response: {
//             200: {
//                 type: "object",
//                 properties: {
//                     hello: { type: "string" },

//                 },
//             },
//         },
//     },
// };

import { GetCustomer, GetCustomers, PostCustomer, DeleteCustomer } from './customer.js'

fastify.register(GetCustomer);
fastify.register(GetCustomers);
fastify.register(PostCustomer);
fastify.register(DeleteCustomer);

try{
    await fastify.listen(4040);
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
 




import {printCustomers, createCustomer, getCustomerWithId, deleteCustomer, getRandomInt} from './customer.js'



// createCustomer("Justin", 22, "justin@gmail.com", "01234567", "ETUR-CN-3" );
// createCustomer("David", 18, "david@gmail.com", "1234567", "ETUR-CN-4");
// console.log(printCustomers());
// console.log("---------");
// deleteCustomer(getRandomInt(0,4));
// console.log(printCustomers());