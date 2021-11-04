import styled from "styled-components";

export interface LineProps {
  direction?: "open" | "close";
}

const LineWrapper = styled.div<{ direction?: string }>`
  div {
    width: 18px;
    height: 400px;
    border-radius: 25px;
    background: #ffffff;
    transform-origin: 0% 0%;
    transform: translateY(-19%) rotate(12deg);
  }
`;

const Line: React.FC<LineProps> = ({ direction }) => {
  return (
    <LineWrapper direction={direction}>
      <div></div>
    </LineWrapper>
  );
};

export { Line };
