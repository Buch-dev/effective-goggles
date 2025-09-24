"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaHome,
  FaImages,
  FaVideo,
  FaMagic,
  FaEdit,
  FaRegGrinTongueWink,
  FaFolder,
  FaChevronDown,
  FaHeadset,
  FaBell,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

const navIcons = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaImages />, label: "Gallery" },
  { icon: <FaVideo />, label: "Video" },
  { icon: <FaMagic />, label: "Enhancer" },
  { icon: <FaEdit />, label: "Edit" },
  { icon: <FaRegGrinTongueWink />, label: "Video Lipsync" },
  { icon: <FaFolder />, label: "Motion Transfer" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`
        flex items-center justify-between w-full p-4 text-gray-900
        dark:bg-gray-900 dark:text-gray-100
        transition-colors duration-300
      `}
    >
      {/* Logo and Hamburger */}
      <div className="flex items-center justify-between w-full gap-3">
        <div className="logo cursor-pointer">
          <div className="flex items-center gap-2">
            <label htmlFor="logo" className="text-4xl font-bold">K</label>
            <div
              className="radiant-circle-purple-blue"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 30% 30%, #a78bfa, #6366f1, #06b6d4)",
                boxShadow: "0 0 8px 2px #a78bfa88",
              }}
            />
            <p className="text-gray-700 dark:text-gray-200 text-sm hidden sm:block">
              benevolentrimblebat
            </p>
            <FaChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-300 hidden sm:block" />
          </div>
        </div>
        {/* Desktop Nav and Actions */}
      <div className="hidden sm:flex items-center gap-4">
        {/* Nav */}
        <nav className="bg-gray-100 dark:bg-gray-800 rounded-2xl transition-colors duration-300">
          <ul className="flex space-x-6 p-2">
            {navIcons.map((item) => (
              <li key={item.label}>
                <Link
                  href="#"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 p-3 flex flex-col items-center justify-center rounded-lg transition-all duration-200 hover:shadow"
                  title={item.label}
                >
                  <span className="text-xl">{item.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* alert, support & themeswitcher */}
        <Link
          href={"#"}
          className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center text-sm"
        >
          <FaImages className="inline mr-1" />
          Gallery
        </Link>
        <Link
          href={"#"}
          className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center text-sm"
        >
          <FaHeadset className="inline mr-1" />
          Support
        </Link>
        <Link
          href={"#"}
          className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center"
        >
          <FaBell />
        </Link>
        {/* themeswitcher */}
        <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-yellow-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center cursor-pointer"
            aria-label="Toggle theme"
            type="button"
        >
            {theme === "light" ? <IoSunny /> : <IoMoon />}
        </button>
        <div
            className="radiant-circle-purple-blue"
            style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background:
                    "radial-gradient(circle at 30% 30%, #a78bfa, #6366f1, #06b6d4)",
                boxShadow: "0 0 8px 2px #a78bfa88",
            }}
        />
        </div>
        {/* Hamburger menu (visible on mobile/tablet) */}
        <button
          className="sm:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Mobile/Tablet Slide-out Menu */}
      {menuOpen && (
        <div className=" inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setMenuOpen(false)}
          />
          {/* Slide-out panel */}
          <div className="relative ml-auto w-64 max-w-full h-full bg-white dark:bg-gray-900 shadow-lg flex flex-col p-6 transition-transform duration-300">
            <button
              className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes className="text-2xl" />
            </button>
            {/* Nav */}
            <nav className="mt-10">
              <ul className="flex flex-col gap-4">
                {navIcons.map((item) => (
                  <li key={item.label}>
                    <Link
                      href="#"
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg transition-all duration-200"
                      title={item.label}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* alert, support & themeswitcher */}
            <div className="flex flex-col gap-3 mt-8">
              <Link
                href={"#"}
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <FaImages className="inline mr-1" />
                Gallery
              </Link>
              <Link
                href={"#"}
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <FaHeadset className="inline mr-1" />
                Support
              </Link>
              <Link
                href={"#"}
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <FaBell />
              </Link>
              {/* themeswitcher */}
              <button
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
                className="text-gray-700 dark:text-yellow-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center cursor-pointer"
                aria-label="Toggle theme"
                type="button"
              >
                {theme === "light" ? <IoSunny /> : <IoMoon />}
                <span className="ml-2">Switch Theme</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
