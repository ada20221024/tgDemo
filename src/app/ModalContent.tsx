import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ModalContent = () => {
  return (
    <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
      <Input className="border border-gray-400 my-8" placeholder="Input" />
      <div className=" w-full flex justify-between">
        <Button className="mt-8">Submit</Button>
        <Button className="mt-8">Cancel</Button>
      </div>
    </div>
  );
};
