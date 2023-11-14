"use client";
import Image from "next/image";
import { useState } from "react";
import Login from "./components/login";
import Homes from "./components/Home/Home";

export default function Home() {
  const [user, setUser] = useState(true);
  return (
    <div>
      {user ? <Login setUser={setUser} /> : <Homes setUser={setUser} />}
    </div>
  );
}
