import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EventKit from "../data/EventKit";

const EventListPage = () => {
  const history = useHistory();
  const eventKit = new EventKit();
  const [eventList, setEventList] = useState(null);

  const fetchEventList = () => {
    eventKit
      .fetchEventList()
      .then((res) => res.json())
      .then(({ results }) => {
        console.log(results);
        setEventList(results);
      });
  };

  useEffect(() => {
    fetchEventList();
  }, []);

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
      {eventList && eventList.map(event => (
        <h4>{event.title}</h4>
      ))}
    </div>
  );
};

export default EventListPage;
/* 
backgroundImage: "http://yoshi.willandskill.eu:8999/media/background_image_fynApIg.jpg"
​​
description: "This is an event for our manufactors"
​​
id: 14
​​
kind: 0
​​
logo: null
​​
logotype: "http://yoshi.willandskill.eu:8999/media/logotype_image_yj1zIPY.jpg"
​​
logoutText: "Thanks for attending our event. For more information, please visit <a href=\"https://dell.com\">our homepage</a>"
​​
slug: "dell-q2-manufacturor-event"
​​
startAt: "2020-08-20T19:56:25.420629"
​​
termsOfServiceText: "These are our <a href=\"https://dell.com>\"terms of conditions</a>"
​​
title: "Dell Q2 Manufacturor Event"
*/