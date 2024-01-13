"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CButton } from "@/components/custom";
import Link from "next/link";
import React, { useState } from 'react';
import{
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input"
import CInput from "@/components/custom/Inputs/CInput";


const formSchema = z.object({
    serialNumber: z.string().min(2, {
        message: "Serial Number must be at least 2 characters.",
    }),
    aircraftName: z.string().min(2, {
        message: "AirCraft name must be at least 2 characters.",
    }),
    engineNumber: z.string().min(2, {
        message: "Engine Number must be at least 2 characters.",
    }),
    manufacturePrice: z.string().min(6, {
        message: "Manufacture Price must be at least 6 characters.",
    }),
    model: z.string().min(2, {
        message: "Model must be at least 2 characters.",
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
        <p className={"heading-1"}>Aircraft Add/Edit</p>
        <div>
        <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mb-8 space-y-4"
                        >
                            <FormField
                                control={form.control}
                                name="serialNumber"
                                render={({ field }) => (
                                    <FormItem className="flex-col pb-6 pt-10 ">
                                        { <FormLabel>Serial Number</FormLabel> }
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
                                name="aircraftName"
                                render={({ field }) => (
                                    <FormItem>
                                        { <FormLabel>Aircraft number</FormLabel> }
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
                                name="engineNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        { <FormLabel>Engine number</FormLabel> }
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
                                name="manufacturePrice"
                                render={({ field }) => (
                                    <FormItem>
                                        { <FormLabel>Manufacture Price</FormLabel> }
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
                                name="model"
                                render={({ field }) => (
                                    <FormItem>
                                        { <FormLabel>Model</FormLabel> }
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
                        <div className="flex justify-end space-x-10 pb-10">
                        <CButton cVariant="default" className="flex items-end">
                        Upload
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
}
export default page;