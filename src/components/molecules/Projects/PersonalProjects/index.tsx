import styled from "styled-components";
import { TitleStyleOne } from "../../../atoms/TitleStyleOne";
import { CardStyleOne } from "../../../atoms/CardStyleOne";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  place-items: center;
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 30px;
  }
`;

const ProjectWrapper = styled.div``;

const projectLists = [];

const PersonalProjects = () => {
  return (
    <div>
      <TitleStyleOne title="PERSONAL PROJECTS" />
      <Container>
        {projectLists.map((item, index) => {
          return (
            <ProjectWrapper key={`personal-project-${index}`}>
              <CardStyleOne
                title={item.title}
                summary={item.summary}
                link={item.link}
                image={item.image}
              />
            </ProjectWrapper>
          );
        })}
      </Container>
    </div>
  );
};

export { PersonalProjects };
