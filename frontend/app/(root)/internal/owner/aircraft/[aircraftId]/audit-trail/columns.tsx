"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Audit = {
    id: string;
    user: string;
    wallet: string;
    action: "pending" | "processing" | "success" | "failed";
    time: string;
};

export const columns: ColumnDef<Audit>[] = [
    {
        accessorKey: "user",
        header: ({ column }) => {
            return (
                <Button
                    variant="secondary"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    User
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => <div>{row.getValue("user")}</div>,
    },
    {
        accessorKey: "wallet",
        header: ({ column }) => {
            return (
                <Button
                    variant="secondary"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Wallet Address
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "action",
        header: ({ column }) => {
            return (
                <Button
                    variant="secondary"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Action
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "time",
        header: ({ column }) => {
            return (
                <Button
                    variant="secondary"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Time
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
];
