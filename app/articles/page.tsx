import React from "react";
import Image from "next/image";

const NewsItem = ({ title, date, description, imageUrl }: any) => {
  return (
    <div className="mb-4">
      <Image
        height="200"
        width="200"
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-gray-500 text-sm">{date}</p>
      <p className="text-gray-700 mt-2">{description}</p>
      <a
        href="#"
        className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
      >
        {"MORE>>"}
      </a>
    </div>
  );
};

const NewsFeed: React.FC = () => {
  // Dummy data for news items
  const newsData = [
    {
      id: 1,
      title: "Panthron Espresso Bar in Pyrgos Ilias / Nikos Stroumparos",
      date: "12 APR 2016",
      description: "Short description of the article...",
      imageUrl: "/backgrount-home.jpeg", // Replace with actual image path
    },
    {
      id: 1,
      title: "Panthron Espresso Bar in Pyrgos Ilias / Nikos Stroumparos",
      date: "12 APR 2016",
      description: "Short description of the article...",
      imageUrl: "/backgrount-home.jpeg", // Replace with actual image path
    },
    {
      id: 1,
      title: "Panthron Espresso Bar in Pyrgos Ilias / Nikos Stroumparos",
      date: "12 APR 2016",
      description: "Short description of the article...",
      imageUrl: "/backgrount-home.jpeg", // Replace with actual image path
    },
    {
      id: 1,
      title: "Panthron Espresso Bar in Pyrgos Ilias / Nikos Stroumparos",
      date: "12 APR 2016",
      description: "Short description of the article...",
      imageUrl: "/backgrount-home.jpeg", // Replace with actual image path
    },
    // ... more news items
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 bg-black text-white text-center text-xl">
        archi news
      </div>

      {/* News Items */}
      <div className="overflow-auto p-4">
        {newsData.map((item) => (
          <NewsItem
            key={item.id}
            title={item.title}
            date={item.date}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-around p-4 bg-white mt-auto">
        <button className="border-2 border-black px-4 py-1">about</button>
        {/* ... other footer buttons */}
      </div>
    </div>
  );
};

export default NewsFeed;
