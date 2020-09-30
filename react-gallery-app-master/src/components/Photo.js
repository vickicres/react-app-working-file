import React from 'react';

/**create a link to flickr, to show and load the pictures */

const Photo = props => {
  return(
      <li>
          <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={`${props.title}`}></img>
      </li>

  );
}

export default Photo;