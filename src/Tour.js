import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <p className="tour-price">${price}</p>
        </div>
        <p>
          {showInfo ? info : `${info.substring(0, 200)}... `}
          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
