"use client";
import React, { useState } from "react";

const SignUpForm: React.FC = () => {
  // State for form fields
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 bg-black text-white text-center text-xl">sign up</div>
      <div className="flex-grow p-4 flex flex-col">
        {/* Photo upload placeholder */}
        <div className="border-2 border-dashed border-yellow-400 rounded p-4 text-yellow-400 text-center mb-4">
          <button className="p-2 rounded-full bg-yellow-400 text-black">
            +
          </button>
          <p>photo</p>
        </div>
        {/* Form fields */}
        <input
          type="email"
          placeholder="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border-b-2 border-black bg-transparent"
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 border-b-2 border-black bg-transparent"
        />
        <input
          type="password"
          placeholder="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border-b-2 border-black bg-transparent"
        />
        <textarea
          placeholder="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="mb-4 p-2 border-b-2 border-black bg-transparent h-24"
        />
      </div>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-2 flex justify-between">
        <div className="flex">
          <div className="p-2">+</div>
          <div className="p-2">archinr</div>
        </div>
        <div className="flex">
          <div className="p-2">about</div>
          <div className="p-2">adjust</div>
          <div className="p-2">profile</div>
          <div className="p-2">list</div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
