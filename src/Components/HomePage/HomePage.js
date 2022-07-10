import React, { useState } from "react";
import styled from "styled-components";
import Games from "./Games";
import Header from "./Header";
import MustContainer from "./MustContainer";
import Navbar from "./Navbar";
import { GamesHeader } from "../Data";
export default function HomePage() {
  const [index, setIndex] = useState(0);
  const {
    id,
    title,
    subTitle,
    gameImage,
    backgroundImage,
    img,
    popupMessage,
    gameBtn,
  } = GamesHeader[index];

  return (
    <Home style={{ backgroundImage: "url(" + backgroundImage + ")" }}>
      <Navbar />
      <HomeContainer>
        <Games setIndex={setIndex} index={index} />
        <Header
          title={title}
          subTitle={subTitle}
          gameImage={gameImage}
          img={img}
          popupMessage={popupMessage}
          id = {id}
          gameBtn={gameBtn}
        />
      </HomeContainer>
      <MustContainer />
    </Home>
  );
}

const Home = styled.div`
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 170vh;

  @media (max-width: 890px) {
    height: 200vh;
  }
`;

const HomeContainer = styled.div``;
