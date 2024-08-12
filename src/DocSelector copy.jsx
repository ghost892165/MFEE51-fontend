// DocSelector.jsx

import React, { useState } from "react";
import "./styles/docSelector.css"; // 引入 CSS 文件

const DocSelector = () => {
  const [footerExpanded, setFooterExpanded] = useState(false);
  const [expandedInfo, setExpandedInfo] = useState(null);

  const handleFooterClick = () => {
    setFooterExpanded((prev) => !prev);
  };

  const handleToggleInfo = (index) => {
    setExpandedInfo((prev) => (prev === index ? null : index));
  };

  return (
    <div className="container">
      <div className="page">
        <a href="../home.html">
          <img
            id="prev"
            src="https://img.icons8.com/flat-round/64/arrow--v1.png"
            alt="Previous"
          />
        </a>

        <video muted loop autoPlay src="/imgs/dog.mp4"></video>
        <div className="selectTop docSelectTop">
          <input id="docDate" type="date" />
          <select name="docTime" id="docTime">
            <option value="選擇時段">選擇時段</option>
            {/* Add more options here */}
            <option value="00:00:00">00:00 ~ 01:00</option>
            <option value="01:00:00">01:00 ~ 02:00</option>
            <option value="02:00:00">02:00 ~ 03:00</option>
            <option value="03:00:00">03:00 ~ 04:00</option>
            <option value="04:00:00">04:00 ~ 05:00</option>
            <option value="05:00:00">05:00 ~ 06:00</option>
            <option value="06:00:00">06:00 ~ 07:00</option>
            <option value="07:00:00">07:00 ~ 08:00</option>
            <option value="08:00:00">08:00 ~ 09:00</option>
            <option value="09:00:00">09:00 ~ 10:00</option>
            <option value="10:00:00">10:00 ~ 11:00</option>
            <option value="11:00:00">11:00 ~ 12:00</option>
            <option value="12:00:00">12:00 ~ 13:00</option>
            <option value="13:00:00">13:00 ~ 14:00</option>
            <option value="14:00:00">14:00 ~ 15:00</option>
            <option value="15:00:00">15:00 ~ 16:00</option>
            <option value="16:00:00">16:00 ~ 17:00</option>
            <option value="17:00:00">17:00 ~ 18:00</option>
            <option value="18:00:00">18:00 ~ 19:00</option>
            <option value="19:00:00">19:00 ~ 20:00</option>
            <option value="20:00:00">20:00 ~ 21:00</option>
            <option value="21:00:00">21:00 ~ 22:00</option>
            <option value="22:00:00">22:00 ~ 23:00</option>
            <option value="23:00:00">23:00 ~ 24:00</option>
          </select>
          <select name="docLocation" id="docLocation">
            <option value="選擇地區">選擇地區</option>
            {/* Add more locations here */}
            <option value="1">台北市</option>
            <option value="2">新北市</option>
            <option value="3">桃園市</option>
            <option value="4">台中市</option>
            <option value="5">台南市</option>
            <option value="6">高雄市</option>
            <option value="7">基隆市</option>
            <option value="8">新竹市</option>
            <option value="9">嘉義市</option>
            <option value="10">新竹縣</option>
            <option value="11">苗栗縣</option>
            <option value="12">彰化縣</option>
            <option value="13">南投縣</option>
            <option value="14">雲林縣</option>
            <option value="15">嘉義縣</option>
            <option value="16">屏東縣</option>
            <option value="17">宜蘭縣</option>
            <option value="18">花蓮縣</option>
            <option value="19">台東縣</option>
            <option value="20">澎湖縣</option>
          </select>
          <select name="docSubject" id="docSubject">
            <option value="選擇專科">選擇專科</option>
            <option value="1">心臟科</option>
            <option value="2">牙科</option>
            <option value="3">眼科</option>
            <option value="4">皮膚科</option>
            <option value="5">骨科</option>
            <option value="6">外科</option>
            <option value="7">神經內科</option>
          </select>
          <input type="submit" id="docConfirm" value="確認" />
        </div>
        <div className="selectbottom">
          <div className="selectbottomLeft">
            <div>
              <span className="selectbottomLeft24hour">24小時急診</span>
              <input type="checkbox" />
            </div>
            <div>
              <span>犬科</span>
              <input type="checkbox" />
            </div>
            <div>
              <span>貓科</span>
              <input type="checkbox" />
            </div>
            <div>
              <span>疫苗</span>
              <input type="checkbox" />
            </div>
          </div>
          <div className="selectbottomRight">
            {Array(1)
              .fill()
              .map((_, index) => (
                <div className="docHospInfo" key={index}>
                  <div className="docHospInfoTop">
                    <div className="hosName">慈愛動物醫院</div>
                    <div className="hosAddress">台中市公益路仁孝路178巷8號</div>
                    <div className="hosInsurance">醫療|健保</div>
                    <div className="hos24hr">24小時急診</div>
                    <button className="rightNow">立即預約</button>
                  </div>
                  <div
                    id="docHospInfoSeeMore"
                    onClick={() => handleToggleInfo(index)}
                  >
                    <img
                      id="infoSeeMore"
                      width="32"
                      height="32"
                      src="https://img.icons8.com/windows/32/circled-down-2.png"
                      alt="See More"
                      className={expandedInfo === index ? "rotated" : ""}
                    />
                  </div>
                  <div
                    className="docHospInfoBottom"
                    style={{
                      display: expandedInfo === index ? "flex" : "none",
                    }}
                  >
                    <div>
                      <img id="docPic" src="/imgs/doc.jpg" alt="Doctor" />
                    </div>
                    <div>
                      <span id="docName">xxx醫師</span>
                    </div>
                    <div className="hosDocInfoDetail">
                      <span id="docPro">骨科專業</span>
                      <hr />
                      <span id="docYear">資歷五年</span>
                      <hr />
                      <span id="docProInfo">骨癌、骨骼發育</span>
                    </div>
                    <div>
                      <input type="checkbox" name="chooseDoc" id="chooseDoc" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocSelector;
