import { CButton } from "@/components/custom";
import { FilterListIcon } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { airplaneName } from "@/constants";
import Image from "next/image";
import React from "react";
import CListItem from "@/components/custom/CListItem";
import getImageData from "@/lib/get_image_data";
import { Input } from "@/components/ui/input";
const page = () => {
  return (
    <div className="flex">
      <div className="basis-1/2">
        <p className="m-4 heading-1">
          Monitor your
          <br />
          Aircraft
        </p>
        <div className="flex justify-between mx-5">
          <CButton halfWidth icon={<FilterListIcon />}>
            Filter
          </CButton>
          <CButton halfWidth cVariant="default">
            Buy
          </CButton>
        </div>
        <ScrollArea className="mt-4 h-72 rounded-md">
          {airplaneName.map((name) => (
            <CListItem key={name} label={name} />
          ))}
        </ScrollArea>
      </div>
      <div className=" basis-1/2 flex flex-col p-16 rounded-3xl bg-secondary">
        <div className="flex">
          <div className="basis-2/3 flex flex-col gap-4 mb-12">
            <p className="heading-2 text-accent my-4">Aircraft Aranara</p>
            <p className="body-2 text-white">Serial Number:</p>
            <p className="body-2 text-white">Engine Number:</p>
            <p className="body-2 text-white">Manufacturer Price:</p>
            <p className="heading-5 text-white">Engine Number:</p>
            <p className="heading-5 text-white">Current Bid:</p>
          </div>
          <div>
            <Image scr={""} alt="" width={200} height={200} />
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <CButton halfWidth cVariant="accent">
            Sell
          </CButton>
          <CButton halfWidth cVariant="accent" className="bg-primary">
            Options
          </CButton>
        </div>
      </div>
    </div>
  );
};

export default page;
