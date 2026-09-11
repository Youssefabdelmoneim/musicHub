import CreateHomeList from "./view.jsx";
import dataHome from "./model.jsx";
import { useState, useEffect } from "react";
export default function CreateHome({ queries, setSong, activatePage }) {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    dataHome(queries).then((data) => setLists(data));
  }, [queries]);

  return (
    <div className="home">
      {lists.map(({ query, data }) => (
        <CreateHomeList
          key={query}
          query={query}
          setSong={setSong}
          activatePage={activatePage}
          data={data}
        />
      ))}
    </div>
  );
}
