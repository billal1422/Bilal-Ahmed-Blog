import React from 'react'
import BlogCard from '../components/blogcard'
import { title } from 'process'

export default function Mega() {
  const post =[
    {
      id:"1",
      title:"HTML is the block of Webdevelopment",
      description:" HTML base code (HyperText Markup Language)...",
      Date:"2025-01-02",
      imageUrl:"../slide1.jpg"
    },
    {
      id:"2",
      title:"Java Script is the heart of the Web",
      description:"JavaScript is a versatile, high-level...",
      Date:"2025-01-02",
      imageUrl:"../slide2.jpg"
    },
    {
      id:"3",
      title:"CSS is the visual styling layer",
      description:"CSS (Cascading Style Sheets) is a stylesheet language...",
      Date:"2025-01-02",
      imageUrl:"../slide3.jpg"
    },
    {
      id:"4",
      title:"Next.js is the complete guide to modern web development ",
      description:"Next.js is a powerful React framework for...",
      Date:"2025-01-02",
      imageUrl:"../slide4.jpg"
    },
    {
      id:"5",
      title:"Artificial Intellignece is the future",
      description:"Artificial Intelligence (AI) refers to the...",
      Date:"2025-01-02",
      imageUrl:"../slide5.jpg"
    },
    {
      id:"6",
      title:" Webdevelopment is the back bone of digital world",
      description:"Web development refers to the creation,...",
      Date:"2025-01-02",
      imageUrl:"../slide6.jpg"
    },
    

  ]; return (
    <div className="my-8">
        <h1 className="text-3xl font-bold text-center  text-red-600 animate-color-change">
            {" "}
            This Blog is based on WeB World
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {post.map((post, index) =>(
            <div className="fade-in" key={post.id}>
                <div className="blog-card">
                    <BlogCard
                     post={post} isDarkBackground={index %2 === 0}/>

                </div>
            </div>
            )  )}
        </div>
    </div>

)

}