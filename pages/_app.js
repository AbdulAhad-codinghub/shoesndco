import '../styles/globals.css'
import {Router} from 'next/router'
import Head from 'next/head'
import { Layout } from '../components'
import React from 'react'
import {StateContext} from '../context/StateContext'
import {Toaster} from 'react-hot-toast'
import NProgress from 'nprogress';
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  NProgress.configure({showSpinner : false})
  Router.events.on('routeChangeStart',()=>{
    NProgress.start();
  })
  Router.events.on('routeChangeComplete',()=>{
    NProgress.done();
  })
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
       
<a href="https://wa.me/923229894490?text=" className="float" target="_blank"><i className="fa fa-whatsapp my-float"></i></a>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"/> 
    </Head>
    <StateContext>
    <Layout>
      <Toaster/>
       <Component {...pageProps} />
    </Layout>
    </StateContext>
    </>
  )
}

export default MyApp
