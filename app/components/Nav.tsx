"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import {
  Home,
  User,
  Cpu,
  Briefcase,
  Layout,
  Mail,
  Rss,
  X
} from "lucide-react";

export default function Nav() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Home", url: "/#home", id: "home", icon: Home },
    { name: "About", url: "/#about", id: "about", icon: User },
    { name: "Skills", url: "/#skills", id: "skills", icon: Cpu },
    { name: "Experience", url: "/#experience", id: "experience", icon: Briefcase },
    { name: "Projects", url: "/#projects", id: "projects", icon: Layout },
    { name: "Blog", url: "/blog", id: "blog", icon: Rss },
    { name: "Contact", url: "/#contact", id: "contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = menuItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <Navbar
          className={`h-16 max-w-4xl rounded-full px-4 transition-all duration-500 border border-white/10 ${scrolled
            ? "glass shadow-2xl scale-[0.98] py-2"
            : "glass shadow-xl py-4"
            }`}
          maxWidth="full"
          position="static"
          isBlurred={false}
        >
          <NavbarContent className="gap-4" justify="start">
            <NavbarBrand>
              <motion.h2
                className="text-[var(--accent-primary)] text-2xl font-black tracking-tighter cursor-pointer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                KT<span className="text-[var(--text-primary)]">.</span>
              </motion.h2>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden md:flex gap-2" justify="center">
            {menuItems.map(({ name, url, id, icon: Icon }) => (
              <NavbarItem key={url}>
                <Link
                  className={`text-xs font-bold transition-all duration-300 relative px-4 py-2 flex items-center gap-2 rounded-full ${activeSection === id
                    ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/10"
                    : "text-[var(--text-primary)] hover:text-[var(--accent-primary)] hover:bg-white/5"
                    }`}
                  href={url}
                >
                  <Icon className={`w-4 h-4 ${activeSection === id ? "animate-pulse" : ""}`} />
                  <span className="uppercase tracking-widest">{name}</span>
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeSectionFloating"
                      className="absolute inset-0 border border-[var(--accent-primary)]/50 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          <NavbarContent className="md:hidden" justify="end">
            <NavbarMenuToggle
              onClick={toggleSideNav}
              className="text-[var(--accent-primary)]"
            />
          </NavbarContent>

          <NavbarContent justify="end" className="hidden md:flex">
            <NavbarItem>
              <button className="px-6 py-2 bg-[var(--accent-primary)] text-white text-xs font-bold rounded-full hover:bg-[var(--accent-secondary)] transition-all shadow-lg shadow-[var(--accent-primary)]/20">
                RESUME
              </button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </motion.div>

      {/* Side Navigation Overlay (Floating Style) */}
      <AnimatePresence>
        {isSideNavOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-[60] backdrop-blur-xl"
              onClick={toggleSideNav}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: "100%", opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed inset-y-6 right-6 w-[300px] glass rounded-[2.5rem] z-[70] flex flex-col p-8 shadow-2xl border border-white/20"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-black text-[var(--accent-primary)]">MENU</h2>
                <button
                  className="p-3 bg-white/5 rounded-2xl text-[var(--accent-primary)] hover:rotate-90 transition-transform duration-300"
                  onClick={toggleSideNav}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {menuItems.map(({ name, url, icon: Icon, id }, index) => (
                  <motion.div
                    key={url}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      className={`flex items-center gap-4 p-4 rounded-3xl transition-all duration-300 text-lg font-bold w-full ${activeSection === id
                        ? "bg-[var(--accent-primary)] text-white shadow-lg shadow-[var(--accent-primary)]/20"
                        : "text-[var(--text-primary)] hover:bg-white/5"
                        }`}
                      href={url}
                      onClick={toggleSideNav}
                    >
                      <Icon className="w-6 h-6" />
                      {name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <p className="text-center text-[var(--text-tertiary)] text-sm">Let&apos;s build something great</p>
                <button className="w-full py-5 bg-[var(--accent-primary)] text-white rounded-3xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[var(--accent-primary)]/30">
                  HIRE ME
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
