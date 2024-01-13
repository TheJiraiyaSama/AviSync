import { ISelectItem } from "@/types";
import { Value } from "@radix-ui/react-select";

export const loggedOutNavBarLinks = [
    {
        name: "home",
        link: "/",
    },
    {
        name: "about",
        link: "/",
    },
    {
        name: "ourServices",
        link: "/",
    },
    {
        name: "contactUs",
        link: "/",
    },
];

export const profileDropdown = [
    {
        name: "my profile",
        link: "/profile",
    },
    {
        name: "manage personnel",
        link: "/profile/manage-personnel",
    },
];

export const userRoles: ISelectItem[] = [
    { name: "Technician", value: "1" },
    { name: "Manager", value: "2" },
    { name: "Owner", value: "3" },
];

