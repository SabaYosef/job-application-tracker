"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  return (
    <DropdownMenuItem
      onClick={async () => {
        const result = await signOut();
        if (result.data) {
          router.push("/sign-in");
        } else {
          // --- THIS IS THE NEW PART FOR COMMIT 5 ---
          alert("Error signing out");
          // -----------------------------------------
        }
      }}
    >
      Log Out
    </DropdownMenuItem>
  );
}