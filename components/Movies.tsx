'use client'
import { query } from "@/lib/db";
import { Genre } from "@/types/genre";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";


interface Movie {
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
      <div className='overflow-x-auto whitespace-nowrap h-full w-screen p-5'>
      <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto w-full">
    {movies.map((movie, index) => (
     <WobbleCard key={index}
     containerClassName={`col-span-1 lg:col-span-${shuffledArray[index]} relative min-h-[300px]`}
     className="">
     <div className="max-w-xs">
     <Image
        onMouseEnter={handleMouseEnter}
        src={movie.src}
        alt={movie.title}
        fill
        className="object-cover absolute inset-0 z-0"
      />
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