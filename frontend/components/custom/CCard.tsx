"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CButton } from ".";
import CInput from "./Inputs/CInput";
import PlaceBid from "./modals/PlaceBid";
import ViewDetails from "./modals/ViewDetails";

type CCardProps = {
    label: string;
    owner?: boolean;
};

const CCard = ({ label, owner = false }: CCardProps) => {
    return (
        <Card className="flex w-[400px] h-[250px] bg-secondary text-primary rounded-xl">
            <div className="self-center basis-2/5">
                <CardHeader>
                    <CardTitle className="heading-4 font-normal">
                        {label}
                    </CardTitle>
                    <CardDescription>slNo: {}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Current Bid: {}</p>
                </CardContent>
                <CardContent>
                    <Dialog>
                        <DialogTrigger asChild>
                            <CButton halfWidth cVariant="accent">
                                {owner ? "Place Bid" : "View Details"}
                            </CButton>
                        </DialogTrigger>
                        {owner ? (
                            <PlaceBid label={label} />
                        ) : (
                            <ViewDetails label={label} />
                        )}
                    </Dialog>
                </CardContent>
            </div>
            <CardFooter className="p-0 pr-2 basis-3/5">
                <Image
                    src={"/assets/images/dummy-image.jpg"}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-sm object-cover"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
            </CardFooter>
        </Card>
    );
};

export default CCard;
