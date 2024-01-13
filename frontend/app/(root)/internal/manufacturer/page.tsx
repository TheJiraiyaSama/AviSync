import { CButton } from "@/components/custom";
import CListItem from "@/components/custom/CListItem";
import { FilterListIcon } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { airplaneName } from "@/constants";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-(calc(100vh-9rem)) flex">
      <div className="basis-3/5">
        <p className="heading-1 m-4">
          Monitor your
          <br />
          Aircraft
        </p>
        <div className="mt-12 flex justify-around">
          <div className="flex-center h-52 w-52 flex-col rounded-3xl bg-secondary">
            <p className="heading-3 mb-4 text-primary">On Market</p>
            <p className="font-anton text-6xl text-primary">3</p>
          </div>
          <div className="flex-center h-52 w-52 flex-col rounded-3xl bg-secondary">
            <p className="heading-3 mb-4 text-primary">Off Market</p>
            <p className="font-anton text-6xl text-primary">3</p>
          </div>
          <div className="flex-center h-52 w-52 flex-col rounded-3xl bg-secondary">
            <p className="heading-3 mb-4 text-primary">Sold</p>
            <p className="font-anton text-6xl text-primary">3</p>
          </div>
        </div>
        <div>
          <p className="heading-3 m-4 mt-12">Graph</p>
          <Image src={""} alt="Graph" height={300} width={700} />
        </div>
      </div>
      <div className="basis-2/5">
        <Image src={""} alt="Airplane Image" width={400} height={400} />
        <div className="mx-5 flex justify-between">
          <CButton halfWidth icon={<FilterListIcon />}>
            Filter
          </CButton>
          <CButton halfWidth cVariant="accent">
            Register New
          </CButton>
        </div>
        <ScrollArea className="mt-4 h-72 rounded-md">
          {airplaneName.map((name) => (
            <CListItem key={name} label={name} />
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default page;
