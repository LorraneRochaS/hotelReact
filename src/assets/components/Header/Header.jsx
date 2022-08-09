import React from "react";
import S from "./Header.module.css";
import Button from "../Button/Button";
import UserPicture from "../UserPicture/UserPicture";
import { Link } from "react-router-dom";

//logo

const Header = () => {
  return (
    <nav className={S.navContainer}>
      <div className={S.header}>
        <div className={S.headerContent}>
          <Link className={S.title} to="/">
            Hotel
          </Link>
          <div className={S.userMenu}>
            <Link className={S.login} to="/login">
              <Button text="entrar" />
            </Link>
            <UserPicture />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
