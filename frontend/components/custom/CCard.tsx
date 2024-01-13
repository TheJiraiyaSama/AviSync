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
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CButton } from ".";
import CInput from "./Inputs/CInput";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
    bid: z.coerce.number(),
});

type CCardProps = {
    label: string;
};

const CCard = ({ label }: CCardProps) => {
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
                                Place Bid
                            </CButton>
                        </DialogTrigger>
                        <DialogContent className="bg-secondary text-primary fill-primary p-16 sm:min-w-[600px] justify-center">
                            <DialogHeader>
                                <DialogTitle>
                                    <p className="heading-2 font-normal mb-12">
                                        {label}
                                    </p>
                                </DialogTitle>
                                <div className="flex flex-col gap-4">
                                    <p>Serial Number: {}</p>
                                    <p>Engine Number: {}</p>
                                    <p>Manufacture Price: {}</p>
                                    <p>Current Bid: {}</p>
                                    <Form {...form}>
                                        <form
                                            onSubmit={form.handleSubmit(
                                                onSubmit
                                            )}
                                        >
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
