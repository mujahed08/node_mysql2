import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'rxpad',
    database: 'billdb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });