import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const LoggedInUser = ({ user }: { user: { firstLetterOfName: string } }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {" "}
            <div className="w-[37px] h-[37px] flex items-center justify-center bg-[#D9D9D9]">
              <p className="text-sm text-[#09121F]">
                {user?.firstLetterOfName}
              </p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <div className="w-[121px] p-3 flex flex-col">
              <Link href="/profile" className="py-1 px-[10px] text-[#09121F]">
                My Profile
              </Link>
              <NavigationMenuLink className="py-1 px-[10px] cursor-pointer text-[#E10C0C]">
                Log out
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default LoggedInUser;
