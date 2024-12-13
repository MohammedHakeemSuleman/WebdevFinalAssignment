import React from "react";
import Link from "next/link";
import Datasend from "../components/table";


export default function Home() {
    return (
      
      <main>
   <title>course list
    
   </title>
   <html lang="en"></html>


       
   <div id="Togglebutton"><a className="Toggle">darkmode</a></div>
    
    
    <div id="Menubutton"><a className="Men">menu</a></div>

<div  id="bars">
   
    <div id="bar1"> <a href='./'>Home</a></div>
    <div id="bar2"><a href='/teacher'>business</a></div>
    <div id="bar3"><a href='/other'>Learning Resources</a></div>
</div>
    



  <h1>
  <Datasend />
    </h1>         




    
      
          
      </main>
    );
  }