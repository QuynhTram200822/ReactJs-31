import React from "react";
import "./Dashboard.css";

import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t, i18n } = useTranslation("translate");

  const handleChangeLanguage = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App ">
      <p className=" text-center ">{t("home.label")}</p>
      <div className="w-25 ">
        <Form.Select onChange={handleChangeLanguage}>
          <option value="vi">VietNam</option>
          <option value="en">English</option>
        </Form.Select>
      </div>
    </div>
  );
}

export default Dashboard;
