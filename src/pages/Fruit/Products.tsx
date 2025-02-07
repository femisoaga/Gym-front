import React from "react";

function Products() {
  return (
    <div>
      <div className="max-w-[1440px] m-auto mb-6  w-[1117px]">
        <div className="bg-[#e9f1f4]  w-[1117px] mt-4 rounded-2xl pl-[21px] pr-[23px] pt-[22px] pb-[22.49px] m-auto  h-full">
          <div className="flex flex-col text-center gap-7">
            <div className="text-center text-[#222222] text-[28.80px] font-extrabold font-['Inter'] leading-loose">
              Farm Fresh Products
            </div>
            <ul className="flex flex-row justify-center gap-8 list-disc">
              <li className="text-[12.80px] font-bold font-['Inter'] leading-tight list-none">
                <div className="flex flex-col items-center justify-center gap-1 -mt-4">
                  <span className="text-center">
                    <img
                      src="../assets/images/icons-fruits/vegetable.png"
                      alt=""
                    />
                  </span>
                  <span className="text-[#00afe9]">Vegetables</span>
                </div>
              </li>
              <li className="text-[#222222] text-[12.80px] font-bold font-['Inter'] leading-tight">
                {" "}
                Fruits
              </li>
              <li className="text-[#222222] text-[12.80px] font-bold font-['Inter'] leading-tight">
                {" "}
                Drinks
              </li>
              <li className="text-[#222222] text-[12.80px] font-bold font-['Inter'] leading-tight">
                {" "}
                Bee Products
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="hover:shadow-[5px_5px_0px_0px_rgba(0,175,233,0.3)] cursor-pointer w-[238px] h-[370.80px] relative bg-white rounded-[14.40px] overflow-hidden">
                <img
                  className="w-[238px] h-[238px] left-0 top-0 absolute"
                  src="../assets/images/fruits_images/Link → 1-37-600x600.jpg.png"
                />
                <div className="w-[53.78px] pl-[10.40px] pr-[10.10px] pt-1 pb-[4.80px] left-[12.80px] top-[16px] absolute bg-[#d8e4e8] rounded-[20.80px] justify-center items-start gap-[0.80px] inline-flex">
                  <div className="w-[9.6px] h-[9.6px] relative flex flex-col justify-start items-start overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/strike.svg')] bg-no-repeat"></div>
                  <div className="w-[22.88px] h-3 text-center text-[#222222] text-[8.80px] font-semibold font-['Inter'] leading-[14.40px]">
                    -11%
                  </div>
                </div>
                <div className="w-[238px] h-[78.40px] left-0 top-[247.60px] absolute bg-white">
                  <div className="w-[11.08px] h-[15.20px] left-[83.20px] top-[9.60px] absolute text-[#5e5e5e] text-[8px] font-medium font-['Nunito'] leading-tight">
                    (0)
                  </div>
                  <div className="w-[57.56px] h-[11.51px] left-[22.40px] top-[13.44px] absolute justify-center items-center inline-flex overflow-hidden">
                    <div className="w-[57.56px] h-[11.51px] relative flex-col justify-start items-start flex overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/rating.svg')] bg-no-repeat"></div>
                  </div>
                  <div className="pr-[72.40px] left-[22.40px] top-[40px] absolute justify-start items-center inline-flex overflow-hidden">
                    <div className="text-[#222222] text-[12.80px] font-bold font-['Inter'] leading-tight">
                      Green Broccoli
                    </div>
                  </div>
                </div>
                <div className="h-4 pr-[92.80px] left-[22.40px] top-[326px] absolute bg-white justify-start items-start gap-[7.80px] inline-flex">
                  <div className="text-[#067ea6] text-[11.20px] font-extrabold font-['Inter'] leading-none">
                    $8.00
                  </div>
                  <div className="w-[29.80px] self-stretch justify-end items-center inline-flex">
                    <div className="text-[#d6d6d6] text-[11.20px] font-extrabold font-['Inter'] mt-[-5px] line-through leading-none">
                      $9.00
                    </div>
                  </div>
                </div>
                <div className="w-9 h-9 px-2.5 pt-[9.60px] pb-[10.40px] left-[186px] top-[312.40px] absolute bg-[#ececec] rounded-[36px] justify-center items-center inline-flex overflow-hidden">
                  <div className="relative flex flex-col items-start justify-start w-4 h-4 overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/shop.svg')] bg-no-repeat"></div>
                </div>
                <div className="left-[185px] top-[18.40px] absolute justify-start items-start gap-3 inline-flex">
                  <a href="#">
                    <img
                      className="w-[12.24px] h-3 relative"
                      src="../assets/images/icons-fruits/heart-colorless.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="relative w-4 h-4"
                      src="../assets/images/icons-fruits/dislike-colorless.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="hover:shadow-[5px_5px_0px_0px_rgba(0,175,233,0.3)] cursor-pointer group w-[238px] h-[370.80px] relative bg-white rounded-[14.40px] overflow-hidden transition-transform duration-300">
                <img
                  className="w-[238px] h-[238px] left-0 top-0 absolute"
                  src="../assets/images/fruits_images/Link → 1-30-600x600.jpg.png"
                />
                <div className="bg-[#00AFE9] h-[20.8px]  w-[64.05px] pl-[10.40px] pr-[10.10px] pt-1 pb-[4.80px] left-[12.80px] top-[16px] absolute  rounded-[20.80px] gap-[0.80px] ">
                  <div className=" h-3 w-[46px]  text-white text-[8.80px] font-[700] font-['Inter'] leading-[14.40px]">
                    SOLD OUT
                  </div>
                </div>
                <div className="w-[238px] h-[78.40px] left-0 top-[247.60px] absolute bg-white">
                  <div className="w-[11.08px] h-[15.20px] left-[83.20px] top-[9.60px] absolute text-[#5e5e5e] text-[8px] font-medium font-['Nunito'] leading-tight">
                    (0)
                  </div>
                  <div className="w-[57.56px] h-[11.51px] left-[22.40px] top-[13.44px] absolute justify-center items-center inline-flex overflow-hidden">
                    <div className="w-[57.56px] h-[11.51px] relative flex-col justify-start items-start flex overflow-hidden bg-[url('../assets/images/icons-fruits/rating.svg')] bg-no-repeat"></div>
                  </div>
                  <div className="pr-[72.40px] left-[22.40px] top-[40px] absolute justify-start items-center inline-flex overflow-hidden">
                    <div className="text-[#222222] text-[12.80px] font-bold font-['Inter'] leading-tight">
                      Purple Onion
                    </div>
                  </div>
                </div>
                <div className="h-4 pr-[92.80px] left-[22.40px] top-[326px] absolute bg-white justify-start items-start gap-[7.80px] inline-flex">
                  <div className="text-[#067ea6] text-[11.20px] font-extrabold font-['Inter'] leading-none">
                    $12.00
                  </div>
                  <div className="w-[29.80px] self-stretch justify-end items-center inline-flex">
                    <div className="text-[#d6d6d6] text-[11.20px] font-extrabold font-['Inter'] mt-[-5px] line-through leading-none">
                      $9.00
                    </div>
                  </div>
                </div>
                <div className="w-9 h-9 px-2.5 pt-[9.60px] pb-[10.40px] left-[186px] top-[312.40px] absolute bg-[#ececec] rounded-[36px] justify-center items-center inline-flex overflow-hidden">
                  <div className="relative flex flex-col items-start justify-start w-4 h-4 overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/shop.svg')] bg-no-repeat"></div>
                </div>
                <div className="left-[185px] top-[18.40px] absolute justify-start items-start gap-3 inline-flex">
                  <a href="#">
                    <img
                      className="w-[12.24px] h-3 relative"
                      src="../assets/images/icons-fruits/heart-colorless.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="relative w-4 h-4"
                      src="../assets/images/icons-fruits/dislike-colorless.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="hover:shadow-[5px_5px_0px_0px_rgba(0,175,233,0.3)] cursor-pointer w-[238px] h-[370.80px] relative bg-white rounded-[14.40px] overflow-hidden">
                <img
                  className="w-[238px] h-[238px] left-0 top-0 absolute"
                  src="../assets/images/fruits_images/Link → 1-31-600x600.jpg.png"
                />
                <div className="w-[53.78px] pl-[10.40px] pr-[10.10px] pt-1 pb-[4.80px] left-[12.80px] top-[16px] absolute bg-[#d8e4e8] rounded-[20.80px] justify-center items-start gap-[0.80px] inline-flex">
                  <div className="w-[9.60px] h-[9.60px] relative flex-col justify-start items-start flex overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/strike.svg')] bg-no-repeat"></div>
                  <div className="w-[22.88px] h-3 text-center text-[#222222] text-[8.80px] font-semibold font-['Inter'] leading-[14.40px]">
                    -11%
                  </div>
                </div>
                <div className="w-[238px] h-[78.40px] left-0 top-[247.60px] absolute bg-white">
                  <div className="w-[11.08px] h-[15.20px] left-[83.20px] top-[9.60px] absolute text-[#5e5e5e] text-[8px] font-medium font-['Nunito'] leading-tight">
                    (0)
                  </div>
                  <div className="w-[57.56px] h-[11.51px] left-[22.40px] top-[13.44px] absolute justify-center items-center inline-flex overflow-hidden">
                    <div className="w-[57.56px] h-[11.51px] relative flex-col justify-start items-start flex overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/rating.svg')] bg-no-repeat"></div>
                  </div>
                  <div className="pr-[72.40px] left-[22.40px] top-[40px] absolute justify-start items-center inline-flex overflow-hidden">
                    <div className="text-[#222222] text-[12.80px] font-bold font-['Inter'] leading-tight">
                      Chile Bell Pepper
                    </div>
                  </div>
                </div>
                <div className="h-4 pr-[92.80px] left-[22.40px] top-[326px] absolute bg-white justify-start items-start gap-[7.80px] inline-flex">
                  <div className="text-[#067ea6] text-[11.20px] font-extrabold font-['Inter'] leading-none">
                    $18.00
                  </div>
                  <div className="w-[29.80px] self-stretch justify-end items-center inline-flex">
                    <div className="text-[#d6d6d6] text-[11.20px] font-extrabold font-['Inter'] mt-[-5px] line-through leading-none">
                      $9.00
                    </div>
                  </div>
                </div>
                <div className="w-9 h-9 px-2.5 pt-[9.60px] pb-[10.40px] left-[186px] top-[312.40px] absolute bg-[#ececec] rounded-[36px] justify-center items-center inline-flex overflow-hidden">
                  <div className="relative flex flex-col items-start justify-start w-4 h-4 overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/shop.svg')] bg-no-repeat"></div>
                </div>
                <div className="left-[185px] top-[18.40px] absolute justify-start items-start gap-3 inline-flex">
                  <a href="#">
                    <img
                      className="w-[12.24px] h-3 relative"
                      src="../assets/images/icons-fruits/heart-colored.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="relative w-4 h-4"
                      src="../assets/images/icons-fruits/dislike-colorless.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="hover:shadow-[5px_5px_0px_0px_rgba(0,175,233,0.3)] cursor-pointer w-[238px] h-[370.80px] relative bg-white rounded-[14.40px] overflow-hidden">
                <img
                  className="w-[238px] h-[238px] left-0 top-0 absolute"
                  src="../assets/images/fruits_images/Link → 1-37-600x600.jpg.png"
                />
                <div className="w-[53.78px] pl-[10.40px] pr-[10.10px] pt-1 pb-[4.80px] left-[12.80px] top-[16px] absolute bg-[#d8e4e8] rounded-[20.80px] justify-center items-start gap-[0.80px] inline-flex">
                  <div className="w-[9.60px] h-[9.60px] relative flex-col justify-start items-start flex overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/strike.svg')] bg-no-repeat"></div>
                  <div className="w-[22.88px] h-3 text-center text-[#222222] text-[8.80px] font-semibold font-['Inter'] leading-[14.40px]">
                    -11%
                  </div>
                </div>
                <div className="w-[238px] h-[78.40px] left-0 top-[247.60px] absolute bg-white">
                  <div className="w-[11.08px] h-[15.20px] left-[83.20px] top-[9.60px] absolute text-[#5e5e5e] text-[8px] font-medium font-['Nunito'] leading-tight">
                    (0)
                  </div>
                  <div className="w-[57.56px] h-[11.51px] left-[22.40px] top-[13.44px] absolute justify-center items-center inline-flex overflow-hidden">
                    <div className="w-[57.56px] h-[11.51px] relative flex-col justify-start items-start flex overflow-hidden bg-[url('../assets/images/icons-fruits/rating.svg')] bg-no-repeat"></div>
                  </div>
                  <div className="pr-[72.40px] left-[22.40px] top-[40px] absolute justify-start items-center inline-flex overflow-hidden">
                    <div className="text-[#222222] text-[12.80px] font-bold font-['Inter'] leading-tight">
                      Green Cabbage
                    </div>
                  </div>
                </div>
                <div className="h-4 pr-[92.80px] left-[22.40px] top-[326px] absolute bg-white justify-start items-start gap-[7.80px] inline-flex">
                  <div className="text-[#067ea6] text-[11.20px] font-extrabold font-['Inter'] leading-none">
                    $15.00
                  </div>
                  <div className="w-[29.80px] self-stretch justify-end items-center inline-flex">
                    <div className="text-[#d6d6d6] text-[11.20px] font-extrabold font-['Inter'] mt-[-5px] line-through leading-none">
                      $9.00
                    </div>
                  </div>
                </div>
                <div className="w-9 h-9 px-2.5 pt-[9.60px] pb-[10.40px] left-[186px] top-[312.40px] absolute bg-[#ececec] rounded-[36px] justify-center items-center inline-flex overflow-hidden">
                  <div className="relative flex flex-col items-start justify-start w-4 h-4 overflow-hidden bg-[url('../assets/images/icons-fruits/shop.svg')] bg-no-repeat"></div>
                </div>
                <div className="left-[185px] top-[18.40px] absolute justify-start items-start gap-3 inline-flex">
                  <a href="#">
                    <img
                      className="w-[12.24px] h-3 relative"
                      src="../assets/images/icons-fruits/heart-colorless.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="relative w-4 h-4"
                      src="../assets/images/icons-fruits/dislike-colorless.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="hover:shadow-[5px_5px_0px_0px_rgba(0,175,233,0.3)] cursor-pointer w-[238px] h-[370.80px] relative bg-white rounded-[14.40px] overflow-hidden">
                <img
                  className="w-[238px] h-[238px] left-0 top-0 absolute"
                  src="../assets/images/fruits_images/Link → 1-37-600x600.jpg.png"
                />
                <div className="w-[53.78px] pl-[10.40px] pr-[10.10px] pt-1 pb-[4.80px] left-[12.80px] top-[16px] absolute bg-[#d8e4e8] rounded-[20.80px] justify-center items-start gap-[0.80px] inline-flex">
                  <div className="w-[9.60px] h-[9.60px] relative flex-col justify-start items-start flex overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/strike.svg')] bg-no-repeat"></div>
                  <div className="w-[22.88px] h-3 text-center text-[#222222] text-[8.80px] font-semibold font-['Inter'] leading-[14.40px]">
                    -11%
                  </div>
                </div>
                <div className="w-[238px] h-[78.40px] left-0 top-[247.60px] absolute bg-white">
                  <div className="w-[11.08px] h-[15.20px] left-[83.20px] top-[9.60px] absolute text-[#5e5e5e] text-[8px] font-medium font-['Nunito'] leading-tight">
                    (0)
                  </div>
                  <div className="w-[57.56px] h-[11.51px] left-[22.40px] top-[13.44px] absolute justify-center items-center inline-flex overflow-hidden">
                    <div className="w-[57.56px] h-[11.51px] relative flex-col justify-start items-start flex overflow-hidden bg-[url('../assets/images/icons-fruits/rating.svg')] bg-no-repeat"></div>
                  </div>
                  <div className="pr-[72.40px] left-[22.40px] top-[40px] absolute justify-start items-center inline-flex overflow-hidden">
                    <div className="text-[#222222] text-[12.80px] font-bold font-['Inter'] leading-tight">
                      Green Cabbage
                    </div>
                  </div>
                </div>
                <div className="h-4 pr-[92.80px] left-[22.40px] top-[326px] absolute bg-white justify-start items-start gap-[7.80px] inline-flex">
                  <div className="text-[#067ea6] text-[11.20px] font-extrabold font-['Inter'] leading-none">
                    $15.00
                  </div>
                  <div className="w-[29.80px] self-stretch justify-end items-center inline-flex">
                    <div className="text-[#d6d6d6] text-[11.20px] font-extrabold font-['Inter'] mt-[-5px] line-through leading-none">
                      $9.00
                    </div>
                  </div>
                </div>
                <div className="w-9 h-9 px-2.5 pt-[9.60px] pb-[10.40px] left-[186px] top-[312.40px] absolute bg-[#ececec] rounded-[36px] justify-center items-center inline-flex overflow-hidden">
                  <div className="relative flex flex-col items-start justify-start w-4 h-4 overflow-hidden bg-[url('../assets/images/icons-fruits/shop.svg')] bg-no-repeat"></div>
                </div>
                <div className="left-[185px] top-[18.40px] absolute justify-start items-start gap-3 inline-flex">
                  <a href="#">
                    <img
                      className="w-[12.24px] h-3 relative"
                      src="../assets/images/icons-fruits/heart-colorless.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="relative w-4 h-4"
                      src="../assets/images/icons-fruits/dislike-colorless.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="hover:shadow-[5px_5px_0px_0px_rgba(0,175,233,0.3)] cursor-pointer w-[238px] h-[370.80px] relative bg-white rounded-[14.40px] overflow-hidden">
                <img
                  className="w-[238px] h-[238px] left-0 top-0 absolute"
                  src="../assets/images/fruits_images/Link → 1-37-600x600.jpg.png"
                />
                <div className="w-[53.78px] pl-[10.40px] pr-[10.10px] pt-1 pb-[4.80px] left-[12.80px] top-[16px] absolute bg-[#d8e4e8] rounded-[20.80px] justify-center items-start gap-[0.80px] inline-flex">
                  <div className="w-[9.60px] h-[9.60px] relative flex-col justify-start items-start flex overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/strike.svg')] bg-no-repeat"></div>
                  <div className="w-[22.88px] h-3 text-center text-[#222222] text-[8.80px] font-semibold font-['Inter'] leading-[14.40px]">
                    -11%
                  </div>
                </div>
                <div className="w-[238px] h-[78.40px] left-0 top-[247.60px] absolute bg-white">
                  <div className="w-[11.08px] h-[15.20px] left-[83.20px] top-[9.60px] absolute text-[#5e5e5e] text-[8px] font-medium font-['Nunito'] leading-tight">
                    (0)
                  </div>
                  <div className="w-[57.56px] h-[11.51px] left-[22.40px] top-[13.44px] absolute justify-center items-center inline-flex overflow-hidden">
                    <div className="w-[57.56px] h-[11.51px] relative flex-col justify-start items-start flex overflow-hidden bg-[url('../assets/images/icons-fruits/rating.svg')] bg-no-repeat"></div>
                  </div>
                  <div className="pr-[72.40px] left-[22.40px] top-[40px] absolute justify-start items-center inline-flex overflow-hidden">
                    <div className="text-[#222222] text-[12.80px] font-bold font-['Inter'] leading-tight">
                      Green Cabbage
                    </div>
                  </div>
                </div>
                <div className="h-4 pr-[92.80px] left-[22.40px] top-[326px] absolute bg-white justify-start items-start gap-[7.80px] inline-flex">
                  <div className="text-[#067ea6] text-[11.20px] font-extrabold font-['Inter'] leading-none">
                    $15.00
                  </div>
                  <div className="w-[29.80px] self-stretch justify-end items-center inline-flex">
                    <div className="text-[#d6d6d6] text-[11.20px] font-extrabold font-['Inter'] mt-[-5px] line-through leading-none">
                      $9.00
                    </div>
                  </div>
                </div>
                <div className="w-9 h-9 px-2.5 pt-[9.60px] pb-[10.40px] left-[186px] top-[312.40px] absolute bg-[#ececec] rounded-[36px] justify-center items-center inline-flex overflow-hidden">
                  <div className="relative flex flex-col items-start justify-start w-4 h-4 overflow-hidden bg-[url('../assets/images/icons-fruits/shop.svg')] bg-no-repeat"></div>
                </div>
                <div className="left-[185px] top-[18.40px] absolute justify-start items-start gap-3 inline-flex">
                  <a href="#">
                    <img
                      className="w-[12.24px] h-3 relative"
                      src="../assets/images/icons-fruits/heart-colorless.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="relative w-4 h-4"
                      src="../assets/images/icons-fruits/dislike-colorless.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="hover:shadow-[5px_5px_0px_0px_rgba(0,175,233,0.3)] cursor-pointer w-[238px] h-[370.80px] relative bg-white rounded-[14.40px] overflow-hidden">
                <img
                  className="w-[238px] h-[238px] left-0 top-0 absolute"
                  src="../assets/images/fruits_images/Link → 1-37-600x600.jpg.png"
                />
                <div className="w-[53.78px] pl-[10.40px] pr-[10.10px] pt-1 pb-[4.80px] left-[12.80px] top-[16px] absolute bg-[#d8e4e8] rounded-[20.80px] justify-center items-start gap-[0.80px] inline-flex">
                  <div className="w-[9.60px] h-[9.60px] relative flex-col justify-start items-start flex overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/strike.svg')] bg-no-repeat"></div>
                  <div className="w-[22.88px] h-3 text-center text-[#222222] text-[8.80px] font-semibold font-['Inter'] leading-[14.40px]">
                    -11%
                  </div>
                </div>
                <div className="w-[238px] h-[78.40px] left-0 top-[247.60px] absolute bg-white">
                  <div className="w-[11.08px] h-[15.20px] left-[83.20px] top-[9.60px] absolute text-[#5e5e5e] text-[8px] font-medium font-['Nunito'] leading-tight">
                    (0)
                  </div>
                  <div className="w-[57.56px] h-[11.51px] left-[22.40px] top-[13.44px] absolute justify-center items-center inline-flex overflow-hidden">
                    <div className="w-[57.56px] h-[11.51px] relative flex-col justify-start items-start flex overflow-hidden bg-[url('../assets/images/icons-fruits/rating.svg')] bg-no-repeat"></div>
                  </div>
                  <div className="pr-[72.40px] left-[22.40px] top-[40px] absolute justify-start items-center inline-flex overflow-hidden">
                    <div className="text-[#222222] text-[12.80px] font-bold font-['Inter'] leading-tight">
                      Green Cabbage
                    </div>
                  </div>
                </div>
                <div className="h-4 pr-[92.80px] left-[22.40px] top-[326px] absolute bg-white justify-start items-start gap-[7.80px] inline-flex">
                  <div className="text-[#067ea6] text-[11.20px] font-extrabold font-['Inter'] leading-none">
                    $15.00
                  </div>
                  <div className="w-[29.80px] self-stretch justify-end items-center inline-flex">
                    <div className="text-[#d6d6d6] text-[11.20px] font-extrabold font-['Inter'] mt-[-5px] line-through leading-none">
                      $9.00
                    </div>
                  </div>
                </div>
                <div className="w-9 h-9 px-2.5 pt-[9.60px] pb-[10.40px] left-[186px] top-[312.40px] absolute bg-[#ececec] rounded-[36px] justify-center items-center inline-flex overflow-hidden">
                  <div className="relative flex flex-col items-start justify-start w-4 h-4 overflow-hidden bg-[url('../assets/images/icons-fruits/shop.svg')] bg-no-repeat"></div>
                </div>
                <div className="left-[185px] top-[18.40px] absolute justify-start items-start gap-3 inline-flex">
                  <a href="#">
                    <img
                      className="w-[12.24px] h-3 relative"
                      src="../assets/images/icons-fruits/heart-colorless.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="relative w-4 h-4"
                      src="../assets/images/icons-fruits/dislike-colorless.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="hover:shadow-[5px_5px_0px_0px_rgba(0,175,233,0.3)] cursor-pointer w-[238px] h-[370.80px] relative bg-white rounded-[14.40px] overflow-hidden">
                <img
                  className="w-[238px] h-[238px] left-0 top-0 absolute"
                  src="../assets/images/fruits_images/Link → 1-37-600x600.jpg.png"
                />
                <div className="w-[53.78px] pl-[10.40px] pr-[10.10px] pt-1 pb-[4.80px] left-[12.80px] top-[16px] absolute bg-[#d8e4e8] rounded-[20.80px] justify-center items-start gap-[0.80px] inline-flex">
                  <div className="w-[9.60px] h-[9.60px] relative flex-col justify-start items-start flex overflow-hidden mt-[2px] bg-[url('../assets/images/icons-fruits/strike.svg')] bg-no-repeat"></div>
                  <div className="w-[22.88px] h-3 text-center text-[#222222] text-[8.80px] font-semibold font-['Inter'] leading-[14.40px]">
                    -11%
                  </div>
                </div>
                <div className="w-[238px] h-[78.40px] left-0 top-[247.60px] absolute bg-white">
                  <div className="w-[11.08px] h-[15.20px] left-[83.20px] top-[9.60px] absolute text-[#5e5e5e] text-[8px] font-medium font-['Nunito'] leading-tight">
                    (0)
                  </div>
                  <div className="w-[57.56px] h-[11.51px] left-[22.40px] top-[13.44px] absolute justify-center items-center inline-flex overflow-hidden">
                    <div className="w-[57.56px] h-[11.51px] relative flex-col justify-start items-start flex overflow-hidden bg-[url('../assets/images/icons-fruits/rating.svg')] bg-no-repeat"></div>
                  </div>
                  <div className="pr-[72.40px] left-[22.40px] top-[40px] absolute justify-start items-center inline-flex overflow-hidden">
                    <div className="text-[#222222] text-[12.80px] font-bold font-['Inter'] leading-tight">
                      Green Cabbage
                    </div>
                  </div>
                </div>
                <div className="h-4 pr-[92.80px] left-[22.40px] top-[326px] absolute bg-white justify-start items-start gap-[7.80px] inline-flex">
                  <div className="text-[#067ea6] text-[11.20px] font-extrabold font-['Inter'] leading-none">
                    $15.00
                  </div>
                  <div className="w-[29.80px] self-stretch justify-end items-center inline-flex">
                    <div className="text-[#d6d6d6] text-[11.20px] font-extrabold font-['Inter'] mt-[-5px] line-through leading-none">
                      $9.00
                    </div>
                  </div>
                </div>
                <div className="w-9 h-9 px-2.5 pt-[9.60px] pb-[10.40px] left-[186px] top-[312.40px] absolute bg-[#ececec] rounded-[36px] justify-center items-center inline-flex overflow-hidden">
                  <div className="relative flex flex-col items-start justify-start w-4 h-4 overflow-hidden bg-[url('../assets/images/icons-fruits/shop.svg')] bg-no-repeat"></div>
                </div>
                <div className="left-[185px] top-[18.40px] absolute justify-start items-start gap-3 inline-flex">
                  <a href="#">
                    <img
                      className="w-[12.24px] h-3 relative"
                      src="../assets/images/icons-fruits/heart-colorless.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="relative w-4 h-4"
                      src="../assets/images/icons-fruits/dislike-colorless.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12 mb-12">
            <button
              type="button"
              className=" bg-[#00afe9] text-white py-3 px-6 rounded-full  font-semibold text-sm dark:bg-dark2"
            >
              Load more...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
