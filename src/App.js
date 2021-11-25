import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    setLoading(true);
    axios
      .get(url)
      .then((tours) => {
        setLoading(false);
        setTours((tour) => [...tour, ...tours.data]);
      })
      .catch((err) => console.log(err));
  };

  const removeTour = (id) => {
    setTours((tours) => tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => fetchTours(), []);

  return loading ? (
    <main>
      <Loading />
    </main>
  ) : tours.length === 0 ? (
    <main>
      <div className="loading">
        <h1>no tours</h1>
        <div className="underline"></div>
        <button className="btn" onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>
  ) : (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
