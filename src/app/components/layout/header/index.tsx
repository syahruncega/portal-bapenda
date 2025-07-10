/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { headerData } from "./Navigation/Menudata";
import Logo from "./Logo";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { ChevronDownIcon, ChevronRight, ChevronUpIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";

type HoverPopoverProps = {
  item: any;
};

function HoverPopover({ item }: HoverPopoverProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Button variant="ghost" className="rounded-2xl hover:bg-white">
            {item.label}
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="start"
        className="p-2 w-56"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="flex flex-col gap-1">
          {item.children.map((child: any) =>
            !child.children ? (
              <Link
                key={child.label}
                href={child.href}
                className="px-2 py-1 rounded hover:bg-muted text-sm"
              >
                {child.label}
              </Link>
            ) : (
              <SubPopover key={child.label} item={child} />
            )
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function SubPopover({ item }: HoverPopoverProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="flex items-center justify-between px-2 py-1 rounded hover:bg-muted text-sm"
        >
          {item.label}
          <ChevronRight className="ml-2 w-4 h-4" />
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="right"
        align="start"
        className="p-2 w-56"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="flex flex-col gap-1">
          {item.children.map((grand: any) => (
            <Link
              key={grand.label}
              href={grand.href}
              className="px-2 py-1 rounded hover:bg-muted text-sm"
            >
              {grand.label}
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

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
              <div className="flex items-center 1">
                {headerData.map((item) =>
                  !item.children ? (
                    <Button
                      key={item.label}
                      asChild
                      variant="ghost"
                      className="rounded-2xl hover:bg-white"
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ) : (
                    <HoverPopover key={item.label} item={item} />
                  )
                )}
              </div>
              {/* {headerData.map((item) =>
                !item.children ? (
                  <Button
                    key={item.label}
                    asChild
                    variant={"ghost"}
                    className="rounded-2xl hover:bg-white"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ) : (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant={"ghost"}
                        className="rounded-2xl hover:bg-white"
                      >
                        {item.label}
                        <ChevronDownIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.children.map((child) =>
                        !child.children ? (
                          <DropdownMenuItem key={child.label} asChild>
                            <Link href={child.href}>{child.label}</Link>
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuSub key={child.label}>
                            <DropdownMenuSubTrigger>
                              {child.label}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                {child.children.map((grandChild) => (
                                  <DropdownMenuItem
                                    key={grandChild.label}
                                    asChild
                                  >
                                    <Link href={grandChild.href}>
                                      {grandChild.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        )
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              )} */}
              {/* <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  {headerData.map((item) =>
                    item.children ? (
                      <NavigationMenuItem key={item.label} className="">
                        <NavigationMenuTrigger className="rounded-2xl bg-transparent font-medium  dark:hover:bg-gray-800 hover:bg-white  hover:shadow-header_shadow">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[200px]">
                            {item.children.map((child) =>
                              !child.children ? (
                                <NavigationMenuLink key={child.label} asChild>
                                  <Link href={child.href}>{child.label}</Link>
                                </NavigationMenuLink>
                              ) : (
                                <DropdownMenuSub key={child.label}>
                                  <DropdownMenuSubTrigger>
                                    {child.label}
                                  </DropdownMenuSubTrigger>
                                  <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                      {child.children.map((grandChild) => (
                                        <DropdownMenuItem
                                          key={grandChild.label}
                                          asChild
                                        >
                                          <Link href={grandChild.href}>
                                            {grandChild.label}
                                          </Link>
                                        </DropdownMenuItem>
                                      ))}
                                    </DropdownMenuSubContent>
                                  </DropdownMenuPortal>
                                </DropdownMenuSub>
                              )
                            )}
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
              </NavigationMenu> */}
            </div>
            <div className="flex items-center gap-6 xl:gap-4">
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
            {headerData.map((item, index) =>
              item.children ? (
                <DropdownMenu key={item.label + index}>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="w-full justify-start">
                      {item.label}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="bottom" align="center">
                    {item.children.map((child, index) => (
                      <DropdownMenuItem key={child.label + index} asChild>
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={item.label + index}
                  variant={"ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              )
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
