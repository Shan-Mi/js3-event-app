import React from "react";
import { useHistory } from "react-router-dom";

const EventDetailPage = () => {
  const history = useHistory();
  return (
    <div>
      <button
        className="my-btn"
        onClick={() => {
          history.push("/");
        }}>
        Go back to homepage
      </button>
    </div>
  );
};

export default EventDetailPage;
