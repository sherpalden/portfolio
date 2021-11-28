import styled from "styled-components";
import { Progress } from "antd";

export interface SkillProps {
  level: number;
  name: string;
}

const SkillWrapper = styled.div`
  min-width: 450px;
  padding: 12px;
  background: orange;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & .skill-item {
    display: flex;
    align-items: center;
    span {
      font-size: 24px;
      margin-left: 6px;
      color: #ffffff;
    }
  }
  @media (max-width: 1000px) {
    min-width: 600px;
  }
  @media (max-width: 768px) {
    min-width: 450px;
  }
  @media (max-width: 600px) {
    min-width: 330px;
  }
  @media (max-width: 400px) {
    min-width: 270px;
  }
`;

const Skill: React.FC<SkillProps> = ({ level, name }) => {
  return (
    <SkillWrapper>
      <div className="skill-item">
        <span>{name}</span>
      </div>
      <Progress status="active" percent={level} />
    </SkillWrapper>
  );
};

export { Skill };
