import React from 'react';

const Listing = (props) => {
  return (
    <li>
      {console.log('LISTING PROPS: ', props.listing)}
      <div>
        <img src={props.listing.images[0]} />
        <div>{props.listing.name}</div>
        <div>{props.listing.location}</div>
        <div>Price: ${props.listing.price}</div>
        <div>Rating: {props.listing.rating}</div>
      </div>
    </li>
  );
};

export default Listing;