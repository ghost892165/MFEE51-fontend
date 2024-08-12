import React, { useState } from "react";
import "./styles/docSelector.css";

const DocSelector = () => {
  const [expandedInfo, setExpandedInfo] = useState(null);
  const [clinics, setClinics] = useState([]);
  const [searchParams, setSearchParams] = useState({
    day: "",
    time: "",
    location: "",
    subId: "",
    ctagId: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSearchParams((prev) => {
      const prevCtagId = Array.isArray(prev.ctagId) ? prev.ctagId : [];
      if (checked) {
        return { ...prev, ctagId: [...prevCtagId, value] };
      } else {
        return { ...prev, ctagId: prevCtagId.filter((id) => id !== value) };
      }
    });
  };

  const organizeClinicData = (clinics) => {
    const organizedData = {};
    clinics.forEach((clinic) => {
      if (!organizedData[clinic.clinic_id]) {
        organizedData[clinic.clinic_id] = {
          ...clinic,
          doctors: [],
        };
      }
      organizedData[clinic.clinic_id].doctors.push({
        picture: clinic.doctor_picture,
        name: clinic.doctor_name,
        sub: clinic.doctor_sub,
        seniority: clinic.doctor_seniority,
        info: clinic.doctor_info,
      });
    });
    return Object.values(organizedData);
  };

  const handleSearch = async () => {
    const dayMap = {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat",
    };
    const selectedDate = new Date(searchParams.day);
    const dayOfWeek = dayMap[selectedDate.getDay()];

    const queryParams = new URLSearchParams({
      ...searchParams,
      day: dayOfWeek,
      ctagId: Array.isArray(searchParams.ctagId)
        ? searchParams.ctagId.join(",")
        : searchParams.ctagId,
    }).toString();

    try {
      const response = await fetch(`/clinics?${queryParams}`);
      if (response.ok) {
        const data = await response.json();
        setClinics(organizeClinicData(data));
      } else {
        const text = await response.text();
        console.error("Server response:", text);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Failed to fetch clinics:", error);
      setClinics([]);
    }
  };

  const handleToggleInfo = (clinicId) => {
    setExpandedInfo((prev) => (prev === clinicId ? null : clinicId));
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
          <input
            id="docDate"
            type="date"
            name="day"
            onChange={handleInputChange}
          />
          <select name="time" id="docTime" onChange={handleInputChange}>
            <option value="">選擇時段</option>
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
          <select name="location" id="docLocation" onChange={handleInputChange}>
            <option value="">選擇地區</option>
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
          <select name="subId" id="docSubject" onChange={handleInputChange}>
            <option value="">選擇專科</option>
            <option value="1">心臟科</option>
            <option value="2">牙科</option>
            <option value="3">眼科</option>
            <option value="4">皮膚科</option>
            <option value="5">骨科</option>
            <option value="6">外科</option>
            <option value="7">神經內科</option>
          </select>
          <button id="docConfirm" onClick={handleSearch}>
            確認
          </button>
        </div>
        <div className="selectbottom">
          <div className="selectbottomLeft">
            <div>
              <span className="selectbottomLeft24hour">24小時急診</span>
              <input
                type="checkbox"
                value="1"
                onChange={handleCheckboxChange}
              />
            </div>
            <div>
              <span>犬科</span>
              <input
                type="checkbox"
                value="2"
                onChange={handleCheckboxChange}
              />
            </div>
            <div>
              <span>貓科</span>
              <input
                type="checkbox"
                value="3"
                onChange={handleCheckboxChange}
              />
            </div>
            <div>
              <span>疫苗</span>
              <input
                type="checkbox"
                value="4"
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
          <div className="selectbottomRight">
            {clinics.map((clinic) => (
              <div className="docHospInfo" key={`clinic-${clinic.clinic_id}`}>
                <div className="docHospInfoTop">
                  <div className="hosName">{clinic.clinic_name}</div>
                  <div className="hosAddress">{clinic.clinic_address}</div>
                  <div className="hosInsurance">醫療|健保</div>
                  <div className="hos24hr">24小時急診</div>
                  <button className="rightNow">立即預約</button>
                </div>
                <div
                  id="docHospInfoSeeMore"
                  onClick={() => handleToggleInfo(clinic.clinic_id)}
                >
                  <img
                    id="infoSeeMore"
                    width="32"
                    height="32"
                    src="https://img.icons8.com/windows/32/circled-down-2.png"
                    alt="See More"
                    className={
                      expandedInfo === clinic.clinic_id ? "rotated" : ""
                    }
                  />
                </div>
                {expandedInfo === clinic.clinic_id && (
                  <div className="docHospInfoBottom">
                    {clinic.doctors.map((doctor, index) => (
                      <div
                        key={`doctor-${clinic.clinic_id}-${index}`}
                        className="doctorInfo"
                      >
                        <div>
                          <img id="docPic" src={doctor.picture} alt="Doctor" />
                        </div>
                        <div>
                          <span id="docName">{doctor.name}</span>
                        </div>
                        <div className="hosDocInfoDetail">
                          <span id="docPro">{doctor.sub}</span>
                          <hr />
                          <span id="docYear">資歷{doctor.seniority}年</span>
                          <hr />
                          <span id="docProInfo">{doctor.info}</span>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="chooseDoc"
                            id={`chooseDoc-${clinic.clinic_id}-${index}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocSelector;
