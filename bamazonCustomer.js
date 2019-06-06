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
            console.log('ID  Product Name         Price')
            for (var i=0; i < results.length; i++) {
                console.log(results[i].id, results[i].product_name, results[i].price)
            }
            bamazonCustomer.purchase()
        });
    },
    purchase : function() {
        inquirer
        .prompt([{
            message: 'Enter id of item you would like to purchase:',
            name: 'itemID'
        },
        {
            message: 'How much would you like to purchase?',
            name: 'amount',
            validate: function(input) {
                var done = this.async();
                setTimeout(function() {
                    if (isNaN(input)) {
                        done('You need enter a number');
                        return;
                    }
                    done(null, true);
                }, 1000);
            }
        }])
        .then(answers => {
            query = 'SELECT stock_quantity, price FROM products WHERE id = ' + answers.itemID
            connection.query(query, function (err, results, fields) {
                if (err) throw err;
                // console.log('Sending purchase order')
                if (results[0].stock_quantity < answers.amount) {
                    console.log('Purchase Failed')
                    console.log('Sorry! We only have ' +results[0].stock_quantity+ ' left in stock')
                } else {
                    bamazonCustomer.completeOrder(answers.itemID, answers.amount)
                    
                }
            });
        });
    },
    completeOrder : function(productID, amount) {

        console.log('Purchase complete! \nThank you for your business (^-^)/')
    }
}

bamazonCustomer.listStock()