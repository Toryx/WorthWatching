// app/api/toggle-heart/route.ts

import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  const { userId, movieId, isLiked } = await request.json();

  try {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST as string,
        user: process.env.DB_USER as string,
        password: process.env.DB_PASS as string,
        database: process.env.DB_NAME as string,
    });

    if (!isLiked) {
      await connection.query(`DELETE FROM movie_user_likes WHERE user_id = ? AND movie_id = ?`, [userId, movieId]);
    } else {
      console.log('ins')
      await connection.query(`INSERT INTO movie_user_likes(user_id, movie_id,recstamp) VALUES (?, ?,now())`, [userId, movieId]);
    }

    await connection.end();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ success: false, error: 'Database error' });
  }
}
