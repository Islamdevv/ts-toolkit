import { FC } from "react";
import css from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link to="/add">
          <h2>AddTodo</h2>
        </Link>
        <Link to="/list">
          <h2>ListTodo</h2>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
