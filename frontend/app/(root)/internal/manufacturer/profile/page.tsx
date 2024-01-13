"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CButton } from "@/components/custom";
import Link from "next/link";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Required",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),
  email: z
    .string({
      required_error: "Required",
    })
    .min(2, {
      message: "Password must be at least 2 characters.",
    }),
});

const Page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const [editMode, setEditMode] = useState<boolean>(false);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log({ data });
  };

  const toggleEdit = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <div className="justify-between">
      <p className={"heading-1"}>Edit Profile</p>
      <div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mb-8 space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-col pb-6 ps-20 pt-10 ">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter name"
                        {...field}
                        readOnly={!editMode}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="ps-20">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter email"
                        {...field}
                        readOnly={!editMode}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
            <div className="pb-56"></div>
            {!editMode ? (
              <div className="flex justify-end">
                <CButton cVariant={"accent"} onClick={toggleEdit}>
                  Edit
                </CButton>
              </div>
            ) : (
              <div className="flex justify-end space-x-10 pb-60">
                <CButton onClick={toggleEdit}>Cancel</CButton>
                <CButton type="submit" asChild cVariant="accent">
                  <Link href="/xyz">Save</Link>
                </CButton>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
