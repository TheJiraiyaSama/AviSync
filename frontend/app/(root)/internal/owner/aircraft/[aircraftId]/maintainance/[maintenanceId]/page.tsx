"use client";
import React from "react";
import * as z from "zod";
import { maintenanceFormSchema } from "./fieldSchema";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CSelect from "@/components/custom/Inputs/CSelect";
import CTagInput from "@/components/custom/Inputs/CTagInput";
import CInput from "@/components/custom/Inputs/CInput";
import { CButton } from "@/components/custom";
import CCheckBox from "@/components/custom/Inputs/CCheckBox";

type FormValues = z.infer<typeof maintenanceFormSchema>;

const Page = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(maintenanceFormSchema),
        mode: "onBlur",
        defaultValues: {
            attachments: [],
            categories: [],
        },
    });

    const { fields: personnelFields, append: personnelAppend } = useFieldArray({
        name: "personnel",
        control: form.control,
    });
    const { fields: partsFields, append: partsAppend } = useFieldArray({
        name: "parts",
        control: form.control,
    });

    const { fields: attachmentsFields, append: attachmentsAppend } =
        useFieldArray({
            name: "attachments",
            control: form.control,
        });

    const {
        fields: complianceCheckListFields,
        append: complianceCheckListAppend,
    } = useFieldArray({
        name: "complianceCheckList",
        control: form.control,
    });
    const { fields: qCTestListFields, append: qCTestListAppend } =
        useFieldArray({
            name: "qCTestList",
            control: form.control,
        });
    const { fields: envDocsFields, append: envDocsAppend } = useFieldArray({
        name: "envDocs",
        control: form.control,
    });
    const {
        fields: emergencyProceduresFields,
        append: emergencyProceduresAppend,
    } = useFieldArray({
        name: "emergencyProcedures",
        control: form.control,
    });
    const onSubmit = (values: FormValues) => {
        console.log("SSSS");
        console.log(values);
    };
    return (
        <section>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {/* General */}
                    <section className="my-10">
                        <h3 className="heading-2 mb-8">General</h3>
                        <div className=" relative flex flex-col justify-start gap-10">
                            <FormField
                                name="type"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <CInput
                                                variant={"invert"}
                                                inputLabel="Type"
                                                readOnly
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="categories"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <CInput
                                                variant={"invert"}
                                                inputLabel="Categories"
                                                readOnly
                                                // {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="description"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <CInput
                                                variant={"invert"}
                                                inputLabel="Description"
                                                readOnly
                                                // {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="labourHours"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <CInput
                                                variant={"invert"}
                                                inputLabel="Labout Hours"
                                                type="number"
                                                // {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </section>
                    {/* Parts */}
                    <section className="my-8">
                        <div className="mb-10 flex justify-between">
                            <h3 className="heading-2">Parts</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            {partsFields.map((_, index) => {
                                return (
                                    <div key={index} className="flex gap-14">
                                        <FormField
                                            name={
                                                `parts[${index}].serialNumber` as any
                                            }
                                            control={form.control}
                                            render={({ field }) => (
                                                <>
                                                    <FormItem>
                                                        <FormControl>
                                                            <CInput
                                                                variant={
                                                                    "invert"
                                                                }
                                                                fieldSize={
                                                                    "half"
                                                                }
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                </>
                                            )}
                                        />
                                        <FormField
                                            name={
                                                `parts[${index}].newOrReplace` as any
                                            }
                                            control={form.control}
                                            render={({ field }) => (
                                                <>
                                                    <FormItem>
                                                        <FormControl>
                                                            <CInput
                                                                variant={
                                                                    "invert"
                                                                }
                                                                fieldSize={
                                                                    "half"
                                                                }
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                </>
                                            )}
                                        />
                                        <FormField
                                            name={`parts[${index}].type` as any}
                                            control={form.control}
                                            render={({ field }) => (
                                                <>
                                                    <FormItem>
                                                        <FormControl>
                                                            <CInput
                                                                variant={
                                                                    "invert"
                                                                }
                                                                fieldSize={
                                                                    "half"
                                                                }
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                </>
                                            )}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    {/* Personnel */}
                    <section className="my-8">
                        <div className="flex justify-between">
                            <h3 className="heading-2 mb-4">Personnel</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            {personnelFields.map((_, index) => {
                                return (
                                    <FormField
                                        key={index}
                                        name={`personnel[${index}].name` as any}
                                        control={form.control}
                                        render={({ field }) => (
                                            <>
                                                <FormItem>
                                                    <FormControl>
                                                        <CInput
                                                            variant={"invert"}
                                                            fieldSize={"half"}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            </>
                                        )}
                                    />
                                );
                            })}
                        </div>
                    </section>
                    {/* Supervisor */}
                    <section className="my-8">
                        <h3 className="heading-2 mb-4">Supervisor</h3>

                        <div className="flex gap-8">
                            <FormField
                                name={"supervisorName"}
                                // control={form.control}
                                render={({ field }) => (
                                    <>
                                        <FormItem>
                                            <FormControl>
                                                <CInput
                                                    variant={"invert"}
                                                    fieldSize={"half"}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </>
                                )}
                            />
                            <FormField
                                name={"supervisorUploadSign"}
                                control={form.control}
                                render={({ field }) => (
                                    <>
                                        <FormItem>
                                            <FormControl>
                                                <CInput
                                                    readOnly
                                                    variant={"invert"}
                                                    // type="file"
                                                    fieldSize={"half"}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </>
                                )}
                            />
                            <FormField
                                name={"supervisorApprovalTimeStamp"}
                                control={form.control}
                                render={({ field }) => (
                                    <>
                                        <FormItem>
                                            <FormControl>
                                                <CInput
                                                    readOnly
                                                    variant={"invert"}
                                                    fieldSize={"half"}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </>
                                )}
                            />
                        </div>
                    </section>
                    {/* Attachments */}
                    <section className="my-8">
                        <div className="mb-4 flex justify-between">
                            <h3 className="heading-2">Attachments</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            {attachmentsFields.map((_, index) => {
                                return (
                                    <div key={index} className="flex gap-8">
                                        <FormField
                                            name={
                                                `attachments[${index}].type` as any
                                            }
                                            control={form.control}
                                            render={({ field }) => (
                                                <>
                                                    <FormItem>
                                                        <FormControl>
                                                            <CInput
                                                                variant={
                                                                    "invert"
                                                                }
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                </>
                                            )}
                                        />
                                        <FormField
                                            name={
                                                `attachments[${index}].attachment` as any
                                            }
                                            control={form.control}
                                            render={({ field }) => (
                                                <>
                                                    <FormItem>
                                                        <FormControl>
                                                            <CInput
                                                                type="file"
                                                                variant={
                                                                    "invert"
                                                                }
                                                                fieldSize={
                                                                    "half"
                                                                }
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                </>
                                            )}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    {/* Compliance Checklist */}
                    <section className="my-8">
                        <h3 className="heading-2 mb-4">Compliance Checklist</h3>

                        <div className="flex flex-col gap-8">
                            {complianceCheckListFields.map((_, index) => {
                                return (
                                    <FormField
                                        key={index}
                                        name={
                                            `complianceCheckList[${index}].description` as any
                                        }
                                        control={form.control}
                                        render={({ field }) => (
                                            <>
                                                <FormItem>
                                                    <FormControl>
                                                        <CInput
                                                            variant={"invert"}
                                                            fieldSize={"half"}
                                                            inputLabel={
                                                                `complianceCheckList[${index}].description` as any
                                                            }
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            </>
                                        )}
                                    />
                                );
                            })}
                        </div>
                    </section>
                    {/* QCTest Checklist */}
                    <section className="my-8">
                        <h3 className="heading-2 mb-4">QCTest Checklist</h3>

                        <div className="flex flex-col gap-8">
                            {qCTestListFields.map((_, index) => {
                                return (
                                    <FormField
                                        key={index}
                                        name={
                                            `qCTestList[${index}].description` as any
                                        }
                                        control={form.control}
                                        render={({ field }) => (
                                            <>
                                                <FormItem>
                                                    <FormControl>
                                                        <CInput
                                                            variant={"invert"}
                                                            fieldSize={"half"}
                                                            inputLabel={
                                                                `qCTestList[${index}].description` as any
                                                            }
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            </>
                                        )}
                                    />
                                );
                            })}
                        </div>
                    </section>
                    {/* ENV Docs */}
                    <section className="my-8">
                        <div className="mb-4 flex justify-between">
                            <h3 className="heading-2">Env Docs</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            {envDocsFields.map((_, index) => {
                                return (
                                    <div key={index} className="flex gap-8">
                                        <FormField
                                            name={
                                                `envDocs[${index}].type` as any
                                            }
                                            control={form.control}
                                            render={({ field }) => (
                                                <>
                                                    <FormItem>
                                                        <FormControl>
                                                            <CInput
                                                                variant={
                                                                    "invert"
                                                                }
                                                                fieldSize={
                                                                    "half"
                                                                }
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                </>
                                            )}
                                        />
                                        <FormField
                                            name={
                                                `envDocs[${index}].attachment` as any
                                            }
                                            control={form.control}
                                            render={({ field }) => (
                                                <>
                                                    <FormItem>
                                                        <FormControl>
                                                            <CInput
                                                                variant={
                                                                    "invert"
                                                                }
                                                                // type="file"
                                                                fieldSize={
                                                                    "half"
                                                                }
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                </>
                                            )}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    {/* emergencyProcedures */}
                    <section className="my-8">
                        <div className="mb-4 flex justify-between">
                            <h3 className="heading-2">Emergency Procedures</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            {emergencyProceduresFields.map((_, index) => {
                                return (
                                    <FormField
                                        key={index}
                                        name={
                                            `emergencyProcedures[${index}].name` as any
                                        }
                                        control={form.control}
                                        render={({ field }) => (
                                            <>
                                                <FormItem>
                                                    <FormControl>
                                                        <CInput
                                                            placeholder="Enter procedure"
                                                            variant={"invert"}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            </>
                                        )}
                                    />
                                );
                            })}
                        </div>
                    </section>
                    {/* Other */}
                    <section className="my-8">
                        <h3 className="heading-2 mb-4">Other</h3>
                        <div className=" relative">
                            <FormField
                                name="other"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <CInput
                                                inputLabel="Notes/Comments"
                                                variant={"invert"}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </section>
                    <div className="flex-center"></div>
                </form>
            </Form>
        </section>
    );
};

export default Page;
