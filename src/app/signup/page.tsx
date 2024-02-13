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
      <div className="flex justify-center mt-24">
        <form
          className="flex flex-col gap-3 bg-slate-200 py-6 px-10 rounded-3xl shadow-sm"
          action=""
        >
          <header className="text-center text-3xl">
            <h1>Signup</h1>
          </header>
          <div className="bg-red-500/75 px-3 py-4 rounded-3xl border border-red-600">
            <h1 className="text-white">Signup does not currently work.</h1>
          </div>
          <input
            className="mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        transition ease-out focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="email"
            name="Email"
            placeholder="Email"
          />
          <input
            className="mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        transition ease-out focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="name"
            name="Name"
            placeholder="Username"
          />
          <input
            className="mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        transition ease-out focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="password"
            name="Password"
            placeholder="Password"
          />
          <button className="px-4 py-2 bg-sky-500 text-white rounded-3xl transition ease-out hover:bg-sky-600 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-200">
            Sign Up
          </button>
          <p className="text-slate-500">
            Already have an account?{" "}
            <Link
              className="text-sky-500 transition ease-out hover:underline active:text-sky-600 focus:text-sky-600"
              href={"/login"}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
