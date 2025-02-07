import React from 'react'

function Article() {
  return (
    <div>
        <div
        className="w-full max-w-[1200px] mx-auto mt-4 flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8 font-inter bg-white rounded-xl shadow-sm">
        
        <div>
            <div className="flex flex-col items-center w-full gap-2 my-5 text-center">
                <h1 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Engage With Article
                </h1>
                <p className="text-sm font-medium text-gray-600 sm:text-base">
                    Daily new blogs, don't miss them!
                </p>
            </div>

            <div className="flex flex-wrap justify-between gap-8 mt-8">
                <div
                    className="w-full lg:w-[60%] bg-white border border-none rounded-lg overflow-hidden shadow-sm hover:shadow-xl">
                    <div className="relative transition duration-300 ease-in-out transform hover:scale-105">
                        <img src="../assets/images/nutrition-blogs/food1.png" alt="Blog Image" className="w-full h-[200px] object-cover" />
                        <div className="absolute px-2 py-1 text-center rounded-md bottom-2 left-2 bg-white/90">
                            <p className="text-sm font-bold text-black">18</p>
                            <p className="text-xs text-gray-500 uppercase">Nov</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-4">
                                <img src="../assets/images/nutrition-blogs/audio.svg" alt="" />
                                <span>Listen to audio</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <img src="../assets/images/nutrition-blogs/wishlistbtn.svg" alt="Add to wishlist" />
                                <img src="../assets/images/nutrition-blogs/like.svg" alt="" />
                                <img src="../assets/images/nutrition-blogs/dislike.svg" alt="" />
                            </div>
                        </div>
                        <h2 className="mt-4 text-lg font-semibold leading-tight text-black">
                            Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                            fermentum.
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            Maecenas elementum in risus sed condimentum. Duis convallis ante
                            ac tempus maximus. Fusce malesuada sed velit ut dictum.
                        </p>
                        <button className="flex items-center gap-1 mt-4 text-sm font-medium text-blue-500">
                            Read More
                            <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M12.293 5.293a1 1 0 0 1 1.414 0L16.414 8a1 1 0 0 1 0 1.414l-2.707 2.707a1 1 0 0 1-1.414-1.414L13.586 9H4a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-[35%] mt-8 lg:mt-0">
                    <div className="flex items-center justify-center w-full mb-6">
                        <div className="flex items-center w-full p-2 border border-gray-300 rounded-md">
                            <input type="text" placeholder="Search"
                                className="flex-grow text-sm text-gray-700 placeholder-gray-500 bg-transparent outline-none" />
                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.387 5.387-1.41 1.41-5.387-5.387zM8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                </path>
                            </svg>
                        </div>
                    </div>

                    <div className=" w-full h-[276.26px] pb-[40px] bg-white flex-col justify-start items-start gap-[14.12px] inline-flex">
                        <div className="self-stretch pb-[3.53px] justify-center items-center inline-flex">
                            <div className="grow shrink basis-0 text-[#191919] text-lg font-medium leading-relaxed">
                                Top Categories
                            </div>
                            <div className="w-[17.65px] h-[17.65px] relative overflow-hidden"></div> 
                        </div>
                    
                        <div className="self-stretch">
                            <label htmlFor="categorySelect" className="sr-only">Select Category</label>
                            <select id="categorySelect"
                                className="w-full p-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="fresh-fruit">Fresh Fruit</option>
                                <option value="vegetables">Vegetables</option>
                                <option value="spices">Spices</option>
                                <option value="meat">Meat</option>
                                <option value="allergies">Allergies</option>
                                <option value="fish">Fish</option>
                                <option value="nuts">Nuts</option>
                            </select>
                        </div>
                    
                        <div className="inline-flex items-start justify-between w-full">
                            <div className="text-[#191919] text-xs font-normal font-['Inter'] leading-[18.53px]">Fresh Fruit</div>
                            <div className="text-[#7f7f7f] text-xs font-normal font-['Poppins'] leading-[18.53px]"> (134)</div>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                            <div className="text-[#191919] text-xs font-normal font-['Inter'] leading-[18.53px]">Vegetables</div>
                            <div className="text-[#7f7f7f] text-xs font-normal font-['Poppins'] leading-[18.53px]"> (150)</div>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                            <div className="text-[#191919] text-xs font-normal font-['Inter'] leading-[18.53px]">Spices</div>
                            <div className="text-[#7f7f7f] text-xs font-normal font-['Inter'] leading-[18.53px]"> (54)</div>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                            <div className="text-[#191919] text-xs font-normal font-['Inter'] leading-[18.53px]">Meat</div>
                            <div className="text-[#7f7f7f] text-xs font-normal font-['Inter'] leading-[18.53px]"> (47)</div>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                            <div className="text-[#191919] text-xs font-normal font-['Inter'] leading-[18.53px]">Allergies</div>
                            <div className="text-[#7f7f7f] text-xs font-normal font-['Inter'] leading-[18.53px]"> (43)</div>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                            <div className="text-[#191919] text-xs font-normal font-['Inter'] leading-[18.53px]">Fish</div>
                            <div className="text-[#7f7f7f] text-xs font-normal font-['Inter'] leading-[18.53px]"> (38)</div>
                        </div>
                        <div className="inline-flex items-start justify-between w-full">
                            <div className="text-[#191919] text-xs font-normal font-['Inter'] leading-[18.53px]">Nuts</div>
                            <div className="text-[#7f7f7f] text-xs font-normal font-['Inter'] leading-[18.53px]"> (15)</div>
                        </div>
                    </div>


                    <div className="mt-20 mb-6">
                        <h2 className="mb-6 text-2xl font-medium text-black sm:text-3xl lg:text-xl">
                            Popular Tags
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-4 py-2 text-sm text-blue-600 bg-blue-100 rounded-full">Web
                                Development</span>
                            <span className="px-4 py-2 text-sm text-green-600 bg-green-100 rounded-full">AI</span>
                            <span className="px-4 py-2 text-sm text-purple-600 bg-purple-100 rounded-full">Business</span>
                            <span className="px-4 py-2 text-sm text-yellow-600 bg-yellow-100 rounded-full">Finance</span>
                            <span className="px-4 py-2 text-sm text-red-600 bg-red-100 rounded-full">Health</span>
                            <span className="px-4 py-2 text-sm text-blue-600 bg-blue-100 rounded-full">Web
                                Development</span>
                            <span className="px-4 py-2 text-sm text-green-600 bg-green-100 rounded-full">AI</span>
                            <span className="px-4 py-2 text-sm text-purple-600 bg-purple-100 rounded-full">Business</span>
                            <span className="px-4 py-2 text-sm text-yellow-600 bg-yellow-100 rounded-full">Finance</span>
                            <span className="px-4 py-2 text-sm text-red-600 bg-red-100 rounded-full">Health</span>
                        </div>
                    </div>

                    <div className="p-4 bg-white border border-none rounded-lg shadow-sm">
                        <h3 className="mb-2 text-lg font-semibold text-gray-800">
                            Recently Added
                        </h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <img src="../assets/images/nutrition-blogs/food1.png" alt="Recently Added Image"
                                    className="object-cover w-20 h-20 rounded-md" />
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        Curabitur porttitor orci eget neque accumsan venenatis.
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Maecenas elementum in risus sed condimentum. Duis
                                        convallis ante ac
                                    </p>

                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/nutrition-blogs/calendar1.svg" alt="" className="w-4 h-4" />
                                        <span className="text-xs text-gray-500">18 Nov, 2025</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <img src="../assets/images/nutrition-blogs/food2.png" alt="Recently Added Image"
                                    className="object-cover w-20 h-20 rounded-md" />
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        Maecenas elementum in risus sed condimentum.
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Fusce malesuada sed velit ut dictum. Morbi faucibus vitae
                                        orci at euismod.
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/nutrition-blogs/calendar1.svg" alt="" className="w-4 h-4" />
                                        <span className="text-xs text-gray-500">18 Nov, 2025</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <img src="../assets/images/nutrition-blogs/food2.png" alt="Recently Added Image"
                                    className="object-cover w-20 h-20 rounded-md" />
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        Integer auctor augue in erat vehicula.
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Pellentesque ac elit nec libero volutpat consequat.
                                        Integer auctor augue in erat vehicula.
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/nutrition-blogs/calendar1.svg" alt="" className="w-4 h-4" />
                                        <span className="text-xs text-gray-500">18 Nov, 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Article