import { useDispatch, useSelector } from "react-redux";
import { authActionType } from "../store/auth/authReducer";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.ahth.isAuthorized);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthorized && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button
                onClick={() => dispatch({ type: authActionType.LOG_OUT })}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
