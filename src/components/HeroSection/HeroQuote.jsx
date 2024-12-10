import React, {useState, useEffect} from "react";
import sanityClient from "../../client.js"

export default function HeroQuote() {
    const [postData, setPost] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "heroQuote"] {
            quote}`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, [])
    
    return (
        <div className="hero-block hero_box text-center w-1/2 md:w-2/5 lg:w-1/4 mx-auto relative 
        mt-24">
            <i className="sm:text-xl absolute bx bxs-quote-alt-left -bottom-10 -left-10 text-gray-300"></i>
            {postData && postData.map((post, index) => 
            (
            <h4 key={index} className="font-montserrat sm:text-2xl font-medium text-gray-300 tracking-widest">
             {post.quote}
            </h4>
                
            ))}
            
            <i className="sm:text-xl absolute bx bxs-quote-alt-right -top-10 -right-10 text-gray-300"></i>
        </div>
        )
    }
