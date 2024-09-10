import Tour from "../single-tour/Tour";
import { ToursData } from "../../types/ToursList";
const Tours = ({ tours }: { tours: ToursData[] }) => {
  return (
    <section>
      <div className="header">
        <h2>Brazillian Tour</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
