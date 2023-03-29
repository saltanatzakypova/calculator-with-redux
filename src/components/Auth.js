import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActionType } from "../store/auth/authReducer";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const [formState, setformState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (event) => {
      setformState((prevState) => ({
        ...prevState,
        [name]: event.target.value,
      }));
    };
  };

  const submitHandler = (e) => {
    e.preventDefault()
    if (
      formState.email === "test@gmail.com" &&
      formState.password === "123123"
    ) {
      dispatch({
        type: authActionType.LOG_IN,
        payload: formState.email,
      });
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={inputChangeHandler("email")}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formState.password}
              onChange={inputChangeHandler("password")}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
