import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070"
          alt="Cinema background"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/80 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <h1 className="mb-10 text-5xl font-extrabold tracking-wider text-red-600 md:text-6xl">
          NETFLIX
        </h1>

        {/* Error Code */}
        <h2 className="text-8xl font-black md:text-[12rem] leading-none">
          {error?.status || "404"}
        </h2>

        {/* Red Divider */}
        <div className="mx-auto my-6 h-1 w-28 rounded bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)]" />

        {/* Message */}
        <h3 className="mb-3 text-3xl font-bold md:text-4xl">
          Lost your way?
        </h3>

        <p className="mx-auto mb-8 max-w-xl text-gray-300">
          Sorry, we can't find the page you're looking for.
          You'll find plenty of movies and shows waiting for you on the home
          page.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center rounded bg-red-600 px-8 py-3 font-semibold transition-all duration-300 hover:bg-red-700 hover:scale-105"
        >
          Back to Home
        </Link>

        {/* Status */}
        <p className="mt-8 text-sm text-gray-500">
          {error?.status} • {error?.statusText}
        </p>
      </div>
    </div>
  );
};

export default Error;