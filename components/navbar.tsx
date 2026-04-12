"use client";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex items-center gap-4">
          {/* Auth buttons will go here */}
        </div>
      </div>
    </nav>
  );
}