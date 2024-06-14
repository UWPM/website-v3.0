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
      className="fixed bottom-24 right-2 hidden rounded-full duration-500 data-[visible=true]:flex md:right-12"
      size="icon"
      onClick={handleClick}
    >
      <ArrowUp />
    </Button>
  );
}
