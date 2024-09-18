import React from 'react'
import { Movies } from '@/components/Movies';
import { query } from '@/lib/db';

interface Movie {
  title: string;
  src: string;
}
const MoviesPage = async () => {
  const genres = await query<Movie>('SELECT genre_name as title, 1 as id , imageurl as src FROM genre where active = 1');
  console.log(genres)

  return (  
    <Movies movies={genres} />
   );
}

const page = () => { 
  return (
    <MoviesPage/>
  )
}

export default page