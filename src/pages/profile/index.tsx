import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Layout from "components/Layout/Layout";
import Carousel from "components/Carousel/Carousel";
import { carouselImgNameAry } from "constants/Profile";
import CustomDot from "./CustomDot/CustomDot";

/*
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
*/

type PageProps = NextPage & { Layout: any };

const PageComponent: PageProps = () => {
  const [showIntroClass, setShowIntroClass] = useState<string>("opacity-0");

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();

      if (window.pageYOffset >= 200) {
        setShowIntroClass("opacity-1");
      } else {
        setShowIntroClass("opacity-0");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="bg-gradient-to-t from-indigo-500 via-purple-500 pt-6">
        <img
          className="w-[200px] h-[200px] mx-auto rounded-full "
          src="/common/profile.jpg"
          alt="avatar image"
        />
        <h1 className="text-6xl text-center py-6">戴成峯</h1>
      </div>
      <div
        className={`mx-[5%] mt-6 text-center transition-all ease-linear duration-700 ${showIntroClass}`}
      >
        <h2 className="text-6xl text-title-shadow py-6">自我介紹</h2>
        <div className="text-3xl text-slate-700">
          <p>持續專研 JS 技巧的學習者，熱愛撰寫資料處理的前端工程師。</p>
          <br />
          <p>
            熱愛前端技術、資料處理、函式設計(functional programming)，
            <br />
            忠於寫出淺顯易懂的程式邏輯和簡單乾淨的 coding style。
            <br />
            <br />
          </p>
          <p>
            具有&quot;後端知識&quot;與些許的開發經驗，讓我在與後端的溝通、整體開發和網站運作有一定程度上的了解。
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="w-[85%] mx-auto mb-24">
        <Carousel
          additionalSettings={{
            prevArrow: <CustomDot />,
            nextArrow: <CustomDot />,
          }}
        >
          {carouselImgNameAry.map((imgName) => (
            <img
              key={`__profile__carousel__item__${imgName}`}
              src={`/profile/${imgName}`}
              alt="profile carousel item"
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

PageComponent.Layout = Layout;

export default PageComponent;
