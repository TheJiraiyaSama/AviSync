import React from "react";
import { CButton } from "@/components/custom";
import CListItem from "@/components/custom/CListItem";
import { FilterListIcon } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { airplaneName } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const page = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[600px]">
          <p className="heading-1">Manage Personnel</p>
          <div className="mx-5 flex justify-between pt-10">
            <CButton halfWidth icon={<FilterListIcon />}>
              Filter
            </CButton>
            <CButton halfWidth cVariant="default">
              Add +
            </CButton>
          </div>
          <ScrollArea className="mt-4 h-96 rounded-md">
            {airplaneName.map((name) => (
              <CListItem key={name} label={name} />
            ))}
          </ScrollArea>
        </div>
        <div className=" basis-3/5 h-200 w-140 flex-col rounded-3xl bg-secondary relative">
          <div className=" ps-20 pt-20">
            <p className="heading-2" className="text-accent pb-5">
              Name
            </p>

            <div className="flex ps-10 pt-5">
              <p className="body-1_bold text-white">Wallet Address:</p>
              <p className="body-1_bold ps-5 text-white">
                AABBCCDD {/* WALLET ADDRESS HERE */}
              </p>
            </div>
            <div className="flex ps-10 pt-5">
              <p className="body-1_bold text-white">Role:</p>
              <p className="body-1_bold ps-28 text-white">
                Technician {/* Role HERE */}
              </p>
            </div>
            <div className="ps-10 pt-10">
              <CButton
                type="submit"
                asChild
                cVariant="accent"
                className="bg-primary"
              >
                <Link href="/xyz">Edit Role</Link>
              </CButton>
            </div>
          </div>
          <div className="pt-32"></div>
          <div className="flex">
            <div className="ps-32 space-x-48">
              <CButton halfWidth asChild cVariant="accent">
                Prev
              </CButton>
              <CButton
                halfWidth
                asChild
                cVariant="accent"
                className="bg-primary"
              >
                Next
              </CButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
