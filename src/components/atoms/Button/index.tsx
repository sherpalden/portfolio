import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { Button } from "antd";

type ButtonType = "primary" | "link";
export interface ButtonProps {
  children?: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  type?: ButtonType;
  width?: string;
  block?: boolean;
  padding?: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  minheight?: string;
  height?: string;
  minwidth?: string;
  maxwidth?: string;
  boxshadow?: string;
  background?: string;
  borderradius?: string;
  noradius?: boolean;
  typography?: any;
  color?: string;
  hovercolor?: string;
  fontSize?: string;
  bold?: boolean;
  margin?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  bordercolor?: string;
  className?: string;
}

const Wrapper = styled.div`
  display: ${(props: ButtonProps) => (props.block ? "block" : "contents")};
  & .ant-btn-primary {
    background: ${theme.mainGreen};

    box-shadow: 0px 0px 12px rgba(28, 86, 225, 0.51);
    font-size: 16px;
    line-height: 30px;
    font-weight: 700;
  }

  & .ant-btn-link {
    box-shadow: none;
    background: transparent;
    color: ${theme.mainGreen};
  }
  & .ant-btn:hover,
  & .ant-btn:focus {
    background: ${({ background, hovercolor }: ButtonProps) => {
    return (
      hovercolor ||
      background ||
      `linear-gradient(90.14deg, ${theme.gradientStart} 38.9%, ${theme.gradientEnd} 100.96%)`
    );
  }};
    border: none;
    color: white;
  }
`;

const StyledButton = styled(Button)`
  ${({ typography }: ButtonProps) => {
    if (typography) {
      return typography;
    }
  }}
  &[disabled] {
    background-color: ${theme.secondaryLight};
    border: none;
    box-shadow: none !important;
    color: ${theme.base};
  }
  border: none;
  height: ${({ height }: ButtonProps) => {
    return height ? `${height}` : "74px";
  }};
  border-radius: ${({ borderradius, noradius }: ButtonProps) => {
    return noradius ? "none" : borderradius ? borderradius : "100px";
  }};
  margin: ${({ margin }: ButtonProps) => {
    return margin && margin;
  }};
  padding: ${({ type, padding }: ButtonProps) => {
    if (padding) {
      return `${padding} !important`;
    }
    switch (type) {
      case "primary":
        return "0px 36px 0px 37px";
      default:
        return "0px 36px 0px 37px";
    }
  }};

  background: ${({ background }: ButtonProps) => {
    return background
      ? background
      : `linear-gradient(90.14deg, ${theme.gradientStart} 38.9%, ${theme.gradientEnd} 100.96%)`;
  }};

  color: ${({ color }: ButtonProps) => {
    return color ? `${color} !important` : theme.base;
  }};
  font-size: ${({ fontSize }: ButtonProps) => {
    return fontSize ? fontSize : "16px";
  }};
  font-weight: ${({ bold }: ButtonProps) => {
    return bold && "bold";
  }};
  min-width: ${({ minwidth }: ButtonProps) => {
    return minwidth && `${minwidth}`;
  }};
  width: ${({ width }: ButtonProps) => {
    return width ? `${width}` : "300px";
  }};
  max-width: ${({ maxwidth }: ButtonProps) => {
    return maxwidth ? `${maxwidth}` : "300px";
  }};
  min-height: ${({ minheight }: ButtonProps) => {
    return minheight ? `${minheight}` : "24px";
  }};
`;

export const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  htmlType,
  loading,
  onClick,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <StyledButton
        onClick={onClick}
        htmlType={htmlType}
        loading={loading}
        {...rest}
      >
        {children}
      </StyledButton>
    </Wrapper>
  );
};
