
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  const { userId, movieId } = await request.json();

  try {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST as string,
        user: process.env.DB_USER as string,
        password: process.env.DB_PASS as string,
        database: process.env.DB_NAME as string,
    });

   
    const [rows]: any[]  = await connection.query(`SELECT id FROM movie_user_likes where 
    user_id = ? and movie_id =?`, [userId, movieId]);
    

    await connection.end();
    if (rows.length > 0) {
      return NextResponse.json({ success: true, liked: true, data: rows });
    } else {
      return NextResponse.json({ success: true, liked: false });
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ success: false, error: 'Database error' });
  }
}
