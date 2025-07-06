/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { headerData } from "./Navigation/Menudata";
import Logo from "./Logo";
import MobileHeader from "./Navigation/MobileHeader";
import ThemeToggler from "./ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../ui/navigation-menu";
import { Button } from "../../ui/button";

const Header = () => {
  const { data: session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<{ user: any } | null>(null);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 z-50 w-full`}>
        {/* ------------------------- Web Navbar ------------------------- */}
        <div className="container p-3">
          <nav
            className={`flex items-center py-3 px-4 justify-between ${
              sticky
                ? " rounded-full shadow-sm bg-white dark:bg-dark_black"
                : null
            } `}
          >
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="hidden lg:flex bg-dark_black/5 dark:bg-white/5 rounded-3xl py-2 px-1">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  {headerData.map((item) =>
                    item.children ? (
                      <NavigationMenuItem key={item.label} className="">
                        <NavigationMenuTrigger className="rounded-2xl bg-transparent font-medium  dark:hover:bg-gray-800 hover:bg-white  hover:shadow-header_shadow">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[200px]">
                            {item.children.map((child) => (
                              <NavigationMenuLink key={child.label} asChild>
                                <Link href={child.href}>{child.label}</Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuLink key={item.label} asChild>
                        <Button
                          asChild
                          variant={"ghost"}
                          className="rounded-2xl hover:bg-white"
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </Button>
                      </NavigationMenuLink>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-1 xl:gap-4">
              {/* ---------------------Light/Dark Mode button-------------------- */}
              <ThemeToggler />

              <div className="hidden max-lg:flex">
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M4.5 12h15m-15 5.77h15M4.5 6.23h15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* ------------------------- Mobile sidebar starts ------------------------- */}
        {sidebarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-dark_black shadow-lg transform transition-transform duration-300 max-w-xs ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <ul className="flex flex-col">
              {headerData.map((item, index) => (
                <MobileHeader key={index} item={item} />
              ))}
              <div className="flex flex-col items-center gap-3 px-2 mt-2">
                {user || session?.user ? (
                  <>
                    <button
                      onClick={() => signOut()}
                      className="flex w-full group font-normal items-center gap-2 transition-all duration-200 ease-in-out text-white dark:text-dark_black px-4 py-2 bg-dark_black rounded-md hover:text-dark_black hover:bg-white border border-dark_black"
                    >
                      Sign Out
                      <Icon
                        icon="solar:logout-outline"
                        width="25"
                        height="25"
                      />
                    </button>
                    <div className="group flex gap-2 items-center w-full border border-dark_black dark:border-white px-4 py-2 rounded-md hover:bg-dark_black transition-all duration-200 ease-in-out">
                      <Image
                        src="/images/home/avatar_1.jpg"
                        alt="Image"
                        width={25}
                        height={25}
                        quality={100}
                        className="rounded-full cursor-pointer"
                      />
                      <p className="group-hover:text-white text-dark_black dark:text-white w-full capitalize">
                        {user?.user?.email || session?.user?.name}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      href={"/signin"}
                      className="w-full border border-dark_black dark:border-white text-primary px-4 py-2 rounded-md hover:bg-dark_black dark:hover:bg-white hover:text-white dark:hover:text-dark_black"
                    >
                      Sign In
                    </Link>
                    <Link
                      href={"/signup"}
                      className="w-full text-white dark:text-dark_black px-4 py-2 bg-dark_black dark:bg-white rounded-md hover:opacity-90"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
