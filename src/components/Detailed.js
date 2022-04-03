import React from "react";
import styled from "styled-components";
const Detailed = () => {
  return (
    <Container>
      <Background>
        <img src="/image/detail.jpg" alt="background" />
      </Background>
      <ImageTitle>
        <img src="/image/viewers-starwars.png" alt="slide" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/image/play-icon-black.png" alt="play" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/image/play-icon-white.png" alt="play" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWathButton>
          <img src="/image/group-icon.png" alt="play" />
        </GroupWathButton>
      </Controls>
      <SubTitle>Lorem ipsum dolor sit.</SubTitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa libero
        perspiciatis possimus magnam nisi reprehenderit sint hic consequuntur
        eius laborum.
      </Description>
    </Container>
  );
};

export default Detailed;
const Container = styled.div`
  min-height: calc(100vh -70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  margin-right: 22px;
  padding: 0px 24px;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  margin-right: 16px;
  background: rgba(0, 0, 0, 0.6);
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWathButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
color:rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`;
const Description = styled.div`
line-height:1.4px;
font-size: 20px;
margin-top: 16px;
color: rgb(249,249,249);
`;

