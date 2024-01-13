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

const onSubmit = () => {
    console.log("hello");
};

const page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    return (
        <div className="flex h-screen">
            <div className="basis-2/5 self-center">
                <Image
                    src={"/assets/logos/logo_with_text.svg"}
                    alt="logo"
                    width={150}
                    height={150}
                    className="absolute top-0 left-0"
                />
                <div className="flex flex-col items-center">
                    <p className="heading-1">Welcome Back</p>
                    <p className="body-1 mt-8 mb-20">Glad youre here again</p>
                    <CButton asChild>
                        <Link href="/login">Login</Link>
                    </CButton>
                </div>
            </div>
            <div className="bg-secondary basis-3/5">
                <div className="h-screen flex flex-col items-center justify-center">
                    <p className="heading-1 text-primary mb-12">
                        Create Account
                    </p>
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
                                                <CInput
                                                    fieldSize={"half"}
                                                    placeholder="Role"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </form>
                            <CButton type="submit" asChild cVariant="accent">
                                <Link href="/sign">Sign Up with Metamask</Link>
                            </CButton>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
