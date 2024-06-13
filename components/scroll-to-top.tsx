"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(window.scrollY > 500);

  const handleScroll = () => {
    setVisible(window.scrollY > 500);
  };

  const handleClick = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Button
      data-visible={visible}
      className="fixed bottom-12 right-12 hidden rounded-full opacity-0 transition-[visibility] duration-500 data-[visible=true]:flex data-[visible=true]:opacity-100"
      size="icon"
      onClick={handleClick}
    >
      <ArrowUp />
    </Button>
  );
}
