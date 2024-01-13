import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CButton } from "..";
import CInput from "../Inputs/CInput";

type PlaceBidProps = {
    label: string;
};

const formSchema = z.object({
    bid: z.coerce.number(),
});

const PlaceBid = ({ label }: PlaceBidProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            bid: 0,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <div>
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
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="bid"
                                    render={({ field }) => (
                                        <FormItem>
                                            <CInput
                                                variant={"invert"}
                                                fieldSize={"half"}
                                                inputLabel="Your Bid"
                                            />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex justify-between mt-8">
                                    <CButton
                                        type="submit"
                                        halfWidth
                                        cVariant="accent"
                                    >
                                        Place Bid
                                    </CButton>
                                    <CButton
                                        halfWidth
                                        className="bg-primary text-secondary"
                                    >
                                        View Logs
                                    </CButton>
                                </div>
                            </form>
                        </Form>
                    </div>
                </DialogHeader>
            </DialogContent>
        </div>
    );
};

export default PlaceBid;
