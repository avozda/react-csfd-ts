import React from 'react'

import { MovieState } from '../../hooks/useMovieFetch'

import Thumb from "../Thumb/Thumb"
import { Wrapper, Content, Text } from './MovieInfo.styles'

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'

import NoImage from "../../images/no_image.jpg"

type Props ={
   movie: MovieState;
}

const MovieInfo:React.FC<Props> = ({movie}) => (
   <Wrapper backdrop={movie.backdrop_path}>
      <Content>
         <Thumb 
         image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage} 
         clickable={false}
         />
          <Text>
             <h1>{movie.title}</h1>
             <h3>Overview</h3>
             <p>{movie.overview}</p>

             <div className="rating-directors">
                <div>
                   <h3>Rating</h3>
                   <div className="score">
                      {movie.vote_average}
                   </div>
                   <div className="directors">
                      <h3>{movie.directors.length>1? "Directors":"Director"}</h3>
                      {movie.directors.map(director=>(
                         <p key={director.credit_id}>{director.name}</p>
                      ))}
               </div>
                </div>
               
             </div>
          </Text>
      </Content>
   </Wrapper>
)


export default MovieInfo
