import React from "react";
import "./Dashboard.css";

import { useTranslation } from "react-i18next";
import { CFormSelect } from "@coreui/react";

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
        <CFormSelect onChange={handleChangeLanguage}>
          <option value="vi">VietNam</option>
          <option value="en">English</option>
        </CFormSelect>
      </div>
    </div>
  );
}

export default Dashboard;
