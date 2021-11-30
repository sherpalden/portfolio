import styled from "styled-components";

export interface CardStyleOneProps {
  title: string;
  summary: string;
  link: string;
  image: string;
}

const CardStyleOneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 360px;
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
    font-weight: 500;
  }
  & .summary {
    margin-top: 12px;
    background: #ffffff;
    border-radius: 6px;
    font-size: 12px;
    padding: 6px;
    font-weight: 400;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    @media (max-width: 768px) {
      -webkit-line-clamp: 9;
    }
  }
`;

const CardStyleOne: React.FC<CardStyleOneProps> = ({
  title,
  link,
  image,
  summary,
}) => {
  return (
    <CardStyleOneWrapper>
      <div className="title">{title}</div>
      <a href={link} target="_blank" className="thumbnail-img">
        <img src={image} alt={title} />
      </a>
      <div className="summary">{summary}</div>
    </CardStyleOneWrapper>
  );
};

export { CardStyleOne };
