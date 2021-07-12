import React from 'react';

import { Link } from 'react-router-dom';
// Styles
import { Image } from './Thumb.styles';

type Props = {
  image:string;
  movieId?:number;
  clickable: boolean;
}

const Thumb:React.FC<Props> = ({ image, movieId, clickable }) => (
  <div className="thumb">
    {clickable ? (
      <Link to={`/${movieId}`}>
         <div>
         <Image id="funguj" src={image} alt='movie-thumb' />
         </div>
        
      </Link>
    ) : (
      <Image src={image} alt='movie-thumb' />
    )}
  </div>
);



export default Thumb;
