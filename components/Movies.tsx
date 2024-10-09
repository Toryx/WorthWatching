'use client'
import Image from "next/image";
import Link from "next/link";
import { WobbleCard } from "./ui/wobble-card";


interface Movie {
  id: number;
  title: string;
  src: string;
}

export function Movies({ movies }: { movies: Movie[] }) {

  return (
    <div className='overflow-x-auto whitespace-nowrap h-full lg:w-screen-minus-100 p-5'>
      <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto w-full">
        {movies.map((movie, index) => (
          <WobbleCard key={index}
            containerClassName={`col-span-2 sm:col-span-1  relative min-h-[320px] sm:min-h-[420px] `}
            className="">
            <div className="max-w-xs">
              <Link href={`/movies/${movie.id}-${movie.title.replace(/\s+/g, '-')}`}>{movie.title}
                <Image
                  // onMouseEnter={}
                  src={movie.src}
                  alt={movie.title}
                  fill
                  className="object-cover absolute inset-0 z-0"

                />
              </Link>
            </div>
          </WobbleCard>
        ))}
      </div>
    </div>
  );
}