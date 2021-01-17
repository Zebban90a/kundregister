import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtonStyled } from "../components/ButtonStyled";

export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newObj = { ...formData, [name]: value };
    setFormData(newObj);
  }

  function renderInput(name, label, type) {
    return (
      <>
        <label>{label}</label>
        <input type={type || "text"} name={name} onChange={handleOnChange} />
      </>
    );
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        history.push("/home");
      });
  }

  return (
    <div>
      <h1 className="customerHeader">Create Customer</h1>
      <form onSubmit={handleOnSubmit} className="customerForm">
        {renderInput("name", "Customer Name")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        {renderInput("reference", "Reference")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("website", "Website", "url")}
        <ButtonStyled second={true} type="submit">
          Create Customer
        </ButtonStyled>
      </form>
    </div>
  );
}
