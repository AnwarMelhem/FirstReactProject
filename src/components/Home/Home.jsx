import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
//baddd516a06b07bece1814bade870023
export default function Home() {
 let[trendingMovies,settrendingMovies]=useState([]);
 let[trendingTv,settrendingTv]=useState([]);
 let BaseImageURL="https://image.tmdb.org/t/p/original/";
  async function getMovieData(mediatype,callback){
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=baddd516a06b07bece1814bade870023`)
    callback(data.results);
  
  }
  useEffect(()=>{
    getMovieData("movie",settrendingMovies);
    getMovieData("tv",settrendingTv);
   },[])
  return (
    <><div className="row">
      <div className="col-md-4 d-flex align-items-center">
        <div className="clName w-100">
           <div className={`w-50 mb-3 ${style.brdr}`}></div>
          <h2>Trendings</h2>
          <h2>Movies</h2>
          <h2>To Watch Now</h2>
          <p className='secondColor'>Lorem ipsum dolor sit amet.</p>
          
        <div className={style.brdr}></div>
        </div>
          </div>
       
      {trendingMovies.map((movie,index)=>
      <div className='col-md-3'>
        <div className="movie">
          <h2 >{movie.title}</h2>
          <img  className="w-100"src={BaseImageURL+movie.poster_path}/>
          </div>
        </div>
      )}
      </div>
     {/*tv*/}
      <div className="row">
      <div className="col-md-4 d-flex align-items-center">
        <div className="clName w-100">
           <div className={`w-50 mb-3 ${style.brdr}`}></div>
          <h2>Trendings</h2>
          <h2>TvShowes</h2>
          <h2>To Watch Now</h2>
          <p className='secondColor'>Lorem ipsum dolor sit amet.</p>
          
        <div className={style.brdr}></div>
        </div>
          </div>
       
      {trendingTv.map((tv,index)=>
      <div className='col-md-3'>
        <div className="tv">
          <h2 >{tv.name}</h2>
          <img  className="w-100"src={BaseImageURL+tv.poster_path}/>
          </div>
        </div>
      )}
      </div>
    </>
    
  )
}
