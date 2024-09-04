import { FocusCards } from '@/components/ui/focus-cards';
import React from 'react'
import { query } from '@/lib/db';
import { Genre } from '@/types/genre';


export async function GenresPage() {
  const genres = await query<Genre>('SELECT genre_name as title, 1 as id , imageurl as src FROM genre');
  console.log(genres)
  return (
    <FocusCards cards={genres} />
  );
}

const page = () => {
  return (
    <div className='h-full'>
      <GenresPage/>
    </div>

  )
}

export default page