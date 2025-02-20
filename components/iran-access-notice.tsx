"use client";

import {
  ResponsiveDialog,
  ResponsiveDialogBody,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/responsive-dialog";
import { detectIranianUser } from "@/lib/utils";
import { Button } from "./ui/button";

export default function IranAccessNotice() {
  const isFromIran = detectIranianUser();

  if (!isFromIran) return null;

  return (
    <ResponsiveDialog defaultOpen>
      <ResponsiveDialogTrigger className="hidden"></ResponsiveDialogTrigger>
      <ResponsiveDialogContent
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>
            Welcome to MovieNest -{" "}
            <span className="font-semibold text-primary">Important Notice</span>
          </ResponsiveDialogTitle>
          <ResponsiveDialogDescription></ResponsiveDialogDescription>
        </ResponsiveDialogHeader>
        <ResponsiveDialogBody className="space-y-4 text-muted-foreground">
          <span className="block">
            We noticed you are accessing MovieNest from Iran. Due to certain
            restrictions, some movie images and posters might not load properly
            in your region.
          </span>
          <span className="block">
            To enjoy the full experience of MovieNest with all visual content,
            we recommend using a VPN service to access our platform.
          </span>
          <span className="block">
            Thank you for your understanding. We want to ensure you have the
            best possible experience while using our service.
          </span>
        </ResponsiveDialogBody>
        <ResponsiveDialogFooter>
          <ResponsiveDialogClose asChild>
            <Button>Close</Button>
          </ResponsiveDialogClose>
        </ResponsiveDialogFooter>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
