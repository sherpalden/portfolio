import styled from "styled-components";

export interface CardStyleOneProps {
  title: string;
  link: string;
  image: string;
}

const CardStyleOneWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & .thumbnail-img {
        max-width: 360px;
        height: 200px;
        display: grid;
        place-items: center;
        background: grey;
        img {
            width: 100%;
            object-fit: contain;
        }
    }
    & .title {
        margin-top: 12px;
        color: #ffffff;
        font-size: 18px;
        font-weight: 400;
    }
`;

const CardStyleOne: React.FC<CardStyleOneProps> = ({ title, link, image }) => {
  return (
    <CardStyleOneWrapper>
      <a href={link} target="_blank" className="thumbnail-img">
          <img src={image} alt={title} />
      </a>
      <div className="title">{title}</div>
    </CardStyleOneWrapper>
  );
};

export { CardStyleOne };
