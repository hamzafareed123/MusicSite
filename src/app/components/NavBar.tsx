"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";
import { cn } from "../utils/cn";
import { Spotlight } from "./ui/Spotlight";


function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mt-6"> 
      <div
        className={cn(
          "relative w-full flex items-center justify-center z-50 ",
          className
        )}

      >
      

        
        <Menu setActive={setActive}>
          <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>

          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">All Courses</HoveredLink>
              <HoveredLink href="/web-dev">Basic Music Theory</HoveredLink>
              <HoveredLink href="/web-dev">Advanced Composition</HoveredLink>
              <HoveredLink href="/web-dev">Song Writing</HoveredLink>
              <HoveredLink href="/web-dev">Music Production</HoveredLink>
            </div>
          </MenuItem>

          <Link href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
