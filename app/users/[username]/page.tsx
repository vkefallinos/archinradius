import React from "react";
import Image from "next/image";

const UserProfile: React.FC = () => {
  return (
    <div className="flex flex-col h-100 max-h-screen">
      {/* Header with the user's name and profile picture */}
      <div className="relative text-center p-4 bg-black text-white">
        <h1 className="text-xl">Danai Kap</h1>
        <Image
          src="/path-to-profile-picture.jpg" // Replace with the actual path to the profile picture
          alt="Profile"
          className="w-32 h-32 rounded-full absolute left-4 top-4 object-cover"
        />
        <p className="italic mt-2">&quot;getting to know our cities...&quot;</p>
      </div>
      <div className="flex flex-row h-full flex-grow">
        {/* Profile Stats */}
        <div className="flex flex-col justify-around text-center bg-gray-100 p-4">
          <div>
            <span className="font-bold text-lg">32</span>
            <p>spots visited</p>
          </div>
          <div>
            <span className="font-bold text-lg">13</span>
            <p>spots added</p>
          </div>
          <div>
            <span className="font-bold text-lg">3</span>
            <p>folders</p>
          </div>
        </div>
        <div className="flex flex-col flex-grow bg-white overflow-y-scroll">
          <div className="flex flex-col flex-grow h-full">
            {/* Recent Activity */}
            <div className="p-4">
              <div className="mb-4">
                <p>Last been in Liebeskind Museum</p>
                <p className="text-xs text-gray-600">3/12/2015</p>
              </div>
              <div>
                <p>Saved a project in &quot;INTERIOR&quot; folder</p>
                <p className="text-xs text-gray-600">18/2/2016</p>
              </div>
            </div>
            <div className="bg-white bottom-0 p-4 flex justify-between items-center">
              <div className="text-gray-600">72 Pins</div>
              <div className="grid grid-cols-3 gap-2">
                {/* Placeholder for pins */}
                <div className="w-20 h-20 bg-gray-200"></div>
                <div className="w-20 h-20 bg-gray-200"></div>
                <div className="w-20 h-20 bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow h-full ">
            {/* Recent Activity */}
            <div className="p-4">
              <div className="mb-4">
                <p>Last been in Liebeskind Museum</p>
                <p className="text-xs text-gray-600">3/12/2015</p>
              </div>
              <div>
                <p>Saved a project in &quot;INTERIOR&quot; folder</p>
                <p className="text-xs text-gray-600">18/2/2016</p>
              </div>
            </div>
            <div className="bg-white bottom-0 p-4 flex justify-between items-center">
              <div className="text-gray-600">72 Pins</div>
              <div className="grid grid-cols-3 gap-2">
                {/* Placeholder for pins */}
                <div className="w-20 h-20 bg-gray-200"></div>
                <div className="w-20 h-20 bg-gray-200"></div>
                <div className="w-20 h-20 bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow h-full">
            {/* Recent Activity */}
            <div className="p-4">
              <div className="mb-4">
                <p>Last been in Liebeskind Museum</p>
                <p className="text-xs text-gray-600">3/12/2015</p>
              </div>
              <div>
                <p>Saved a project in &quot;INTERIOR&quot; folder</p>
                <p className="text-xs text-gray-600">18/2/2016</p>
              </div>
            </div>
            <div className="bg-white bottom-0 p-4 flex justify-between items-center">
              <div className="text-gray-600">72 Pins</div>
              <div className="grid grid-cols-3 gap-2">
                {/* Placeholder for pins */}
                <div className="w-20 h-20 bg-gray-200"></div>
                <div className="w-20 h-20 bg-gray-200"></div>
                <div className="w-20 h-20 bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for Bottom Navigation */}
      <div className="mt-auto">
        {/* Bottom navigation component goes here */}
      </div>
    </div>
  );
};

export default UserProfile;
