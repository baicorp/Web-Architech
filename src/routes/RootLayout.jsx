import React from "react";
import { Logo, Button } from "../components";
import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header className="p-6">
        <nav className="flex flex-wrap relative justify-between items-center ">
          <NavLink to={"/"}>
            <Logo dark />
          </NavLink>
          <div className="block">
            <ul className="flex justify-between font-medium space-x-6">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"work"}>Work</NavLink>
              </li>
              <li>
                <NavLink to={"about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"news"}>News</NavLink>
              </li>
              <li>
                <NavLink to={"contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="block">
            <Button dark />
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <section className="bg-black">
          <div className="px-[30px] py-[50px] xl:py-24 mx-auto max-w-[1140px]">
            <div className="flex flex-wrap justify-between">
              <div className="flex justify-center w-full mb-5 md:justify-start lg:mb-12 xl:w-auto">
                <Logo />
              </div>
              <div>
                <p className="text-white text-center font-bold mb-3 leading-6 tracking-[0.1px]">
                  First Column
                </p>
                <ul className="text-white space-y-3 text-center text-sm ">
                  <li>First Page</li>
                  <li>Second Page</li>
                  <li>Third</li>
                  <li>Fourth</li>
                </ul>
              </div>
              <div>
                <p className="text-white text-center font-bold mb-3 leading-6 tracking-[0.1px]">
                  Second
                </p>
                <ul className="text-white space-y-3 text-center text-sm ">
                  <li>First Page</li>
                  <li>Second Page</li>
                  <li>Third</li>
                </ul>
              </div>
              <div>
                <p className="text-white text-center font-bold mb-3 leading-6 tracking-[0.1px]">
                  Third
                </p>
                <ul className="text-white space-y-3 text-center text-sm ">
                  <li>First Page</li>
                  <li>Second Page</li>
                  <li>Third</li>
                </ul>
              </div>
              <div className="flex justify-center w-full md:block md:w-auto">
                <div className="justify-self-center mt-6 flex flex-col space-y-6 md:max-w-[218px] md:mt-0 md:relative md:-top-7 lg:top-0 xl:max-w-[360px]">
                  <p className="text-white text-center font-bold leading-6 tracking-[0.1px] md:text-start">
                    Subscribe
                  </p>
                  <div className="w-full rounded-full px-6 py-3 bg-neutral-800 flex justify-between items-center">
                    <input
                      className="bg-transparent text-white outline-none"
                      type="text"
                      placeholder="Enter email"
                    />
                    <svg
                      className="inline"
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.3497 11.5L6.9543 9.21477L5.58509 10.3628L5.02898 7.91888L10.9587 2.72567L3.84882 6.80974L0.5 4.39355L13.5 0.5L10.3497 11.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-neutral-500 text-sm text-center md:text-start">
                    Join our newsletter to stay up to date on features and
                    releases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
