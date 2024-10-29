import React from 'react';
import styled from 'styled-components';
import image from '../utility/side_pics.png';

export default function Packages() {
  return (
    <PackageContainer>
      <h1>SELECT YOUR PACKAGE TO YOUR FITTING</h1>
      <ContentContainer>
        <PackageList>
          <PakageCon>
            <h3>NAIVEDYAM</h3>
            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, in, doloribus mollitia culpa quo aut quae qui adipisci totam enim accusantium modi distinctio reiciendis. Reiciendis inventore laboriosam tempore cum dolorum?</a>
          </PakageCon>
          <PakageCon>
            <h3>BHOJYAM</h3>
            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, in, doloribus mollitia culpa quo aut quae qui adipisci totam enim accusantium modi distinctio reiciendis. Reiciendis inventore laboriosam tempore cum dolorum?</a>
          </PakageCon>
          <PakageCon>
            <h3>PANCHABAKSHAM</h3>
            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, in, doloribus mollitia culpa quo aut quae qui adipisci totam enim accusantium modi distinctio reiciendis. Reiciendis inventore laboriosam tempore cum dolorum?</a>
          </PakageCon>
          <PakageCon>
            <h3>ANNAPOORNA</h3>
            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, in, doloribus mollitia culpa quo aut quae qui adipisci totam enim accusantium modi distinctio reiciendis. Reiciendis inventore laboriosam tempore cum dolorum?</a>
          </PakageCon>
          <PakageCon>
            <h3>AKSHAYA</h3>
            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, in, doloribus mollitia culpa quo aut quae qui adipisci totam enim accusantium modi distinctio reiciendis. Reiciendis inventore laboriosam tempore cum dolorum?</a>
          </PakageCon>
        </PackageList>
        <ImageContainer>
          <img src={image} alt="Catering Packages" />
        </ImageContainer>
      </ContentContainer>
    </PackageContainer>
  );
}

const PackageContainer = styled.div`
  margin-top: 3px;
  background-color: #fcdba0;
  padding: 20px; /* Added padding for better spacing */

  h1 {
    padding: 10px;
    border-radius: 20px;
    border-bottom: black solid;
    margin-bottom: 20px; /* Increased margin for more space */
    text-align: center; /* Center align the heading */
  }
`;

const ContentContainer = styled.div`
  display: flex; /* Enable flexbox */
  align-items: flex-start; /* Align items at the start of the flex container */
`;

const PackageList = styled.div`
  display: flex;
  flex-direction: column; /* Stack packages vertically */
  flex: 1; /* Allow this div to grow */
  margin-right: 20px; /* Space between package list and image */
`;

const ImageContainer = styled.div`
  flex: 1; /* Allow image container to grow */
  display: flex; /* Enable flexbox */
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
`;

const PakageCon = styled.div`
  padding: 10px;
  border-radius: 3px;
  margin: 5px;
  background-color: #f96639;
  transition: transform 0.3s ease-in-out;
  transform: scale(0.98);

  h3 {
    color: white;
  }
  
  a {
    color: black; /* Added color for the text in the link */
  }
  
  &:hover {
    transform: scale(1);
  }
`;
