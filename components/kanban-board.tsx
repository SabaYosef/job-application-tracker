"use server";

import connectDB from "@/lib/db";
import { JobApplication, Column } from "@/lib/models";
import { revalidatePath } from "next/cache";

export async function createJobApplication(data: any) {
  
}