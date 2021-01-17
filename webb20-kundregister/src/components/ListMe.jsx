import React from "react";
import GetFetch from "./GetFetch";

export default function ListMe() {
  const url = `https://frebi.willandskill.eu/api/v1/me`;

  const meItem = GetFetch(url);

  return (
    <>
      {meItem ? (
        <div className="listMe">
          <table>
            <tbody>
              <tr>
                <td>{meItem.firstName}</td>
              </tr>
              <tr>
                <td>{meItem.lastName}</td>
              </tr>
              <tr>
                <td>{meItem.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <span>Laddar data..</span>
      )}
    </>
  );
}
