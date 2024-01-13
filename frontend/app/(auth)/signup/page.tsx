/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CButton } from "@/components/custom";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import CInput from "@/components/custom/Inputs/CInput";
import CSelect from "@/components/custom/Inputs/CSelect";
import { userRoles } from "@/constants";
import { SelectValue } from "@radix-ui/react-select";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    role: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

const page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = () => {
        console.log("hello");
    };

    return (
        <div className="flex h-screen">
            <div className="basis-2/5 self-center">
                <Image
                    src={"/assets/logos/logo_with_text.svg"}
                    alt="logo"
                    width={150}
                    height={150}
                    className="absolute left-0 top-0"
                />
                <div className="flex flex-col items-center">
                    <p className="heading-1">Welcome Back</p>
                    <p className="body-1 mb-20 mt-8">Glad youre here again</p>
                    <CButton asChild>
                        <Link href="/login">Login</Link>
                    </CButton>
                </div>
            </div>
            <div className="basis-3/5 bg-secondary">
                <div className="flex h-screen flex-col items-center justify-center">
                    <p className="heading-1 mb-12 text-primary">
                        Create Account
                    </p>
                    <div className="flex-center flex-col">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="mb-8 space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            {/* <FormLabel>Username</FormLabel> */}
                                            <FormControl>
                                                <CInput
                                                    fieldSize={"half"}
                                                    placeholder="Name"
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
                                        <FormItem>
                                            {/* <FormLabel>Username</FormLabel> */}
                                            <FormControl>
                                                <CInput
                                                    fieldSize={"half"}
                                                    placeholder="Email"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem>
                                            {/* <FormLabel>Username</FormLabel> */}
                                            <FormControl>
                                                <CSelect
                                                    // inputLabel="Role"
                                                    selectTriggerProps={{
                                                        fieldSize: "half",
                                                    }}
                                                    selectItems={userRoles}
                                                    selectValueProps={{
                                                        placeholder:
                                                            "Enter Role",
                                                    }}
                                                    selectContentProps={{
                                                        className:
                                                            "bg-primary text-secondary",
                                                    }}
                                                    commonSelectItemProps={{
                                                        className: "ss",
                                                    }}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </form>
                            <CButton type="submit" asChild cVariant="accent">
                                <Link href="">Sign Up with Metamask</Link>
                            </CButton>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
