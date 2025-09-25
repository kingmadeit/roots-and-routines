import Link from 'next/link';
import React from 'react';

// This is the NotFound component which is a simple page that notifies the user
// that the page they're trying to reach does not exist.
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-accent text-center p-4">
      
      {/* SVG Icon for Not Found */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-40 h-40 text-primary animate-bounce-slow"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.234 10.312L8.25 10.875m0 0l-4.125 4.125M8.25 10.875L4.125 6.75m4.125 4.125v-1.5a1.125 1.125 0 011.125-1.125h1.5a3.375 3.375 0 013.375 3.375v2.625m-6.75-2.625v2.625a3.375 3.375 0 003.375 3.375h1.5A1.125 1.125 0 0013.5 18.875v1.5a3.375 3.375 0 01-3.375 3.375H8.25m0-1.5h1.5"
        />
      </svg>
      
      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mt-4 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary animate-pulse">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-2xl md:text-3xl font-semibold mb-6">
        Oops! Page not found.
      </p>

      {/* Descriptive Text */}
      <p className="max-w-prose text-sm text-muted-foreground mb-8">
        The page you&apos;re looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      {/* Home Button */}
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-full text-secondary border border-secondary font-semibold transition-all duration-300 transform hover:scale-105"
      >
        Go to Home
      </Link>

    </div>
  );
};

export default NotFound;
