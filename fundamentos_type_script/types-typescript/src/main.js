console.log('inicio');
// Number
// Explicito
var phone;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error
// Inferido
var phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Tipo: Boolean
// Tipado Explicito
var isPro;
isPro = true;
// isPro = 1;
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error!
// Strings
var username = 'cguzman';
username = "Luis";
// username = true; // Error: tipo string
// Template String
// Uso de back-tick `
var userInfo;
userInfo = "\n    User Info:\n    username: " + username + "\n    firstName: " + (username + ' Carlos') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
