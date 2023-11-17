"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import navbar_logo from "@/app/navbar_logo.png";
import { Switch } from "@/components/ui/switch";

function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex gap-2">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      {theme === "dark" ? <Moon /> : <Sun />}
    </div>
  );
}

export default function NavBar() {
  return (
    <div className="relative flex justify-center items-center mx-auto text-center text-6xl font-bold bg-primary-foreground shadow p-2">
      <Link href="/">
        <Image
          src={navbar_logo}
          alt="Pokedex Logo"
          width="250"
          height="250"
          loading="eager"
        />
      </Link>
      <div className="absolute right-3">
        <ModeToggle />
      </div>
    </div>
  );
}
