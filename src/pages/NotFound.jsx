import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="h-screen">
      <div className="p-6 bg-neutral-100 md:w-[50vw]">
        <h2 className="font-bold">Page not found</h2>
        <p className="font-medium my-5 -tracking-tighter">
          Sorry we couldn't find what you were looking for.
        </p>
        <Link to={"/"} className="text-slate-500 border-b-2 py-1">
          Visit our homepage
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
