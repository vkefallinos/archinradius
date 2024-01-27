"use client";
import React, { useState } from "react";
import Image from "next/image";

const UserFeedbackTab: React.FC = () => {
  // Dummy data for the feedback items
  const feedbackData: any[] = [
    {
      username: "HELEN23",
      comment: "Amazing architecture and detail.",
      likes: 12,
    },
    {
      username: "THEO_K",
      comment: "A must-visit for art lovers!",
      likes: 8,
    },
    // Add more feedback items as needed
  ];

  return (
    <div className="space-y-4 p-4">
      {feedbackData.map((item, index) => (
        <div key={index} className="border-t border-gray-300 pt-2">
          <div className="flex justify-between">
            <div className="font-bold">{item.username}</div>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-1">
                <span className="material-icons text-gray-500">
                  favorite_border
                </span>
                <span>{item.likes}</span>
              </button>
              <button className="material-icons text-gray-500">comment</button>
              <button className="material-icons text-gray-500">
                bookmark_border
              </button>
            </div>
          </div>
          <p>{item.comment}</p>
        </div>
      ))}
    </div>
  );
};
const ProjectDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("generalInfo");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-black text-white text-center p-4">PROJECT 19</div>

      {/* Segmented Control */}
      <div className="flex justify-around bg-gray-200 p-2">
        <button
          className={`flex-1 ${activeTab === "feedback" ? "bg-white" : ""}`}
          onClick={() => setActiveTab("feedback")}
        >
          USERS FEEDBACK
        </button>
        <button
          className={`flex-1 ${activeTab === "generalInfo" ? "bg-white" : ""}`}
          onClick={() => setActiveTab("generalInfo")}
        >
          GENERAL INFO
        </button>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center p-4">
        {/* Placeholder for images, replace with actual images */}
        <Image
          height="200"
          width="200"
          className="w-1/3 p-1"
          src="/path-to-image1.jpg"
          alt="Project Image"
        />
        <Image
          height="200"
          width="200"
          className="w-1/3 p-1"
          src="/path-to-image2.jpg"
          alt="Project Image"
        />
        <Image
          height="200"
          width="200"
          className="w-1/3 p-1"
          src="/path-to-image3.jpg"
          alt="Project Image"
        />
        {/* ... more images */}
      </div>
      {activeTab === "feedback" && (
        <div className="p-4">
          <UserFeedbackTab />
        </div>
      )}
      {/* Project Details */}
      {activeTab === "generalInfo" && (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">ACROPOLIS MUSEUM</h2>
          <h3 className="text-xl mb-2">B. TCHUMI ARCHITECTS</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>LOCATION</strong>
              <p>Dionysiou Areopagitou 15, Athens</p>
            </div>
            <div>
              <strong>TYPE</strong>
              <p>Cultural Public Building</p>
            </div>
            <div>
              <strong>DATE</strong>
              <p>20/06/2009</p>
            </div>
            <div>
              <strong>PART OF PATH</strong>
              <p>Monuments Athens</p>
            </div>
            <div className="col-span-2">
              <strong>ABOUT</strong>
              <p>Built in 2009 to cover the needs of former museum</p>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for Bottom Navigation */}
      <div className="mt-auto">
        {/* Bottom navigation component goes here */}
      </div>
    </div>
  );
};

export default ProjectDetails;
