import mysql from 'mysql2/promise';

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASS as string,
  database: process.env.DB_NAME as string,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Define a type for your query result
type QueryResult<T> = T[]; // You can also use specific types if you need more control

// Define a generic query function with type assertion
export async function query<T>(sql: string, values?: any[]): Promise<QueryResult<T>> {
  const [rows] = await pool.execute(sql, values);
  return rows as QueryResult<T>;
}