import styled from "styled-components";

export interface AngleProps {
  direction: "open" | "close";
}

const AngleWrapper = styled.div<{ direction: string }>`
  div {
    width: 200px;
    height: 18px;
    border-radius: 25px;
    background: #ffffff;
    :first-child {
      transform: ${({ direction }) =>
        direction === "open"
          ? "rotateY(0deg) rotate(-60deg)"
          : "rotateY(0deg) rotate(-300deg)"};
    }
    :nth-child(2) {
      transform: ${({ direction }) =>
        direction === "open"
          ? "translateY(210px) rotateY(0deg) rotate(60deg)"
          : "translateY(210px) rotateY(0deg) rotate(300deg)"};
    }
  }
`;

const Angle: React.FC<AngleProps> = ({ direction }) => {
  return (
    <AngleWrapper direction={direction}>
      <div></div>
      <div></div>
    </AngleWrapper>
  );
};

export { Angle };
