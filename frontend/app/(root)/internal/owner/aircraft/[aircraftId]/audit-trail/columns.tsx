"use client"

import { ColumnDef } from "@tanstack/react-table"


export type Audit = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Audit>[] = [
  {
    accessorKey: "user",
    header: "User",
  },
  {
    accessorKey: "wallet",
    header: "Wallet Address",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
  {
    accessorKey: "time",
    header: "Time Stamp",
  },
]

"use client"

import { ColumnDef } from "@tanstack/react-table"


export type Audit = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Audit>[] = [
  {
    accessorKey: "user",
    header: "User",
  },
  {
    accessorKey: "wallet",
    header: "Wallet Address",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
  {
    accessorKey: "time",
    header: "Time Stamp",
  },
]
