import {ChevronUpIcon} from "lucide-react";

import {Button} from "@/components/ui/button";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu";

export function ScrollButton({
  triggerScrollToTop: trigger
}: {
  triggerScrollToTop: () => void;
}) {
  return (
    <div>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#">
              <Button
                variant="secondary"
                size="icon"
                className="size-12 fixed bottom-7 right-5 md:right-10  md:mr-5 md:mb-5 cursor-pointer"
                onClick={(triggerScrollToTop) => trigger()}
              >
                <ChevronUpIcon />
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
