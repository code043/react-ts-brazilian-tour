import { useState, useEffect } from "react";
import Tours from "./components/tours-list/Tours";
import { ToursData } from "./types/ToursList";
import infos from "./database/infos.json";
import "./index.css";

function App() {
  const [tours, setTours] = useState<ToursData[]>([]);

  useEffect(() => {
    setTours(infos);
  }, []);

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
