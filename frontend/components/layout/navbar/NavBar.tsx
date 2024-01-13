import { CButton } from "@/components/custom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { loggedOutNavBarLinks, profileDropdown } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

type NavBarProps = {
    noTopBorderDecoration?: boolean;
    loggedInNavBar?: boolean;
    LandingNavBar?: boolean;
};

const NavBar = ({
    loggedInNavBar = false,
    noTopBorderDecoration = false,
    LandingNavBar = false,
}: NavBarProps) => {
    return (
        <nav className="fixed z-50 w-full">
            {/* Color Borders */}
            {!noTopBorderDecoration ? (
                <div className="flex h-[10px] gap-0">
                    <span className="bg-tertiary w-11/12"></span>
                    <span className="bg-accent w-1/12"></span>
                </div>
            ) : null}
            {/* Content */}

            <div className="flex-between px-6 bg-primary">
                <Link href={"/"} className="flex items-center gap-1">
                    <Image
                        src="/assets/logos/logo_without_text.svg"
                        width={100}
                        height={100}
                        alt="AviSync"
                    />
                    {!LandingNavBar ? (
                        <p className="heading-1 text-secondary">
                            Avi <span className="text-accent">Sync</span>
                        </p>
                    ) : null}
                </Link>
                {!loggedInNavBar ? (
                    <div className="flex-between body-1 gap-12 capitalize">
                        {/* Navbar Links */}
                        {loggedOutNavBarLinks.map((link) => (
                            <Link key={link.name} href={link.link}>
                                <p>{link.name}</p>
                            </Link>
                        ))}
                        {/* Login Button */}
                        {!LandingNavBar ? (
                            <CButton halfWidth>Sign In</CButton>
                        ) : null}
                    </div>
                ) : (
                    <div className="flex-between body-1 gap-12 capitalize">
                        <Link href={"/"}>
                            <p>Dashboard</p>
                        </Link>

                        <Popover>
                            <PopoverTrigger>
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="capitalize">
                                {profileDropdown.map((link) => (
                                    <Link key={link.name} href={link.link}>
                                        <p className="border-b-tertiary border-b-2 py-2">
                                            {link.name}
                                        </p>
                                    </Link>
                                ))}
                            </PopoverContent>
                        </Popover>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
