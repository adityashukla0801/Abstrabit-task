import React from "react";
import styled from "styled-components";
import Portfolio from "../assets/cards/Portfolio";
import BookNowCard from "../assets/cards/BookNowCard";
import utkarshLogo from "../assets/img/Group 2252.png";
import bajajLogo from "../assets/img/Mask Group 5.png";
import sriramLogo from "../assets/img/SHRIRAMFIN.NS-b563e9ad.png";
import mahindraLogo from "../assets/img/mahindra.png";
import NotificationCard from "../assets/cards/NotificationCard";
import GetAnswer from "../assets/cards/GetAnswer";
import purpuleCheck from "../assets/img/Icon awesome-check-circle.svg";
import blueCheck from "../assets/img/Icon awesome-check-circle (1).svg";
import blackCheck from "../assets/img/Icon awesome-check-circle (2).svg";
import redCheck from "../assets/img/Icon awesome-check-circle (3).svg";
import Maturity from "../assets/cards/Maturity";

const InfoSection = () => {
  const InfoPage = styled.div`
    background: #f7f8fa 0% 0% no-repeat padding-box;
    padding: 3rem;
  `;

  const financeCompanies = [
    {
      id: 1,
      companyLogo: utkarshLogo,
      check: purpuleCheck,
      companyName: "Utkarsh Small Finance Bank",
      companyPolicie1: "Highest Interest Rate",
      companyPolicie2: "RBI Insured",
      width: "175px",
      primaryColor: "#F8F0FF",
      secondaryColor: "rgba(239, 221, 255, 1)",
      buttonColor: "#520B8D",
      intrestRate: "9.10% p.a",
    },
    {
      id: 1,
      companyLogo: bajajLogo,
      check: blueCheck,
      companyName: "Bajaj Finserv",
      companyPolicie1: "Crisil AAA Rated",
      companyPolicie2: "No Video KYC required",
      primaryColor: "#EFF6FF",
      secondaryColor: "rgba(0, 114, 187, 10%)",
      buttonColor: "#0072BB",
      intrestRate: "8.80% p.a",
    },
    {
      id: 1,
      companyLogo: sriramLogo,
      check: blackCheck,
      companyName: "Shriram Finance",
      companyPolicie1: "Crisil AAA Rated",
      companyPolicie2: "No Video KYC required",
      primaryColor: "#F4F4F4",
      secondaryColor: "rgba(26, 27, 30, 10%)",
      buttonColor: "#010101",
      intrestRate: "8.80% p.a",
    },
    {
      id: 1,
      companyLogo: mahindraLogo,
      check: redCheck,
      companyName: "Mahindra Finance",
      companyPolicie1: "Crisil AAA Rated",
      companyPolicie2: "No Video KYC required",
      primaryColor: "#FFEFEF",
      secondaryColor: "rgba(255, 0, 0, 10%)",
      buttonColor: "#FF0000",
      intrestRate: "8.80% p.a",
    },
  ];

  const NotificationDetails = [
    {
      title: "Video KYC",
      subTitle: "Scheduled On",
      date: "28",
      company: "Utkarsh SF Bank FD Plan 2",
      amount: "Rs. 20,000",
      tennure: "2 Years",
      intrestRate: "9.10%",
      primaryBtn: "Complete Now",
      secondaryBtn: "Reschedule",
    },
    {
      title: "Pending Payment",
      subTitle: "Pay By",
      date: "30",
      company: "Bajaj Finserv Corp FD 1",
      amount: "Rs. 25,000",
      tennure: "18 Months",
      intrestRate: "8.10%",
      primaryBtn: "Pay Now",
      secondaryBtn: "Cancel Application",
    },
    {
      title: "Upcoming FD Maturity",
      subTitle: "Renew by",
      date: "30",
      company: "Shriram Finance Corp FD 1",
      amount: "Rs. 25,000",
      tennure: "18 Months",
      intrestRate: "8.10%",
      primaryBtn: "Renew Now",
      secondaryBtn: "Compare other FDs",
    },
  ];

  return (
    <InfoPage>
      <div className="text-3xl font-bold mb-4">Welcome, Johan Paul</div>
      <div className="grid grid-cols-3 gap-6">
        <Portfolio className="col-span-1" />
        <div className="col-span-2">
          <Maturity />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-6">
          {financeCompanies.map((items) => {
            return <BookNowCard className="col-span-1" items={items} />;
          })}
          <div className="col-span-2">
            <GetAnswer />
          </div>
        </div>
        <div className="col-span-1">
          {NotificationDetails.map((items) => {
            return <NotificationCard items={items} />;
          })}
        </div>
      </div>
    </InfoPage>
  );
};

export default InfoSection;
