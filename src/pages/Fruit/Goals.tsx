import React from "react";

function Goals() {
  return (
    <div>
      <div className="w-[1117px] mx-auto my-10 h-[148px] items-center bg-white rounded-lg flex flex-row justify-between px-3 py-4">
        <div className="flex flex-col w-1/4 ">
          <p className="text-[11px] font-[300] font-[Inter]">
            Eetschema's op maat
          </p>
          <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
            Wat is je doelstelling?
          </div>
          <div className="flex flex-row gap-3 ">
            <img
              className="w-[20px]"
              src="../assets/images/icons-fruits/logo_icon.png"
              alt=""
            />
            <p className="font-[100] text-[11px] ">Powered by SportAccount</p>
          </div>
        </div>
        <div className="w-3/4 pl-[10%] flex-row flex items-center gap-7">
          <div className="w-[157px] h-[33px] pl-[18.18px] pr-[18.34px] pt-[3.61px] pb-[4.39px] bg-white rounded-3xl border border-[#64827d] justify-center items-center gap-[7.44px] inline-flex">
            <img src="../assets/images/icons-fruits/man.svg" alt="" />
            <div className="text-black text-base font-semibold font-['Inter'] leading-normal">
              Afvallen
            </div>
            <img src="../assets/images/icons-fruits/checked.svg" alt="" />
          </div>
          <div className="h-[25px] justify-start items-center gap-[7px] inline-flex">
            <div className="w-[19.83px] h-[19.83px] relative">
              <img
                className="w-[18.18px] h-[18.18px] left-[0.83px] top-[0.98px]"
                src="../assets/images/icons-fruits/woman.svg"
                alt=""
              />
            </div>
            <div className="text-black text-base font-light font-['Inter'] leading-normal">
              Op gewicht blijven
            </div>
          </div>
          <div className="h-[25px] justify-start items-center gap-[7px] inline-flex">
            <img
              className="w-[20.66px] h-[17.35px] relative left-[0.83px] top-[0.98px]"
              src="../assets/images/icons-fruits/power.svg"
              alt=""
            />
            <div className="text-black text-base font-light font-['Inter'] leading-normal">
              Aankomen
            </div>
          </div>
          <a href="#">
            <div className="w-[135.30px] h-[33.06px] pl-[20.66px] pr-[30.58px] pb-[10.92px] bg-[#00afe9] rounded-3xl justify-start items-end gap-[7.27px] inline-flex">
              <div className="w-[68.52px] h-[13.22px] text-center text-white text-xs font-bold font-['Inter'] uppercase leading-[17.35px]">
                Ga verder
              </div>
              <div className="w-[8.26px] h-[9.09px] relative flex-col justify-start items-start flex">
                <img
                  className=""
                  src="../assets/images/icons-fruits/short-arrow.svg"
                  alt=""
                />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="w-[1117px] mx-auto pl-5 pr-[19px] relative pt-7 pb-[27.82px] bg-white rounded-lg justify-center items-center flex overflow-hidden">
        <div className="flex  w-1/4  pb-[16.71px] flex-col justify-start  gap-[16.71px] ">
          <div className="hover:shadow-[5px_5px_0px_0px_rgba(30,96,117,0.9)] w-full items-center h-[66.85px] relative gap-1 bg-white rounded-[66.85px] shadow-[2.506977081298828px_3.3426361083984375px_12.534884452819824px_0px_rgba(0,0,0,0.10)] flex-row justify-start flex">
            <img
              className="w-[33.43px] h-[33.43px] mx-3 relative"
              src="../assets/images/icons-fruits/authenticity.png"
            />
            <div className="text-[#222222] text-xs font-extrabold font-['Inter'] leading-[33.43px]">
              Authenticity Certification
            </div>
            <img
              className="w-[11.82px] h-[16.71px] ml-2 relative"
              src="../assets/images/icons-fruits/long-arrow.svg"
            />
          </div>
          <div className="hover:shadow-[5px_5px_0px_0px_rgba(30,96,117,0.9)]  w-full items-center h-[66.85px] relative gap-1 bg-white rounded-[66.85px] shadow-[2.506977081298828px_3.3426361083984375px_12.534884452819824px_0px_rgba(0,0,0,0.10)] flex-row justify-start flex">
            <img
              className="w-[33.43px] h-[33.43px] mx-3 relative"
              src="../assets/images/icons-fruits/express.png"
            />
            <div className="text-[#222222] text-xs font-extrabold font-['Inter'] leading-[33.43px]">
              Express Delivery
            </div>
            <img
              className="w-[11.82px] h-[16.71px] ml-2 relative"
              src="../assets/images/icons-fruits/long-arrow.svg"
            />
          </div>
          <div className="hover:shadow-[5px_5px_0px_0px_rgba(30,96,117,0.9)] w-full items-center h-[66.85px] relative gap-1 bg-white rounded-[66.85px] shadow-[2.506977081298828px_3.3426361083984375px_12.534884452819824px_0px_rgba(0,0,0,0.10)] flex-row justify-start flex">
            <img
              className="w-[33.43px] h-[33.43px] mx-3 relative"
              src="../assets/images/icons-fruits/payment.png"
            />
            <div className="text-[#222222] text-xs font-extrabold font-['Inter'] leading-[33.43px]">
              Payment Secure
            </div>
            <img
              className="w-[11.82px] h-[16.71px] ml-2 relative"
              src="../assets/images/icons-fruits/long-arrow.svg"
            />
          </div>
        </div>
        <div className="">
          <img
            src="../assets/images/icons-fruits/dash-arrow.svg.svg"
            className="absolute w-[85.24px] h-[36.89px] mt-[-160px] flex-col justify-start items-start inline-flex overflow-hidden"
          />
        </div>
        <div className="w-1/2">
          <img
            className="w-[424.51px] h-[513.93px] ml-[70px] cover relative"
            src="../assets/images/fruits_images/delivery.png.png"
          />
        </div>
        <div className="">
          <img
            src="../assets/images/icons-fruits/curve-arrow.svg.svg"
            className="w-[85.24px] h-[85.24px]  mt-[150px] ml-[-70px] absolute  flex-col justify-start items-start inline-flex overflow-hidden"
          />
        </div>
        <div className="w-1/4 flex flex-col justify-start mt-[40px] gap-8">
          <div className="w-[201.44px] h-[81.06px] text-[#222222] text-3xl font-extrabold font-['Inter'] leading-10">
            Who We Are
            <br />
            What We Do?
          </div>
          <div className="w-[249px] h-[120px] text-[#434343] text-[13px] font-normal font-['Inter'] leading-tight">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit. Maecenas sed dui temporeros porttitor tristique
            eget eu lectus. Sedauctor mi vitae velit aliquet, quis pharetra
            <br />
            sem vestibulum.
          </div>
          <div className="w-[269.50px] h-[44.29px] relative">
            <div className="w-[41.78px] h-[41.78px] pl-[12.53px] pr-[12.54px] pt-[13.03px] pb-3 left-[-0px] top-[1.25px] absolute bg-white rounded-[41.78px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)] justify-center items-center inline-flex">
              <img src="../assets/images/icons-fruits/telephone.svg" alt="" />
            </div>
            <div className="left-[58.50px] top-[-0.16px] absolute text-[#222222] text-sm font-bold font-['Inter'] leading-tight">
              How to Order?
            </div>
            <div className="left-[58.50px] top-[24.07px] absolute text-[#222222] text-sm font-bold font-['Inter'] uppercase leading-tight">
              Call Us: 0123-456-7890
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
