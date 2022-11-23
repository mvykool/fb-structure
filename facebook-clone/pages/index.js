import Head from 'next/head'
import Header from '../components/Header'
import { getSession } from 'next-auth/react'
import Login from '../components/Login';

export default function Home({ session }) {
  if(!session) return <Login/>;
  return (
    <div >
      <Head>
        <title>Facebook</title>
      </Head>

       {/** Heder */}
       <Header/>

       <main>
        {/** side bar */}
        {/**feed */}
        {/** widgets */}
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
