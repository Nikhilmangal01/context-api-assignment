import React from 'react'
import MovieProvider from './DynamicContext/MovieProvider';
import MovieList from './DynamicContext/MovieList';
import './App.css'

const App = () => {
  return (
    <div>

     
      <br/>
      <h1 style={{background:"lightblue"}}>Here is the example of Dynamic context, I send the the movie data from MovieContext to MovieList, and render the Data's </h1>

      <MovieProvider>
        <MovieList/>
      </MovieProvider>


    </div>
  )
}

export default App