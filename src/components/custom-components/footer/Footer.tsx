import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-10 py-5 space-y-3 border-t-4 max-w-5xl mx-auto border-[#1697BA]" 
      style={{
            backgroundImage: `url("https://mowr.gov.bd/themes/responsive_npf/images/footer_top_bg.png")`,
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
          }}>
      <div className="flex justify-center items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex ">
            <NavigationMenuItem className="border-r border-b hover:text-white border-[#1697BA]">
              <Link to="/docs">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  'ACC' Hotline '106'
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="border-r border-b   border-[#1697BA] hover:text-white">
              <Link to="/docs">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Site map
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-white border-b border-[#1697BA]">
              <Link to="/docs">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Privacy Policy
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="">
          Planning and Implementation: Cabinet Division, a2i, BCC, DOICT, BASIS
        </p>
        <p className="">Technical Support:</p>
        <div className="my-3 border ">
          <img
            src="https://mowr.gov.bd/themes/responsive_npf/img/np-logo-set.png"
            alt=""
            className=""
          />
        </div>
        <p className="text-sm text-gray-400">Site was last updated: 2024-08-17 14:19:57</p>
      </div>
    </div>
  );
};

export default Footer;
