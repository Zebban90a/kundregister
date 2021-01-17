import React from "react";
import { Link } from "react-router-dom";

export default function CustomerItem({ customerData }) {
  return (
    <>
      <h3 className="customers">
        <Link to={`/customers/${customerData.id}`}>{customerData.name}</Link>
      </h3>
    </>
  );
}
