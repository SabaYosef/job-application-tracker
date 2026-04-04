"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  const result = await signIn.email({ email, password });
  if (!result.error) router.push("/dashboard");
}
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          
          <CardTitle className="text-2xl font-bold text-black">Sign In</CardTitle>
          <CardDescription className="text-gray-600">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
              <form className="space-y-4">
                {error && (
  <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
    {error}
  </div>
)}
  <div className="p-6 space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    </div>
  </div>
</form>
      </Card>
    </div>
  );
}