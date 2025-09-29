import {ChevronUpIcon} from "lucide-react";

import {Button} from "@/components/ui/button";

export function ScrollButton({
  triggerScrollToTop: trigger
}: {
  triggerScrollToTop: () => void;
}) {
  return (
    <div >
      <Button
        variant="secondary"
        size="icon"
        className="size-12 fixed bottom-7 right-10 mr-5 mb-5 cursor-pointer"
        onClick={(triggerScrollToTop) => trigger()}
      >
        <ChevronUpIcon />
      </Button>
    </div>
  );
}
