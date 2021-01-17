import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../components/ButtonStyled";
import CustomerItem from "../components/CustomerItem";
import ListMe from "../components/ListMe";

export default function CustomerList() {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    getCustomerList();
  }, []);

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCustomerList(data.results));
  }

  return (
    <div className="customlist">
      {customerList.map((item) => {
        return <CustomerItem key={item.id} customerData={item} />;
      })}
      <div className="customerRow">
        <Link className="customerCreate" to="/customers/create">
          <ButtonStyled second={true}>Create Customer</ButtonStyled>
        </Link>
        <ListMe>
          <p className="listme"></p>
        </ListMe>
      </div>
    </div>
  );
}
