import styled from "styled-components";

import { Contact } from "../Contact";

const Wrapper = styled.div`
  background: #000000;
  width: 100%;
  height: auto;
  padding: 50px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 36px;
  font-weight: bold;
  margin: auto;
  margin-bottom: 50px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  gap: 36px;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftContainer = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .img-container {
    img {
      width: 240px;
    }
  }
`;

const RightContainer = styled.div`
  background: #222222;
  max-width: 750px;
  display: flex;
  justify-content: center;
  padding: 25px;
  border-radius: 25px;
  & .bio-container {
    color: #ffffff;
    font-size: 24px;
    @media (max-width: 900px) {
      font-size: 18px;
    }
  }
`;

const Banner = () => {
  return (
    <Wrapper>
      <Title>Who am I ?</Title>
      <Container>
        <LeftContainer>
          <div className="img-container">
            <img src="/profile-pic.png" />
          </div>
          <Contact />
        </LeftContainer>
        <RightContainer>
          <div className="bio-container">
            {`Hello, My name is Palden Sherpa. I don't believe in passion and
            dreams. I just do things that i should do and that i like as well. I
            feel myself as a worshipper of music. I have been experiencing
            software industry since 2019 quite actively. I don't like solving
            problems unless i have to. I don't know why but I wish everything
            that exists to be unreal. Maybe because eventually all these
            existence makes no sense.`}
          </div>
        </RightContainer>
      </Container>
    </Wrapper>
  );
};

export { Banner };
