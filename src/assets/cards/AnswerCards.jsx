import React from "react";
import styled from "styled-components";

const AnswerCards = () => {
  const OuterSection = styled.div`
    width: 257px;
    height: 194px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 10px #0000000d;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    opacity: 1;
    padding: 2rem;
    margin-top: 1.3rem;
  `;
  return (
    <OuterSection>
      <div className="font-bold text-xl pb-4">How FDs are taxed</div>
      <div className="text-sm pb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <a className="text-sm text-[#3B39D9] underline" href="/">
        Read more...
      </a>
    </OuterSection>
  );
};

export default AnswerCards;
