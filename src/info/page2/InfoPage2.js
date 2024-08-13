import React, { useState, useEffect, useRef, useCallback } from "react";
import "./InfoPage2.css";

const InfoPage2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef(null);

  const cardData = Array.from({ length: 12 }).map((_, index) => ({
    id: index,
    image: "../大專題模擬圖/1719287829-thumbnail.jpeg",
    title: "【✨台北寵物用品展✨】",
    text: "📣台北寵物用品展來囉!! 🐱🐶邀請毛孩爸、媽毛們一起來逛台北寵物用品展!",
  }));

  const clonedCardData = [
    ...cardData.slice(-3),
    ...cardData,
    ...cardData.slice(0, 3),
  ];

  const moveCards = useCallback(
    (direction) => {
      const container = cardsRef.current;
      const cardWidth = container.children[0].offsetWidth + 40; // 卡片寬度 + margin
      let newIndex = currentIndex + direction;

      if (newIndex < 0) {
        newIndex = cardData.length - 1;
        container.style.transition = "none";
        container.style.transform = `translateX(-${
          (cardData.length + 2) * cardWidth
        }px)`;
        setTimeout(() => {
          container.style.transition = "transform 0.5s ease";
          setCurrentIndex(newIndex);
        }, 10);
      } else if (newIndex >= cardData.length) {
        newIndex = 0;
        container.style.transition = "none";
        container.style.transform = `translateX(-${3 * cardWidth}px)`;
        setTimeout(() => {
          container.style.transition = "transform 0.5s ease";
          setCurrentIndex(newIndex);
        }, 10);
      } else {
        setCurrentIndex(newIndex);
      }

      container.style.transform = `translateX(-${
        (newIndex + 2) * cardWidth
      }px)`;
    },
    [currentIndex, cardData.length]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      moveCards(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [moveCards]);

  return (
    <div className="page" id="page2">
      <video
        // autoPlay
        muted={true}
        loop
        src="../../imgs/dog.mp4"
      ></video>
      <h2>最新消息</h2>
      <div className="currentCard">
        <img
          id="prev"
          className="control"
          src="https://img.icons8.com/forma-light-filled/96/FFFFFF/circled-chevron-right.png"
          alt="circled-chevron-right"
          onClick={() => moveCards(-1)}
        />
        <div className="cards-container">
          <div className="cards" ref={cardsRef}>
            {clonedCardData.map((card, index) => (
              <div className="card" key={index}>
                <img alt="最新資訊小卡" id="cardImage" src={card.image} />
                <h3 id="cardTitle">{card.title}</h3>
                <span id="cardText">{card.text}</span>
                <a href="http://localhost:3000/">more</a>
              </div>
            ))}
          </div>
        </div>
        <img
          id="next"
          className="control"
          src="https://img.icons8.com/forma-light-filled/96/FFFFFF/circled-chevron-right.png"
          alt="circled-chevron-right"
          onClick={() => moveCards(1)}
        />
      </div>

      <div id="page2News">
        {Array.from({ length: 22 }).map((_, index) => (
          <div id="newsInfo" key={index}>
            <p id="newsDate">2022.02.18</p>
            <p id="newsText">
              【慈愛海佃分院 停止營業公告】 親愛的顧客
              感謝您一直以來對慈愛動物醫院 海佃分院的支持與厚愛 ​
              因營運調整慈愛動物醫院海佃分院 ●最後服務日為 2024 年 2 月 27日
              ●停止營業日為 2024 年 2 月 28日 對於這造成的不便，我們深表歉意 ​。
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPage2;
