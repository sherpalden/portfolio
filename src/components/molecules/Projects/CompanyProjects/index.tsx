import styled from "styled-components";
import { TitleStyleOne } from "../../../atoms/TitleStyleOne";
import { CardStyleOne } from "../../../atoms/CardStyleOne";

const Wrapper = styled.div`
  background: #222222;
  border-radius: 12px;
  width: 100%;
  padding: 25px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

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

const projectLists = [
  {
    title: "Kenko-trend",
    link: "https://kenkou-trend.jp",
    image: "/projects/kenko-trend.png",
    summary: `Kenko-trend(a health management application) is a platform where health companies 
              can deliver services to the customers. Its main objective is to bring together many health 
              companies with diversified and quality services into a common place: customers can subscribe
              to all but most services on the fly without much overhead of finding the appropriate health 
              company. Besides, the application also features health awareness through events, webinars, articles
              and study materials.`,
  },
  {
    title: "Behealth",
    link: "https://behealth.jp",
    image: "/projects/behealth.png",
    summary: `Behealth is an web application that exposes portfolio, events, webinars, articles 
    and know how materials of the health management company called Behealth.`,
  },
];

const CompanyProjects = () => {
  return (
    <Wrapper>
      <TitleStyleOne title="COMPANY PROJECTS" />
      <Container>
        {projectLists.map((item, index) => {
          return (
            <ProjectWrapper key={`company-project-${index}`}>
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
    </Wrapper>
  );
};

export { CompanyProjects };
