import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AppointmentConfirmation = () => {
  const { appointmentId } = useParams();
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  useEffect(() => {
    // 從後端獲取預約詳情
    fetch(`/appointment/${appointmentId}`)
      .then((response) => response.json())
      .then((data) => setAppointmentDetails(data))
      .catch((error) => console.error("Error:", error));
  }, [appointmentId]);

  if (!appointmentDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>預約確認</h1>
      <p>預約 ID: {appointmentId}</p>
      <p>診所: {appointmentDetails.clinicName}</p>
      <p>醫生: {appointmentDetails.doctorName}</p>
      <p>日期: {appointmentDetails.appointmentDate}</p>
      <p>時間: {appointmentDetails.appointmentTime}</p>
      {/* 添加更多預約詳情 */}
    </div>
  );
};

export default AppointmentConfirmation;
