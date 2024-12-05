// app/api/toggle-heart/route.ts

import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  const {movieId} = await request.json();

  try {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST as string,
        user: process.env.DB_USER as string,
        password: process.env.DB_PASS as string,
        database: process.env.DB_NAME as string,
    });
    const searchQuery = `%${movieId}%`;
    const [rows]: any[] =  await connection.query(`SELECT title as title,movie_id as id ,
    IFNULL(poster, "https://m.media-amazon.com/images/M/MV5BMTk1MzY1MzU1MF5BMl5BanBnXkFtZTcwOTQ2NjM3MQ@@._V1_.jpg") as src
      FROM movie where is_active=1 and title like ?`, [searchQuery])
      ;
    // if (rows.length = 0) {
    //   const [rows]: any[] = await connection.query(`SELECT title as title,movie_id as id ,
    //     IFNULL(poster, "https://m.media-amazon.com/images/M/MV5BMTk1MzY1MzU1MF5BMl5BanBnXkFtZTcwOTQ2NjM3MQ@@._V1_.jpg") as src
    //       FROM movie where is_active=1 `);
    // }
  
    await connection.end();
    if (rows.length > 0) {
      return NextResponse.json({ success: true,  data: rows });
    } else {
      return NextResponse.json({ success: false, data:'' });
    }
   
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ success: false, error: 'Database error' });
  }
}
