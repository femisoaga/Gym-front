import React from 'react'

function BlogPage() {
  return (
    <div>
        <div
        className="w-full max-w-[1200px] mx-auto mt-4 flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8 font-inter bg-white rounded-xl shadow-sm">
        <div className="flex flex-col items-center gap-2 pt-5 mt-2 mb-5 text-center">
            <h1 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-5xl">
                Welcome to our blogs
            </h1>
            <p className="text-sm font-medium text-gray-600 sm:text-base">
                Daily new blogs, don't miss them!
            </p>
        </div>

        <div className="flex flex-wrap items-center justify-between w-full gap-4">
            <div className="flex items-center flex-grow p-2 border border-gray-300 rounded-md">
                <input type="text" placeholder="Search"
                    className="flex-grow text-sm text-gray-700 placeholder-gray-500 bg-transparent border border-none outline-none" />
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                        d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.387 5.387-1.41 1.41-5.387-5.387zM8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                    </path>
                </svg>
            </div>

            <div className="relative">
                <button className="px-4 py-2 text-sm font-semibold text-white bg-gray-400 rounded-full focus:outline-none"
                    id="categoryButton" aria-expanded="false" aria-haspopup="true">
                    View Category
                </button>

                <div className="absolute right-0 hidden w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg"
                    id="categoryMenu">
                    <a href="/categories/all" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All
                        Categories</a>
                    <a href="/categories/technology"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Technology</a>
                    <a href="/categories/health"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Health</a>
                    <a href="/categories/lifestyle"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lifestyle</a>
                    <a href="/categories/finance"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Finance</a>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div
                className="overflow-hidden transition duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:scale-105">
                <div className="relative">
                    <img src="../assets/images/nutrition-blogs/food7.png" alt="Blog Image" className="w-full h-[200px] object-cover"/>
                    <div className="absolute px-2 py-1 text-center rounded-md bottom-2 left-2 bg-white/90">
                        <p className="text-sm font-bold text-black">18</p>
                        <p className="text-xs text-gray-500 uppercase">Nov</p>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_63_487)">
                                <path
                                    d="M13.0848 8.76162L8.57218 13.2742C8.45528 13.3912 8.31645 13.4841 8.16364 13.5474C8.01083 13.6108 7.84704 13.6434 7.68162 13.6434C7.5162 13.6434 7.35241 13.6108 7.1996 13.5474C7.04679 13.4841 6.90796 13.3912 6.79106 13.2742L1.38477 7.87421V1.58051H7.67847L13.0848 6.9868C13.3192 7.22264 13.4508 7.54167 13.4508 7.87421C13.4508 8.20675 13.3192 8.52578 13.0848 8.76162V8.76162Z"
                                    stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.53149 4.72748H4.53779" stroke="#B3B3B3" stroke-width="1.13287"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_63_487">
                                    <rect width="15.1049" height="15.1049" fill="white"
                                        transform="translate(0.125977 0.321838)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Beans</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M7.88784 7.24474C9.27821 7.24474 10.4053 6.11763 10.4053 4.72726C10.4053 3.33689 9.27821 2.20978 7.88784 2.20978C6.49748 2.20978 5.37036 3.33689 5.37036 4.72726C5.37036 6.11763 6.49748 7.24474 7.88784 7.24474Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                            <path
                                d="M9.77608 9.13306H5.99986C4.26154 9.13306 2.7051 10.738 3.84867 12.0464C4.62657 12.9363 5.913 13.5387 7.88797 13.5387C9.86294 13.5387 11.1487 12.9363 11.9266 12.0464C13.0708 10.7373 11.5138 9.13306 9.77608 9.13306Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                        </svg>
                        <span>By Admin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path
                                d="M8.49363 10.479L7.70685 11.79C7.66911 11.8529 7.61572 11.905 7.55188 11.9411C7.48804 11.9773 7.41593 11.9963 7.34256 11.9963C7.2692 11.9963 7.19709 11.9773 7.13325 11.9411C7.06941 11.905 7.01602 11.8529 6.97828 11.79L6.19235 10.479C6.15456 10.4161 6.10112 10.3641 6.03725 10.3279C5.97337 10.2918 5.90123 10.2729 5.82785 10.273H2.6697C2.55703 10.273 2.44897 10.2282 2.3693 10.1485C2.28963 10.0689 2.24487 9.9608 2.24487 9.84813V3.05092C2.24487 2.93825 2.28963 2.8302 2.3693 2.75053C2.44897 2.67086 2.55703 2.6261 2.6697 2.6261H12.0159C12.1285 2.6261 12.2366 2.67086 12.3162 2.75053C12.3959 2.8302 12.4407 2.93825 12.4407 3.05092V9.84813C12.4407 9.9608 12.3959 10.0689 12.3162 10.1485C12.2366 10.2282 12.1285 10.273 12.0159 10.273H8.8577C8.7844 10.273 8.71234 10.2919 8.64855 10.3281C8.58475 10.3642 8.53138 10.4162 8.49363 10.479V10.479Z"
                                stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>65 Comments</span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold leading-tight text-black">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.
                    </p>
                    <button className="flex items-center gap-1 mt-4 text-sm font-medium text-blue-500">
                        Read More
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M12.293 5.293a1 1 0 0 1 1.414 0L16.414 8a1 1 0 0 1 0 1.414l-2.707 2.707a1 1 0 0 1-1.414-1.414L13.586 9H4a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        
            <div
                className="overflow-hidden transition duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:scale-105">
                <div className="relative">
                    <img src="../assets/images/nutrition-blogs/food6.png" alt="Blog Image" className="w-full h-[200px] object-cover"/>
                    <div className="absolute px-2 py-1 text-center rounded-md bottom-2 left-2 bg-white/90">
                        <p className="text-sm font-bold text-black">18</p>
                        <p className="text-xs text-gray-500 uppercase">Nov</p>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_63_487)">
                                <path
                                    d="M13.0848 8.76162L8.57218 13.2742C8.45528 13.3912 8.31645 13.4841 8.16364 13.5474C8.01083 13.6108 7.84704 13.6434 7.68162 13.6434C7.5162 13.6434 7.35241 13.6108 7.1996 13.5474C7.04679 13.4841 6.90796 13.3912 6.79106 13.2742L1.38477 7.87421V1.58051H7.67847L13.0848 6.9868C13.3192 7.22264 13.4508 7.54167 13.4508 7.87421C13.4508 8.20675 13.3192 8.52578 13.0848 8.76162V8.76162Z"
                                    stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.53149 4.72748H4.53779" stroke="#B3B3B3" stroke-width="1.13287"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_63_487">
                                    <rect width="15.1049" height="15.1049" fill="white"
                                        transform="translate(0.125977 0.321838)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Beans</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M7.88784 7.24474C9.27821 7.24474 10.4053 6.11763 10.4053 4.72726C10.4053 3.33689 9.27821 2.20978 7.88784 2.20978C6.49748 2.20978 5.37036 3.33689 5.37036 4.72726C5.37036 6.11763 6.49748 7.24474 7.88784 7.24474Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                            <path
                                d="M9.77608 9.13306H5.99986C4.26154 9.13306 2.7051 10.738 3.84867 12.0464C4.62657 12.9363 5.913 13.5387 7.88797 13.5387C9.86294 13.5387 11.1487 12.9363 11.9266 12.0464C13.0708 10.7373 11.5138 9.13306 9.77608 9.13306Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                        </svg>
                        <span>By Admin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path
                                d="M8.49363 10.479L7.70685 11.79C7.66911 11.8529 7.61572 11.905 7.55188 11.9411C7.48804 11.9773 7.41593 11.9963 7.34256 11.9963C7.2692 11.9963 7.19709 11.9773 7.13325 11.9411C7.06941 11.905 7.01602 11.8529 6.97828 11.79L6.19235 10.479C6.15456 10.4161 6.10112 10.3641 6.03725 10.3279C5.97337 10.2918 5.90123 10.2729 5.82785 10.273H2.6697C2.55703 10.273 2.44897 10.2282 2.3693 10.1485C2.28963 10.0689 2.24487 9.9608 2.24487 9.84813V3.05092C2.24487 2.93825 2.28963 2.8302 2.3693 2.75053C2.44897 2.67086 2.55703 2.6261 2.6697 2.6261H12.0159C12.1285 2.6261 12.2366 2.67086 12.3162 2.75053C12.3959 2.8302 12.4407 2.93825 12.4407 3.05092V9.84813C12.4407 9.9608 12.3959 10.0689 12.3162 10.1485C12.2366 10.2282 12.1285 10.273 12.0159 10.273H8.8577C8.7844 10.273 8.71234 10.2919 8.64855 10.3281C8.58475 10.3642 8.53138 10.4162 8.49363 10.479V10.479Z"
                                stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>65 Comments</span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold leading-tight text-black">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.
                    </p>
                    <button className="flex items-center gap-1 mt-4 text-sm font-medium text-blue-500">
                        Read More
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M12.293 5.293a1 1 0 0 1 1.414 0L16.414 8a1 1 0 0 1 0 1.414l-2.707 2.707a1 1 0 0 1-1.414-1.414L13.586 9H4a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className="overflow-hidden transition duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:scale-105">
                <div className="relative">
                    <img src="../assets/images/nutrition-blogs/food7.png" alt="Blog Image" className="w-full h-[200px] object-cover"/>
                    <div className="absolute px-2 py-1 text-center rounded-md bottom-2 left-2 bg-white/90">
                        <p className="text-sm font-bold text-black">18</p>
                        <p className="text-xs text-gray-500 uppercase">Nov</p>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_63_487)">
                                <path
                                    d="M13.0848 8.76162L8.57218 13.2742C8.45528 13.3912 8.31645 13.4841 8.16364 13.5474C8.01083 13.6108 7.84704 13.6434 7.68162 13.6434C7.5162 13.6434 7.35241 13.6108 7.1996 13.5474C7.04679 13.4841 6.90796 13.3912 6.79106 13.2742L1.38477 7.87421V1.58051H7.67847L13.0848 6.9868C13.3192 7.22264 13.4508 7.54167 13.4508 7.87421C13.4508 8.20675 13.3192 8.52578 13.0848 8.76162V8.76162Z"
                                    stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.53149 4.72748H4.53779" stroke="#B3B3B3" stroke-width="1.13287"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_63_487">
                                    <rect width="15.1049" height="15.1049" fill="white"
                                        transform="translate(0.125977 0.321838)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Beans</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M7.88784 7.24474C9.27821 7.24474 10.4053 6.11763 10.4053 4.72726C10.4053 3.33689 9.27821 2.20978 7.88784 2.20978C6.49748 2.20978 5.37036 3.33689 5.37036 4.72726C5.37036 6.11763 6.49748 7.24474 7.88784 7.24474Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                            <path
                                d="M9.77608 9.13306H5.99986C4.26154 9.13306 2.7051 10.738 3.84867 12.0464C4.62657 12.9363 5.913 13.5387 7.88797 13.5387C9.86294 13.5387 11.1487 12.9363 11.9266 12.0464C13.0708 10.7373 11.5138 9.13306 9.77608 9.13306Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                        </svg>
                        <span>By Admin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path
                                d="M8.49363 10.479L7.70685 11.79C7.66911 11.8529 7.61572 11.905 7.55188 11.9411C7.48804 11.9773 7.41593 11.9963 7.34256 11.9963C7.2692 11.9963 7.19709 11.9773 7.13325 11.9411C7.06941 11.905 7.01602 11.8529 6.97828 11.79L6.19235 10.479C6.15456 10.4161 6.10112 10.3641 6.03725 10.3279C5.97337 10.2918 5.90123 10.2729 5.82785 10.273H2.6697C2.55703 10.273 2.44897 10.2282 2.3693 10.1485C2.28963 10.0689 2.24487 9.9608 2.24487 9.84813V3.05092C2.24487 2.93825 2.28963 2.8302 2.3693 2.75053C2.44897 2.67086 2.55703 2.6261 2.6697 2.6261H12.0159C12.1285 2.6261 12.2366 2.67086 12.3162 2.75053C12.3959 2.8302 12.4407 2.93825 12.4407 3.05092V9.84813C12.4407 9.9608 12.3959 10.0689 12.3162 10.1485C12.2366 10.2282 12.1285 10.273 12.0159 10.273H8.8577C8.7844 10.273 8.71234 10.2919 8.64855 10.3281C8.58475 10.3642 8.53138 10.4162 8.49363 10.479V10.479Z"
                                stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>65 Comments</span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold leading-tight text-black">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.
                    </p>
                    <button className="flex items-center gap-1 mt-4 text-sm font-medium text-blue-500">
                        Read More
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M12.293 5.293a1 1 0 0 1 1.414 0L16.414 8a1 1 0 0 1 0 1.414l-2.707 2.707a1 1 0 0 1-1.414-1.414L13.586 9H4a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div
                className="flex flex-col overflow-hidden transition duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:scale-105 lg:flex-row">
                <div className="flex-1">
                    <div className="relative">
                        <img src="../assets/images/nutrition-blogs/food1.png" alt="Blog Image" className="w-full h-[200px] object-cover" />
                        <div className="absolute px-2 py-1 text-center rounded-md bottom-2 left-2 bg-white/90">
                            <p className="text-sm font-bold text-black">18</p>
                            <p className="text-xs text-gray-500 uppercase">Nov</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M13.0848 8.76162L8.57218 13.2742C8.45528 13.3912 8.31645 13.4841 8.16364 13.5474C8.01083 13.6108 7.84704 13.6434 7.68162 13.6434C7.5162 13.6434 7.35241 13.6108 7.1996 13.5474C7.04679 13.4841 6.90796 13.3912 6.79106 13.2742L1.38477 7.87421V1.58051H7.67847L13.0848 6.9868C13.3192 7.22264 13.4508 7.54167 13.4508 7.87421C13.4508 8.20675 13.3192 8.52578 13.0848 8.76162V8.76162Z"
                                        stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span>Beans</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M7.88784 7.24474C9.27821 7.24474 10.4053 6.11763 10.4053 4.72726C10.4053 3.33689 9.27821 2.20978 7.88784 2.20978C6.49748 2.20978 5.37036 3.33689 5.37036 4.72726C5.37036 6.11763 6.49748 7.24474 7.88784 7.24474Z"
                                        stroke="#B3B3B3" stroke-width="0.906294" />
                                    <path
                                        d="M9.77608 9.13306H5.99986C4.26154 9.13306 2.7051 10.738 3.84867 12.0464C4.62657 12.9363 5.913 13.5387 7.88797 13.5387C9.86294 13.5387 11.1487 12.9363 11.9266 12.0464C13.0708 10.7373 11.5138 9.13306 9.77608 9.13306Z"
                                        stroke="#B3B3B3" stroke-width="0.906294" />
                                </svg>
                                <span>By Admin</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M8.00033 5.66683C9.10491 5.66683 10.0003 6.56221 10.0003 7.66683C10.0003 8.77145 9.10491 9.66683 8.00033 9.66683C6.89571 9.66683 6.00033 8.77145 6.00033 7.66683C6.00033 6.56221 6.89571 5.66683 8.00033 5.66683Z"
                                        stroke="#B3B3B3" stroke-width="0.906294" />
                                    <path
                                        d="M14.8287 7.66683C13.5097 9.9975 11.4097 11.3335 8.00033 11.3335C4.59099 11.3335 2.49099 9.9975 1.17166 7.66683C2.49099 5.33617 4.59099 4.00016 8.00033 4.00016C11.4097 4.00016 13.5097 5.33617 14.8287 7.66683Z"
                                        stroke="#B3B3B3" stroke-width="0.906294" />
                                </svg>
                                <span>120 Views</span>
                            </div>
                        </div>
                        <h3 className="mt-4 text-lg font-bold">
                            Delicious Beans Recipe for Everyone
                        </h3>
                        <p className="mt-2 text-gray-600">Discover the best recipe for cooking beans that will leave your taste buds
                            craving for more. Perfect for family meals and gatherings.</p>
                    </div>
                </div>

                <div className="w-full p-4 bg-white border-t border-gray-200 lg:w-full lg:border-l">
                    <p className="mt-2 text-gray-600">
                        Discover the best recipe for cooking beans that will leave your
                        taste buds craving for more. Perfect for family meals and
                        gatherings. Discover the best recipe for cooking beans that will
                        leave your taste buds craving for more. Perfect for family meals
                        and gatherings.Discover the best recipe for cooking beans that
                        will leave your taste buds craving for more. Perfect for family
                        meals and gatherings.Discover the best recipe for cooking beans
                        that will leave your taste buds craving for more. Perfect for
                        family meals and gatherings.
                    </p>
                </div>
            </div>

            <div
                className="lg:w-[400px] md:w-[250px] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                <div className="relative">
                    <img src="../assets/images/nutrition-blogs/food2.png" alt="Blog Image" className="w-full h-[200px] object-cover" />
                    <div className="absolute px-2 py-1 text-center rounded-md bottom-2 left-2 bg-white/90">
                        <p className="text-sm font-bold text-black">18</p>
                        <p className="text-xs text-gray-500 uppercase">Nov</p>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_63_487)">
                                <path
                                    d="M13.0848 8.76162L8.57218 13.2742C8.45528 13.3912 8.31645 13.4841 8.16364 13.5474C8.01083 13.6108 7.84704 13.6434 7.68162 13.6434C7.5162 13.6434 7.35241 13.6108 7.1996 13.5474C7.04679 13.4841 6.90796 13.3912 6.79106 13.2742L1.38477 7.87421V1.58051H7.67847L13.0848 6.9868C13.3192 7.22264 13.4508 7.54167 13.4508 7.87421C13.4508 8.20675 13.3192 8.52578 13.0848 8.76162V8.76162Z"
                                    stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M4.53149 4.72748H4.53779" stroke="#B3B3B3" stroke-width="1.13287"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_63_487">
                                    <rect width="15.1049" height="15.1049" fill="white"
                                        transform="translate(0.125977 0.321838)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Beans</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M7.88784 7.24474C9.27821 7.24474 10.4053 6.11763 10.4053 4.72726C10.4053 3.33689 9.27821 2.20978 7.88784 2.20978C6.49748 2.20978 5.37036 3.33689 5.37036 4.72726C5.37036 6.11763 6.49748 7.24474 7.88784 7.24474Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                            <path
                                d="M9.77608 9.13306H5.99986C4.26154 9.13306 2.7051 10.738 3.84867 12.0464C4.62657 12.9363 5.913 13.5387 7.88797 13.5387C9.86294 13.5387 11.1487 12.9363 11.9266 12.0464C13.0708 10.7373 11.5138 9.13306 9.77608 9.13306Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                        </svg>
                        <span>By Admin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path
                                d="M8.49363 10.479L7.70685 11.79C7.66911 11.8529 7.61572 11.905 7.55188 11.9411C7.48804 11.9773 7.41593 11.9963 7.34256 11.9963C7.2692 11.9963 7.19709 11.9773 7.13325 11.9411C7.06941 11.905 7.01602 11.8529 6.97828 11.79L6.19235 10.479C6.15456 10.4161 6.10112 10.3641 6.03725 10.3279C5.97337 10.2918 5.90123 10.2729 5.82785 10.273H2.6697C2.55703 10.273 2.44897 10.2282 2.3693 10.1485C2.28963 10.0689 2.24487 9.9608 2.24487 9.84813V3.05092C2.24487 2.93825 2.28963 2.8302 2.3693 2.75053C2.44897 2.67086 2.55703 2.6261 2.6697 2.6261H12.0159C12.1285 2.6261 12.2366 2.67086 12.3162 2.75053C12.3959 2.8302 12.4407 2.93825 12.4407 3.05092V9.84813C12.4407 9.9608 12.3959 10.0689 12.3162 10.1485C12.2366 10.2282 12.1285 10.273 12.0159 10.273H8.8577C8.7844 10.273 8.71234 10.2919 8.64855 10.3281C8.58475 10.3642 8.53138 10.4162 8.49363 10.479V10.479Z"
                                stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>65 Comments</span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold leading-tight text-black">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        Maecenas elementum in risus sed condimentum. Duis convallis ante
                        ac tempus maximus.
                    </p>
                    <button className="flex items-center gap-1 mt-4 text-sm font-medium text-blue-500">
                        Read More
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M12.293 5.293a1 1 0 0 1 1.414 0L16.414 8a1 1 0 0 1 0 1.414l-2.707 2.707a1 1 0 0 1-1.414-1.414L13.586 9H4a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div
                className="overflow-hidden transition duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:scale-105">
                <div className="relative">
                    <img src="../assets/images/nutrition-blogs/food7.png" alt="Blog Image" className="w-full h-[200px] object-cover"/>
                    <div className="absolute px-2 py-1 text-center rounded-md bottom-2 left-2 bg-white/90">
                        <p className="text-sm font-bold text-black">18</p>
                        <p className="text-xs text-gray-500 uppercase">Nov</p>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_63_487)">
                                <path
                                    d="M13.0848 8.76162L8.57218 13.2742C8.45528 13.3912 8.31645 13.4841 8.16364 13.5474C8.01083 13.6108 7.84704 13.6434 7.68162 13.6434C7.5162 13.6434 7.35241 13.6108 7.1996 13.5474C7.04679 13.4841 6.90796 13.3912 6.79106 13.2742L1.38477 7.87421V1.58051H7.67847L13.0848 6.9868C13.3192 7.22264 13.4508 7.54167 13.4508 7.87421C13.4508 8.20675 13.3192 8.52578 13.0848 8.76162V8.76162Z"
                                    stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M4.53149 4.72748H4.53779" stroke="#B3B3B3" stroke-width="1.13287"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_63_487">
                                    <rect width="15.1049" height="15.1049" fill="white"
                                        transform="translate(0.125977 0.321838)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Beans</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M7.88784 7.24474C9.27821 7.24474 10.4053 6.11763 10.4053 4.72726C10.4053 3.33689 9.27821 2.20978 7.88784 2.20978C6.49748 2.20978 5.37036 3.33689 5.37036 4.72726C5.37036 6.11763 6.49748 7.24474 7.88784 7.24474Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                            <path
                                d="M9.77608 9.13306H5.99986C4.26154 9.13306 2.7051 10.738 3.84867 12.0464C4.62657 12.9363 5.913 13.5387 7.88797 13.5387C9.86294 13.5387 11.1487 12.9363 11.9266 12.0464C13.0708 10.7373 11.5138 9.13306 9.77608 9.13306Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                        </svg>
                        <span>By Admin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path
                                d="M8.49363 10.479L7.70685 11.79C7.66911 11.8529 7.61572 11.905 7.55188 11.9411C7.48804 11.9773 7.41593 11.9963 7.34256 11.9963C7.2692 11.9963 7.19709 11.9773 7.13325 11.9411C7.06941 11.905 7.01602 11.8529 6.97828 11.79L6.19235 10.479C6.15456 10.4161 6.10112 10.3641 6.03725 10.3279C5.97337 10.2918 5.90123 10.2729 5.82785 10.273H2.6697C2.55703 10.273 2.44897 10.2282 2.3693 10.1485C2.28963 10.0689 2.24487 9.9608 2.24487 9.84813V3.05092C2.24487 2.93825 2.28963 2.8302 2.3693 2.75053C2.44897 2.67086 2.55703 2.6261 2.6697 2.6261H12.0159C12.1285 2.6261 12.2366 2.67086 12.3162 2.75053C12.3959 2.8302 12.4407 2.93825 12.4407 3.05092V9.84813C12.4407 9.9608 12.3959 10.0689 12.3162 10.1485C12.2366 10.2282 12.1285 10.273 12.0159 10.273H8.8577C8.7844 10.273 8.71234 10.2919 8.64855 10.3281C8.58475 10.3642 8.53138 10.4162 8.49363 10.479V10.479Z"
                                stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>65 Comments</span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold leading-tight text-black">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.
                    </p>
                    <button className="flex items-center gap-1 mt-4 text-sm font-medium text-blue-500">
                        Read More
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M12.293 5.293a1 1 0 0 1 1.414 0L16.414 8a1 1 0 0 1 0 1.414l-2.707 2.707a1 1 0 0 1-1.414-1.414L13.586 9H4a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className="overflow-hidden transition duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:scale-105">
                <div className="relative">
                    <img src="../assets/images/nutrition-blogs/food6.png" alt="Blog Image" className="w-full h-[200px] object-cover"/>
                    <div className="absolute px-2 py-1 text-center rounded-md bottom-2 left-2 bg-white/90">
                        <p className="text-sm font-bold text-black">18</p>
                        <p className="text-xs text-gray-500 uppercase">Nov</p>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_63_487)">
                                <path
                                    d="M13.0848 8.76162L8.57218 13.2742C8.45528 13.3912 8.31645 13.4841 8.16364 13.5474C8.01083 13.6108 7.84704 13.6434 7.68162 13.6434C7.5162 13.6434 7.35241 13.6108 7.1996 13.5474C7.04679 13.4841 6.90796 13.3912 6.79106 13.2742L1.38477 7.87421V1.58051H7.67847L13.0848 6.9868C13.3192 7.22264 13.4508 7.54167 13.4508 7.87421C13.4508 8.20675 13.3192 8.52578 13.0848 8.76162V8.76162Z"
                                    stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.53149 4.72748H4.53779" stroke="#B3B3B3" stroke-width="1.13287" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_63_487">
                                    <rect width="15.1049" height="15.1049" fill="white" transform="translate(0.125977 0.321838)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Beans</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M7.88784 7.24474C9.27821 7.24474 10.4053 6.11763 10.4053 4.72726C10.4053 3.33689 9.27821 2.20978 7.88784 2.20978C6.49748 2.20978 5.37036 3.33689 5.37036 4.72726C5.37036 6.11763 6.49748 7.24474 7.88784 7.24474Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                            <path
                                d="M9.77608 9.13306H5.99986C4.26154 9.13306 2.7051 10.738 3.84867 12.0464C4.62657 12.9363 5.913 13.5387 7.88797 13.5387C9.86294 13.5387 11.1487 12.9363 11.9266 12.0464C13.0708 10.7373 11.5138 9.13306 9.77608 9.13306Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                        </svg>
                        <span>By Admin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path
                                d="M8.49363 10.479L7.70685 11.79C7.66911 11.8529 7.61572 11.905 7.55188 11.9411C7.48804 11.9773 7.41593 11.9963 7.34256 11.9963C7.2692 11.9963 7.19709 11.9773 7.13325 11.9411C7.06941 11.905 7.01602 11.8529 6.97828 11.79L6.19235 10.479C6.15456 10.4161 6.10112 10.3641 6.03725 10.3279C5.97337 10.2918 5.90123 10.2729 5.82785 10.273H2.6697C2.55703 10.273 2.44897 10.2282 2.3693 10.1485C2.28963 10.0689 2.24487 9.9608 2.24487 9.84813V3.05092C2.24487 2.93825 2.28963 2.8302 2.3693 2.75053C2.44897 2.67086 2.55703 2.6261 2.6697 2.6261H12.0159C12.1285 2.6261 12.2366 2.67086 12.3162 2.75053C12.3959 2.8302 12.4407 2.93825 12.4407 3.05092V9.84813C12.4407 9.9608 12.3959 10.0689 12.3162 10.1485C12.2366 10.2282 12.1285 10.273 12.0159 10.273H8.8577C8.7844 10.273 8.71234 10.2919 8.64855 10.3281C8.58475 10.3642 8.53138 10.4162 8.49363 10.479V10.479Z"
                                stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>65 Comments</span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold leading-tight text-black">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.
                    </p>
                    <button className="flex items-center gap-1 mt-4 text-sm font-medium text-blue-500">
                        Read More
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M12.293 5.293a1 1 0 0 1 1.414 0L16.414 8a1 1 0 0 1 0 1.414l-2.707 2.707a1 1 0 0 1-1.414-1.414L13.586 9H4a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className="overflow-hidden transition duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:scale-105">
                <div className="relative">
                    <img src="../assets/images/nutrition-blogs/food7.png" alt="Blog Image" className="w-full h-[200px] object-cover"/>
                    <div className="absolute px-2 py-1 text-center rounded-md bottom-2 left-2 bg-white/90">
                        <p className="text-sm font-bold text-black">18</p>
                        <p className="text-xs text-gray-500 uppercase">Nov</p>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_63_487)">
                                <path
                                    d="M13.0848 8.76162L8.57218 13.2742C8.45528 13.3912 8.31645 13.4841 8.16364 13.5474C8.01083 13.6108 7.84704 13.6434 7.68162 13.6434C7.5162 13.6434 7.35241 13.6108 7.1996 13.5474C7.04679 13.4841 6.90796 13.3912 6.79106 13.2742L1.38477 7.87421V1.58051H7.67847L13.0848 6.9868C13.3192 7.22264 13.4508 7.54167 13.4508 7.87421C13.4508 8.20675 13.3192 8.52578 13.0848 8.76162V8.76162Z"
                                    stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.53149 4.72748H4.53779" stroke="#B3B3B3" stroke-width="1.13287" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_63_487">
                                    <rect width="15.1049" height="15.1049" fill="white" transform="translate(0.125977 0.321838)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Beans</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M7.88784 7.24474C9.27821 7.24474 10.4053 6.11763 10.4053 4.72726C10.4053 3.33689 9.27821 2.20978 7.88784 2.20978C6.49748 2.20978 5.37036 3.33689 5.37036 4.72726C5.37036 6.11763 6.49748 7.24474 7.88784 7.24474Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                            <path
                                d="M9.77608 9.13306H5.99986C4.26154 9.13306 2.7051 10.738 3.84867 12.0464C4.62657 12.9363 5.913 13.5387 7.88797 13.5387C9.86294 13.5387 11.1487 12.9363 11.9266 12.0464C13.0708 10.7373 11.5138 9.13306 9.77608 9.13306Z"
                                stroke="#B3B3B3" stroke-width="0.906294" />
                        </svg>
                        <span>By Admin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path
                                d="M8.49363 10.479L7.70685 11.79C7.66911 11.8529 7.61572 11.905 7.55188 11.9411C7.48804 11.9773 7.41593 11.9963 7.34256 11.9963C7.2692 11.9963 7.19709 11.9773 7.13325 11.9411C7.06941 11.905 7.01602 11.8529 6.97828 11.79L6.19235 10.479C6.15456 10.4161 6.10112 10.3641 6.03725 10.3279C5.97337 10.2918 5.90123 10.2729 5.82785 10.273H2.6697C2.55703 10.273 2.44897 10.2282 2.3693 10.1485C2.28963 10.0689 2.24487 9.9608 2.24487 9.84813V3.05092C2.24487 2.93825 2.28963 2.8302 2.3693 2.75053C2.44897 2.67086 2.55703 2.6261 2.6697 2.6261H12.0159C12.1285 2.6261 12.2366 2.67086 12.3162 2.75053C12.3959 2.8302 12.4407 2.93825 12.4407 3.05092V9.84813C12.4407 9.9608 12.3959 10.0689 12.3162 10.1485C12.2366 10.2282 12.1285 10.273 12.0159 10.273H8.8577C8.7844 10.273 8.71234 10.2919 8.64855 10.3281C8.58475 10.3642 8.53138 10.4162 8.49363 10.479V10.479Z"
                                stroke="#B3B3B3" stroke-width="0.906294" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>65 Comments</span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold leading-tight text-black">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.
                    </p>
                    <button className="flex items-center gap-1 mt-4 text-sm font-medium text-blue-500">
                        Read More
                        <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M12.293 5.293a1 1 0 0 1 1.414 0L16.414 8a1 1 0 0 1 0 1.414l-2.707 2.707a1 1 0 0 1-1.414-1.414L13.586 9H4a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default BlogPage