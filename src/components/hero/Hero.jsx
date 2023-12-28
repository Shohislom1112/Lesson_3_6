import React from "react";
import "./Hero.scss";
import { video } from "../../../public";
// export сертификаты
import { сертификаты } from "../../../public/";
import { profuck } from "../../../public";
import { iamg1, iamg2, iamg3 } from "../../../public";
// export video;

const Hero = () => {
  return (
    <main>
      {/* <div className="container"> */}
      <section className="head">
        <div className="container">
          <div className="text">
            <p className="p1">LEANGROUP - тубы и этикетки</p>
            <h2 className="h2">Ламинатные тубы</h2>
            <p className="p2">
              Используются для производства зубных паст. Широко применяются в
              сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
              химии и DIY (Do-it-Yourself).
            </p>
            <button className="b1">Каталог</button>
          </div>
        </div>
      </section>
      <section className="LeGro">
        <div className="img">
          {" "}
          <img src="{video}" alt="" className="img1" />
        </div>
        <div className="text">
          <p className="pp">
            Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
            сегодняшний день является ведущей компанией по производству
            ламинатных и экструзионных туб. <br />
            Имея две технологии – для производства ламинатных и экструзионных
            туб, мы предлагаем вам широкий спектр возможностей. Большим
            преимуществом является собственный печатный цех в ламинате и in-line
            печать в экструзии с возможностью различных дополнительных опций
            декора. Особое внимание уделяется работе с поставщиками для контроля
            и поддержания качества производимой нами продукции.
            <br />С января 2018 года компания стала членом Европейской
            Ассоциации производителей туб (ETMA), что подтверждает сильную
            позицию бренда и на рынке Европы.{" "}
          </p>
        </div>
      </section>
      <section className="sertifikat">
        <img className="sert" src="{сертификаты}" alt="" />
        <img className="produk" src="{ profuck}" alt="" />
      </section>
      <section className="pro">
        <div className="t">
          <p>Новости</p>
        </div>
        <div className="mg">
          <img src="{iamg1}" alt="" />
          <img src="{iamg2}" alt="" />
          <img src="{iamg3}" alt="" />
        </div>
      </section>
    </main>
    // </div>
  );
};

export default Hero;
