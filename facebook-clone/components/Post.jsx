import Image from 'next/image'
import React from 'react'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

const Post = ({ name, message, email, postImage, image, timestamp}) => {
  return (
    <div className='flex flex-col'>
      <div className='p-5 bg-white mt-5 rounded-t-md'>
        <div className='flex items-center space-x-3'>
            <img
            className='rounded-full'
            height={50}
            width={50}
            src={image}
            alt="profile-pic"
            />
            <div>
                <p className='font-medium'>{name}</p>

                {timestamp ? (
                  <p className='text-xs text-gray-400'>
                  {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
                ) : (
                  <p className='text-xs text-gray-400'>Loading</p>
                )
                }
            </div>
        </div>

        <p className='pt-10 mx-2 xl:mx-20 xl:text-xl mb-2'>{message}</p>
      </div>
      {postImage && (
         <div className='relative p-4 h-56 md:h-96 bg-white'>
            <Image src={postImage} objectFit="contain" layout="fill" />
         </div>
      )}

      {/**footer of posts */}
      <div className='flex flex-wrap justify-evenly items-center pb-4 pt-7 rounded-b-md bg-white text-gray-400 '>
        <div className='inputIcon rounded-none '>
            <ThumbUpIcon className='h-4 md:h-6 text-blue-300'/>
            <p className='text-sm sm:text-base'>Like</p>
        </div>

        <div className='inputIcon rounded-none'>
           <ChatAltIcon className='h-4 md:h-6 text-blue-300'/>
           <p className='text-xs sm:text-base'>Comment</p>
        </div>

        <div className='inputIcon rounded-none'>
           <ShareIcon className='h-4 md:h-6 text-blue-300'/>
           <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post