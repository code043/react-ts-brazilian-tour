import { useState, useEffect } from "react";
import Tours from "./components/tours-list/Tours";
import { ToursData } from "./types/ToursList";
import "./index.css";
import Loading from "./components/loading/Loading";

function App() {
  const [tours, setTours] = useState<ToursData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getTours = async () => {
    setLoading(true);
    try {
      /**
       * API Repository: https://github.com/code043/node-ts-api-brazilian-tour
       */
      const response = await fetch("https://tours-one-vert.vercel.app/tours");
      const data = await response.json();
      console.log(data);
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
