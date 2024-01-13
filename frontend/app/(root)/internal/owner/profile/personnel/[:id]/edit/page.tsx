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
import CSelect from "@/components/custom/Inputs/CSelect";
import { userRoles } from "@/constants";

const formSchema = z.object({
  address: z.string().min(2, {
      message: "Username must be at least 2 characters.",
  }),
  name: z.string().min(2, {
      message: "Password must be at least 2 characters.",
  }),
  role: z.string().min(2, {
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
    });

    return (
        <div className="justify-between">
            <p className={"heading-1"}>Add Personnel</p>
            <div>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="mb-8 space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem className="flex-col pb-6 ps-20 pt-10 ">
                                            { <FormLabel>Wallet Address</FormLabel> }
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
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="ps-20">
                                            { <FormLabel>Employee Name</FormLabel> }
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
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem className="ps-20">
                                            { <FormLabel></FormLabel> }
                                            <FormControl className="pt-10">
                                                <CSelect
                                                    inputLabel="Role"
                                                    selectItems={userRoles}
                                                    selectValueProps={{placeholder: ''}}
                                                    selectTriggerProps={{fieldSize:"default"}}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </form>
                            <div className="pb-10"></div>
                            <div className="flex justify-end space-x-10">
                            <CButton type="submit" asChild cVariant="accent">
                                <Link href="/xyz">Save</Link>
                            </CButton>
                            </div>
                        </Form>
                    </div>
                    </div>
    );
};

export default page;
