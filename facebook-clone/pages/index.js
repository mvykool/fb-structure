import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { getSession } from 'next-auth/react'
import Login from '../components/Login';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

export default function Home({ session }) {
  if(!session) return <Login/>;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>

       {/** Heder */}
       <Header/>

       <main className='flex'>
        {/** side bar */}
        <SideBar/>
        {/**feed */}
        <Feed/>
        {/** widgets */}
        <Widgets/>
       </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  //get user
  const session = await getSession(context);

  return {
    props:{
      session
    }
  }
}
