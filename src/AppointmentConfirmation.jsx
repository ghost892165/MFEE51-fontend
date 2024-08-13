import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/AppointmentConfirmation.css";

const AppointmentConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clinicName, doctorName, petName, appointmentDate, appointmentTime } =
    location.state || {};

  const handleReturn = () => {
    navigate("/info");
  };

  if (!clinicName || !doctorName || !petName) {
    return (
      <div className="appointment-confirmation">
        預約信息不完整，請重新預約。
      </div>
    );
  }

  return (
    <div className="appointment-confirmation">
      <h1>預約確認</h1>
      <div className="appointment-details">
        <p>
          <strong>寵物名稱:</strong> {petName}
        </p>
        <p>
          <strong>診所名稱:</strong> {clinicName}
        </p>
        <p>
          <strong>醫生名稱:</strong> {doctorName}
        </p>
        <p>
          <strong>預約日期:</strong> {appointmentDate}
        </p>
        <p>
          <strong>預約時間:</strong> {appointmentTime}
        </p>
      </div>
      <button className="return-button" onClick={handleReturn}>
        確認
      </button>
    </div>
  );
};

export default AppointmentConfirmation;
