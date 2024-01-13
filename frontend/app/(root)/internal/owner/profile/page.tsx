"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CButton } from "@/components/custom";
import Link from "next/link";
import React from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import CInput from "@/components/custom/Inputs/CInput";

const formSchema = z.object({
  name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
      message: "Password must be at least 2 characters.",
  }),
});

const onSubmit = () => {
    console.log("hello");
};

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    return (
        <div className="justify-between">
            <p className={"heading-1"}>Edit Profile</p>
            <div>
            <div>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="mb-8 space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="flex-col pb-6 ps-20 pt-10 ">
                                            { <FormLabel>Name</FormLabel> }
                                            <FormControl >
                                                <CInput
                                                    fieldSize={"default"}
                                                    placeholder="Placeholder"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="ps-20">
                                            { <FormLabel>Email</FormLabel> }
                                            <FormControl>
                                                <CInput
                                                    fieldSize={"default"}
                                                    placeholder="Placeholder"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </form>
                            <div className="pb-56"></div>
                            <div className="flex justify-end space-x-10 pb-60">
                            <CButton cVariant="default" className="flex items-end">
                            Connect New Wallet
                            </CButton>
                            <CButton type="submit" asChild cVariant="accent">
                                <Link href="/xyz">Save</Link>
                            </CButton>
                            </div>
                        </Form>
                    </div>
                    </div>
                </div>
    );
};

export default page;
