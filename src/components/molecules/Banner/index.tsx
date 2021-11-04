import styled from "styled-components";

const Wrapper = styled.div`
  background: #222222;
  width: 100%;
  height: auto;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftContainer = styled.div`
  background: #000000;
  max-width: 600px;
  display: flex;
  justify-content: center;
  padding: 25px 100px 50px 100px;
  border-radius: 25px;
  & .img-container {
    img {
      box-shadow: 6px 6px 0px 2px #222222;
      border-radius: 5%;
      width: 240px;
    }
  }
`;

const RightContainer = styled.div`
  background: #000000;
  max-width: 600px;
  display: flex;
  justify-content: center;
  padding: 25px;
  border-radius: 25px;
  & .bio-container {
    color: #ffffff;
    font-size: 24px;
  }
`;

const Banner = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <div className="img-container">
          <img src="/profile-pic.jpeg" />
        </div>
      </LeftContainer>
      <RightContainer>
        <div className="bio-container">
          {`I don't believe in passion and dreams. I just do things that i should
          do and that i like as well. I feel myself as a worshipper of music. I
          have been experiencing software industry since 2019 quite actively. I
          don't like solving problems unless i have to. I don't know why but I
          wish everything that exists to be unreal. Maybe because eventually all
          these existence makes no sense.`}
        </div>
      </RightContainer>
    </Wrapper>
  );
};

export { Banner };
