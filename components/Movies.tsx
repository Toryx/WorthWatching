'use client'
import { query } from "@/lib/db";
import { Genre } from "@/types/genre";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import Link from "next/link";


interface Movie {
    id:number;
    title: string;
    src: string;
  }
export function Movies({ movies }: { movies: Movie[] }) {
    function flattenArray(arr: number[][]): number[] {
        return arr.reduce((acc, val) => acc.concat(val), []);
      }
      
      // Function to shuffle an array
      function shuffleArray(array: number[]): number[] {
        let currentIndex = array.length, randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      const handleMouseEnter = () => {

      }
      
      // Given combinations array
      const combinations: number[][] = [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],    
        [2, 2],
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],    
        [2, 2],
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],    
        [2, 2],
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],    
        [2, 2],
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],    
        [2, 2],
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],    
        [2, 2],
      ];
      
    
      const flattenedArray = flattenArray(combinations);
      const shuffledArray = shuffleArray(flattenedArray);
      
      console.log(shuffledArray);

      
  
    return (
      <div className='overflow-x-auto whitespace-nowrap h-full w-screen-minus-100 p-5'>
      <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto w-full">
    {movies.map((movie, index) => (
     <WobbleCard key={index}
     containerClassName={`col-span-1 lg:col-span-${shuffledArray[index]} relative min-h-[300px]`}
     className="">
     <div className="max-w-xs">

     <Link href={`/movies/${movie.id}`}>{movie.title}
     <Image
        onMouseEnter={handleMouseEnter}
        src={movie.src}
        alt={movie.title}
        fill
        className="object-cover absolute inset-0 z-0"
        placeholder = 'blur'
        blurDataURL='data:image/jpeg;base64,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'
        
        
      />
      </Link>
     {/* <h2 key={index} className="text-white relative z-10">
     {movie.title}
   </h2> */}

      </div>   
   </WobbleCard>
    ))}
   {/* <WobbleCard
     containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
     className=""
   >
     <div className="max-w-xs">
      </div>   
   </WobbleCard>
   <WobbleCard containerClassName="col-span-1 min-h-[300px]">
     <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
       Movie
     </h2>
     <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
       If someone yells “stop!”, goes limp, or taps out, the fight is over.
     </p>
   </WobbleCard>
   <WobbleCard containerClassName="col-span-1 min-h-[300px]">
     <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
       Movie
     </h2>
     <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
       If someone yells “stop!”, goes limp, or taps out, the fight is over.
     </p>
   </WobbleCard>
   <WobbleCard
     containerClassName="col-span-1 lg:col-span-1 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
     className=""
   >
     <div className="max-w-xs">
      </div>   
   </WobbleCard>
   <WobbleCard containerClassName="col-span-1 lg:col-span-1 min-h-[300px]">
     <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
       Movie
     </h2>
     <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
       If someone yells “stop!”, goes limp, or taps out, the fight is over.
     </p>
   </WobbleCard>
   <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px]">
     <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
       Movie
     </h2>
     <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
       If someone yells “stop!”, goes limp, or taps out, the fight is over.
     </p>
   </WobbleCard>
   <WobbleCard
     containerClassName="col-span-1 lg:col-span-1 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
     className=""
   >
     <div className="max-w-xs">
      </div>   
   </WobbleCard>
   <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px]">
     <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
       Movie
     </h2>
     <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
       If someone yells “stop!”, goes limp, or taps out, the fight is over.
     </p>
   </WobbleCard>
   <WobbleCard containerClassName="col-span-1 lg:col-span-1 min-h-[300px]">
     <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
       Movie
     </h2>
     <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
       If someone yells “stop!”, goes limp, or taps out, the fight is over.
     </p>
   </WobbleCard> */}

 </div>
   </div>
    );
  }