import Authorcard from "@/components/Authorcard";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";
import NavBar from "@/components/Navbar";
import React from "react"
export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-black font-extrabold bg-blue-800 animate-color-change">BILAL DYNAMIC BLOG</h1>
    <NavBar/>
    <Authorcard/>
       <Mega/>
       <Feature/>
       <Footer/>
</div>
  );
  }
  