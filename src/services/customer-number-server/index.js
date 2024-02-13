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


// Event Listener für den "Hinzufügen"-Button
document.getElementById('button1').addEventListener('click', async function() {
    // Daten aus den Input-Feldern abrufen
    let customerName = document.getElementById('customerName').value;
    let customerNumber = document.getElementById('customerNumber').value;

    // Daten für den HTTP-Aufruf vorbereiten
    let requestData = {
        name: customerName,
        customerNumber: customerNumber
    };

    // HTTP-Aufruf über Fetch API an den Server
    try {
        const response = await fetch('deine-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (response.ok) {
            // Erfolgreiche Antwort verarbeiten
            const responseData = await response.json();
            alert('Kunde erfolgreich hinzugefügt: ' + JSON.stringify(responseData));
        } else {
            // Fehler verarbeiten
            console.error('Fehler beim Hinzufügen des Kunden:', response.statusText);
        }
    } catch (error) {
        console.error('Fehler beim Hinzufügen des Kunden:', error);
    }
});


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