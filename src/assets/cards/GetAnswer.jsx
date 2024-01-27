import React from "react";
import styled from "styled-components";
import AnswerCards from "./AnswerCards";

const GetAnswer = () => {
  const OuterSection = styled.div`
    width: 822px;
    height: 273px;
  `;

  return (
    <OuterSection>
      <div className="flex justify-between">
        <div>
          <div className="font-medium text-2xl">Get Answer</div>
          <div className="font-bold text-base">to all your questions</div>
        </div>
        <div className="mt-4">
          <i class="fa-solid fa-chevron-left fa-xl mr-3 text-[#ccc]"></i>
          <i class="fa-solid fa-chevron-right fa-xl ml-3"></i>
        </div>
      </div>
      <div className="flex gap-6">
        <AnswerCards />
        <AnswerCards />
        <AnswerCards />
      </div>
    </OuterSection>
  );
};

export default GetAnswer;
