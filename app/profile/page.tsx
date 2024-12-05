'use client'
import React, { useState,useEffect } from "react";
import Image from 'next/image'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,ResponsiveContainer } from 'recharts';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { WobbleCard } from "@/components/ui/wobble-card";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { useSession} from "next-auth/react";
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/navigation';
const monthsData = [
  { name: 'Jul', count: 7 },
  { name: 'Aug', count: 4 },
  { name: 'Sep', count: 32 },
  { name: 'Oct', count: 12 },
  { name: 'Nov', count: 13 },
  { name: 'Dec', count: 20 },
];

interface User {
  id: number;
  username: string;
  fullname: string;
  signupdate: string;
}
interface Movie {
  id: number;
  title: string;
  src: string;
  recstamp : string;
}

const people = [
  {
    name: '2 Months',
  },
  {
    name: '6 Months',
  },
  {
    name: '1 Year',
  },]

const ProviderPage= () => {
 return (<SessionProvider><Page/></SessionProvider>); 

}

const Page = () => {
  const [selected, setSelected] = useState(people[1])
  const [userinfo, setUserInfo] = useState<User[] | null>(null);
  const [likedmov, setLikedMovies] = useState<Movie[] | []>([]);
  const { data: session } = useSession();
  const router = useRouter();

  const getUserInfo = async () => {
    try {
      const response = await fetch('/api/userinfo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: '1' }),
      });

      const result = await response.json();
      console.log(result.data)
      setUserInfo(result.data)

    } catch (error) {
      console.error('API error:', error);
    }
  };
  const likedMovies = async () => {
    try {
      const response = await fetch('/api/likedmovies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: '1' }),
      });

      const result = await response.json();
      console.log(result.data)
      setLikedMovies(result.data)

    } catch (error) {
      console.error('API error:', error);
    }
  };

  useEffect(() => {
    getUserInfo();
    likedMovies();
  }, []);


  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
  ];


  return (
    <div className="flex grid lg:grid-cols-5 grid-cols-1 w-screen h-full sm:h-screen">
      <div className="col-span-2 text-center lg:ml-30 mt-5 ">
        <div className="flex flex-col items-center justify-center pt-10">
          <div style={{ width: '240px', height: '240px', position: 'relative' }}>
            <Image
              className="rounded-3xl "
              src="/eltoro.png"
              alt="{movinfo?.title || ''}"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>

          {/* <h1 className="text-3xl">{userinfo?.[0]?.fullname || ""}</h1> */}
          <h1 className="text-3xl">{session?.user.name || ""}</h1>
          {/* <h1 className="text-1xl underline">{userinfo?.[0]?.username || ""}</h1> */}
          <h1 className="text-1xl underline">{session?.user.email || ""}</h1>
          <div className="flex flex-col min-w-[400px]">
            <div className="">
              <div className="inline-block min-w-[400px]  sm:min-w-full py-2">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">

                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-3 font-medium text-left ">Movies Watched</td>
                        <td className="whitespace-nowrap px-6 py-3 text-right ">250</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-3 font-medium text-left ">Watchlist</td>
                        <td className="whitespace-nowrap px-6 py-3 text-right" >37</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-3 font-medium text-left ">Movies Rated</td>
                        <td className="whitespace-nowrap px-6 py-3 text-right">213</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-3 font-medium text-left ">Friends</td>
                        <td className="whitespace-nowrap px-6 py-3 text-right">13</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-3 font-medium">Member Since</td>
                        <td className="whitespace-nowrap px-6 py-3 text-right">3rd August 2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="col-span-2 flex items-center justify-center">
                  <div className="mt-2 px-2 text-center">Go Back...</div>
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-2 mr-10">
                      <ListboxButton className="relative cursor-default min-w-[100px] rounded-md bg-white py-1.5 px-5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm">
                        <span className="flex items-center">
                          <span className="block truncate">{selected.name}</span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">

                        </span>
                      </ListboxButton>

                      <ListboxOptions
                        transition
                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                      >
                        {people.map((person) => (
                          <ListboxOption
                            key={person.name}
                            value={person}
                            className="group relative cursor-default  select-none p-1 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                          >
                            <div className="flex items-center">

                              <span className=" block truncate text-sm group-data-[selected]:font-semibold">
                                {person.name}
                              </span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                              <IconCheck className="h-5 w-5" />
                            </span>
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </div>
                  </Listbox>
                </div>
                <ResponsiveContainer className="col-span-2 pr-10" width="100%" height={230}>
                <LineChart data={monthsData}>
                  <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={3} />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" fontSize={9} />
                  <YAxis />
                </LineChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 md:mr-5 text-center ">
        <div className="flex flex-col items-center justify-center pt-10">
          <div className="flex justify-between w-full">
            <h1 className="sm:mx-20 mx-2 p-[3px] mt-2 text-xl">Recently Viewed...</h1>
            <button className="sm:mx-20 mx-2 p-[3px]  relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View All
              </div>
            </button>
          </div>
          <div>
          </div>
          <div className="flex p-2 pt-2 grid sm:grid-cols-4 w-full sm:gap-4 gap-1 grid-cols-2">
            {likedmov.map((movie, index) => (
              <WobbleCard key={movie.id} containerClassName={`col-span-1 min-h-[280px]`}
                className="">
                <div className="max-w-xs">
                  <Link href={`/movies/${movie.title}-${movie.title.replace(/\s+/g, '-')}`}>{movie.title}
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
      </div>

    </div>
  )
}

export default ProviderPage