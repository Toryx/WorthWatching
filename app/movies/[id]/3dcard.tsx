"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
 
export function BackgroundGradientDemo({ movietitle }: { movietitle: string }) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] pt-0 p-4 sm:p-10 sm:pt-4 bg-white dark:bg-slate-800">
     
        <p className="text-base sm:text-xl text-black  mb-2 dark:text-indigo-400">
          Our&apos;s take on {movietitle}
        </p>
 
        <p className="text-sm text-indigo-600 dark:text-indigo-200">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
   

      </BackgroundGradient>
    </div>
  );
}