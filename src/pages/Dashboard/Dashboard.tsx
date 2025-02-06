import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
      <header
        className="lg:py-4 h-20 lg:px-6 py-3 px-4 shadow-[0_4px_4px_0px_rgba(0,0,0,0.3)] bg-white/100 backdrop-blur-xl z-40 dark:bg-slate-900/80 uk-animation-slide-top-small"
        uk-sticky
      >
        <div className="max-w-[1440px] mx-auto"></div>
        <div className="flex items-center justify-between">
          <div className="relative z-20 flex items-center gap-2">
            <button
              type="button"
              className="p-2.5 text-lg max-md:flex hidden group z"
              uk-toggle="target: #header-nav ; cls:max-md:hidden"
            >
              {/* <ion-icon
            name="menu"
            className="hidden group-aria-expanded:inline"
          ></ion-icon>
          <ion-icon
            name="close"
            className="group-aria-expanded:hidden"
          ></ion-icon> */}
            </button>
            <a href="home.html">
              <img
                src="./assets/images/logo.png"
                alt=""
                className="hidden md:block lg:block mt-[5px] w-[189.70px] h-[59px]"
              />
            </a>
          </div>
          <div
            id="header-nav"
            className="max-md:hidden max-md:bg-white max-md:p-5 max-md:fixed max-md:top-0 max-md:shadow-md max-md:left-0 max-md:pt-14 max-md:w-full max-md:z-10"
          >
            <nav
              className="flex font-semibold sm:items-start lg:items-center text-slate-500 dark:text-white/70 lg:gap-1 max-md:border-t max-md:pt-2 max-md:flex max-md:flex-col"
              uk-scrollspy-nav="closest: a ; scroll: true"
            >
              <a className="lg:py-1.5 py-2.5 px-3 duration-500" href="#">
                <img
                  className="h-auto w-[40px]"
                  src="./assets/images/workout_icons/calender-checked.png"
                />
              </a>
              <a className="lg:py-1.5 py-2.5 px-3 duration-500" href="#">
                <img
                  className="h-auto w-[40px]"
                  src="./assets/images/workout_icons/calender-date.png"
                />
              </a>
              <a className="lg:py-1.5 py-2.5 px-3 duration-500" href="#">
                <img
                  className="h-auto w-[40px]"
                  src="./assets/images/workout_icons/3d-folder.png"
                />
              </a>
              <a className="lg:py-1.5 py-2.5 px-3 duration-500" href="#">
                <img
                  className="h-auto w-[40px]"
                  src="./assets/images/workout_icons/realistic-upward.png"
                />
              </a>
              <a className="lg:py-1.5 py-2.5 px-3 duration-500" href="#">
                <img
                  className="h-auto w-[40px]"
                  src="./assets/images/workout_icons/3d-movie.png"
                />
              </a>
              <a className="lg:py-1.5 py-2.5 px-3 duration-500" href="#">
                <img
                  className="h-auto w-[40px]"
                  src="./assets/images/workout_icons/sports-gym.png"
                />
              </a>
            </nav>
          </div>
          <div className=" flex flex-row gap-4 mt-[-10px]">
            <a className="lg:py-1.5 py-2.5 px-3 duration-500" href="#">
              <img
                className="h-auto w-[54px]"
                src="./assets/images/workout_icons/minimal-notification.png"
              />
            </a>
            <button
              className="flex items-center px-1 py-2 text-sm bg-white border-0 rounded-md dark:text-white dark:bg-slate-700 group"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="w-[36.84px] h-[36.84px] rounded-full"
                src="./assets/images/icons-yoga/5456d9c431578988d2340c4b5c4edd1c.png"
              />
              <div className="w-[185.64px] h-[39.27px] text-[#222222] text-[18.99px] font-semibold font-['Inter'] leading-[42.02px]">
                System Admin
              </div>
            </button>
          </div>

          <button
            className=" font-bold mt-[-10px] items-center px-3  text-lg bg-white dark:text-white dark:bg-slate-700 group"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Navigations
            {/* <ion-icon name="chevron-down-outline" className="ml-2 text-lg duration-200 group-aria-expanded:rotate-180 md hydrated" role="img" aria-label="chevron down outline"></ion-icon>  */}
          </button>

          <div
            uk-dropdown="offset:10;pos: bottom-right ; animation: uk-animation-slide-bottom-small"
            className="uk-dropdown"
          >
            <nav>
              <a href="./nutrition/home.html"> Nutrition Page</a>
              <a href="./blogpage/home.html"> Blog Page</a>
              <a href="./workout/home.html"> Workout Page </a>
              <a href="./yoga/home.html"> Yoga Page </a>

              <a href="./fruit-page/home.html"> Fruits Page </a>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex flex-col w-full gap-10 px-6 py-10 max-w-7xl">
        <div className="bg-[#142129] rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center lg:items-start overflow-hidden relative">
          <div className="flex flex-col w-full gap-6 lg:gap-8 lg:w-auto">
            <div className="text-center lg:text-left">
              <h2 className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                Hello Kim,
              </h2>
              <p className="text-sm font-normal text-white lg:text-base">
                Your diet plan for Today
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 lg:justify-start lg:gap-8">
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 36 36"
                  >
                    <circle
                      className="text-gray-700"
                      stroke-width="3"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                    <circle
                      className="text-green-500"
                      stroke-width="3"
                      stroke-dasharray="100, 100"
                      stroke-linecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <span className="text-sm font-bold">100%</span>
                    <span className="text-xs">Calories</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 36 36"
                  >
                    <circle
                      className="text-gray-700"
                      stroke-width="3"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                    <circle
                      className="text-blue-500"
                      stroke-width="3"
                      stroke-dasharray="60, 100"
                      stroke-linecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <span className="text-sm font-bold">60%</span>
                    <span className="text-xs">Carbs</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 36 36"
                  >
                    <circle
                      className="text-gray-700"
                      stroke-width="3"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                    <circle
                      className="text-red-500"
                      stroke-width="3"
                      stroke-dasharray="55, 100"
                      stroke-linecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <span className="text-sm font-bold">55%</span>
                    <span className="text-xs">Proteins</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 36 36"
                  >
                    <circle
                      className="text-gray-700"
                      stroke-width="3"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                    <circle
                      className="text-orange-500"
                      stroke-width="3"
                      stroke-dasharray="35, 100"
                      stroke-linecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="16"
                      cx="18"
                      cy="18"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <span className="text-sm font-bold">35%</span>
                    <span className="text-xs">Fats</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex-1 mt-6 lg:mt-0">
            <img
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain -top-10 lg:-top-14 absolute right-0"
              src="./assets/images/nutrition-blogs/rb_52431.png"
              alt="Background Illustration"
            />
          </div>
        </div>

        <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="mb-4 text-xl font-medium">Nutrition Trends</h3>
            <canvas id="trendChart" className="w-full h-72"></canvas>
          </div>

          <div className="p-5 px-6 bg-white shadow-sm rounded-xl border1 dark:bg-dark2">
            <div className="md:divide-x md:divide-gray-200">
              <div className="">
                <div className="flex items-center">
                  <h2 className="flex-auto text-sm font-semibold text-gray-900">
                    January 2022
                  </h2>
                  <button
                    type="button"
                    className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Previous month</span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Next month</span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                  <div>M</div>
                  <div>T</div>
                  <div>W</div>
                  <div>T</div>
                  <div>F</div>
                  <div>S</div>
                  <div>S</div>
                </div>
                <div className="grid grid-cols-7 mt-2 text-sm">
                  <div className="py-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-400 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2021-12-27">27</time>
                    </button>
                  </div>
                  <div className="py-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-400 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2021-12-28">28</time>
                    </button>
                  </div>
                  <div className="py-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-400 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2021-12-29">29</time>
                    </button>
                  </div>
                  <div className="py-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-400 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2021-12-30">30</time>
                    </button>
                  </div>
                  <div className="py-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-400 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2021-12-31">31</time>
                    </button>
                  </div>
                  <div className="py-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-01">1</time>
                    </button>
                  </div>
                  <div className="py-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-02">2</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-03">3</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-04">4</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-05">5</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-06">6</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-07">7</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-08">8</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-09">9</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-10">10</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-11">11</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto font-semibold text-indigo-600 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-12">12</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-13">13</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-14">14</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-15">15</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-16">16</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-17">17</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-18">18</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-19">19</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-20">20</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto font-semibold text-white bg-gray-900 rounded-full"
                    >
                      <time dateTime="2022-01-21">21</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-22">22</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-23">23</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-24">24</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-25">25</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-26">26</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-27">27</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-28">28</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-29">29</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-30">30</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-01-31">31</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-400 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-02-01">1</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-400 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-02-02">2</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-400 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-02-03">3</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-400 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-02-04">4</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-400 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-02-05">5</time>
                    </button>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 mx-auto text-gray-400 rounded-full hover:bg-gray-200"
                    >
                      <time dateTime="2022-02-06">6</time>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
