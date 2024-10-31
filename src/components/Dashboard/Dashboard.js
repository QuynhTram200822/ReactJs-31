import React, { useRef, useState, useEffect } from "react";
import "./Dashboard.css";

import {
  CButton,
  CAlert,
  CTabs,
  CTabList,
  CTab,
  CTabContent,
  CTabPanel,
  CContainer,
  CForm,
  CCol,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormCheck,
  CFormFeedback,
  CTable,
} from "@coreui/react";

function Dashboard() {
  const [visible, setVisible] = useState(false);

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const columns = [
    {
      key: "id",
      label: "#",
      _props: { scope: "col" },
    },
    {
      key: "class",
      _props: { scope: "col" },
    },
    {
      key: "heading_1",
      label: "Heading",
      _props: { scope: "col" },
    },
    {
      key: "heading_2",
      label: "User",
      _props: { scope: "col" },
    },
  ];
  const items = [
    {
      id: 1,
      class: "Mark",
      heading_1: "Otto",
      heading_2: "@mdo",
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 2,
      class: "Jacob",
      heading_1: "Thornton",
      heading_2: "@fat",
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 3,
      class: "Larry the Bird",
      heading_2: "@twitter",
      _cellProps: { id: { scope: "row" }, class: { colSpan: 2 } },
    },
  ];
  return (
    <div className="App ">
      <CContainer>
        <div className="d-flex justify-content-center">
          <h2>CoreUI React</h2>
        </div>
        <CTabs activeItemKey="button">
          <CTabList variant="tabs">
            <CTab itemKey="button">Button</CTab>
            <CTab itemKey="form">Form</CTab>
            <CTab itemKey="table">Table</CTab>
          </CTabList>
          <CTabContent>
            <CTabPanel className="p-3" itemKey="button">
              <CAlert
                color="primary"
                dismissible
                visible={visible}
                onClose={() => setVisible(false)}
              >
                A simple primary alert—check it out!
              </CAlert>
              <CButton color="primary" onClick={() => setVisible(true)}>
                Show live alert
              </CButton>
            </CTabPanel>
            <CTabPanel className="p-3" itemKey="form">
              <CForm
                className="row g-3 needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    id="validationCustom01"
                    label="First name"
                    required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    id="validationCustom02"
                    label="Last name"
                    required
                  />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationCustomUsername">
                    Username
                  </CFormLabel>
                  <CInputGroup className="has-validation">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      type="text"
                      aria-describedby="inputGroupPrependFeedback"
                      feedbackValid="Please choose a username."
                      id="validationCustomUsername"
                      required
                    />
                  </CInputGroup>
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-describedby="validationCustom03Feedback"
                    feedbackInvalid="Please provide a valid city."
                    id="validationCustom03"
                    label="City"
                    required
                  />
                </CCol>
                <CCol md={3}>
                  <CFormInput
                    type="text"
                    aria-describedby="validationCustom05Feedback"
                    feedbackInvalid="Please provide a valid zip."
                    id="validationCustom05"
                    label="Zip"
                    required
                  />
                </CCol>
                <CCol xs={12}>
                  <CFormCheck
                    type="checkbox"
                    id="invalidCheck"
                    label="Agree to terms and conditions"
                    required
                  />
                  <CFormFeedback invalid>
                    You must agree before submitting.
                  </CFormFeedback>
                </CCol>
                <CCol xs={12}>
                  <CButton color="primary" type="submit">
                    Submit form
                  </CButton>
                </CCol>
              </CForm>
            </CTabPanel>
            <CTabPanel className="p-3" itemKey="table">
              <CTable striped hover columns={columns} items={items} />
            </CTabPanel>
          </CTabContent>
        </CTabs>
      </CContainer>
    </div>
  );
}

export default Dashboard;
