import React from 'react';
import { TrafficCone } from 'lucide-react';
// This is a simple and elegant "Coming Soon" page for a Next.js application.
// It features a centered layout with an animated heading and a themed SVG icon.
const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-accent text-center p-4">
      
      {/* Animated SVG Icon for "Coming Soon" */}
      <TrafficCone strokeWidth={1} className="w-40 h-40 text-accent animate-spin-slow" />
      
      {/* Main Heading with Animated Text */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mt-4 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary-light animate-pulse">
        Coming Soon......
      </h1>

      {/* Descriptive Text */}
      <p className="max-w-prose text-xl md:text-2xl font-semibold mb-6 text-accent animate-fade-in">
        We&apos;re working hard to bring you something amazing.
      </p>

      {/* Additional Subtext */}
      <p className="max-w-prose text-sm text-muted-foreground">
        Stay tuned!
      </p>

    </div>
  );
};

export default ComingSoon;
