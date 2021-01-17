import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtonStyled } from "../components/ButtonStyled";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "Sebastian.Orbom@yh.nackademin.se",
    password: "javascriptoramverk",
  });

  const history = useHistory();

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    const payload = {
      email: formData.email,
      password: formData.password,
    };
    if (
      formData.email === "Sebastian.Orbom@yh.nackademin.se" &&
      formData.password === "javascriptoramverk"
    ) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("WEBB20", data.token);
          history.push("/home");
        });
    } else alert("fel inloggning");
  }

  function handleOnChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const newObj = { ...formData, [inputName]: inputValue };
    setFormData(newObj);
  }

  return (
    <div className="loginFormDiv">
      <form className="loginForm" onSubmit={handleOnSubmit}>
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleOnChange} />
        <label>Password</label>
        <input
          name="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <ButtonStyled second={true}>Log In</ButtonStyled>
      </form>
    </div>
  );
}
