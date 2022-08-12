import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div >
      <Head>
        <title>SHOES & CO</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <br/>
      <br/>
      <div className='layout'>
      <main className='main-container'>
        {children}
      </main>
      <br/>
      <br/>
      <footer>
        <Footer/>
      </footer>
    </div>
    </div>
  )
}

export default Layout