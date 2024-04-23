
import { pool } from './mysql2_connect.js';


// Define an async function to fetch records from the product table
export async function fetchProducts() {
  const connection = await pool.getConnection();
  try {
    const [rows, fields] = await connection.query('SELECT * FROM product');
    console.log('Products:', rows);
    return rows 
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}


