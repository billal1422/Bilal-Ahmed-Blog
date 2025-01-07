"use client"
import { useRouter } from 'next/router'
 

import React from 'react'
import CommentSection from '@/components/commentsection';
import Authorcard from '@/components/Authorcard';
import Footer from '@/components/Footer';
const posts=[
  {
  Id:"1",
  title:"Mastering HTML",
  image:"../slide1.jpg",
  description:" HTML base code (HyperText Markup Language) is the standard language used to create and design web pages. It defines the structure and layout of a web document by using a system of tags and attributes. ",
},
{
  Id:"2",
  title:"Mastering Javascript",
  image:"../slide2.jpg",
  description:"JavaScript is a versatile, high-level programming language primarily used to make web pages interactive. It works seamlessly with HTML and CSS, forming the core technologies of web development. ",
},{
  Id:"3",
  title:"Mastering css",
  image:"../slide3.jpg",
  description:"CSS (Cascading Style Sheets) is a stylesheet language used to control the appearance and layout of HTML documents. It allows developers to separate content (HTML) from presentation, making web design more efficient and flexible. ",
},{
  Id:"4",
  title:"Mastering Next.js",
  image:"../slide4.jpg",
  description:"Next.js is a powerful React framework for building fast, scalable, and SEO-friendly web applications. It offers features like: ",
},{
  Id:"5",
  title:"Mastering in Artificial intelligence",
  image:"../slide5.jpg",
  description:"Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, reason, learn, and perform tasks autonomously. AI enables machines to mimic cognitive functions such as problem-solving, decision-making, language understanding, and pattern recognition. ",
},{
  Id:"6",
  title:"Mastering WEB Development",
  image:"../slide6.jpg",
  description:"Web development refers to the creation, building, and maintenance of websites and web applications that run on internet browsers. It involves a combination of coding, design, and optimization to ensure functionality, usability, and visual appeal. ",
}
];
const Post = ( ) => {
  // const {id}=params;
  const router = useRouter();
 const id = router.query.id
  const post=posts.find((p)=>p.Id === id);
 
  if (!post){
    return(
      <h2 className='text-2xl font-bold text-center mt-10'>Post Not Found</h2>

    );
  }
  const renderParagraphs=(description:string)=>{
    return description.split("/n").map((para,index)=>(
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };
  return(
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>
        {""}
        {post.title}
        </h1>
        {post.image &&(
          <img
          src={post.image}
          alt={post.title}
          className='w-full h-auto rounded-md mt-4'/>
        )}
        <div className='mt-6 text-lg text-slate-700'>
          {renderParagraphs(post.description)}
        </div>
      <CommentSection postId={post.Id}/>
      <Authorcard/>
      <Footer/>
    </div>
  )
}
export default Post;

