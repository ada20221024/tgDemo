"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "@/components/ui/sheet";
import { ModalContent } from "./ModalContent";

export function MyDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader autoFocus={false}>
          <ModalContent />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
