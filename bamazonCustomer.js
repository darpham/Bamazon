require('dotenv').config()
const mysql = require('mysql'),
      path = require('path'),
      fs = require('fs'),
      inquirer = require('inquirer')


connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306,
    database: 'bamazon'
});

connection.connect()

var bamazonCustomer = {
    listStock : function() {
        query = 'SELECT id, product_name, price FROM products WHERE stock_quantity > 0'
        connection.query(query, function (err, results, fields) {
            if (err) throw err;
            for (var i=0; i < results.length; i++) {
                console.log(results[i].id, results[i].product_name, results[i].price)
            }
            
        
        });
    },

}

bamazonCustomer.listStock()