import React from "react";
import styled from "styled-components";

const Maturity = () => {
  const Outersection = styled.div`
    height: 286px;
    padding: 1.5rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 10px #0000000d;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    opacity: 1;
  `;

  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const years = ["2024", "2025", "2026"]; // Update with your actual years

  return (
    <Outersection>
      <div className="text-base font-bold">FD Maturity Timeline</div>
      <div className="container mx-auto ">
        {/* First Row */}
        <div className="grid grid-cols-3 gap-1 ">
          {years.map((year, index) => (
            <div key={index} className="text-slate-500 p-4 text-center">
              {year}
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-3 relative">
          <div
            style={{
              width: "100%",
              height: "0.5px",
              background: "black",
              position: "absolute",
              top: "25px",
            }}
          ></div>

          <div
            style={{
              width: "150px",
              height: "18px",
              /* UI Properties */
              background: "#3B39D9 0% 0% no-repeat padding-box",
              borderRadius: "8px",
              opacity: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 12,
              position: "absolute",
              top: 40,
              left: 10,
              cursor: "pointer",
            }}
          >
            Utkarsh FD 1
          </div>
          <div
            style={{
              width: "334px",
              height: "18px",
              /* UI Properties */
              background: "#3B39D9 0% 0% no-repeat padding-box",
              borderRadius: "8px",
              opacity: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 12,
              position: "absolute",
              top: 70,
              left: 10,
              cursor: "pointer",
            }}
          >
            Shriram FD Plan 2
          </div>
          <div
            style={{
              width: "241px",
              height: "18px",
              /* UI Properties */
              background: "#3B39D9 0% 0% no-repeat padding-box",
              borderRadius: "8px",
              opacity: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 12,
              position: "absolute",
              top: 100,
              left: 90,
              cursor: "pointer",
            }}
          >
            Bajaj Finserv FD 1
          </div>
          <div
            style={{
              width: "535px",
              height: "18px",
              /* UI Properties */
              background: "#3B39D9 0% 0% no-repeat padding-box",
              borderRadius: "8px",
              opacity: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 12,
              position: "absolute",
              top: 130,
              cursor: "pointer",
              left: 115,
            }}
          >
            Mahindra FD Plan 2
          </div>
          <div className="grid grid-cols-12 gap-1">
            {months.map((item) => (
              <div
                style={{
                  width: "10px",
                  background: "#F0EFFF",
                  height: "170px",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "2px",
                  fontWeight: 100,
                  fontSize: 13,
                }}
                className="bars"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-12 gap-1">
            {months.map((item) => (
              <div
                style={{
                  width: "10px",
                  background: "#F1F6E5",
                  height: "170px",
                  padding: "10px",
                  paddingTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: 13,
                }}
                className="bars"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-12 gap-1">
            {" "}
            {months.map((item) => (
              <div
                style={{
                  width: "10px",
                  background: "#FEF5E7",
                  height: "170px",
                  padding: "10px",
                  display: "flex",
                  paddingTop: "2px",
                  justifyContent: "center",
                  fontSize: 13,
                }}
                className="bars"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Outersection>
  );
};

export default Maturity;
