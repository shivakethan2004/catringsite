import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import image from '../utility/catringimage.jpg';
import icon1 from '../utility/one/1.png';
import icon2 from '../utility/one/2.png';
import Packages from './packages';
import Service from './service';
import About from './about';

export default function Homepage() {
  const [icon, setIcon] = useState(icon1);
  const [visibility, setVisibility] = useState({
    image: { background: false, content: false },
    packages: { background: false, content: false },
    service: { background: false, content: false },
    about: { background: false, content: false },
  });

  const refs = {
    imageRef: useRef(),
    packageRef: useRef(),
    serviceRef: useRef(),
    aboutRef: useRef(),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetName = entry.target.dataset.name;
          const isVisible = entry.isIntersecting;

          setVisibility((prev) => ({
            ...prev,
            [targetName]: {
              background: isVisible,
              content: prev[targetName].content || (isVisible ? true : prev[targetName].content),
            },
          }));
        });
      },
      { threshold: 0.1 }
    );

    Object.values(refs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <MainPage>
      <nav>
        <HeaderContainer>
          <h1>
            <IconContainer onMouseEnter={() => setIcon(icon2)} onMouseLeave={() => setIcon(icon1)}>
              <img
                src={icon1}
                alt="Icon 1"
                className={icon === icon1 ? 'visible' : 'hidden'}
              />
              <img
                src={icon2}
                alt="Icon 2"
                className={icon === icon2 ? 'visible' : 'hidden'}
              />
            </IconContainer>
            <span >
              VEERABHADRA CATERING
            </span>
            <b></b>
            <Slogan>- It's Not Only Preparation It's Creativity</Slogan>
          </h1>
        </HeaderContainer>

        <ul>
          <li>Home</li>
          <li>Packages</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>

      <ImageContainer className={visibility.image.background ? 'visible' : ''} data-name="image" ref={refs.imageRef}>
        <div className={`content ${visibility.image.content ? 'visible' : ''}`}>
          <h1>WELCOME TO OUR CATERING SERVICE</h1>
        </div>
      </ImageContainer>

      <Section className={visibility.packages.background ? 'visible' : ''} data-name="packages" ref={refs.packageRef}>
        <Packages className={visibility.packages.content ? 'visible' : ''} />
      </Section>

      <Section className={visibility.service.background ? 'visible' : ''} data-name="service" ref={refs.serviceRef}>
        <Service className={visibility.service.content ? 'visible' : ''} />
      </Section>

      <Section className={visibility.about.background ? 'visible' : ''} data-name="about" ref={refs.aboutRef}>
        <About className={visibility.about.content ? 'visible' : ''} />
      </Section>
    </MainPage>
  );
}

// Styled components
const HeaderContainer = styled.div`
  text-align: center;
  background-color: #fcdba0; 
  padding: 0px;

  h1 {
    display: flex; 
    align-items: center; 
  }
`;

const IconContainer = styled.div`
  position: relative;
  width: 45px; 
  height: 45px; 
  margin-right: 25px; 

  img {
    position: absolute;
    width: 100%;
    height: 100%;
   
    border-radius: 20px;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;   
  }

  .hidden {
    opacity: 0; 
    transform: scale(0.8); 
  }

  .visible {
    opacity: 1;
    transform: scale(1); 
  }
`;

const Slogan = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400; 
  margin-top: 10px; 
  color: #333;
  font-family: "Dancing Script", cursive;
`;

const MainPage = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  border: 1px solid #ccc;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fcdba0;
    padding: 10px;

    ul {
      display: flex;
      gap: 3rem;
      list-style-type: none;
      padding: 0;

      li {
        padding: 10px;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          transform: translate3d(10px, 0, 0);
          background-color: #f98866;
          border-radius: 0.5rem;
        }
      }
    }
  }
`;

const transitionEffect = css`
  opacity: 1;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const transitionEffectContent = css`
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.8s ease-out, transform 1s ease-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 90vh;
  ${transitionEffect}

  .content {
    margin-top: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${image});
    width: 100%;
    height: 100%;
    background-size: cover;

    h1 {
      background-color: #fcdba0;
      padding: 20px;
      border-radius: 4px;
      opacity: 1;
      transform: translateX(20px);
      transition: opacity 1s ease-out, transform 1s ease-out;
    }

    &.visible {
      transition-delay: 0.5s;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Section = styled.div`
  ${transitionEffectContent}
`;
