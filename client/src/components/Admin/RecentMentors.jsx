import React from "react";
import arrow from "../../assets/arrowlogo.png"
import eye from "../../assets/carbon_view-filled.png"
function RecentMentors() {
  return (
    <div>
      <div className="mt-5">
        <p className="text-info">View</p>
        <div>
          <h4>Recent Investors</h4>
          <table className="table">
            <thead style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}>
              <tr style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  Name
                </th>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  E-Mail ID
                </th>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  Investing Category
                </th>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  Contact No
                </th>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  Nationality
                </th>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  {" "}
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td style={{color:"rgba(52, 133, 208, 1)"}} ><img src={eye}></img> View Details
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>      <p style={{color:"rgba(52, 133, 208, 1)"}} className='text-end'>View All <img src={arrow}></img></p>

    </div>
  );
}

export default RecentMentors;
