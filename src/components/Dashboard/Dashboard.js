import React, { useState } from "react";
import "./Dashboard.css";

import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
} from "@coreui/react";

function Dashboard() {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState([]);
  const [showImage, setShowImage] = useState(null);

  const handleImgChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedImage = e.target.files[0];
      // const imageType = image.type;

      // // Kiểm tra kiểu file
      // if (imageType !== "image/jpg" && imageType !== "image/png") {
      //   alert("Kiểu file nên là .jpg và .png");
      //   return;
      // }

      setImage((prevImages) => [...prevImages, selectedImage]); // Chỉ cập nhật hình ảnh nếu kiểu tệp hợp lệ
    }
  };

  const handleImgShow = (e) => {
    e.preventDefault();
    setShowImage(image[image.length - 1]);
    setVisible(false);
  };
  return (
    <div className="App ">
      <div className="">
        <div className=" d-flex  justify-content-center ">
          {showImage ? (
            <img
              className="d-flex justify-content-center"
              src={URL.createObjectURL(showImage)}
              alt="Uploaded"
            />
          ) : (
            <img
              className="upload d-flex justify-content-center"
              src="/upload.jpg"
              alt="Default"
            />
          )}
        </div>
        <CButton className="mt-3" color="info" onClick={() => setVisible(true)}>
          Open POPUP
        </CButton>
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle id="LiveDemoExampleLabel">Upload Image</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <div className="mb-3">
              <CFormInput
                type="file"
                id="formFile"
                label="Choose your image file"
                onChange={handleImgChange}
              />
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary" onClick={handleImgShow}>
              Submit
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    </div>
  );
}

export default Dashboard;
