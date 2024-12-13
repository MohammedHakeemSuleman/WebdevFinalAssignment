"use client";
import Head from 'next/head';
import React, {useEffect} from 'react';
import{inimenu,inithemetoggle} from './fun/main';
import Foot from './components/footer';
import './styles/globals.css';
import Heed from './components/header';






export default function layout({ children })
{
  useEffect(() => {
  inimenu();
  inithemetoggle();
  },[]);
  return (
    <>
   <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" /> 
    
    rel="stylesheet"
    href="/styles/globals.css"
   
    
    
  
   </Head>
  
      <body>
        <Heed/>
        {children}
        <Foot />
        </body>   
   </>
  );
}




