const message = "Hello World!";
console.log(message);

import {printCustomers, createCustomer, getCustomerWithId, deleteCustomer} from './customer.js'
console.log(createCustomer("Justin", 22, "justin@gmail.com", "01234567", "K0003" ));
console.log(printCustomers());
//console.log(getCustomerWithId("K0003"));
deleteCustomer("K0003");
console.log("-------------");
console.log(printCustomers());