import { useEffect, useState } from "react";
import { Card } from "./components";
import "./app.scss";
import request from "./request";

function App() {
  const [characters, setCharacters] = useState<CharacterResApi[]>([]);

  useEffect(() => {
    request.get("/character").then(function (response) {
      setCharacters(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      <div className="App__content">
        {characters.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            image={item.image}
            location={item.location.name}
            firstSeenIn={"dummy first seen"}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
