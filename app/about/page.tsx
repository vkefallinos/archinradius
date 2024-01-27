import React from "react";
import Image from "next/image";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow relative">
        {/* Background image */}
        <Image
          height="200"
          width="200"
          src="/background-home.jpeg" // Replace with your actual image path
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dotted circle */}
        <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
          <svg className="w-2/3 h-2/3" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="transparent"
              strokeWidth="2"
              strokeDasharray="4,4"
              className="text-yellow-400 stroke-current"
            />
          </svg>
        </div>

        {/* Text "SHOW ME ARCH IN RADIUS" */}
        <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">
          <span className="text-black font-bold text-xl">SHOW ME</span>
          <span className="text-black font-bold text-xl">ARCH IN</span>
          <span className="text-black font-bold text-xl">RADIUS</span>
        </div>
      </div>

      {/* Bottom scrolling menu */}
      <div className="flex-none h-24 bg-transparent overflow-x-scroll whitespace-nowrap">
        <div className="inline-block p-4">
          <a href="/book-tours" className="text-black mx-2">
            book guided tours in Athens/Cairo
          </a>
        </div>
        <div className="inline-block p-4 bg-black text-yellow-400 mx-2">
          <a href="/about">read about the app</a>
        </div>
        <div className="inline-block p-4">
          <a href="/projects" className="text-black mx-2">
            online building database
          </a>
        </div>
        <div className="inline-block p-4">
          <a href="/news" className="text-black mx-2">
            archi news feed
          </a>
        </div>
        <div className="inline-block p-4">
          <a href="/products" className="text-black mx-2">
            new archi products
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
