import styled from "styled-components";
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

export interface IconProps {
  name: "facebook" | "github" | "linkedin" | "twitter" | "email" | "phone";
  color: string;
  fontSize: string;
}

interface WrapperProps {
  color: string;
  fontSize: string;
}

const Wrapper = styled.div<WrapperProps>`
  color: ${({ color }: WrapperProps) => color};
  font-size: ${({ fontSize }: WrapperProps) => fontSize};
`;

const Icon: React.FC<IconProps> = ({ name, color, fontSize, ...rest }) => {
  switch (name) {
    case "facebook":
      return (
        <Wrapper color={color} fontSize={fontSize}>
          <FacebookOutlined {...rest} />
        </Wrapper>
      );
    case "github":
      return (
        <Wrapper color={color} fontSize={fontSize}>
          <GithubOutlined {...rest} />
        </Wrapper>
      );
    case "linkedin":
      return (
        <Wrapper color={color} fontSize={fontSize}>
          <LinkedinOutlined {...rest} />
        </Wrapper>
      );
    case "twitter":
      return (
        <Wrapper color={color} fontSize={fontSize}>
          <TwitterOutlined {...rest} />
        </Wrapper>
      );
    case "email":
      return (
        <Wrapper color={color} fontSize={fontSize}>
          <MailOutlined {...rest} />
        </Wrapper>
      );
    case "phone":
      return (
        <Wrapper color={color} fontSize={fontSize}>
          <PhoneOutlined {...rest} />
        </Wrapper>
      );
  }
};

export { Icon };
