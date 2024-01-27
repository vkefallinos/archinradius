"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white p-4">
      <div className="text-2xl">A</div>
      <div className="text-2xl">database</div>
      <div className="p-2 rounded-full bg-yellow-400"></div>
    </div>
  );
};

const FilterBar: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState("cultural"); // Default selection for demonstration

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };
  return (
    <div className="flex justify-between items-center bg-white p-2">
      <button className="border-2 border-gray-300 p-1">MAP</button>
      <button className="border-2 border-gray-300 p-1">LIST</button>
      <div className="flex items-center">
        <button
          className="border-2 border-gray-300 p-1 px-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          FILTERS
        </button>
        <button className="ml-2 text-xs">X</button>
      </div>
      {showFilters && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="fixed top-0 left-0 w-full h-full"></div>
          <div className="fixed top-0 left-0 w-1/2 h-full bg-white p-4">
            <h2 className="text-xl font-bold mb-2">FILTERS</h2>
            <button onClick={() => setShowFilters(false)}>CLOSE</button>
            {/* Search Input */}
            <div className="p-4">
              <input
                type="text"
                placeholder="search"
                className="w-full p-2 border-b-2 border-black"
              />
            </div>

            {/* Filter Options */}
            <div className="flex flex-wrap items-center justify-center p-4">
              {/* Placeholder for path, district, and building filters */}
              <div className="p-2 m-2 w-20 h-20 bg-gray-300"></div>
              <div className="p-2 m-2 w-20 h-20 bg-gray-300"></div>
              <div className="p-2 m-2 w-20 h-20 bg-gray-300"></div>
            </div>

            {/* Timeline Slider */}
            <div className="p-4">
              <input
                type="range"
                className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
              />
            </div>

            {/* Type Radio Buttons */}
            <div className="p-4">
              {["cultural", "public", "housing"].map((type) => (
                <label key={type} className="inline-flex items-center p-2">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={selectedType === type}
                    onChange={handleTypeChange}
                    className="form-radio h-5 w-5 text-gray-600"
                  />
                  <span className="ml-2 text-gray-700">{type}</span>
                </label>
              ))}
            </div>

            {/* Save Button */}
            <div className="p-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                SAVE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface ListItemProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="border-b border-gray-300 p-4 flex">
      <Image
        height="200"
        width="200"
        className="h-20 w-20 object-cover mr-4"
        src={imageSrc}
        alt={title}
      />
      <div>
        <div className="font-bold">{title}</div>
        <div className="text-xs mb-2">{subtitle}</div>
        <div className="text-gray-500 text-xs">
          vmc,xmvlmc,m,vm.c,mv,cmxv,...
        </div>
        <button className="text-blue-500 text-xs">MORE {">>"}</button>
      </div>
    </div>
  );
};

const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-2 flex justify-between">
      <div className="flex">
        <div className="p-2">+</div>
        <div className="p-2">archinr</div>
      </div>
      <div className="flex">
        <div className="p-2">about</div>
        <div className="p-2">adjust</div>
        <div className="p-2">profile</div>
      </div>
    </div>
  );
};

const DatabaseApp: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <FilterBar />
      <div className="overflow-y-auto">
        <ListItem
          title="Housing Mets//Athens"
          subtitle="T. Zenetos"
          imageSrc="/path-to-image1.jpg"
        />
        <ListItem
          title="Xenia Hotel//Kalambaka"
          subtitle="A. Koutsiiiiidis"
          imageSrc="/path-to-image2.jpg"
        />
        <ListItem
          title="Xenia Hotel//Kalambaka"
          subtitle="A. Koutsiiiiidis"
          imageSrc="/path-to-image2.jpg"
        />
        <ListItem
          title="Xenia Hotel//Kalambaka"
          subtitle="A. Koutsiiiiidis"
          imageSrc="/path-to-image2.jpg"
        />
        <ListItem
          title="Xenia Hotel//Kalambaka"
          subtitle="A. Koutsiiiiidis"
          imageSrc="/path-to-image2.jpg"
        />
        <ListItem
          title="Xenia Hotel//Kalambaka"
          subtitle="A. Koutsiiiiidis"
          imageSrc="/path-to-image2.jpg"
        />
        <ListItem
          title="Xenia Hotel//Kalambaka"
          subtitle="A. Koutsiiiiidis"
          imageSrc="/path-to-image2.jpg"
        />
        {/* Repeat ListItem for each entry */}
      </div>
      <BottomNav />
    </div>
  );
};

export default DatabaseApp;
