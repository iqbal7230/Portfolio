
import { navItems } from "@/data";
import { socialMedia } from "@/data";
import Link from "next/link";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function Navbartop() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full shadow-md border-b border-neutral-200 bg-transparent">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
                        {/* <NavbarButton variant="primary">Get in touch</NavbarButton>
                        <NavbarButton variant="primary">Get in touch</NavbarButton> */}
                         {socialMedia.map((info) => (
                                    <Link
                                      key={info.id}
                                      href={info.link}
                                      passHref
                                      rel="noopener noreferrer"
                                    >
                                      <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                                        <img src={info.img} alt="icons" width={20} height={20} />
                                      </div>
                                    </Link>
                                  ))}
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex flex-row gap-3">

                            {socialMedia.map((info) => (
                                <Link
                                    key={info.id}
                                    href={info.link}
                                    passHref
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                                        <img src={info.img} alt="icons" width={20} height={20} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>


            {/* Navbar */}
        </div>
    );
}