"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconAlertTriangle
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useAuth } from '@/app/context/AuthContext';



export function SidebarDemo({children}:Readonly<{children:React.ReactNode}>) {
  const [opendialog, setOpendialog] = useState(false)
  const router = useRouter();
  const { isLoggedIn, login, logout } = useAuth();

  function handleDisconnect () {
    setOpendialog(false);
    router.push('/');
  
  }
  function handleSidebarClick (link:string) {
    
    setOpen(false);
    if (link == 'Logout') {
      setOpendialog(true);
      logout();
    }
    if (link == 'Login') {
      console.log('ggwp')
      router.push('/login');
    }
  }

  function Example() {
    

    return (
        <Dialog open={opendialog} onClose={setOpendialog} className="z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <IconAlertTriangle aria-hidden="true" className="h-6 w-6 text-red-600" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <div className="text-base font-semibold leading-6 text-gray-900">
                                        <DialogTitle>
                                            Disconnect
                                        </DialogTitle>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Are you sure you want to disconnect?                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                onClick={() => handleDisconnect()}
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                                Disconnect
                            </button>
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpendialog(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

  const links = [
    {
      label: "Movies",
      href: "/movies",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Genres",
      href: "/genres",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label:  isLoggedIn ? "Logout" : "Login",
      href: isLoggedIn ? "#" : "login",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-slate-950 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 ",
        "h-full" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Example/>
      <Sidebar open={open} setOpen={setOpen} >
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} onClick={() => handleSidebarClick(link.label)} />
              ))}
            </div>
          </div>
          <div>
          {isLoggedIn ? (
            <SidebarLink className="bottom-5 fixed" onClick={() => setOpen(false)}
              link={{
                label: "Ilias Tory",
                href: "/profile",
                icon: (
                  <Image
                    src="https://instagram.fskg5-2.fna.fbcdn.net/v/t51.2885-19/449422512_1477258279568741_5007836220017555851_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fskg5-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=mxZN5URqHNQQ7kNvgFlNsA_&_nc_gid=529ed4d4b81048cfbd479523e3cb099e&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDxFlk61rvezqS_An9Z_UzeEjCVKqSnPV6cXE8XazaclA&oe=66F0E86B&_nc_sid=7a9f4b"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />) : <></>}
          </div>
        </SidebarBody>
      </Sidebar>
     {children}
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Worth Watching
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};


//import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


