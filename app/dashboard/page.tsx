import { getSession } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import connectDB from "@/lib/db";
import { Board } from "@/lib/models";
async function getBoard(userId: string) {
  "use cache";

  await connectDB();

  const boardDoc = await Board.findOne({
    userId: userId,
    name: "Job Hunt",
  }).populate({
    path: "columns",
    populate: {
      path: "jobApplications",
    },
  });

  if (!boardDoc) return null;

  const board = JSON.parse(JSON.stringify(boardDoc));

  return board;
}
async function DashboardPage() {
  const session = await getSession();
  if (!session?.user) redirect("/sign-in");
  
  
}
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">Job Hunt</h1>
          <p className="text-gray-600">Track your job applications</p>
        </div>
      </div>
    </div>
  );
}