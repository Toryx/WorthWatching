// app/api/toggle-heart/route.ts

import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
export async function POST(request: Request) {
  const {  userId} = await request.json();
  try {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST as string,
        user: process.env.DB_USER as string,
        password: process.env.DB_PASS as string,
        database: process.env.DB_NAME as string,
    });
    const [rows]: any[] = await connection.query(`select movie.movie_id as id,title,recstamp,poster as src from user_movie_likes l left join movie on movie.movie_id=l.movie_id where user_id =  ?`, [userId]);
    console.log([rows]);
    await connection.end();
    if (rows.length > 0) {
      return NextResponse.json({ success: true,  data: rows });
    } else {
      return NextResponse.json({ success: true, data:'' });
    }
   
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ success: false, error: 'Database error' });
  }
}
