import React from "react";
import S from "./Header.module.css";
import Button from "../Button/Button";
import UserPicture from '../UserPicture/UserPicture'


const Header = () => {
  return (
    <nav>
      <div className={S.header}>
        <div className={S.headerContent}>
          <h1>Hotel</h1>
          <div className={S.userMenu}>
            <Button text='entrar'/>
            <UserPicture/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
