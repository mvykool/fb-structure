import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";
import Image from "next/image";
import { GiEarthAmerica } from 'react-icons/gi'
import {BsCaretDownFill} from 'react-icons/bs'
import { DotsHorizontalIcon } from '@heroicons/react/solid'

function InputBox() {
  const {data: session} = useSession();
  const inputRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const filepickerRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_changed",
            null,
            (error) => {
              // ERROR function
              console.log(error);
            },
            () => {
              // COMPLETE function
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  

  const removeImage = () => {
    setImageToPost(null);
  };


  return (
    <div className='bg-white p-4 rounded-md text-gray-500 font-medium mt-6'>
      <div className="flex">
      <Image
            className='rounded-full m-5'
            src={session.user.image}
            width={50}
            height={50}
            layout="fixed"
            />
            <div className="cursor-pointer">
            <p className="mt-5 text-black font-bold mb-1">{session.user.name}</p>
           <div className="flex items-center space-x-1 text-sm">
           <GiEarthAmerica/>
           <p>Public</p>
           <BsCaretDownFill className="h-3"/>
           </div>
            </div>
      </div>
        <div className='flex space-x-4 items-center'>
           
            <form className='flex flex-1'>
                <input
                className='rounded-full placeholder-gray-300 text-sm lg:text-2xl h-20 flex-grow lg:mx-24 mt-2 focus:outline-none'
                type="text"
                ref={inputRef}
                placeholder={`What's on your mind, ${session.user.name} ?`}
                />
                <button hidden type="submit" onClick={sendPost}>Submit</button>
            </form>
            {imageToPost && (
                <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition
                 duration-150 transform hover:scale-105 cursor-pointer">
                    <img className='h-10 object-contain rounded-md' src={imageToPost} alt="image" />
                    <p className='text-xs text-red-500 text-center'>Remove</p>
                </div>
            )}
        </div>

        <div className='flex flex-wrap p-2 justify-evenly border-t'>
            <div className='inputIcon'>
             <VideoCameraIcon className='h-4 md:h-7  text-red-500'/>
             <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>

            <div 
            onClick={()=> filepickerRef.current.click()}
            className='inputIcon'>
             <CameraIcon className='h-4 md:h-7  text-green-400'/>
             <p className='text-xs sm:text-sm'>Photo/Video</p>
             <input onChange={addImageToPost} ref={filepickerRef} type="file" hidden />
            </div>

            <div className='inputIcon'>
              <EmojiHappyIcon className='h-4 md:h-7  text-yellow-300'/>
              <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
            </div>

            <div className="inputIcon">
              <DotsHorizontalIcon className="h-4 md:h-7 w-20"/>
            </div>
        </div>
    </div>
  )
}

export default InputBox