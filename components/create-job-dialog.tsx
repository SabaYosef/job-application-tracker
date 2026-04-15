"use client";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { createJobApplication } from "@/lib/actions/job-applications";

export default function CreateJobApplicationDialog({ columnId, boardId }: { columnId: string, boardId: string }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  try {
    const result = await createJobApplication({
      ...formData,
      columnId,
      boardId,
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0),
    });
    if (!result.error) {
      setFormData(INITIAL_FORM_DATA);
      setOpen(false);
    }
  } catch (err) { console.error(err); }
}
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mb-4 justify-start text-muted-foreground border-dashed border-2 hover:border-solid hover:bg-muted/50">
          <Plus className="mr-2 h-4 w-4" /> Add Job
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Job Application</DialogTitle>
          <DialogDescription>Track a new job application</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
  <div className="space-y-2">
    <Label htmlFor="company">Company *</Label>
    <Input id="company" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
  </div>
  <div className="space-y-2">
    <Label htmlFor="position">Position *</Label>
    <Input id="position" required value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} />
  </div>
</div>
<div className="space-y-2">
  <Label htmlFor="jobUrl">Job URL</Label>
  <Input id="jobUrl" type="url" value={formData.jobUrl} onChange={(e) => setFormData({ ...formData, jobUrl: e.target.value })} />
</div>
<div className="space-y-2">
  <Label htmlFor="description">Description</Label>
  <Textarea id="description" rows={3} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
</div>
      </DialogContent>
    </Dialog>
  );
}