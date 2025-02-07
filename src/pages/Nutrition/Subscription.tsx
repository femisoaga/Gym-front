import React from "react";

function Subscription() {
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
              src="../assets/rb_52431.png"
              alt="Background Illustration"
            />
          </div>
        </div>
        <div className="h-auto md:h-[700px] px-3 md:px-1 pt-6 md:pt-9 pb-6 md:pb-4 bg-white rounded-2xl flex flex-col items-center overflow-hidden">
          <div className="px-4 mb-8 text-center md:mb-12">
            <h2 className="text-lg md:text-[28px] font-bold text-neutral-900 leading-10">
              Spaar cashback bij ruim 1500 webshops en betaal uw lidmaatschap
              automatisch!
            </h2>
            <p className="mt-2 leading-10 text-neutral-500">
              Just straight-forward pricing that aligns with your business
              goals.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="w-full sm:w-[280px] md:w-[250px] lg:w-[300px] shadow-md border border-neutral-200 bg-white rounded-lg p-4 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="text-[#00afe9] font-medium">Basic</div>
              <div className="text-neutral-900 text-xl md:text-[28px] font-bold">
                $19
              </div>
              <p className="text-neutral-400 text-[10px] md:text-xs">
                30 credit / month
              </p>
              <hr className="my-4 border-neutral-200" />
              <ul className="space-y-2 text-xs text-neutral-700 md:space-y-3">
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2 text-green-500"
                    alt="check"
                  />
                  2 Yoga Sessions
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2 text-green-500"
                    alt="check"
                  />
                  1 Hour Gym
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2 text-green-500"
                    alt="check"
                  />
                  1 Hour Dance
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2 text-green-500"
                    alt="check"
                  />
                  1 Hour Workout
                </li>
                <li className="flex items-center line-through">No Trainer</li>
                <li className="flex items-center line-through">No Analysis</li>
              </ul>
              <button className="w-full py-2 mt-6 text-xs font-medium transition bg-gray-200 rounded-lg text-neutral-900 hover:bg-gray-300">
                Current Package
              </button>
            </div>

            <div className="w-full sm:w-[280px] md:w-[250px] lg:w-[300px] shadow-md border border-neutral-200 bg-blue-400 text-white rounded-lg p-4 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="font-medium text">Premium</div>
              <div className="text-xl md:text-[28px] font-bold">$199</div>
              <p className="text-[10px] md:text-xs">70 credit / month</p>
              <hr className="my-4 border-white" />
              <ul className="space-y-2 text-xs md:space-y-3">
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2"
                    alt="check"
                  />
                  5 Yoga Sessions
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2"
                    alt="check"
                  />
                  2 Hour Gym
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2"
                    alt="check"
                  />
                  2 Hour Dance
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2"
                    alt="check"
                  />
                  2 Hour Workout
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2"
                    alt="check"
                  />
                  Junior Trainer
                </li>
                <li className="flex items-center line-through">No Analysis</li>
              </ul>
              <button className="w-full bg-white text-[#00afe9] text-xs py-2 mt-6 rounded-lg font-medium hover:bg-blue-800 transition">
                Select Plan
              </button>
            </div>

            <div className="w-full sm:w-[280px] md:w-[250px] lg:w-[300px] shadow-md border border-neutral-200 bg-white rounded-lg p-4 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="text-[#00afe9] font-medium">Enterprise</div>
              <div className="text-neutral-900 text-xl md:text-[28px] font-bold">
                $269
              </div>
              <p className="text-neutral-400 text-[10px] md:text-xs">
                150 credit / month
              </p>
              <hr className="my-4 border-neutral-200" />
              <ul className="space-y-2 text-xs text-neutral-700 md:space-y-3">
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2 text-green-500"
                    alt="check"
                  />
                  Unlimited Yoga Sessions
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2 text-green-500"
                    alt="check"
                  />
                  5 Hour Gym
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2 text-green-500"
                    alt="check"
                  />
                  3 Hour Dance
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2 text-green-500"
                    alt="check"
                  />
                  3 Hour Workout
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2 text-green-500"
                    alt="check"
                  />
                  Senior Trainer
                </li>
                <li className="flex items-center">
                  <img
                    src="../assets/images/nutrition-blogs/check-circle.svg"
                    className="w-4 h-4 mr-2 text-green-500"
                    alt="check"
                  />
                  Analysis Included
                </li>
              </ul>
              <button className="w-full py-2 mt-6 text-xs font-medium transition bg-gray-200 rounded-lg text-neutral-900 hover:bg-gray-300">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Subscription;
