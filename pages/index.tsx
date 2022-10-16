import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Canvas from '../Canvas'

const Home: NextPage = () => {
  return (
    <div className="wrapper">


      <main className=" m-auto">
        <Canvas/>
      </main>


    </div>
  )
}

export default Home
