import "./App.css";
import { useState, useEffect} from 'react'
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Routes, Route} from "react-router-dom";
import React from "react";
import MovieView from "./components/MovieView";
import NotFound from "./components/NotFound";

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')



  useEffect(() => {
    if(searchText){
       fetch(`https://api.themoviedb.org/3/search/movie?api_key=ca9a4388fcf97b9eaa761c36a6bfe8ae&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(resp => resp.json())
      .then(data => {
        setSearchResults(data.results)
        console.log(data)
      })
    }
 }, [searchText])

  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyWord={searchText} searchResults={searchResults}/>}/>
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
