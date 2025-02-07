import React from "react";

function Diet() {
  return (
    <div className="flex justify-center">
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
              src="../assets/images/nutrition-blogs/rb_52431.png"
              alt="Background Illustration"
            />
          </div>
        </div>

        <section className="relative h-auto p-6 bg-white rounded-2xl">
          <h2 className="text-center text-[#191919] text-xl font-semibold leading-10">
            My Weekly Diet Plan
          </h2>
          <ul className="items-center justify-center space-x-6 uk-tab" uk-tab>
            <li>
              <a href="#" data-day="Monday">
                Monday
              </a>
            </li>
            <li>
              <a href="#" data-day="Tuesday">
                Tuesday
              </a>
            </li>
            <li>
              <a href="#" data-day="Wednesday">
                Wednesday
              </a>
            </li>
            <li>
              <a href="#" data-day="Thursday">
                Thursday
              </a>
            </li>
            <li>
              <a href="#" data-day="Friday">
                Friday
              </a>
            </li>
            <li>
              <a href="#" data-day="Saturday">
                Saturday
              </a>
            </li>
            <li>
              <a href="#" data-day="Sunday">
                Sunday
              </a>
            </li>
          </ul>
          <div
            id="meal-cards-container"
            className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3"
          ></div>
        </section>
      </main>
    </div>
  );
}

export default Diet;
