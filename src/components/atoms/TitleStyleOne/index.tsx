import styled from "styled-components";

export interface TitleStyleOneProps {
  title: string;
}

const TitleStyleOneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 768px) {
    gap: unset;
    flex-direction: column;
    justify-content: center;
  }
  & .title {
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
  }
  & .styled-line {
    display: flex;
    div {
      height: 3px;
      width: 90px;
      :first-child {
        background: #ff7f50;
      }
      :nth-child(2) {
        background: #9acd32;
      }
    }
  }
`;

const TitleStyleOne: React.FC<TitleStyleOneProps> = ({ title }) => {
  return (
    <TitleStyleOneWrapper>
      <div className="title">{title}</div>
      <div className="styled-line">
        <div></div>
        <div></div>
      </div>
    </TitleStyleOneWrapper>
  );
};

export { TitleStyleOne };
