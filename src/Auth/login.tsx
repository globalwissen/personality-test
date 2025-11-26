/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import axios from "../API/axiosconfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();
  console.log(nav);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/student/login", form);
      // store token or student id as needed
      localStorage.setItem("studentId", res.data.student._id);
      toast.success("Login successful");
      nav("/start");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-3">
        <input
          placeholder="Email"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="w-full bg-[#003058] text-white py-2">Login</button>
      </form>
    </div>
  );
}
