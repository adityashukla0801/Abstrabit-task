import React from "react";
import styled from "styled-components";

const BookNowCard = ({ items }) => {
  const Outersection = styled.div`
    width: 398px;
    height: 202px;
    background: ${items.primaryColor} 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 10px #0000000d;
    border: 4px solid #ffffff;
    border-radius: 5px;
    opacity: 1;
    padding: 1.4rem;
  `;

  const DetailSection = styled.div`
    width: ${items.width || "fit-content"};
    height: 35px;
    background: ${items.secondaryColor} 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 0.91;
    display: flex;
    align-items: center;
    padding: 0 8px 0 5px;
  `;

  const CheckImg = styled.img`
    width: 16px;
    height: 16px;
  `;

  const LogoImg = styled.img`
    width: 49px;
    height: 48px;
  `;

  const BookNowBtn = styled.button`
    width: 133px;
    height: 42px;
    background: ${items.buttonColor} 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 5px #0000000d;
    border-radius: 5px;
    font: normal normal medium 16px/20px Apercu Pro;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  `;

  return (
    <Outersection>
      <div className="flex items-center mb-4">
        <LogoImg src={items.companyLogo} alt="company_logo" />
        <div className="font-bold text-base mx-8">{items.companyName}</div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <DetailSection>
          <CheckImg src={items.check} alt="check" />
          <div className="text-sm font-normal ml-1">
            {items.companyPolicie1}
          </div>
        </DetailSection>
        <DetailSection>
          <CheckImg src={items.check} alt="check" />
          <div className="text-sm font-normal ml-1">
            {items.companyPolicie2}
          </div>
        </DetailSection>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-medium text-sm opacity-60">Interest Upto</div>
          <div className="font-bold text-sm"> {items.intrestRate}</div>
        </div>
        <BookNowBtn>Book Now</BookNowBtn>
      </div>
    </Outersection>
  );
};

export default BookNowCard;
