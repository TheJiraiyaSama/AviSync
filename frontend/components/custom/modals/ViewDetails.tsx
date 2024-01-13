import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type ViewDetailsProps = {
    label: string;
};

const ViewDetails = ({ label }: ViewDetailsProps) => {
    return (
        <DialogContent className="bg-secondary text-primary fill-primary p-16 sm:min-w-[600px] justify-center">
            <DialogHeader>
                <DialogTitle>
                    <p className="heading-2 font-normal mb-12">{label}</p>
                </DialogTitle>
                <div className="flex flex-col gap-4">
                    <p>Serial Number: {}</p>
                    <p>Engine Number: {}</p>
                    <p>Manufacture Price: {}</p>
                    <p>Current Bid: {}</p>
                </div>
            </DialogHeader>
        </DialogContent>
    );
};

export default ViewDetails;
