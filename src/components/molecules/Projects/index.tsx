import styled from "styled-components";
import { CompanyProjects } from "./CompanyProjects";
import { PersonalProjects } from "./PersonalProjects";

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

const ProjectWrapper = styled.div`
  background: #222222;
  border-radius: 12px;
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Projects = () => {
  return (
    <Wrapper>
      <Title>My Works</Title>
      <ProjectWrapper>
        <CompanyProjects />
        <PersonalProjects />
      </ProjectWrapper>
    </Wrapper>
  );
};

export { Projects };
