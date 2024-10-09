'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IconHeart, IconHeartFilled, IconShare } from '@tabler/icons-react';
interface Movie {
  id: number;
  title: string;
  src: string;
  descr: string;
  genres: string;
  release_date: Date;
  vote_average: string;
  homepage: string;
}
import BasicRating from '@/components/rating'
import BasicStaticRating from '@/components/ratingstatic'
import DenseTable from '@/components/demotable'
import { BackgroundGradientDemo } from './3dcard'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function MoviePage({ params }: { params: { id: string } }) {
  const [MovieLiked, setIsMovieLiked] = useState<boolean>(false);
  const [movinfo, setmovieInfo] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // Fetch data at the top level
  const [open, setOpen] = useState(false);

  const shareLink = () => {
    const url = location.href;
    navigator.clipboard.writeText(url);
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const movieInfo = async () => {
        try {
          const response = await fetch('/api/movieinfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ movieId: params.id }),
          });

          const result = await response.json();
          setmovieInfo(result.data[0])
        } catch (error) {
          console.error('API error:', error);
        }
      };

      const ismovieLiked = async () => {
        try {
          const response = await fetch('/api/isliked', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 1, movieId: params.id }),
          });

          const result = await response.json();
          setIsMovieLiked(result.liked)
        } catch (error) {
          console.error('API error:', error);
        }
      };

      await Promise.all([ismovieLiked(), movieInfo()]); // Wait for both to complete
      setLoading(false); // Set loading to false once both are done
    };

    fetchData();
  }, [params.id]);

  const handleClick = async () => {

    try {
      const response = await fetch('/api/toggle-heart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 1, movieId: params.id, isLiked: MovieLiked }),
      });
      setIsMovieLiked(!MovieLiked);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('API error:', error);
    }
  };

  // Render the component
  return (
    <div>
      {loading ? (
        <div role="status" className='w-screen p-5 md:w-screen md:p-0 flex items-center justify-center h-screen '>
          <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-zinc-800 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className='h-auto mx-auto'>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right'} }>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Link Copied
            </Alert>
          </Snackbar>
          <div className='md:h-1/5 h-1/4  w-full relative'>
            <div className='min-h-[200px] sm:min-h-[400px]'>
              <Image
                src={movinfo?.src || ''}
                alt={movinfo?.title || ''}
                fill={true}
                style={{
                  objectFit: 'cover',
                }}

              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/0 to-black/0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
            <div className="absolute bottom-4 right-10 text-white font-bold">
              <div className='flex flex-col items-end text-right'>
                <div className='text-2xl md:text-5xl'>
                  {movinfo?.title.split(":")[0]}
                  <br />
                  {movinfo?.title.split(":")[1]}</div>
                <div className='text-lg md:text-xl'> by El Toro</div>
              </div>

            </div>
            <div className="absolute bottom-4 left-10 text-white font-bold">
              <div className='flex flex-col items-end text-right'>
                <div className='text-sm md:text-2xl'>
                  {movinfo?.genres}
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-xl mt-2 m-2 text-justify grid md:grid-cols-4 grid-cols-1 h-auto   relative
          '>
            <h2 className='mx-2 col-span-1 md:col-span-1 order-3 md:order-2 mb-5 md:mt-5'><DenseTable /></h2>
            <h2 className='col-span-1 md:col-span-2 m-3  order-1 md:order-2'>{movinfo?.descr}</h2>
            <div className='mx-2 col-span-1 order-2 md:order-2 items-center flex-col'>
              <h1 className='text-xl mb-2 text-center'>IMDB Rating</h1>
              <BasicStaticRating />
              <h1 className='text-xl mb-2 text-center'>Rate</h1>
              <BasicRating />
              <div className='grid-cols-2 flex justify-around my-5'>

                {!MovieLiked ? (
                  <button className="m-2" onClick={handleClick}>
                    <IconHeartFilled size={40} className="text-red-800" />
                  </button>
                ) : (
                  <button className="m-2" onClick={handleClick}>
                    <IconHeart size={40} className="text-neutral-800 dark:text-neutral-300 hover:dark:text-red-800" />
                  </button>
                )}
                <button className="m-2" onClick={shareLink}>
                  <IconShare size={40} />
                </button>
              </div>
            </div>
          </div>
          <div className='p-2'>
            <BackgroundGradientDemo movietitle={movinfo?.title ?? "the movie"}/>
          </div>
          <div className='rounded-xl mt-2 m-2 text-justify grid md:grid-cols-4 grid-cols-1 h-auto   relative'>
              
          </div>


        </div>
      )}
    </div>
  );
}