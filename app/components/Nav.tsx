"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { url } from "inspector";

export default function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const menuItems = [
    {
      name: "01. home",
      url: "/#",
    },
    {
      name: "02.About",
      url: "/#about",
    },
    {
      name: "03.Projects",
      url: "/#projects",
    },
    {
      name: "04.Contact",
      url: "/#contact",
    },
  ];

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <Navbar className="bg-[#0a192f] py-4 px-6 " maxWidth="full">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarBrand>
            <h2 className="text-green-400  text-4xl">KT</h2>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="end">
          <NavbarMenuToggle onClick={toggleSideNav} />
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-8 text-white text-sm font-medium"
          justify="end"
        >
          <NavbarBrand>
            <h2 className="text-green-400 text-4xl">KT </h2>
          </NavbarBrand>
          {menuItems.map(({ name, url }) => (
            <NavbarItem key={url}>
              <Link
                className="hover:text-green-400 transition duration-300 text-green-400"
                href={url}
              >
                {name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>

      {/* Side Navigation for Small Screens */}
      {isSideNavOpen && (
        <div className="fixed inset-0 bg-[#0a192f] bg-opacity-95 z-10 flex flex-col items-center text-white text-lg p-6 max-w-8xl">
          <button className="absolute top-4 right-4" onClick={toggleSideNav}>
            ✖
          </button>
          <div className="flex flex-col gap-8 mt-20">
            {menuItems.map(({ name, url }) => (
              <Link
                key={url}
                className="hover:text-green-400 transition duration-300 text-green-400"
                href={url}
                onClick={toggleSideNav}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
