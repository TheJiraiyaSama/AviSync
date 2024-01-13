import { CButton } from "@/components/custom";
import { FilterListIcon } from "@/components/icons";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className="flex">
            <div className="basis-3/5">
                <p className="m-4 heading-1">
                    Monitor your
                    <br />
                    Aircraft
                </p>
                <div className="mt-12 flex justify-around">
                    <div className="flex-center flex-col bg-secondary w-52 h-52 rounded-3xl">
                        <p className="heading-3 text-primary mb-4">On Market</p>
                        <p className="font-anton text-6xl text-primary">3</p>
                    </div>
                    <div className="flex-center flex-col bg-secondary w-52 h-52 rounded-3xl">
                        <p className="heading-3 text-primary mb-4">
                            Off Market
                        </p>
                        <p className="font-anton text-6xl text-primary">3</p>
                    </div>
                    <div className="flex-center flex-col bg-secondary w-52 h-52 rounded-3xl">
                        <p className="heading-3 text-primary mb-4">Sold</p>
                        <p className="font-anton text-6xl text-primary">3</p>
                    </div>
                </div>
                <div>
                    <p className="m-4 mt-12 heading-3">Graph</p>
                    <Image src={""} alt="Graph" height={300} width={700} />
                </div>
            </div>
            <div className="basis-2/5">
                <Image src={""} alt="Airplane Image" width={400} height={400} />
                <div className="flex justify-between mx-5">
                    <CButton halfWidth icon={<FilterListIcon />}>
                        Filter
                    </CButton>
                    <CButton halfWidth cVariant="accent">
                        Register New
                    </CButton>
                </div>
            </div>
        </div>
    );
};

export default page;
