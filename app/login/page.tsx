'use client'
import SigninFormDemo from '@/components/example/signin-form-demo'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

const page = () => {
  return (
    <div className=''>
      <SessionProvider>
      <SigninFormDemo/>
      </SessionProvider>
    </div>
  )
}

export default page