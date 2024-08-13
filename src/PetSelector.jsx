import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/search.css";

const PetSelector = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    clinicId,
    doctorId,
    clinicName,
    doctorName,
    appointmentDate,
    appointmentTime,
  } = location.state || {};

  // 創建一個 ref 來引用 cardBg 元素
  const cardBgRef = useRef(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:8000/pets");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched pets data:", data);
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
        setError("無法獲取寵物列表。請稍後再試。");
      }
    };

    fetchPets();
  }, []);

  // 在組件開始時添加這行來檢查接收到的數據
  console.log("PetSelector received:", {
    clinicName,
    doctorName,
    appointmentDate,
    appointmentTime,
  });

  const handlePetSelect = (pet) => {
    setSelectedPet(pet);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const handleSubmit = () => {
    if (selectedPet) {
      console.log("Submitting appointment with:", {
        clinicName,
        doctorName,
        petName: selectedPet.name,
        appointmentDate,
        appointmentTime,
      });
      navigate("/appointment-confirmation", {
        state: {
          clinicId,
          doctorId,
          clinicName,
          doctorName,
          petName: selectedPet.name,
          appointmentDate,
          appointmentTime,
          petId: selectedPet.id,
        },
      });
    } else {
      alert("請選擇一個寵物");
    }
  };

  // 新增的滑動函數
  const handleScroll = (direction) => {
    if (cardBgRef.current) {
      cardBgRef.current.scrollBy({
        top: 0,
        left: direction === "left" ? -1500 : 1500,
        behavior: "smooth",
      });
    }
  };

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchValue)
  );

  return (
    <div id="allPet">
      <div id="bodyPet">
        <div id="searchFurry" style={{ backgroundColor: "rgb(248, 243, 237)" }}>
          <img
            id="closePage"
            src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png"
            alt="close"
            onClick={() => navigate(-1)}
          />
          <input
            type="text"
            placeholder="搜尋您的寵物"
            onChange={handleSearch}
          />
          {error && <div style={{ color: "red" }}>{error}</div>}
          <div id="cardBg" ref={cardBgRef}>
            {filteredPets.length > 0 ? (
              filteredPets.map((pet) => (
                <div
                  key={pet.id}
                  className={`puppyCard ${
                    selectedPet && selectedPet.id === pet.id ? "clicked" : ""
                  }`}
                  onClick={() => handlePetSelect(pet)}
                >
                  <img src={pet.picture} alt={pet.name} />
                  <span>{pet.name}</span>
                </div>
              ))
            ) : (
              <div>沒有找到寵物</div>
            )}
            <div className="puppyCardPlus">
              <img
                src="https://img.icons8.com/sf-regular/48/FAB005/plus.png"
                alt="Add pet"
              />
            </div>
          </div>
          <button id="sendInfo" onClick={handleSubmit}>
            確認送出
          </button>
          <img
            id="leftButton"
            src="https://img.icons8.com/cotton/64/circled-chevron-right--v1.png"
            alt="left"
            onClick={() => handleScroll("left")}
          />
          <img
            id="rightButton"
            src="https://img.icons8.com/cotton/64/circled-chevron-right--v1.png"
            alt="right"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default PetSelector;
