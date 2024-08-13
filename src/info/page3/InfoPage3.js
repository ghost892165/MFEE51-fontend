import React, { useState, useEffect, useRef } from "react";
import "./InfoPage3.css";

const InfoPage3 = () => {
  const [numbers, setNumbers] = useState({
    Number1: 0,
    Number2: 0,
    Number3: 0,
    Number4: 0,
  });

  const animationRef = useRef(null);
  const pageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateNumber = (key, start, end, duration) => {
    let startTime = null;

    const updateNumber = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      const currentNumber = Math.min(
        Math.floor((progress / duration) * (end - start) + start),
        end
      );

      setNumbers((prevNumbers) => ({
        ...prevNumbers,
        [key]: currentNumber,
      }));

      if (currentNumber < end) {
        animationRef.current = requestAnimationFrame(updateNumber);
      }
    };

    animationRef.current = requestAnimationFrame(updateNumber);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentPageRef = pageRef.current;
    if (currentPageRef) {
      observer.observe(currentPageRef);
    }

    return () => {
      if (currentPageRef) {
        observer.unobserve(currentPageRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      animateNumber("Number1", 0, 200, 2000);
      animateNumber("Number2", 0, 1866224, 2000);
      animateNumber("Number3", 0, 3212531, 2000);
      animateNumber("Number4", 0, 120000, 2000);
      animateNumber("Number4", 0, 120000, 2000);
      setHasAnimated(true);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, hasAnimated]);

  return (
    <div className="page" id="page3" ref={pageRef}>
      <video muted={true} loop playsInline src="../../imgs/dog.mp4"></video>
      <h2 id="page3TopTitle">公益活動</h2>
      <span id="page3TopText">
        寵醫網誠摯邀請您參加我們的流浪貓狗救助活動！無論您身在何處，我們歡迎您成為我們的志工，前往台灣各地的流浪貓狗園區，親身參與救助工作，幫助小動物提供溫暖與愛心。除此之外，您也可以選擇定期捐助口糧，幫助各地的流浪貓狗園區。您的善心捐助將能夠改善牠們的生活條件，給予牠們更好的未來，一起行動，讓這個世界對流浪貓狗更加友善！
      </span>
      <div id="commonPage">
        <div className="common">
          <img
            alt="home"
            className="commonIcon"
            src="https://img.icons8.com/ios-filled/100/FFFFFF/home.png"
          />
          <p className="commonText">正在幫助的浪浪園區有</p>
          <div className="unit">
            <p className="commonNumber Number1">
              {numbers.Number1.toLocaleString()}
            </p>
            <p className="unitText">個</p>
          </div>
          <button className="commonButton">瞭解更多</button>
        </div>
        <div className="common">
          <img
            alt="money"
            className="commonIcon"
            src="https://img.icons8.com/windows/96/FFFFFF/hand-holding-dollar.png"
          />
          <p className="commonText">已捐出的貓狗飼料金額</p>
          <div className="unit">
            <p className="commonNumber Number2">
              {numbers.Number2.toLocaleString()}
            </p>
            <p className="unitText">元</p>
          </div>
          <button className="commonButton">瞭解更多</button>
        </div>
        <div className="common">
          <img
            alt="heavy"
            className="commonIcon"
            src="https://img.icons8.com/sf-regular/96/FFFFFF/like.png"
          />
          <p className="commonText">已捐出的貓狗飼料總重</p>
          <div className="unit">
            <p className="commonNumber Number3">
              {numbers.Number3.toLocaleString()}
            </p>
            <p className="unitText">kg</p>
          </div>
          <button className="commonButton">瞭解更多</button>
        </div>
        <div className="common">
          <img
            alt="howmany"
            className="commonIcon"
            src="https://img.icons8.com/ios/100/FFFFFF/dog--v1.png"
          />
          <p className="commonText">正在受惠中的貓狗總數</p>
          <div className="unit">
            <p className="commonNumber Number4">
              {numbers.Number4.toLocaleString()}
            </p>
            <p className="unitText">隻</p>
          </div>
          <button className="commonButton">瞭解更多</button>
        </div>
      </div>
    </div>
  );
};

export default InfoPage3;
