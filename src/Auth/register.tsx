/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import axios from "../API/axiosconfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    university: "",
    department: "",
    category: "",
    personalityTypes: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // basic validation
      if (!form.fullName || !form.email || !form.password) {
        toast.error("Please fill required fields");
        setLoading(false);
        return;
      }

      // Optionally, you could direct user to test flow instead of saving personalities now.
      await axios.post("/student/register", {
        ...form,
        // backend expects personalityTypes string[]; allow empty
        personalityTypes: form.personalityTypes,
      });

      toast.success("Registered — please login");
      nav("/login");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          placeholder="Full name"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
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
        <input
          placeholder="University"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, university: e.target.value })}
        />
        <input
          placeholder="Department"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, department: e.target.value })}
        />
        <button
          className="w-full bg-[#003058] text-white py-2"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
