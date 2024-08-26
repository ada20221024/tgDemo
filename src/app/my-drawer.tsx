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
import { Drawer } from "vaul";

export function MyDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
            <Input
              className="border border-gray-400 my-8"
              placeholder="Input"
            />
            <div className=" w-full flex justify-between">
              <Button className="mt-8">Submit</Button>
              <Button className="mt-8">Cancel</Button>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
