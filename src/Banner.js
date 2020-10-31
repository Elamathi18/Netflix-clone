import React,{useState,useEffect} from 'react';
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
    const [movie,setMovie]=useState([]);

    useEffect(() => {
      async function fetchData(){
        const request =await axios.get(requests.fetchNetflixOriginal);
        setMovie(
            request.data.results[
                Math.floor(Math.random()*request.data.results.length -1)
            ]
            );
         }  
      fetchData();
    }, [])

    console.log(movie);

    function truncate(str,n){
        return str?.lenght >n ? str.substr(0,n-1)+ "..." : str;
    }
    //trancate is used to reduce the number of words
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                backgroundPosition: "center center"
            }}
        >
            {/*Background Image*/}
            <div className="banner_contents">
             {/*title*/} 
             <h1 className="banner_title">
                 {movie?.title||movie?.name||movie?.original_name}
                 {/* text?.text here this ?. is used because if we didnot get anything it will not crash the whole site*/}
             </h1>
             {/*div >2 buttons*/} 
             <div className="banner_buttons">
                <button className="banner_button">▶ Play</button>
                <button className="banner_button">+ My List</button>
             </div>
             {/*description */}
             <h1 className="banner_description">
                 {truncate (movie?.overview,150)}
                 {/*overview is poperty that gives the description*/}
             </h1>
            </div>

            <div className="banner-fadebottom"/>
            
         
        </header>
    )
}

export default Banner
