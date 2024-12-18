"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function DialogLayout({ trigger, content }: ConfirmDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">{content}</DialogContent>
    </Dialog>
  );
}
