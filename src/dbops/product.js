import mysql from "mysql2/promise";
import { pool } from "./mysql2_connect.js";

// Define an async function to fetch records from the product table
export async function fetchProducts() {
  const connection = await pool.getConnection();
  try {
    const [rows, fields] = await connection.query(
      "SELECT * FROM product order by id desc"
    );
    console.log("Products:", rows);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

export async function insert_product(product) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rxpad",
    database: "billdb",
  });

  try {
    // Insert a new record into the 'users' table
    const [result] = await connection.execute(
      "INSERT INTO product (product_name,product_code,quantity,unit_price,apply_discount,packing) VALUES (?, ?, ?, ?, ?, ?)",
      [
        product.product_name,
        product.product_code,
        product.qty,
        product.unit_price,
        product.apply_discount,
        product.packing,
      ]
    );

    // Output the inserted record details
    console.log("Inserted record ID:", result.insertId);
  } catch (error) {
    console.error("Error inserting record:", error);
  } finally {
    // Close the connection
    await connection.end();
  }
}

export async function fetch_product_by_id(product_id) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(
      "SELECT * FROM product WHERE id = ?",
      [product_id]
    );
    console.log("Products:", rows);
    return rows[0];
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}

// const [rows] = await connection.execute('SELECT * FROM your_table WHERE id = ?', [id]);

//     // Release the connection
//     connection.release();

//     // Return the fetched record
//     return rows[0];
