"use client";
import React, { useState } from "react";

const UploadProjectForm: React.FC = () => {
  // State for form fields
  const [photo, setPhoto] = useState<File | null>(null);
  const [architect, setArchitect] = useState("");
  const [address, setAddress] = useState("");
  const [path, setPath] = useState("");
  const [district, setDistrict] = useState("");

  // Handlers for the form fields
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setPhoto(event.target.files[0]);
    }
  };
  const [projectType, setProjectType] = useState("cultural"); // default to 'cultural'

  // Function to handle project type change
  const handleProjectTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setProjectType(event.target.value);
  };
  // Form submit handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the form submission, sending the data to a server or API endpoint
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 bg-black text-white text-center text-xl">
        upload project
      </div>

      {/* Photo upload field */}
      <label className="border-2 border-dashed border-yellow-500 m-4 p-4 text-center">
        {photo ? photo.name : "Click to upload a photo"}
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="hidden"
        />
      </label>

      {/* Text input fields */}
      <input
        type="text"
        placeholder="architect"
        value={architect}
        onChange={(e) => setArchitect(e.target.value)}
        className="m-4 p-2 border-b-2 border-black"
      />
      <input
        type="text"
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="m-4 p-2 border-b-2 border-black"
      />

      <label className="block mb-4">
        <span className="text-gray-700">timeline</span>
        <input
          type="range"
          className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
        />
      </label>

      {/* Radio buttons for project type */}
      <fieldset className="mb-4">
        <legend className="text-gray-700 mb-2">type</legend>
        {[
          "cultural",
          "public",
          "housing",
          "monument",
          "natural building",
          "traditional",
          "industrial",
        ].map((type) => (
          <label key={type} className="block">
            <input
              type="radio"
              name="projectType"
              value={type}
              checked={projectType === type}
              onChange={handleProjectTypeChange}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </fieldset>

      {/* Timeline and map icon placeholders */}
      <div className="m-4 flex justify-between items-center">
        {/* Replace these divs with actual timeline and map UI */}
        <div className="w-1/3 h-20 bg-gray-200"></div>
        <div className="w-1/3 h-20 bg-gray-200"></div>
        <div className="w-1/3 h-20 bg-gray-200"></div>
      </div>

      {/* Footer */}
      <div className="flex justify-around p-4 bg-white mt-auto">
        <button className="border-2 border-black px-4 py-1">timeline</button>
        {/* ... other footer buttons */}
      </div>
    </form>
  );
};

export default UploadProjectForm;
