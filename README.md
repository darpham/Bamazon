# Bamazon

Command Line Based Application that utilizes MySQL

Requirements: Node.js, npm, MySQL

Create your own "Bamazaon" store with products and allows customers to purchase.
The purchase will also update backend MySQL DB with new inventory.

__Highlight:__
I created a reusable Node.js script that parses and executes MySQL files.
Prompts for username and password and will store in .env for future use.
Creates Database automatically
File: createDB.js

How To Use:

Git clone this repo
`git clone git@github.com:darpham/Bamazon.git`

Create Database used for this exercise:
`node createDB.js`
This will prompt your for the username and password for your MySQL

Play around as the customer and order items:
`node bamazonCustomer.js`

* Enter ID of item you want to purchase
* Enter quantity
* Confirm order
