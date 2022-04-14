import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Navbar />
      <Link href='/about'>about</Link>
      <Link href='/contact'>contact</Link>
    </>
  )
}

export default Home
Home.auth = true