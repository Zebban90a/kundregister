import React from "react";
import { useHistory, Link } from "react-router-dom";
import { ButtonStyled } from "../components/ButtonStyled";
import GetFetch from "../components/GetFetch";

export default function CustomerDetail(props) {
  const customerId = props.match.params.id;
  const history = useHistory();
  const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
  const customerItem = GetFetch(url);

  function deleteCustomer() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(() => history.push("/home"));
  }

  return (
    <>
      {customerItem ? (
        <div className="customerdetail">
          <h1>{customerItem.name}</h1>
          <table>
            <tbody>
              <tr>
                <td>Organisation Number:</td>
                <td>{customerItem.organisationNr}</td>
              </tr>

              <tr>
                <td>Payment Term:</td>
                <td>{customerItem.paymentTerm}</td>
              </tr>

              <tr>
                <td>Phone Number:</td>
                <td>{customerItem.phoneNumber}</td>
              </tr>

              <tr>
                <td>Reference:</td>
                <td>{customerItem.reference}</td>
              </tr>

              <tr>
                <td>VAT Number:</td>
                <td>{customerItem.vatNr}</td>
              </tr>

              <tr>
                <td>Email:</td>
                <td>
                  <a href={`mailto:${customerItem.email}`}>
                    {customerItem.email}
                  </a>
                </td>
              </tr>

              <tr>
                <td>Website:</td>
                <td>
                  <a href={customerItem.website} target="_blank">
                    {customerItem.website}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="buttons">
            <Link to="/Customers">
              <ButtonStyled onClick={deleteCustomer}>
                Delete Customer
              </ButtonStyled>
            </Link>
            <Link to={`/customers/${customerId}/edit`}>
              <ButtonStyled second={true}>Edit Customer</ButtonStyled>
            </Link>
          </div>
        </div>
      ) : (
        <span>Laddar data...</span>
      )}
    </>
  );
}
