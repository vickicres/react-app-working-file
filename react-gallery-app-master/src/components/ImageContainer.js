import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const ImageContainer = props => {
    const results = props.data;
    let photos;
  
    // If there are search results display them, otherwise display a Not Found message
    if(results.length > 0) {
      photos = results.map(photo => 
        <Photo 
        key = {photo.id} 
        farm = {photo.farm} 
        server = {photo.server} 
        id= {photo.id}
        secret = {photo.secret} 
        title={photo.title}   
        />);
    } else {
      photos = <NotFound />
    }
    
  
    return(
      <div className="photo-container">
      <h2>Results</h2>
        <ul>
          {photos}
        </ul>
    </div>               
    );
  }

export default ImageContainer;