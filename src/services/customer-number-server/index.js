//const message = "Hello World!";
//console.log(message);

import {printCustomers, createCustomer, getCustomerWithId, deleteCustomer, getRandomInt} from './customer.js'
//console.log(createCustomer("Justin", 22, "justin@gmail.com", "01234567", "K0003" ));
//console.log(printCustomers());
//console.log(getCustomerWithId("K0003"));
//deleteCustomer("K0003");
//console.log("-------------");
//console.log(printCustomers());

createCustomer("Justin", 22, "justin@gmail.com", "01234567", "K0003" );
createCustomer("David", 18, "david@gmail.com", "1234567", "K0004");
console.log(printCustomers());
console.log("---------");
deleteCustomer(getRandomInt(0,4));
console.log(printCustomers());