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
            FLEN HOTEL 
          </Link>
          <div className={S.userMenu}>
            <Link className={S.login} to="/login">
              <Button text="Entrar" />
            </Link>
            <UserPicture src='https://cdn-icons.flaticon.com/png/128/552/premium/552848.png?token=exp=1660107997~hmac=09742289e902617856b57698291a0f39' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
