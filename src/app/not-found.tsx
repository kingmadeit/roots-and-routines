import Link from 'next/link';
import React from 'react';
import { Squirrel } from 'lucide-react';
// This is the NotFound component which is a simple page that notifies the user
// that the page they're trying to reach does not exist.
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-accent text-center p-4">

      {/* SVG Icon for Not Found */}
      <Squirrel strokeWidth={1} className="w-40 h-40 text-accent" />
      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mt-4 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary animate-pulse">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-2xl md:text-3xl text-[#581b04] font-semibold mb-6">
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
