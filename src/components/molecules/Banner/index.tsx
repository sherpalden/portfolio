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
            {`Hi! I am Palden Sherpa. By profession, I am a software engineer specializing
            in backend web development; however I also possess plenty of skills in devops and
            frontend development. I am always open to sharing ideas that helps make world a 
            better place. I usually explore and listen to different genre of music in 
            my spare time. At last but not the least, please feel free to contact me if you
            have any queries or if i can help you in any ways.`}
          </div>
        </RightContainer>
      </Container>
    </Wrapper>
  );
};

export { Banner };
