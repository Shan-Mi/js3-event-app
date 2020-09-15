import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EventKit from "../data/EventKit";

export default function EventDetailPage() {
  const [mainPageData, setMainPageData] = useState(null);
  const eventKit = new EventKit();
  const history = useHistory();
  const { slug } = useParams();
  console.log(slug)

  useEffect(() => {
    fetchEventMainPage();  console.log(slug)

  }, []);

  function fetchEventMainPage() {
    eventKit
      .fetchEventDetailPage(slug)
      .then((res) => res.json())
      .then((data) => {
        setMainPageData(data);
      });
  }

  return (
    <div>
      {mainPageData && (
        <div>
          <button
            className="my-btn"
            onClick={() => {
              history.push("/");
            }}>
            Go back to homepage
          </button>
          <h1>{mainPageData.title}</h1>
          <p>{mainPageData.description}</p>
          {mainPageData.actionPoints &&
            mainPageData.actionPoints.map((actionPoint, index) => {
              return (
                <div key={index}>
                  <p>{actionPoint.title}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
