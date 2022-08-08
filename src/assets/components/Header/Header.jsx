import React from "react";
import S from "./Header.module.css";
import Button from "../Button/Button";
import UserPicture from '../UserPicture/UserPicture'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav>
      <div className={S.header}>
        <div className={S.headerContent}>
          <Link className={S.title}to='/'>Hotel</Link>
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
