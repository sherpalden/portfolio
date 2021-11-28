import styled from "styled-components";
import { Skill } from "../../atoms/Skill";

const Wrapper = styled.div`
  background: #ffffff;
  width: 100%;
  padding: 50px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Title = styled.div`
  color: #000000;
  font-size: 36px;
  font-weight: bold;
  margin: auto;
  margin-bottom: 50px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
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

const skillsList = [
  {
    name: "Javascript",
    level: 60,
  },
  {
    name: "NodeJS",
    level: 50,
  },
  {
    name: "Go",
    level: 30,
  },
  {
    name: "HTML & CSS",
    level: 60,
  },
  {
    name: "MySQL",
    level: 50,
  },
  {
    name: "PostgreSQL",
    level: 40,
  },
  {
    name: "MongoDB",
    level: 50,
  },
  {
    name: "NextJS",
    level: 50,
  },
  {
    name: "AWS",
    level: 30,
  },
  {
    name: "GCP",
    level: 30,
  },
  {
    name: "Docker",
    level: 30,
  },
  {
    name: "Git",
    level: 50,
  },
];

const Skills = () => {
  return (
    <Wrapper>
      <Title>My Skills</Title>
      <Container>
        {skillsList.map((item, index) => (
          <div key={`skill-${index}`}>
            <Skill name={item.name} level={item.level} />
          </div>
        ))}
      </Container>
    </Wrapper>
  );
};

export { Skills };
