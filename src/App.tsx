import { useState, useEffect } from "react";
import Tours from "./components/tours-list/Tours";
import { ToursData } from "./types/ToursList";
import "./App.css";
import infos from "./database/infos.json";

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
