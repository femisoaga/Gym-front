import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div>
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
            <Link to="dashboard">
              <img
                src="./assets/images/logo.png"
                alt=""
                className="hidden md:block lg:block mt-[5px] w-[189.70px] h-[59px]"
              />
            </Link>
          </div>
          <div
            id="header-nav"
            className="max-md:hidden max-md:bg-white max-md:p-5 max-md:fixed max-md:top-0 max-md:shadow-md max-md:left-0 max-md:pt-14 max-md:w-full max-md:z-10"
          >
            <nav
              className="flex font-semibold sm:items-start lg:items-center text-slate-500 dark:text-white/70 lg:gap-1 max-md:border-t max-md:pt-2 max-md:flex max-md:flex-col"
              uk-scrollspy-nav="closest: Link ; scroll: true"
            >
              <Link
                 className="h-auto w-[54px]"
                to="#"
              >
                <img
                  className="h-auto w-[40px] group-hover:animate-bounce"
                  src="./assets/images/workout_icons/calender-checked.png"
                />
              </Link>
              <Link
                className="group lg:py-1.5 py-2.5 px-3 duration-500 transform"
                to="/blog"
              >
                <img
                  className="h-auto w-[40px] group-hover:animate-bounce"
                  src="./assets/images/workout_icons/calender-date.png"
                />
              </Link>
              <Link
                className="group lg:py-1.5 py-2.5 px-3 duration-500 transform"
                to="/fruit"
              >
                <img
                  className="h-auto w-[40px] group-hover:animate-bounce"
                  src="./assets/images/workout_icons/3d-folder.png"
                />
              </Link>
              <Link
                className="group lg:py-1.5 py-2.5 px-3 duration-500 transform"
                to="/nutrition"
              >
                <img
                  className="h-auto w-[40px] group-hover:animate-bounce"
                  src="./assets/images/workout_icons/realistic-upward.png"
                />
              </Link>
              <Link
                className="group lg:py-1.5 py-2.5 px-3 duration-500 transform"
                to="/yoga"
              >
                <img
                  className="h-auto w-[40px] group-hover:animate-bounce"
                  src="./assets/images/workout_icons/3d-movie.png"
                />
              </Link>
              <Link
                className="group lg:py-1.5 py-2.5 px-3 duration-500 transform"
                to="/workout"
              >
                <img
                  className="h-auto w-[40px] group-hover:animate-bounce"
                  src="./assets/images/workout_icons/sports-gym.png"
                />
              </Link>
            </nav>
          </div>
          <div className=" flex flex-row gap-4 mt-[-10px]">
            <Link className="lg:py-1.5 py-2.5 px-3 duration-500" to="#">
              <img
                className="h-auto w-[54px]"
                src="./assets/images/workout_icons/minimal-notification.png"
              />
            </Link>
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
            <>
              {location.pathname === "/dashboard" && (
                <nav>
                  <Link to="/workout">Workout </Link>
                  <Link to="/yoga">Yoga </Link>
                  <Link to="/nutrition">Nutrition</Link>
                  <Link to="/fruit">Fruit page </Link>
                  <Link to="/blog">Blog</Link>
                </nav>
              )}

              {location.pathname.startsWith("/workout") && (
                <nav>
                  <Link to="/workout">Home</Link>
                  <Link to="/workout/reports">Reports</Link>
                  <Link to="/workout/upcoming">Upcoming Workout</Link>
                  <Link to="/workout/achievements">Achievements</Link>
                </nav>
              )}

              {location.pathname.startsWith("/yoga") && (
                <nav>
                  <Link to="/yoga">Home</Link>
                  <Link to="/yoga/blog">Blogs</Link>
                </nav>
              )}

              {location.pathname.startsWith("/blog") && (
                <nav>
                  <Link to="/blog">Home</Link>
                  <Link to="/blog/article">Article</Link>
                </nav>
              )}

              {location.pathname.startsWith("/fruit") && (
                <nav>
                  <Link to="/fruit">Home</Link>
                  <Link to="/fruit/products">Products</Link>
                  <Link to="/fruit/goals">Goals</Link>
                </nav>
              )}

              {location.pathname.startsWith("/nutrition") && (
                <nav>
                  <Link to="/nutrition">Home</Link>
                  <Link to="/nutrition/diet">Diet</Link>
                  <Link to="/nutrition/subscription">Subscription</Link>
                </nav>
              )}
            </>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
