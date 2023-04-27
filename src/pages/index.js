

import Head from 'next/head'
import Layout from '../component/Layout'

import Hero from '@/component/Hero'



export default function Home() {
  return (
   
   <Layout>
   <Head>
    <title>Image Gallary</title>
    <link rel='icon' href='/Logo.png'/>
   </Head>
   {/* body */}
   <main>
    <Hero/>
   </main>
    </Layout>
   
  )
}