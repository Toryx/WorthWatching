import React from 'react'
import { Movies } from '@/components/Movies';
import { query } from '@/lib/db';

interface Movie {
  id : number;
  title: string;
  src: string;
}
const MoviesPage = async () => {
  const genres = await query<Movie>('SELECT title as title,movie_id as id , "https://m.media-amazon.com/images/M/MV5BMTk1MzY1MzU1MF5BMl5BanBnXkFtZTcwOTQ2NjM3MQ@@._V1_.jpg" as src FROM movie limit 20');
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