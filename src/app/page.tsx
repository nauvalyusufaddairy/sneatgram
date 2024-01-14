"use client";

import { Post } from "@/components/system/postingan/post";
import { Posts } from "@/components/system/postingan/posts";
import { Button } from "@/components/ui/button";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function Home() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className="dark:bg-slate-950">
      <Posts />
      <Button onClick={() => toggle()}>Change</Button>
    </div>
  );
}
