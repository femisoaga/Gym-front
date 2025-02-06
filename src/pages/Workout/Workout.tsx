import React from "react";
import Header from "../../components/Header";

function Workout() {
  return (
    <div className="overflow-x-hidden bg-gray-100 dark:bg-slate-950">
      <div className="w-max:[1440px] lg:mx-[40px] md:mx-[40px] my-[40px]  sm:mx-[0px]">
        <div className="flex flex-wrap justify-center gap-4 sm:justify-center lg:justify-center">
          <div className="w-[255px] h-[138px] bg-[#6dc51b] rounded-[10px] shadow-[4px_4px_28px_-15px_rgba(0,0,0,0.20)]">
            <div className="flex gap-[22px] relative justify-start flex-row items-center w-[213px] h-[102px] m-[18px_21px_18px_21px] ">
              <img
                className="w-[50px] absolute h-[50px] bg-[#f5ffeb]/20 rounded-full"
                src="../assets/images/workout_icons/Ellipse 23.svg "
                alt=""
              />
              <img
                className="w-6 h-6 m-[13px] relative overflow-hidden"
                src="../assets/images/workout_icons/Icon.svg"
                alt=""
              />
              <div className="flex flex-col gap-[9]">
                <div className="text-white text-[15px] italic font-normal font-['Inter']">
                  Total Students
                </div>
                <div className="text-white text-[25px] font-bold font-['Inter']">
                  1750
                </div>
                <img src="../assets/images/workout_icons/line.svg" alt="" />
                <div className="text-white text-[10px] font-normal font-['Inter'] mt-[10px]">
                  80% Increase in 20 Days
                </div>
              </div>
            </div>
          </div>
          <div className="w-[255px] h-[138px] bg-[#ff9432] rounded-[10px] shadow-[4px_4px_28px_-15px_rgba(0,0,0,0.20)]">
            <div className="flex gap-[22px] relative justify-start flex-row items-center w-[213px] h-[102px] m-[18px_21px_18px_21px] ">
              <img
                className="w-[50px] absolute h-[50px] bg-[#f5ffeb]/20 rounded-full"
                src="../assets/images/workout_icons/Ellipse 23.svg "
                alt=""
              />
              <img
                className="w-6 h-6 m-[13px] relative overflow-hidden"
                src="../assets/images/workout_icons/Icon.svg"
                alt=""
              />
              <div className="flex flex-col gap-[9]">
                <div className="text-white text-[15px] italic font-normal font-['Inter']">
                  New Students
                </div>
                /
                <div className="text-white text-[25px] font-bold font-['Inter']">
                  234
                </div>
                <img src="../assets/images/workout_icons/line.svg" alt="" />
                <div className="text-white text-[10px] font-normal font-['Inter'] mt-[10px]">
                  50% Increase in 20 Days
                </div>
              </div>
            </div>
          </div>
          <div className="w-[255px] h-[138px] bg-[#c046d2] rounded-[10px] shadow-[4px_4px_28px_-15px_rgba(0,0,0,0.20)]">
            <div className="flex gap-[22px] relative justify-start flex-row items-center w-[213px] h-[102px] m-[18px_21px_18px_21px] ">
              <img
                className="w-[50px] absolute h-[50px] bg-[#f5ffeb]/20 rounded-full"
                src="../assets/images/workout_icons/Ellipse 23.svg "
                alt=""
              />
              <img
                className="w-6 h-6 m-[13px] relative overflow-hidden"
                src="../assets/images/workout_icons/Icon.svg"
                alt=""
              />
              <div className="flex flex-col gap-[9]">
                <div className="text-white text-[15px] italic font-normal font-['Inter']">
                  Total Courses
                </div>
                <div className="text-white text-[25px] font-bold font-['Inter']">
                  28
                </div>
                <img src="../assets/images/workout_icons/line.svg" alt="" />
                <div className="text-white text-[10px] font-normal font-['Inter'] mt-[10px]">
                  78% Increase in 20 Days
                </div>
              </div>
            </div>
          </div>
          <div className="w-[255px] h-[138px] bg-[#fe275c] rounded-[10px] shadow-[4px_4px_28px_-15px_rgba(0,0,0,0.20)]">
            <div className="flex gap-[22px] relative justify-start flex-row items-center w-[213px] h-[102px] m-[18px_21px_18px_21px] ">
              <img
                className="w-[50px] absolute h-[50px] bg-[#f5ffeb]/20 rounded-full"
                src="../assets/images/workout_icons/Ellipse 23.svg "
                alt=""
              />
              <img
                className="w-6 h-6 m-[13px] relative overflow-hidden"
                src="../assets/images/workout_icons/Icon.svg"
                alt=""
              />
              <div className="flex flex-col gap-[9]">
                <div className="text-white text-[15px] italic font-normal font-['Inter']">
                  Fees Collect
                </div>
                <div className="text-white text-[25px] font-bold font-['Inter']">
                  $250
                </div>
                <img src="../assets/images/workout_icons/line.svg" alt="" />
                <div className="text-white text-[10px] font-normal font-['Inter'] mt-[10px]">
                  80% Increase in 20 Days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-max:[1440px]  mx-auto mt-8 mb-8">
        <div className="flex sm:w-[100%] md:w-[600px] lg:w-[1270px] justify-evenly items-center   bg-gray-100 mx-[40px] md:mx-[0px] lg:mx-[0px] gap-5 md:gap-0 lg:gap-0">
          <form className="flex items-center w-2/3">
            <input
              type="text"
              placeholder=" 🔍 Search"
              className="w-full p-2 border-gray-300 rounded-lg border-1 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-200;"
            />
          </form>

          <button className="text-[10px] md:text-[15px] lg:text-[15px] p-2 w-[100px] rounded-full md:w-[150px] lg:w-[150px]  bg-[#22b6f2] text-white  hover:bg-[#4a9bec]">
            Book a className
          </button>
        </div>
      </div>
      <div className="h-[317px] rounded-2xl flex-col mb-[200px] justify-start items-start flex w-max:[1440px]  w-full md:w-[560px] lg:w-[1074px] ml[0px] md:ml-[95px] lg:ml-[95px] my-6 mx-auto bg-white">
        <div className="self-stretch p-2.5 bg-white rounded-tl-[10px] rounded-tr-[10px] border-b border-[#9ea2a3]/30 justify-start items-center gap-2.5 flex">
          <div className="text-black text-sm font-semibold font-['Inter']">
            Recent Payment Queue
          </div>
        </div>
        <div className="self-stretch bg-white border-b border-[#9ea2a4]/30 justify-start items-start flex">
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-medium font-['Inter']">
              Ward No.
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-medium font-['Inter']">
              Patient
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Dr Name
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Date
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Status
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-black text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Bills
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="w-[37px] text-black text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Action
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white border-b border-[#9ea2a4]/30 justify-start items-start flex">
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              12
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Mr Bobby
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Dr Jackson
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              01 August 2025
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="h-[23px] px-3 py-1 bg-[#6cc51f] rounded-[10px] justify-center items-center gap-2.5 flex">
              <div className="w-12 text-white text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-semibold font-['Inter']">
                Checkin
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              $11
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="w-[50px] md:w-[70px] lg:w-[90px] h-[17px] sm:gap-[3px] md:gap-[10px] lg:gap-[10px] sm:ml-[-45px] md:ml-[-5px] lg:ml-[-5px] relative flex flex-row  overflow-visible mt-[0px]">
              <a href="#">
                <img src="../assets/images/workout_icons/currency.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/note.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/delete.png" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/eye.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white border-b border-[#9ea2a4]/30 justify-start items-start flex">
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              12
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Mr Bobby
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Dr Jackson
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              01 August 2025
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="h-[23px] px-3 py-1 bg-[#fa9432] rounded-[10px] justify-center items-center gap-2.5 flex">
              <div className="w-12 text-white text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-semibold font-['Inter']">
                Pending
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              $11
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="w-[50px] md:w-[70px] lg:w-[90px] h-[17px] sm:gap-[3px] md:gap-[10px] lg:gap-[10px] sm:ml-[-45px] md:ml-[-5px] lg:ml-[-5px] relative flex flex-row  overflow-visible mt-[0px]">
              <a href="#">
                <img src="../assets/images/workout_icons/currency.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/note.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/delete.png" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/eye.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white border-b border-[#9ea2a4]/30 justify-start items-start flex">
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              12
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Mr Bobby
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Dr Jackson
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              01 August 2025
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="h-[23px] px-3 py-1 bg-[#fb2b5c] rounded-[10px] justify-center items-center gap-2.5 flex">
              <div className="text-white text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-semibold font-['Inter']">
                Connected
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              $11
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="w-[50px] md:w-[70px] lg:w-[90px] h-[17px] sm:gap-[3px] md:gap-[10px] lg:gap-[10px] sm:ml-[-45px] md:ml-[-5px] lg:ml-[-5px] relative flex flex-row  overflow-visible mt-[0px]">
              <a href="#">
                <img src="../assets/images/workout_icons/currency.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/note.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/delete.png" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/eye.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white border-b border-[#9ea2a4]/30 justify-start items-start flex">
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              12
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Mr Bobby
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Dr Jackson
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              01 August 2025
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="h-[23px] px-3 py-1 bg-[#35d2bd] rounded-[10px] justify-center items-center gap-2.5 flex">
              <div className="w-12 text-white text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-semibold font-['Inter']">
                Checkin
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              $11
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="w-[50px] md:w-[70px] lg:w-[90px] h-[17px] sm:gap-[3px] md:gap-[10px] lg:gap-[10px] sm:ml-[-45px] md:ml-[-5px] lg:ml-[-5px] relative flex flex-row  overflow-visible mt-[0px]">
              <a href="#">
                <img src="../assets/images/workout_icons/currency.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/note.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/delete.png" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/eye.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white border-b border-[#9ea2a4]/30 justify-start items-start flex">
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              12
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Mr Bobby
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Dr Jackson
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              01 August 2025
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="h-[23px] px-3 py-1 bg-[#6cc51f] rounded-[10px] justify-center items-center gap-2.5 flex">
              <div className="w-12 text-white text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-semibold font-['Inter']">
                Checkin
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              $11
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="w-[50px] md:w-[70px] lg:w-[90px] h-[17px] sm:gap-[3px] md:gap-[10px] lg:gap-[10px] sm:ml-[-45px] md:ml-[-5px] lg:ml-[-5px] relative flex flex-row  overflow-visible mt-[0px]">
              <a href="#">
                <img src="../assets/images/workout_icons/currency.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/note.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/delete.png" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/eye.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white border-b border-[#9ea2a4]/30 justify-start items-start flex">
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              12
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Mr Bobby
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Dr Jackson
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              01 August 2025
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="h-[23px] px-3 py-1 bg-[#6cc51f] rounded-[10px] justify-center items-center gap-2.5 flex">
              <div className="w-12 text-white text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-semibold font-['Inter']">
                Checkin
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              $11
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="w-[50px] md:w-[70px] lg:w-[90px] h-[17px] sm:gap-[3px] md:gap-[10px] lg:gap-[10px] sm:ml-[-45px] md:ml-[-5px] lg:ml-[-5px] relative flex flex-row  overflow-visible mt-[0px]">
              <a href="#">
                <img src="../assets/images/workout_icons/currency.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/note.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/delete.png" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/eye.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white rounded-bl-[10px] rounded-br-[10px] border-b border-[#9ea2a4]/30 justify-start items-start flex">
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              12
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Mr Bobby
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              Dr Jackson
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              01 August 2025
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="h-[23px] px-3 py-1 bg-[#6cc51f] rounded-[10px] justify-center items-center gap-2.5 flex">
              <div className="w-12 text-white text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-semibold font-['Inter']">
                Checkin
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-black/50 text-[0.5rem] md:text-xs lg:text-xs leading-[0.5rem] md:leading-none lg:leading-none font-normal font-['Inter']">
              $11
            </div>
          </div>
          <div className="grow shrink basis-0 h-[35px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="w-[50px] md:w-[70px] lg:w-[90px] h-[17px] sm:gap-[3px] md:gap-[10px] lg:gap-[10px] sm:ml-[-45px] md:ml-[-5px] lg:ml-[-5px] relative flex flex-row  overflow-visible mt-[0px]">
              <a href="#">
                <img src="../assets/images/workout_icons/currency.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/note.svg" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/delete.png" alt="" />
              </a>
              <a href="#">
                <img src="../assets/images/workout_icons/eye.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workout;
