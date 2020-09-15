import React from "react";
import { useHistory } from "react-router-dom";

const EventListPage = () => {
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
      <h1>List page</h1>
    </div>
  );
};

export default EventListPage;
