"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function Home() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div>
      <div>{theme}</div>
      <button onClick={() => toggle()}>change theme</button>
    </div>
  );
}
