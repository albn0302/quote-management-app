import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <nav className="sticky top-0 w-full py-4 backdrop-blur-md bg-slate-200/75 border-b border-slate-300 shadow-sm">
        <div className="flex flex-row ml-3">
          <h1 className="absolute text-3xl font-semibold text-sky-500 shadow-sm">
            Q.M.A
          </h1>
        </div>
        <ul className="flex flex-row justify-end gap-x-3">
          <li>
            <Link className="mr-4" href={"/about"}>
              <button className="px-4 py-2 bg-sky-500 text-white rounded-3xl transition ease-out hover:bg-sky-600 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-200">
                About
              </button>
            </Link>
          </li>
          <li>
            <Link className="mr-4" href={"/login"}>
              <button className="px-4 py-2 bg-sky-500 text-white rounded-3xl transition ease-out hover:bg-sky-600 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-200">
                Log In
              </button>
            </Link>
          </li>
          <li>
            <Link className="mr-4" href={"/signup"}>
              <button className="px-4 py-2 bg-sky-500 text-white rounded-3xl transition ease-out hover:bg-sky-600 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-200">
                Sign Up
              </button>
            </Link>
          </li>
          <div className="absolute mr-2 h-9 w-0.5 bg-slate-300 rounded-3xl"></div>
        </ul>
      </nav>
      <div className="flex justify-center items-center mt-36">
        <h1 className="text-3xl">This app was made for a school project.</h1>
      </div>
    </>
  );
}
