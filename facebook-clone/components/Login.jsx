import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className='login-bg h-screen'>
   <div className='pt-56'>
   <div className='grid place-items-center py-20 px-10 mx-[40%] login-card'>
        <Image
        src="https://links.papareact.com/t4i"
        height={200}
        width={200}
        objectFit='contain'
        />
        <h1 onClick={signIn} className='mt-20 cursor-pointer p-5 bg-blue-800 rounded-xl text-white text-center'>Login with Facebook</h1>
    </div>
   </div>
    </div>
  )
}

export default Login