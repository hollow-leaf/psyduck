import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
        >
          Psyduck
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"
            }`}
        >
          <Link href="/about"><NavItem>About</NavItem></Link>
          <Link href="/donations"><NavItem>Donations</NavItem></Link>
          <Link href="/history"><NavItem>History</NavItem></Link>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <ConnectButton />
        </div>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <Link href="/about"><NavItem>About</NavItem></Link>
            <Link href="/donations"><NavItem>Donations</NavItem></Link>
            <Link href="/history"><NavItem>History</NavItem></Link>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <ConnectButton />
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
