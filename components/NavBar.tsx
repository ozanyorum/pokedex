"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import navbar_logo from "@/app/navbar_logo.png";

function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}

export default function NavBar() {
  return (
    <div className="relative flex justify-center mx-auto text-center text-6xl font-bold bg-primary-foreground shadow p-2">
      <Link href="/">
        <Image src={navbar_logo} alt="" width={250} height={250} />
      </Link>
      <div className="absolute right-3 bottom">
        <ModeToggle />
      </div>
    </div>
  );
}
