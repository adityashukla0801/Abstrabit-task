import React, { useState } from "react";
import Logo from "../assets/img/logo.svg";
import profile from "../assets/img/Group 128.svg";
import fds from "../assets/img/Group 130.svg";
import transactions from "../assets/img/Group 129.svg";
import logout from "../assets/img//Group 151.svg";
import email from "../assets/img/email-svgrepo-com (1).svg";
import phone from "../assets/img/phone-calling-rounded-svgrepo-com (1).svg";
import styled from "styled-components";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const User = styled.div`
    position: relative;
    width: 71px;
    height: 42px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 5px #0000000d;
    border: 1px solid #4a4ed4;
    border-radius: 24px;
    padding: 0.5rem 0.9rem;
    margin-left: 2rem;
  `;

  const SupportContainer = styled.div`
    position: absolute;
    top: 35px;
    right: 0;
    width: 238px;
    height: 123px;
    padding: 1rem 0;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 20px #0000001a;
    border-radius: 5px;
    opacity: 1;
  `;

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const supportToggle = () => {
    setIsSupportOpen(!isSupportOpen);
  };

  return (
    <div className="h-[85px] border border-[#EBEBEB] border-solid p-12 flex justify-between items-center">
      <img src={Logo} alt="Logo" />
      <div className="flex justify-between items-center">
        <div className="font-medium text-lg	mx-6">Dashboard</div>
        <div className="font-medium text-lg	mx-6">FAQs</div>
        <div
          className="font-medium text-lg	mx-6 relative cursor-pointer"
          onClick={supportToggle}
        >
          Support
          {isSupportOpen && (
            <SupportContainer className="support-content">
              <div className="flex  pb-1 border-b">
                <img className="m-4" src={phone} alt="phone" />
                <div>
                  <div className="text-sm text-[#3B39D9]">+91 88777 37777</div>
                  <div className="text-sm text-[#3B39D9]">+91 88777 5666</div>
                </div>
              </div>
              <div className="flex pt-2">
                <img className="m-4" src={email} alt="email" />
                <div>
                  <div className="text-sm text-[#3B39D9]">
                    support@silverbullet.in
                  </div>
                  <div className="text-sm text-[#3B39D9]">
                    info@silverbullet.in
                  </div>
                </div>
              </div>
            </SupportContainer>
          )}
        </div>
        <User
          className="user-profile-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i class="fa-solid fa-user text-[#4a4ed4] fa-lg mr-2"></i>
          {isDropdownOpen ? (
            <i class="fa-solid fa-chevron-up text-[#4a4ed4] fa-2xs"></i>
          ) : (
            <i class="fa-solid fa-chevron-down text-[#4a4ed4] fa-2xs"></i>
          )}

          {isDropdownOpen && (
            <div className="dropdown-content">
              {/* Your dropdown content goes here */}
              <ul>
                <li className="flex mx-2 my-6 text-xl font-medium ">
                  <img className="mr-4" src={profile} alt="profile" />
                  <div className="opacity-70">My Profile</div>
                </li>
                <li className="flex mx-2 my-6 text-xl font-medium ">
                  <img className="mr-4" src={fds} alt="fds" />
                  <div className="opacity-70">My FDs </div>
                </li>
                <li className="flex mx-2 my-6 text-xl font-medium ">
                  <img className="mr-4" src={transactions} alt="Logo" />
                  <div className="opacity-70">My Transactions</div>
                </li>
                <li className="flex mx-2 my-6 text-xl font-medium ">
                  <img className="mr-4" src={logout} alt="logout" />
                  <div className="opacity-70">Logout</div>
                </li>
              </ul>
            </div>
          )}
        </User>
      </div>
    </div>
  );
};

export default Navbar;
