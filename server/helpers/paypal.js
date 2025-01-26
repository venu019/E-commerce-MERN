const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AenfgF2zvJSLERgrELYxZztXzmcdlFDqQIrz09gHFfCDM9uLh4uuqADuEsmQKynM2jj_uNULImOMzDIG",
  client_secret: "ENX83lVNiGBQBWK2MjqRODxnwZIozdBUiSJnfXPn1XF6jTMgFSXgEiZTlIC36dKIOGA-A-t1arw0SAbp",
});

module.exports = paypal;
