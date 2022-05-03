import React, { useState, useEffect } from "react";
import Carousel from "components/Carousel/Carousel";
import { carouselImgNameAry } from "constants/Profile";
import CustomDot from "./CustomDot/CustomDot";
import styles from "./Profile.styles";

const Profile = () => {
  const [showIntroClass, setShowIntroClass] = useState<string>("");

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();

      if (window.pageYOffset >= 200) {
        setShowIntroClass("show");
      } else {
        setShowIntroClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="profile">
      <div className="profile__photo">
        <img src="/common/profile.jpg" alt="avator image" />
        <h1>戴成峯</h1>
      </div>
      <div className={`profile__introduction ${showIntroClass}`}>
        <h2>自我介紹</h2>
        <p>
          您好，我叫戴成峯，以上是我的作品，還有很多技術需要加強，但目前仍有屬於自身的即戰力，由於都是以手刻練習，這些基礎讓我很順利能夠銜接其他技能，擅長切版、動畫、RWD、JS互動，以及React、Redux、Router等，雖然現在練習主要以React為主，但在練習之前會先去學習JS，JS的核心知識和運作原理，因此越來越著迷於更多的JS基礎知識，而且更能銜接其他技能，每天保持著大量的練習與閱讀，知道很多知識點以及沉澱吸收這些知識。
          <br />
          <br />
          Coding
          Everyday已經變成習慣，因為是非本科系，每天只有更努力的磨練自己才能站上起跑點，不過正因為我的努力，加上畢業後諸多壓力襲來，導致每天都很焦慮，嚴重到干擾生活，有點燃燒殆盡的感覺，這時候我跑去做一件想做但不曾下定決心去做的事情，畫畫，這段期間不斷反思問自己，我到底想做什麼，並回想起當初手刻網頁時的那份心情，我還是想打程式碼，更想做出進一步的互動式網頁。還有很多技能可以延伸，有後端、資料庫等等，也因此我開始從頭複習，繼續加強基礎，並不斷擴充自己的技能庫，當初的焦慮、迷茫和燃燒殆盡的感覺，變得不向當初那樣會讓自己每天喘不過氣，且更能夠保持平常心朝向自己的目標前進，冷靜地解決問題提升技術層面的高度而學無止境的熱情提升技術層面的深度。
          <br />
          <br />
          這是我做的一些筆記，整理紀錄自己的觀念，網路上很多資源，一個知識點基本都重複看五六次不同的文章和影片，因此這樣大量的重複閱讀搭配實作，每天一點一滴的加強自己的技能和觀念，並且利用這些技術設計出好看的網站，思考邏輯，拆分邏輯，做出互動，真的有很難以形容的心情。
        </p>
      </div>
      <div className="profile__carousel">
        <Carousel
          additionalSettings={{
            prevArrow: <CustomDot />,
            nextArrow: <CustomDot />,
          }}
        >
          {carouselImgNameAry.map((_, index) => {
            const src = `/profile/${carouselImgNameAry[index]}`;
            const key = `__profile__carousel__item__${index}`;

            return <img key={key} src={src} alt="profile carousel item" />;
          })}
        </Carousel>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Profile;
