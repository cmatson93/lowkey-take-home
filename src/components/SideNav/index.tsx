import { AnimateSharedLayout } from "framer-motion";
import React from "react";

import Button from "../Button";

import "./styles.css";

export interface Page {
  text: string;
  icon: string;
}

export interface SideNavProps {
  currentPage: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pages: Page[];
}

const SideNav = ({ currentPage, onClick, pages }: SideNavProps) => (
  <aside>
    <AnimateSharedLayout>
      {pages.map((page) => (
        <Button
          icon={page.icon}
          key={page.text}
          onClick={onClick}
          selected={currentPage === page.text}
          value={page.text}
        />
      ))}
    </AnimateSharedLayout>
  </aside>
);

export default SideNav;
