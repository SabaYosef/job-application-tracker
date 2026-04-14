"use client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
    const router = useRouter();
  return (
    <DropdownMenuItem>
      Log Out
    </DropdownMenuItem>
  );
}