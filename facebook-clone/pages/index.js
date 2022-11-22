import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
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
