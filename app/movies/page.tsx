'use client'
import { Movies } from '@/components/Movies';
import React, { useEffect, useState } from 'react';
interface Movie {
  id: number;
  title: string;
  src: string;
}

const Page = () => {
  const [movieSearch, setMovieSearch] = useState<string>('');
  const [showDeleteIcon, setShowDeleteIcon] = useState<boolean>(false);
  const [movinfo, setmovieInfo] = useState<Movie[] | null>(null);
  const [movexists, setMovieExists] = useState<boolean | null>(true);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (movieSearch != '') {
      setShowDeleteIcon(true);
    } 
    setMovieSearch(event.target.value);
  };
  const searchMovie = async () => {
    console.log(movieSearch)
    try {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movieId: movieSearch }),
      });

      const result = await response.json();
      setmovieInfo(result.data)
      setMovieExists(result.success)
    } catch (error) {
      console.error('API error:', error);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchMovie(); // Call the function when Enter is pressed
    }
  };

  useEffect(() => {
    if (movinfo !== null) {
      console.log(movinfo); // This will now log the updated movie info
    }else{searchMovie()}
    
  }, [movinfo]); 
  return (
    <div>
      <div className="pt-5 max-w-md mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input  onKeyDown={handleKeyDown} value={movieSearch}       onChange={handleInputChange} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies, Actors..." required />
          {/* {showDeleteIcon?(<div></div>):(<IconCancel className='z-20 className="text-white absolute end-20 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 '/>)} */}
          <button onClick={() => searchMovie()} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-900 dark:hover:bg-purple-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </div>
      {movexists?<Movies movies={movinfo ?? []} /> :
       <div className="flex items-center justify-center pt-10">
        <div >No Movie Found...</div>
       </div>}
       
    </div>

  )
}

export default Page