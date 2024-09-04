import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { Genre } from '@/types/genre';

export async function GET() {
  try {
    const sql = 'SELECT genre_name as titles  FROM genre';
    const genres = await query<Genre>(sql);

    return NextResponse.json(genres);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching genres', error: 'error.message' }, { status: 500 });
  }
}