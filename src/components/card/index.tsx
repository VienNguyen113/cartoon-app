import axios from "axios";
import { FC, useEffect, useState } from "react";
import "./index.scss";

interface Props {
  name: string;
  status: string;
  species: string;
  image: string;
  location: string;
  firstSeenInUrl: string;
}

const Component: FC<Props> = ({
  name,
  status,
  species,
  image,
  location,
  firstSeenInUrl,
}) => {
  const [firstSeenIn, setFirstSeenIn] = useState();
  useEffect(() => {
    if (firstSeenInUrl) {
      axios
        .get(firstSeenInUrl)
        .then(function (response) {
          setFirstSeenIn(response.data?.name);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [firstSeenInUrl]);

  return (
    <div className="Card">
      <img src={image} alt="character" />
      <div className="Card__content">
        <h5 className="Card__name">{name}</h5>
        <p className={`Card__status-species Card__status-species--${status}`}>
          {status} - {species}
        </p>
        <p className="Card__label">Last known location:</p>
        <p className="Card__value">{location}</p>
        <p className="Card__label">First seen in:</p>
        <p className="Card__value">{firstSeenIn || ""}</p>
      </div>
    </div>
  );
};

export default Component;
