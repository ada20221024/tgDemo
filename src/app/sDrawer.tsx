import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { ModalContent } from "./ModalContent";

export const SDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <ModalContent />
      </DrawerContent>
    </Drawer>
  );
};
