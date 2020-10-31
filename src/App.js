import React from 'react';
import './App.css';
import Row from "./Row.js";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
     {/*Nav*/}
     <Nav/>
     {/*Banner*/}
     <Banner />
     <Row 
     title="NETFLIX ORIGINALS" 
     fetchUrl={requests.fetchNetflixOriginal}
     isLargeRow
     //when  nothing is passed in isLarge row it means it is equal to true
     />
     <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated"fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romantic Movies"fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries"fetchUrl={requests.fetch}/>
     
    </div>
  );
}

export default App;
