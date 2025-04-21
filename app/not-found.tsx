'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 px-4">
      <h1 className="text-5xl md:text-6xl font-serif font-light tracking-wide">
        Oops...
      </h1>
      <p className="text-gray-600 text-base md:text-lg max-w-md font-light">
        The page you are looking for cannot be found. It may have been removed,
        renamed or did not exist in the first place.
      </p>
      <Link
        href="/"
        className="inline-block bg-gray-900 hover:bg-black text-white text-sm md:text-base tracking-widest px-8 py-4 rounded-none transition-all duration-300 group"
      >
        <span className="group-hover:tracking-[0.25em] transition-all duration-300">
          RETURN HOME
        </span>
      </Link>
    </div>
  );
}
