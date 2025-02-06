import React from "react";

function Blog() {
  return (
    <div>
      <main id="main" className="mt-[29px]">
        <div className="max-w-[71em] mx-auto space-y-32 max-md:p-8">
          <div
            className="h-[1984px] pl-[62px] pr-[68.68px] pt-16 pb-[41.80px] bg-white rounded-2xl flex flex-col justify-end items-center overflow-hidden"
            style={{ marginTop: 0 }}
          >
            <div className="self-stretch h-[1878.20px] flex-col justify-start items-center gap-8 inline-flex">
              <div className="self-stretch h-[1804.20px] flex-col justify-start items-center gap-12 flex">
                <div className="h-[78.98px] pl-[15px] pr-[15.32px] pb-2.5 flex-col justify-start items-center gap-2.5 flex">
                  <div className="self-stretch h-[35.19px] justify-center items-center inline-flex">
                    <div className="w-[250.61px] h-[38px] text-center">
                      <span className="text-[#00afe9] text-[32px] font-bold font-['Droid Sans'] uppercase leading-9">
                        News &{" "}
                      </span>
                      <span className="text-black text-[32px] font-normal font-['Droid Sans'] uppercase leading-9">
                        blog
                      </span>
                    </div>
                  </div>
                  <div className="w-[424.73px] h-[23.80px] text-center text-[#7f7f7f] text-sm font-normal font-['Open Sans'] uppercase leading-normal tracking-[4px]">
                    Join our Health Zone and be healthy.
                  </div>
                </div>
                <div
                  id="lower_category"
                  className="self-stretch justify-between items-center gap-[220px] inline-flex"
                >
                  <div className="h-[45px] justify-between items-center flex">
                    <div className="max-w-md mx-auto w-[450px]">
                      <div className="relative flex items-center w-full h-12 overflow-hidden bg-white rounded-lg focus-within:shadow-lg">
                        <div className="grid w-12 h-full text-gray-300 place-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>

                        <input
                          className="w-full h-full pr-2 text-sm text-gray-700 outline-none peer"
                          type="text"
                          id="search"
                          placeholder="Search something.."
                        />
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="pl-[41.38px] pr-[29.62px] pt-[13.78px] pb-[13.22px] bg-[#aaaaaa] rounded-[46.62px] justify-end items-center flex">
                      <div
                        id="category_text"
                        className="text-white text-sm font-semibold font-['Poppins'] leading-[16.89px]"
                      >
                        View category
                      </div>
                    </div>
                  </a>
                </div>
                <div className="self-stretch justify-start items-center gap-[26px] inline-flex">
                  <div className="w-[310.11px] flex-col justify-center items-start inline-flex">
                    <div className="w-[310.11px] h-[293.33px] relative flex-col justify-start items-start flex overflow-hidden">
                      <div className="w-[92.98px] h-[293.33px] ml-[220px] z-10 px-[12.92px] pt-[40.57px] pb-[40.56px] bg-[#22b6f2]/90 flex-col justify-center items-center inline-flex">
                        <div className="self-stretch grow shrink basis-0 flex-col justify-center items-start gap-[19.29px] inline-flex">
                          <div className="self-stretch h-[57.19px] pl-[14.23px] pr-[13.93px] flex-col justify-center items-center gap-[18.43px] inline-flex">
                            <div
                              className="w-[20.67px] h-[24.98px] relative flex flex-col justify-start items-start overflow-hidden bg-no-repeat"
                              style={{
                                backgroundImage:
                                  "url('../assets/images/icons-yoga/like.svg')",
                              }}
                            ></div>
                            <div className="w-[38.98px] h-[14.64px] text-center text-white text-[10.34px] font-normal font-['Open Sans'] leading-[17.57px]">
                              30 Likes
                            </div>
                          </div>
                          <div className="self-stretch h-[57.19px] flex-col justify-center items-center gap-[18.43px] inline-flex">
                            <div
                              className="w-[24.12px] h-[24.98px] relative flex flex-col justify-start items-start overflow-hidden bg-no-repeat"
                              style={{
                                backgroundImage:
                                  "url('../assets/images/icons-yoga/comment.svg')",
                              }}
                            ></div>
                            <div className="w-[67.41px] h-[14.64px] text-center text-white text-[10.34px] font-normal font-['Open Sans'] leading-[17.57px]">
                              72 Comments
                            </div>
                          </div>
                          <div className="self-stretch h-[57.19px] pl-[19.68px] pr-[19.34px] flex-col justify-center items-center gap-[18.43px] inline-flex">
                            <div
                              className="w-[22.4px] h-[24.98px] relative flex flex-col justify-start items-start overflow-hidden bg-no-repeat"
                              style={{
                                backgroundImage:
                                  "url('../assets/images/icons-yoga/share.svg')",
                              }}
                            ></div>
                            <div className="w-[28.12px] h-[14.64px] text-center text-white text-[10.34px] font-normal font-['Open Sans'] leading-[17.57px]">
                              Share
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="w-[310.11px] h-[293.33px] absolute"
                        src="../assets/images/yoga/20db2c54a4e016b40422c8ac66b41d1a.jpeg"
                      />
                    </div>
                    <div className="w-[310.11px] h-[202.74px] pl-3 pt-4 relative bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] flex-col justify-start items-start flex">
                      <div className="w-[117.20px] h-[17.23px] justify-center items-center inline-flex">
                        <div className="w-[117.47px] h-[17.23px] text-[#333333] text-sm font-bold font-['Droid Sans'] uppercase leading-[20.92px]">
                          Post title here
                          <img
                            src="../assets/images/icons-yoga/wish-button.svg"
                            className="w-[18px] h-[18px] mt-[-20px] ml-[260px] absolute "
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="h-[19.03px] my-[20px]  pr-[106.77px] pt-[1.72px] pb-[1.80px] justify-start items-start gap-[11.53px] inline-flex">
                        <div className="w-[63.24px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[63.51px] h-[15.51px] text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                            <a href="#">Jan 13, 2025</a>
                          </div>
                        </div>
                        <div className="w-[94.11px] mt-[-10px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[94.43px] h-[15.51px]">
                            <span className="text-[#7f7f7f] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              Written by:{" "}
                            </span>
                            <span className="text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              <a href="#">Admin</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[274.72px] h-[77.86px] text-[#7f7f7f] text-xs font-normal font-['Open Sans'] leading-tight">
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipisicing elit. Animi adipisci consequuntur
                        <br />
                        tempore excepturi culpa perferendis! Quis
                        <br />
                        voluptas consequuntur, quas magnam dolores ...
                      </div>
                      <div className="w-[67.14px] rounded-sm justify-center items-start gap-1 inline-flex">
                        <div className="w-[52.83px] h-[14.64px] text-[#a9a9a9] text-[10.34px] font-normal font-['Open Sans'] leading-none">
                          <button>Read more</button>
                        </div>
                        <div className="w-[10.51px] h-[12.06px] text-[#a9a9a9] text-xs font-normal font-['Inter'] leading-3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[310.11px] flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-[293.33px] justify-center items-center inline-flex overflow-hidden">
                      <img
                        className="w-[310.11px] h-[293.33px] absolute"
                        src="../assets/images/yoga/3bb93c0175459dc8a293eaad34d8e06c.jpeg"
                      />
                    </div>
                    <div className="w-[310.11px] h-[202.74px] pl-3 pt-4 relative bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] flex-col justify-start items-start flex">
                      <div className="w-[117.20px] h-[17.23px] justify-center items-center inline-flex">
                        <div className="w-[117.47px] h-[17.23px] text-[#333333] text-sm font-bold font-['Droid Sans'] uppercase leading-[20.92px]">
                          Post title here
                          <img
                            src="../assets/images/icons-yoga/wish-button.svg"
                            className="w-[18px] h-[18px] mt-[-20px] ml-[260px] absolute "
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="h-[19.03px] my-[20px]  pr-[106.77px] pt-[1.72px] pb-[1.80px] justify-start items-start gap-[11.53px] inline-flex">
                        <div className="w-[63.24px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[63.51px] h-[15.51px] text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                            <a href="#">Jan 13, 2025</a>
                          </div>
                        </div>
                        <div className="w-[94.11px] mt-[-10px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[94.43px] h-[15.51px]">
                            <span className="text-[#7f7f7f] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              Written by:{" "}
                            </span>
                            <span className="text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              <a href="#">Admin</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[274.72px] h-[77.86px] text-[#7f7f7f] text-xs font-normal font-['Open Sans'] leading-tight">
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipisicing elit. Animi adipisci consequuntur
                        <br />
                        tempore excepturi culpa perferendis! Quis
                        <br />
                        voluptas consequuntur, quas magnam dolores ...
                      </div>
                      <div className="w-[67.14px] rounded-sm justify-center items-start gap-1 inline-flex">
                        <div className="w-[52.83px] h-[14.64px] text-[#a9a9a9] text-[10.34px] font-normal font-['Open Sans'] leading-none">
                          <button>Read more</button>
                        </div>
                        <div className="w-[10.51px] h-[12.06px] text-[#a9a9a9] text-xs font-normal font-['Inter'] leading-3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[310.11px] rounded-lg flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-[293.33px] justify-center items-center inline-flex overflow-hidden">
                      <img
                        className="w-[310.11px] h-[293.33px] absolute"
                        src="../assets/images/yoga/079d6dd099209668da64d18807031a53.jpeg"
                      />
                    </div>
                    <div className="w-[310.11px] h-[202.74px] pl-3 pt-4 relative bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] flex-col justify-start items-start flex">
                      <div className="w-[117.20px] h-[17.23px] justify-center items-center inline-flex">
                        <div className="w-[117.47px] h-[17.23px] text-[#333333] text-sm font-bold font-['Droid Sans'] uppercase leading-[20.92px]">
                          Post title here
                          <img
                            src="../assets/images/icons-yoga/wish-button.svg"
                            className="w-[18px] h-[18px] mt-[-20px] ml-[260px] absolute "
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="h-[19.03px] my-[20px]  pr-[106.77px] pt-[1.72px] pb-[1.80px] justify-start items-start gap-[11.53px] inline-flex">
                        <div className="w-[63.24px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[63.51px] h-[15.51px] text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                            <a href="#">Jan 13, 2025</a>
                          </div>
                        </div>
                        <div className="w-[94.11px] mt-[-10px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[94.43px] h-[15.51px]">
                            <span className="text-[#7f7f7f] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              Written by:{" "}
                            </span>
                            <span className="text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              <a href="#">Admin</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[274.72px] h-[77.86px] text-[#7f7f7f] text-xs font-normal font-['Open Sans'] leading-tight">
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipisicing elit. Animi adipisci consequuntur
                        <br />
                        tempore excepturi culpa perferendis! Quis
                        <br />
                        voluptas consequuntur, quas magnam dolores ...
                      </div>
                      <div className="w-[67.14px] rounded-sm justify-center items-start gap-1 inline-flex">
                        <div className="w-[52.83px] h-[14.64px] text-[#a9a9a9] text-[10.34px] font-normal font-['Open Sans'] leading-none">
                          <button>Read more</button>
                        </div>
                        <div className="w-[10.51px] h-[12.06px] text-[#a9a9a9] text-xs font-normal font-['Inter'] leading-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-[26px] inline-flex">
                  <div className="w-[310.11px] flex-col justify-center items-start inline-flex">
                    <div className="w-[310.11px] h-[293.33px] relative flex-col justify-start items-start flex overflow-hidden">
                      <div className="w-[92.98px] h-[293.33px] ml-[220px] z-10 px-[12.92px] pt-[40.57px] pb-[40.56px] bg-[#22b6f2]/90 flex-col justify-center items-center inline-flex">
                        <div className="self-stretch grow shrink basis-0 flex-col justify-center items-start gap-[19.29px] inline-flex">
                          <div className="self-stretch h-[57.19px] pl-[14.23px] pr-[13.93px] flex-col justify-center items-center gap-[18.43px] inline-flex">
                            <div
                              className="w-[20.67px] h-[24.98px] relative flex flex-col justify-start items-start overflow-hidden bg-no-repeat"
                              style={{
                                backgroundImage:
                                  "url('../assets/images/icons-yoga/like.svg')",
                              }}
                            ></div>
                            <div className="w-[38.98px] h-[14.64px] text-center text-white text-[10.34px] font-normal font-['Open Sans'] leading-[17.57px] ">
                              30 Likes
                            </div>
                          </div>
                          <div className="self-stretch h-[57.19px] flex-col justify-center items-center gap-[18.43px] inline-flex">
                            <div
                              className="w-[24.12px] h-[24.98px] relative flex flex-col justify-start items-start overflow-hidden bg-no-repeat"
                              style={{
                                backgroundImage:
                                  "url('../assets/images/icons-yoga/comment.svg')",
                              }}
                            ></div>
                            <div className="w-[67.41px] h-[14.64px] text-center text-white text-[10.34px] font-normal font-['Open Sans'] leading-[17.57px]">
                              72 Comments
                            </div>
                          </div>
                          <div className="self-stretch h-[57.19px] pl-[19.68px] pr-[19.34px] flex-col justify-center items-center gap-[18.43px] inline-flex">
                            <div
                              className="w-[22.4px] h-[24.98px] relative flex flex-col justify-start items-start overflow-hidden bg-no-repeat"
                              style={{
                                backgroundImage:
                                  "url('../assets/images/icons-yoga/comment.svg')",
                              }}
                            ></div>
                            <div className="w-[28.12px] h-[14.64px] text-center text-white text-[10.34px] font-normal font-['Open Sans'] leading-[17.57px]">
                              Share
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="w-[310.11px] h-[293.33px] absolute"
                        src="../assets/images/yoga/20db2c54a4e016b40422c8ac66b41d1a.jpeg"
                      />
                    </div>
                    <div className="w-[310.11px] h-[202.74px] pl-3 pt-4 relative bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] flex-col justify-start items-start flex">
                      <div className="w-[117.20px] h-[17.23px] justify-center items-center inline-flex">
                        <div className="w-[117.47px] h-[17.23px] text-[#333333] text-sm font-bold font-['Droid Sans'] uppercase leading-[20.92px]">
                          Post title here
                          <img
                            src="../assets/images/icons-yoga/wish-button.svg"
                            className="w-[18px] h-[18px] mt-[-20px] ml-[260px] absolute "
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="h-[19.03px] my-[20px]  pr-[106.77px] pt-[1.72px] pb-[1.80px] justify-start items-start gap-[11.53px] inline-flex">
                        <div className="w-[63.24px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[63.51px] h-[15.51px] text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                            <a href="#">Jan 13, 2025</a>
                          </div>
                        </div>
                        <div className="w-[94.11px] mt-[-10px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[94.43px] h-[15.51px]">
                            <span className="text-[#7f7f7f] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              Written by:{" "}
                            </span>
                            <span className="text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              <a href="#">Admin</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[274.72px] h-[77.86px] text-[#7f7f7f] text-xs font-normal font-['Open Sans'] leading-tight">
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipisicing elit. Animi adipisci consequuntur
                        <br />
                        tempore excepturi culpa perferendis! Quis
                        <br />
                        voluptas consequuntur, quas magnam dolores ...
                      </div>
                      <div className="w-[67.14px] rounded-sm justify-center items-start gap-1 inline-flex">
                        <div className="w-[52.83px] h-[14.64px] text-[#a9a9a9] text-[10.34px] font-normal font-['Open Sans'] leading-none">
                          <button>Read more</button>
                        </div>
                        <div className="w-[10.51px] h-[12.06px] text-[#a9a9a9] text-xs font-normal font-['Inter'] leading-3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[310.11px] flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-[293.33px] justify-center items-center inline-flex overflow-hidden">
                      <img
                        className="w-[310.11px] h-[293.33px] absolute"
                        src="../assets/images/yoga/3bb93c0175459dc8a293eaad34d8e06c.jpeg"
                      />
                    </div>
                    <div className="w-[310.11px] h-[202.74px] pl-3 pt-4 relative bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] flex-col justify-start items-start flex">
                      <div className="w-[117.20px] h-[17.23px] justify-center items-center inline-flex">
                        <div className="w-[117.47px] h-[17.23px] text-[#333333] text-sm font-bold font-['Droid Sans'] uppercase leading-[20.92px]">
                          Post title here
                          <img
                            src="../assets/images/icons-yoga/wish-button.svg"
                            className="w-[18px] h-[18px] mt-[-20px] ml-[260px] absolute "
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="h-[19.03px] my-[20px]  pr-[106.77px] pt-[1.72px] pb-[1.80px] justify-start items-start gap-[11.53px] inline-flex">
                        <div className="w-[63.24px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[63.51px] h-[15.51px] text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                            <a href="#">Jan 13, 2025</a>
                          </div>
                        </div>
                        <div className="w-[94.11px] mt-[-10px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[94.43px] h-[15.51px]">
                            <span className="text-[#7f7f7f] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              Written by:{" "}
                            </span>
                            <span className="text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              <a href="#">Admin</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[274.72px] h-[77.86px] text-[#7f7f7f] text-xs font-normal font-['Open Sans'] leading-tight">
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipisicing elit. Animi adipisci consequuntur
                        <br />
                        tempore excepturi culpa perferendis! Quis
                        <br />
                        voluptas consequuntur, quas magnam dolores ...
                      </div>
                      <div className="w-[67.14px] rounded-sm justify-center items-start gap-1 inline-flex">
                        <div className="w-[52.83px] h-[14.64px] text-[#a9a9a9] text-[10.34px] font-normal font-['Open Sans'] leading-none">
                          <button>Read more</button>
                        </div>
                        <div className="w-[10.51px] h-[12.06px] text-[#a9a9a9] text-xs font-normal font-['Inter'] leading-3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[310.11px] rounded-lg flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-[293.33px] justify-center items-center inline-flex overflow-hidden">
                      <img
                        className="w-[310.11px] h-[293.33px] absolute"
                        src="../assets/images/yoga/079d6dd099209668da64d18807031a53.jpeg"
                      />
                    </div>
                    <div className="w-[310.11px] h-[202.74px] pl-3 pt-4 relative bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] flex-col justify-start items-start flex">
                      <div className="w-[117.20px] h-[17.23px] justify-center items-center inline-flex">
                        <div className="w-[117.47px] h-[17.23px] text-[#333333] text-sm font-bold font-['Droid Sans'] uppercase leading-[20.92px]">
                          Post title here
                          <img
                            src="../assets/images/icons-yoga/wish-button.svg"
                            className="w-[18px] h-[18px] mt-[-20px] ml-[260px] absolute "
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="h-[19.03px] my-[20px]  pr-[106.77px] pt-[1.72px] pb-[1.80px] justify-start items-start gap-[11.53px] inline-flex">
                        <div className="w-[63.24px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[63.51px] h-[15.51px] text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                            <a href="#">Jan 13, 2025</a>
                          </div>
                        </div>
                        <div className="w-[94.11px] mt-[-10px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[94.43px] h-[15.51px]">
                            <span className="text-[#7f7f7f] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              Written by:{" "}
                            </span>
                            <span className="text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              <a href="#">Admin</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[274.72px] h-[77.86px] text-[#7f7f7f] text-xs font-normal font-['Open Sans'] leading-tight">
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipisicing elit. Animi adipisci consequuntur
                        <br />
                        tempore excepturi culpa perferendis! Quis
                        <br />
                        voluptas consequuntur, quas magnam dolores ...
                      </div>
                      <div className="w-[67.14px] rounded-sm justify-center items-start gap-1 inline-flex">
                        <div className="w-[52.83px] h-[14.64px] text-[#a9a9a9] text-[10.34px] font-normal font-['Open Sans'] leading-none">
                          <button>Read more</button>
                        </div>
                        <div className="w-[10.51px] h-[12.06px] text-[#a9a9a9] text-xs font-normal font-['Inter'] leading-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-[26px] inline-flex">
                  <div className="w-[310.11px] pb-[0.07px] flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-[293.33px] justify-center items-center inline-flex overflow-hidden">
                      <img
                        className="w-[310.11px] h-[293.33px] absolute"
                        src="../assets/images/yoga/20db2c54a4e016b40422c8ac66b41d1a.jpeg"
                      />
                    </div>
                    <div className="w-[310.11px] h-[202.74px] pl-3 pt-4 relative bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] flex-col justify-start items-start flex">
                      <div className="w-[117.20px] h-[17.23px] justify-center items-center inline-flex">
                        <div className="w-[117.47px] h-[17.23px] text-[#333333] text-sm font-bold font-['Droid Sans'] uppercase leading-[20.92px]">
                          Post title here
                          <img
                            src="../assets/images/icons-yoga/wish-button.svg"
                            className="w-[18px] h-[18px] mt-[-20px] ml-[260px] absolute "
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="h-[19.03px] my-[20px]  pr-[106.77px] pt-[1.72px] pb-[1.80px] justify-start items-start gap-[11.53px] inline-flex">
                        <div className="w-[63.24px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[63.51px] h-[15.51px] text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                            <a href="#">Jan 13, 2025</a>
                          </div>
                        </div>
                        <div className="w-[94.11px] mt-[-10px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[94.43px] h-[15.51px]">
                            <span className="text-[#7f7f7f] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              Written by:{" "}
                            </span>
                            <span className="text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              <a href="#">Admin</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[274.72px] h-[77.86px] text-[#7f7f7f] text-xs font-normal font-['Open Sans'] leading-tight">
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipisicing elit. Animi adipisci consequuntur
                        <br />
                        tempore excepturi culpa perferendis! Quis
                        <br />
                        voluptas consequuntur, quas magnam dolores ...
                      </div>
                      <div className="w-[67.14px] rounded-sm justify-center items-start gap-1 inline-flex">
                        <div className="w-[52.83px] h-[14.64px] text-[#a9a9a9] text-[10.34px] font-normal font-['Open Sans'] leading-none">
                          <button>Read more</button>
                        </div>
                        <div className="w-[10.51px] h-[12.06px] text-[#a9a9a9] text-xs font-normal font-['Inter'] leading-3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[310.11px] flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-[293.33px] justify-center items-center inline-flex overflow-hidden">
                      <img
                        className="w-[310.11px] h-[293.33px] absolute"
                        src="../assets/images/yoga/3bb93c0175459dc8a293eaad34d8e06c.jpeg"
                      />
                    </div>
                    <div className="w-[310.11px] h-[202.74px] pl-3 pt-4 relative bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] flex-col justify-start items-start flex">
                      <div className="w-[117.20px] h-[17.23px] justify-center items-center inline-flex">
                        <div className="w-[117.47px] h-[17.23px] text-[#333333] text-sm font-bold font-['Droid Sans'] uppercase leading-[20.92px]">
                          Post title here
                          <img
                            src="../assets/images/icons-yoga/wish-button.svg"
                            className="w-[18px] h-[18px] mt-[-20px] ml-[260px] absolute"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="h-[19.03px] my-[20px]  pr-[106.77px] pt-[1.72px] pb-[1.80px] justify-start items-start gap-[11.53px] inline-flex">
                        <div className="w-[63.24px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[63.51px] h-[15.51px] text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                            <a href="#">Jan 13, 2025</a>
                          </div>
                        </div>
                        <div className="w-[94.11px] mt-[-10px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[94.43px] h-[15.51px]">
                            <span className="text-[#7f7f7f] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              Written by:{" "}
                            </span>
                            <span className="text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              <a href="#">Admin</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[274.72px] h-[77.86px] text-[#7f7f7f] text-xs font-normal font-['Open Sans'] leading-tight">
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipisicing elit. Animi adipisci consequuntur
                        <br />
                        tempore excepturi culpa perferendis! Quis
                        <br />
                        voluptas consequuntur, quas magnam dolores ...
                      </div>
                      <div className="w-[67.14px] rounded-sm justify-center items-start gap-1 inline-flex">
                        <div className="w-[52.83px] h-[14.64px] text-[#a9a9a9] text-[10.34px] font-normal font-['Open Sans'] leading-none">
                          <button>Read more</button>
                        </div>
                        <div className="w-[10.51px] h-[12.06px] text-[#a9a9a9] text-xs font-normal font-['Inter'] leading-3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[310.11px] rounded-lg flex-col justify-center items-start inline-flex">
                    <div className="self-stretch h-[293.33px] justify-center items-center inline-flex overflow-hidden">
                      <img
                        className="w-[310.11px] h-[293.33px] absolute"
                        src="../assets/images/yoga/079d6dd099209668da64d18807031a53.jpeg"
                      />
                    </div>
                    <div className="w-[310.11px] h-[202.74px] pl-3 pt-4 relative bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] flex-col justify-start items-start flex">
                      <div className="w-[117.20px] h-[17.23px] justify-center items-center inline-flex">
                        <div className="w-[117.47px] h-[17.23px] text-[#333333] text-sm font-bold font-['Droid Sans'] uppercase leading-[20.92px]">
                          Post title here
                          <img
                            src="../assets/images/icons-yoga/wish-button.svg"
                            className="w-[18px] h-[18px]  mt-[-20px] ml-[260px] absolute"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="h-[19.03px] my-[20px]  pr-[106.77px] pt-[1.72px] pb-[1.80px] justify-start items-start gap-[11.53px] inline-flex">
                        <div className="w-[63.24px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[63.51px] h-[15.51px] text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                            <a href="#">Jan 13, 2025</a>
                          </div>
                        </div>
                        <div className="w-[94.11px] mt-[-10px] self-stretch justify-center items-center inline-flex">
                          <div className="w-[94.43px] h-[15.51px]">
                            <span className="text-[#7f7f7f] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              Written by:{" "}
                            </span>
                            <span className="text-[#22b6f2] text-[11.20px] font-normal font-['Open Sans'] leading-[19.04px]">
                              <a href="#">Admin</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[274.72px] h-[77.86px] text-[#7f7f7f] text-xs font-normal font-['Open Sans'] leading-tight">
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipisicing elit. Animi adipisci consequuntur
                        <br />
                        tempore excepturi culpa perferendis! Quis
                        <br />
                        voluptas consequuntur, quas magnam dolores ...
                      </div>
                      <div className="w-[67.14px] rounded-sm justify-center items-start gap-1 inline-flex">
                        <div className="w-[52.83px] h-[14.64px] text-[#a9a9a9] text-[10.34px] font-normal font-['Open Sans'] leading-none">
                          <button>Read more</button>
                        </div>
                        <div className="w-[10.51px] h-[12.06px] text-[#a9a9a9] text-xs font-normal font-['Inter'] leading-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center !mt-0 !mb-12">
            <button
              type="button"
              className=" bg-[#00afe9] text-white py-3 px-6 rounded-full  font-semibold text-sm dark:bg-dark2"
            >
              Load more...
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;
