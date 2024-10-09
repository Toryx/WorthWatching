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

    const [rows]: any[] = await connection.query(`SELECT title as title, movie_id as id,
    overview as descr, release_date, vote_average,
    homepage,
    IFNULL(banner,"https://picfiles.alphacoders.com/231/231190.jpg") as src,
    (SELECT GROUP_CONCAT(genre.genre_name) AS gg
    FROM movie_genres
    LEFT JOIN genre ON genre.genre_id = movie_genres.genre_id
    WHERE movie_id = movie.movie_id) as genres
    FROM movie WHERE movie_id = ?`, [movieId]);
  

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
