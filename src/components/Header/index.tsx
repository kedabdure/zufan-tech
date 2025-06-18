"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <header
      className={cn(
        "header fixed left-0 top-0 z-40 flex w-full items-center transition-all duration-300",
        sticky
          ? "bg-[#F9F7F7]/80 shadow-sticky backdrop-blur-sm dark:bg-[#0a0a0a]/90 dark:shadow-sticky-dark"
          : "bg-transparent"
      )}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-44 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={cn("header-logo block w-full", sticky ? "py-4 lg:py-2" : "py-6")}
            >
              <Image
                src="/images/logo/logo-light.svg"
                alt="Zufan Tech logo"
                width={120}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src="/images/logo/logo-dark.svg"
                alt="Zufan Tech logo"
                width={120}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>

          <div>
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-[#3F72AF] focus:ring-2 lg:hidden"
            >
              <span
                className={cn(
                  "relative my-1.5 block h-0.5 w-[30px] bg-[#112D4E] transition-all duration-300 dark:bg-[#F9F7F7]",
                  navbarOpen ? "top-[7px] rotate-45" : ""
                )}
              />
              <span
                className={cn(
                  "relative my-1.5 block h-0.5 w-[30px] bg-[#112D4E] transition-all duration-300 dark:bg-[#F9F7F7]",
                  navbarOpen ? "opacity-0" : ""
                )}
              />
              <span
                className={cn(
                  "relative my-1.5 block h-0.5 w-[30px] bg-[#112D4E] transition-all duration-300 dark:bg-[#F9F7F7]",
                  navbarOpen ? "top-[-8px] -rotate-45" : ""
                )}
              />
            </button>
            <nav
              id="navbarCollapse"
              className={cn(
                "navbar absolute right-0 z-30 w-[250px] rounded-lg border border-[#DBE2EF]/50 bg-[#F9F7F7] px-6 py-4 duration-300 dark:bg-gray-800 lg:dark:bg-transparent dark:border-[#3F72AF]/50 lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100",
                navbarOpen
                  ? "top-full opacity-100"
                  : "invisible top-[120%] opacity-0 lg:visible lg:top-auto"
              )}
            >
              <ul className="block lg:flex lg:space-x-8">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={cn(
                          "flex py-2 text-base font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-6",
                          usePathName === menuItem.path
                            ? "text-[#3F72AF] dark:text-[#3F72AF]"
                            : "text-[#112D4E] hover:text-[#3F72AF] dark:text-[#DBE2EF] dark:hover:text-[#3F72AF]"
                        )}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className={cn(
                            "flex cursor-pointer items-center justify-between py-2 text-base font-medium text-[#112D4E] hover:text-[#3F72AF] dark:text-[#DBE2EF] dark:hover:text-[#3F72AF] lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                          )}
                        >
                          {menuItem.title}
                          <span className="pl-3">
                            <svg width="25" height="24" viewBox="0 0 25 24">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </p>
                        <div
                          className={cn(
                            "submenu relative top-full left-0 pl-3 bg-[#F9F7F7] border-l lg:rounded-md border-gray-300 dark:border-gray-600 lg:border-none transition-all duration-300 group-hover:opacity-100 dark:bg-gray-800 lg:invisible lg:absolute lg:top-[110%] lg:w-[250px] lg:p-4 lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full",
                            openIndex === index ? "block" : "hidden"
                          )}
                        >
                          {menuItem.submenu.map((submenuItem, index) => (
                            <Link
                              href={submenuItem.path}
                              key={index}
                              className="block rounded-sm py-2.5 text-sm font-medium text-[#112D4E] hover:text-[#3F72AF] dark:text-[#DBE2EF] dark:hover:text-[#3F72AF] lg:px-3"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
                {/* Contact Button in Sidebar for Mobile */}
                <li className="mt-4 lg:hidden">
                  <Link
                    href="/contact"
                    className={cn(
                      "inline-flex items-center justify-center",
                      "group rounded-full border border-black/10 bg-neutral-100 px-5 py-1.5 text-base font-medium text-neutral-900 transition-all duration-300 hover:shadow-lg hover:bg-neutral-200 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-white dark:hover:bg-[#3F72AF] dark:hover:shadow-[#3F72AF]/30",
                      "hover:cursor-pointer"
                    )}
                    aria-label="Contact Zufan Tech for software and technology solutions"
                    role="button"
                  >
                    <AnimatedShinyText className="inline-flex items-center justify-center gap-2">
                      <span>✨ Contact Us</span>
                      <MoveRight className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </AnimatedShinyText>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center justify-end pr-16 lg:pr-0">
            <Link
              href="/contact"
              className={cn(
                "hidden lg:inline-flex items-center justify-center",
                "group rounded-full border border-black/10 bg-neutral-100 px-5 py-1.5 text-base font-medium text-neutral-900 transition-all duration-300 hover:shadow-lg hover:bg-neutral-200 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-white dark:hover:bg-[#3F72AF] dark:hover:shadow-[#3F72AF]/30",
                "hover:cursor-pointer"
              )}
              aria-label="Contact Zufan Tech for software and technology solutions"
              role="button"
            >
              <AnimatedShinyText className="inline-flex items-center justify-center gap-2">
                <span>✨ Contact Us</span>
                <MoveRight className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </AnimatedShinyText>
            </Link>
            <div className="ml-4">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;