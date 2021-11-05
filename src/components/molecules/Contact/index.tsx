import styled from "styled-components";
import { Icon } from "../../atoms/Icon";

export interface ContactProps {
  direction?: "open" | "close";
}

const ContactWrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  place-items: center;
  grid-gap: 6px;
  div {
  }
`;

const contactList = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/palden/",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/sherpalden369/",
  },
  {
    name: "github",
    link: "https://github.com/sherpalden",
  },
  {
    name: "twitter",
    link: "https://twitter.com/sher_palden",
  },
];

const Contact: React.FC<ContactProps> = ({ direction }) => {
  return (
    <ContactWrapper>
      {contactList.map((item: any, index: number) => (
        <div className="contact-item" key={`contact-item-${index}`}>
          <a href={item.link} target="_blank">
            <Icon name={item.name} fontSize="32px" color="#ffffff" />
          </a>
        </div>
      ))}
    </ContactWrapper>
  );
};

export { Contact };
