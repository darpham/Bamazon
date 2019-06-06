DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    stock_quantity INT NOT NULL
);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ('Raspberry Pi 3 B+', 'Technology', '149.99', '10'),
    ('Protein Powder', 'Nutrition', '59.99', '15'),
    ('Jaybird X3 Wireless Headphones', 'Technology', '119.99', '8'),
    ('Corsair K63 Wireless Keyboard', 'Technology', '89.99', '5'),
    ('Light-wash Demin', 'Clothing', '59.99', '15'),
    ('Anker Lightning Cables', 'Technology', '19.99', '20'),
    ('Bug-A-Salt 2.0 Fly Gun', 'Garden & Outdoor', '35.65', '13'),
    ('260 Pack Gel Pens Set, Feela 130 Colored Gel Pens', 'Arts & Crafts', '15.82', '43'),
    ('The Magnolia Journal', 'Magazine Subscriptions', '20.00', '100'),
    ('TomCare Solar Lights', 'Tools and Home Improvement', '78.99', '38');