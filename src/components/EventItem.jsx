import React from "react";
import { Link } from "react-router-dom";
// import { BackgroundImgContainer } from "./EventItem.backgroundImg.container";

const EventItem = ({ event }) => {
  const { description, logotype, title, slug, backgroundImage } = event;

  return (
    <div>
      <Link to={`event/${slug}`}>
        <h3>{title}</h3>
      </Link>
      <h4>{slug}</h4>
      <p>{description}</p>
      <img src={backgroundImage} style={{ width: "20%" }} />
      <br />
      <img src={logotype} style={{ width: "20%" }} />
    </div>
  );
};

export default EventItem;
