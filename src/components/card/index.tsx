import { FC } from "react";
import "./index.scss";

interface Props {
  name: string;
  status: string;
  species: string;
  image: string;
  location: string;
  firstSeenIn: string;
}

const Component: FC<Props> = ({
  name,
  status,
  species,
  image,
  location,
  firstSeenIn,
}) => {
  return (
    <div className="Card">
      <img src={image} alt="character" />
      <div className="Card__content">
        <h5 className="Card__name">{name}</h5>
        <p className="Card__status-species">
          {status} - {species}
        </p>
        <p className="Card__label">Last known location:</p>
        <p className="Card__value">{location}</p>
        <p className="Card__label">First seen in:</p>
        <p className="Card__value">{firstSeenIn}</p>
      </div>
    </div>
  );
};

export default Component;
