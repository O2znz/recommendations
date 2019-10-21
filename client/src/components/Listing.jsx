import React from 'react';
import styled from 'styled-components';

const Recommendation = styled.div`
  text-align: center;
  color: green;
`;

const InformationDiv = styled.div`
  margin-top: 2px;
  color: rgb(118, 118, 118);
`;

const TextSpan = styled.span`
  color: rgb(118, 118, 118);
`;

const Image = styled.img`
  align: center;
`;

const Listing = (props) => {
  return (
    <li>
      <Recommendation>
        <Image src={props.listing.images[0]}></Image>
        <InformationDiv>
          <TextSpan>{props.listing.type} <span> . </span> {props.listing.location}</TextSpan>
        </InformationDiv>
        <InformationDiv>
          <TextSpan>
            {props.listing.name}
          </TextSpan>
        </InformationDiv>
        <InformationDiv>
          <TextSpan>
            ${props.listing.price}/night
          </TextSpan>
        </InformationDiv>
        <InformationDiv>
          <TextSpan>
            (star image) {props.listing.rating}
          </TextSpan>
        </InformationDiv>
      </Recommendation>
    </li>
  );
};

export default Listing;

// {console.log('LISTING PROPS: ', props.listing)}