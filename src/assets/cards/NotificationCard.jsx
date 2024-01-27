import React from "react";
import styled from "styled-components";

const NotificationCard = ({ items }) => {
  const Outersection = styled.div`
    height: 241px;
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(235, 235, 235, 1);
    opacity: 1;
    padding: 1.5rem;
    margin: 0;
  `;

  const PrimaryBtn = styled.button`
    width: 170px;
    height: 42px;
    background: #3b39d9 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 5px #0000000d;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #ffffff;
    margin-top: 1rem;
    opacity: 1;
  `;
  const SecondaryBtn = styled.button`
    width: 170px;
    height: 42px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 5px #0000000d;
    border: 1px solid #3b39d9;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #3b39d9;
    margin-top: 1rem;
    opacity: 1;
  `;

  return (
    <Outersection>
      <div className="text-base font-bold mb-4">{items.title}</div>
      <div className="flex">
        <div className="text-xs opacity-60 mb-1 w-[78px]">{items.subTitle}</div>
        <div className="font-bold text-sm ml-6">{items.company}</div>
      </div>

      <div className="flex items-center">
        <div className="w-[76px]">
          <div className="text-[40px] bg-[#1A1B1E]/[.05] text-center">
            {items.date}
          </div>
          <div className="bg-[#CE5151] h-[19px] text-center py-[2px] text-xs font-medium text-white">
            Oct, 2023
          </div>
        </div>

        <div className="flex gap-3 ml-6 ">
          <div>
            <div className="text-sm opacity-60">Deposit Amt</div>
            <div className="font-bold text-sm">{items.amount}</div>
          </div>
          <div>
            <div className="text-sm opacity-60">Tennure</div>
            <div className="font-bold text-sm">{items.tennure}</div>
          </div>
          <div>
            <div className="text-sm opacity-60">Interest Rate</div>
            <div className="font-bold text-sm">{items.intrestRate}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <PrimaryBtn>{items.primaryBtn}</PrimaryBtn>
        <SecondaryBtn>{items.secondaryBtn}</SecondaryBtn>
      </div>
    </Outersection>
  );
};

export default NotificationCard;
