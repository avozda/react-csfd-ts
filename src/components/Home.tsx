import React from 'react'
//config

import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config"

//Hook

import {useHomeFetch} from "../hooks/useHomeFetch"

//components
import HeroImage from './HeroImage/HeroImage'
import Grid from './Grid/Grid'
import Thumb from './Thumb/Thumb'
import { Spinner } from './Spinner/Spinner.styles'
import SearchBar from './SearchBar/SearchBar'
import Button from './Button/Button'
//Image
import NoImage from "../images/no_image.jpg"



const Home:React.FC = () => {
  
   const {state,loading,error,searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();

   console.log(state)
   
   return (
      error ? (<div>"Something went wrong :("</div>): (

         <>
         {state.results[0] && 
         <HeroImage 
         image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}   
         title={state.results[0].original_title}
         text={state.results[0].overview}
         /> }
          <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
          <Grid header={searchTerm?searchTerm:"Popular movies"}>
             {state.results.map(movie=> (
                
               <Thumb 
               key={movie.id} 
               clickable={true} 
               image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE +movie.poster_path : NoImage}
               movieId={movie.id}
 
               />
               
             ))}
          </Grid>
          
          {loading && (
            <Spinner/>
          )}
          {state.page<state.total_pages && !loading && (
             <Button text="Load more" callback={()=>{
                setIsLoadingMore(true);
             }}/>
          )}
         </>
      )
     
   )
}


export default Home
