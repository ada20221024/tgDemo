import { Sheet } from "react-modal-sheet";
import { useState } from "react";
import { ModalContent } from "./ModalContent";

export function ModalSheet() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open sheet</button>

      <Sheet
        isOpen={isOpen}
        disableScrollLocking
        onClose={() => setOpen(false)}
        detent="content-height"
      >
        <Sheet.Container>
          <ModalContent />
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
