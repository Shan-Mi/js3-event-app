import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import EventKit from "../data/EventKit";

const LoginForm = () => {
  const history = useHistory();
  const eventKit = new EventKit();
  const [email, setEmail] = useState("test.user@willandskill.se");
  const [password, setPassword] = useState("js-lesson-10");
  const { isDataFetched, setIsDataFetched } = useContext(UserContext);

  const login = () => {
    eventKit
      .login(email, password)
      .then((res) => res.json())
      .then(({ token }) => {
        setIsDataFetched(false);
        if (token) {
          eventKit.setToken(token);
          console.log(token)
          history.push("/event-list");
          setIsDataFetched(true);
        } else {
          throw new Error(["Wrong Email or Password, pls check"]);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {!isDataFetched && (
        <h2>
          <error>Check your email or password again!</error>
        </h2>
      )}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="jane.doe@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // in this case, currentTarge and target are the same.
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
