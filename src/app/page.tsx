"use client";

import { Post } from "@/components/system/postingan/post";
import { Button } from "@/components/ui/button";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function Home() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div>
      <Post />
      <Button onClick={() => toggle()}>Change</Button>
    </div>
  );
}
