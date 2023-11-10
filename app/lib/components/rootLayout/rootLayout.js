"use client";

import React, { useState } from "react";
import Link from "next/link";

import * as layoutStyles from "./Layout.module.css";
import { HamburgerMenu } from "../../common/Icons";
import "./Layout.reset.css";

const navItems = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Résumé",
    path: "/resume",
  },
  {
    name: "Tinker-Box",
    path: "/tinkerbox",
  },
  {
    name: "Videos",
    path: "/videos",
  },
  {
    name: "Misc",
    path: "/misc",
  },
];

const Layout = (props) => {
  const [menuOpen, setMenuOpen] = useState(0);
  const [pageName, setPageName] = useState('About');
  const onLinkClick = (name) => {
    setPageName(name);
  }
  return (
    <div className={layoutStyles.base}>
      <header className={layoutStyles.header}>
        <button
          className={layoutStyles.hamburgerMenu}
          onClick={() => setMenuOpen(1)}
        >
          {HamburgerMenu}
        </button>

        <div className={layoutStyles.logoTop}>
          <h1>
            <Link onClick={() => onLinkClick('About')} href={"/"} as={"/"}>Dipankar Medhi</Link>
          </h1>
        </div>

        <nav className={layoutStyles.navTop}>
          <ul>
            {navItems.map((item) => (
              <li
                key={item.name}
                className={
                  item.name === pageName ? layoutStyles.activeTab : ""
                }
              >
                <Link href={item.path} as={item.path} onClick={() => onLinkClick(item.name)}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={layoutStyles.topDivider}></div>
      </header>

      <aside
        className={`${layoutStyles.sidebar} ${
          menuOpen ? layoutStyles.sidebarOpen : layoutStyles.sidebarClose
        }`}
      >
        <nav>
          <ul>
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setMenuOpen(0)}
                className={
                  item.name === pageName ? layoutStyles.activeTab : ""
                }
              >
                <Link href={`${item.path}`} as={`${item.path}`} onClick={() => onLinkClick(item.name)}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          title="close"
          className={layoutStyles.closeMenu}
          onClick={() => setMenuOpen(0)}
        >
          X
        </button>
      </aside>

      <main role="main" className={layoutStyles.main}>
        {props.children}
      </main>

      <footer className={layoutStyles.footer}>
        Welcome to my Next.JS Site
      </footer>
    </div>
  );
};

export default Layout;
