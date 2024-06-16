"use client";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const menuItems = [
    "01. About",
    "02. Blog",
    "03. Work",
    "04. Contact",
  ];

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <Navbar className="bg-[#0a192f] py-4 px-6" disableAnimation isBordered>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarBrand>
            <h2 className="text-green-400 font-mono text-lg">Kaytee</h2>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="end">
          <NavbarMenuToggle onClick={toggleSideNav} />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-8 text-white text-sm font-medium" justify="end">
          <NavbarBrand>
            <h2 className="text-green-400">Kaytee</h2>
          </NavbarBrand>
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link className="hover:text-green-400 transition duration-300 text-green-400" href="#">
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>

      {/* Side Navigation for Small Screens */}
      {isSideNavOpen && (
        <div className="fixed inset-0 bg-[#0a192f] bg-opacity-95 z-50 flex flex-col items-center text-white text-lg p-6">
          <button className="absolute top-4 right-4" onClick={toggleSideNav}>
            ✖
          </button>
          <div className="flex flex-col gap-8 mt-20">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                className="hover:text-green-400 transition duration-300 text-green-400"
                href="#"
                onClick={toggleSideNav}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
