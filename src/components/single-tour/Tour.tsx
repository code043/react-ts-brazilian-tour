import { useState } from "react";

type Props = {
  image: string;
  info: string;
  name: string;
};

const Tour = ({ image, info, name }: Props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="tour">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <footer>
        <div className="tour-title">
          <h4>{name}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Ler menos" : "  Ler mais"}
          </button>
        </p>
      </footer>
    </article>
  );
};

export default Tour;
