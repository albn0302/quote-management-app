import {
  getData,
  saveData,
  updateData,
  deleteData,
} from "@/utilities/handleDatabase";
import Link from "next/link";
import { revalidateTag } from "next/cache";

export default async function Home() {
  const data = await getData();

  const createQuote = async (formData: FormData) => {
    "use server";
    const quote = formData.get("quote") as string;
    const author = formData.get("author") as string;
    const data = await saveData(quote, author);
    console.log(data);
    revalidateTag("quote");
  };

  const updateQuote = async (formData: FormData) => {
    "use server";
    const quote = formData.get("quote") as string;
    const author = formData.get("author") as string;
    const id = formData.get("id") as string;
    const data = await updateData(id, author, quote);
    console.log(data);
    revalidateTag("quote");
  };

  const deleteQuote = async (formData: FormData) => {
    "use server";
    const id = formData.get("id") as string;
    const data = await deleteData(id);
    console.log(data);
    revalidateTag("quote");
  };
  console.log(data);

  return (
    <>
      {/* Navbar */}
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
      <div>
        {/* Forms */}
        <header className="flex justify-center my-5">
          <h2 className="bg-slate-200 py-1 px-4 shadow-sm rounded-3xl">
            Create Quote
          </h2>
        </header>
        <form className="flex justify-center gap-2 my-2" action={createQuote}>
          <input
            className="mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            transition ease-out focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="text"
            name="author"
            placeholder="Author"
          />
          <input
            className="mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            transition ease-out focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="text"
            name="quote"
            placeholder="Quote"
          />
          <button className="px-4 py-2 bg-sky-500 text-white rounded-3xl transition ease-out hover:bg-sky-600 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-200">
            Create
          </button>
        </form>
        <header className="flex justify-center my-5">
          <h2 className="bg-slate-200 py-1 px-4 shadow-sm rounded-3xl">
            Delete Quote
          </h2>
        </header>
        <form className="flex justify-center gap-2 my-2" action={deleteQuote}>
          <input
            className="mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            transition ease-out focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="number"
            name="id"
            placeholder="Id"
          />
          <button className="px-4 py-2 bg-red-500 text-white rounded-3xl transition ease-out hover:bg-red-600 active:bg-red-500 focus:outline-none focus:ring focus:ring-red-200">
            Delete
          </button>
        </form>
        <header className="flex justify-center my-5">
          <h2 className="bg-slate-200 py-1 px-4 shadow-sm rounded-3xl">
            Update Quote
          </h2>
        </header>
        <form className="flex justify-center gap-x-2 my-2" action={updateQuote}>
          <input
            className="mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            transition ease-out focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="number"
            name="id"
            placeholder="Id"
          />
          <input
            className="mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            transition ease-out focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="text"
            name="author"
            placeholder="Author"
          />
          <input
            className="mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            transition ease-out focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="text"
            name="quote"
            placeholder="Quote"
          />
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-3xl transition ease-out hover:bg-yellow-600 active:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-200">
            Update
          </button>
        </form>
      </div>
      {/* Table */}
      <table className="mt-10 mx-2 table-auto w-[99%]">
        <thead>
          <tr className="bg-sky-500">
            <th className="border border-sky-600 text-white">Id</th>
            <th className="border border-sky-600 text-white">Author</th>
            <th className="border border-sky-600 text-white">Quote</th>
          </tr>
        </thead>
        <tbody>
          {data.map((q) => (
            <tr key={q.id} className="bg-slate-100">
              <td className="border border-slate-300">{q.id}</td>
              <td className="border border-slate-300">{q.author}</td>
              <td className="border border-slate-300">{q.quote}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="flex justify-center items-center my-16">
        <h1 className="text-slate-200 text-8xl w-6/12">
          This is the end of this page...
        </h1>
      </section>
      {/* Bottom */}
      <nav className="bottom-0 w-full py-4 backdrop-blur-md bg-slate-200/75 border-t border-slate-300">
        <div>
          <p className="ml-3 text-slate-300">Made by: albn_johanssn</p>
        </div>
      </nav>
    </>
  );
}
