import React from "react";
import { logo } from "../../public";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <header className="header1">
        <div className="container">
          <div className="header">
            <div className="ong">
              <img src={logo} alt="" />

              <a href="#" className="menu">
                Продукция
              </a>
              <a href="#" className="menu">
                Сертификаты
              </a>
              <a href="#" className="menu">
                Наша команда
              </a>
              <a href="#" className="menu">
                О нас
              </a>
              <a href="#" className="menu">
                Новости
              </a>
              <a href="#" className="menu">
                Вакансии
              </a>
              <a href="#" className="menu">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
