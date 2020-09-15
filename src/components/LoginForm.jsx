import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import EventKit from "../data/EventKit";

const LoginForm = () => {
  const history = useHistory();
  const eventKit = new EventKit();
  const [email, setEmail] = useState("test.user@willandskill.se");
  const [password, setPassword] = useState("js-lesson-10");

  const login = () => {
    eventKit
      .login(email, password)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        eventKit.setToken(data.token);
        history.push("/event-list");
      });
  };

  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="jane.doe@company.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginForm;
